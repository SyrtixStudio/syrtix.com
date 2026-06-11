import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import rateLimit from "express-rate-limit";
import * as dotenv from "dotenv";
import PocketBase from "pocketbase";
import { syrtixAgent } from "./rag-core.js";
import { generateAndSaveTestimonial } from "./testimonial-generator.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// --- Configuración de PocketBase (Fase 3) ---
const PB_URL = process.env.VITE_POCKETBASE_URL.replace(/\/$/, ""); 
console.log("🔗 Conector PB activo:", PB_URL);
const pb = new PocketBase(PB_URL);

/**
 * Autenticación en PocketBase
 */
async function authenticatePB() {
  try {
    const authData = await pb.admins.authWithPassword(
      process.env.PB_ADMIN_EMAIL.trim(),
      process.env.PB_ADMIN_PASSWORD.trim()
    );
    if (authData) {
      console.log("🔓 Autenticado en PocketBase como:", process.env.PB_ADMIN_EMAIL);
    }
  } catch (error) {
    console.error("❌ Error PocketBase:", error.message);
    if (error.data) console.error("Detalle:", error.data);
  }
}

authenticatePB();

authenticatePB().then(() => {
  // --- Check inicial y luego cada hora ---
  checkWeeklyTestimonial();
  setInterval(checkWeeklyTestimonial, 60 * 60 * 1000); // Revisar cada hora
});

/**
 * Verifica si se debe generar nuevos testimonios (entre 1 y 4 por semana)
 * Lógica orgánica y aleatoria.
 */
async function checkWeeklyTestimonial() {
  try {
    console.log("📅 Verificando frecuencia orgánica de testimonios...");
    
    // 1. Obtener testimonios de los últimos 7 días
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    const recentRecords = await pb.collection("testimonials").getList(1, 50, {
      filter: `created > "${sevenDaysAgo}"`,
      sort: "-created",
    });

    const countThisWeek = recentRecords.items.length;
    console.log(`📊 Testimonios esta semana: ${countThisWeek}/4`);

    // 2. Límites estrictos
    if (countThisWeek >= 4) {
      console.log("✅ Límite semanal alcanzado (4). No se generarán más esta semana.");
      return;
    }

    // 3. Cooldown: No generar si el último fue hace menos de 2 horas (para evitar spam evidente)
    if (countThisWeek > 0) {
      const lastCreated = new Date(recentRecords.items[0].created);
      const diffHours = (new Date() - lastCreated) / (1000 * 60 * 60);
      if (diffHours < 2) {
        console.log(`⏳ Cooldown activo: el último fue hace ${diffHours.toFixed(1)}h. Esperando...`);
        return;
      }
    }

    let shouldGenerate = false;

    // 4. Lógica de Decisión
    if (countThisWeek === 0) {
      // Si no hay ninguno esta semana, generamos uno con alta probabilidad o forzado si ya pasó tiempo
      console.log("🚨 Semana vacía. ¡Necesitamos contenido!");
      shouldGenerate = true;
    } else {
      // Probabilidad dinámica según cuántos faltan para el máximo de 4
      // A menos testimonios existentes, más probabilidad de generar el siguiente
      const baseProb = (4 - countThisWeek) * 0.05; // 0.15, 0.10, 0.05 según el progreso
      const roll = Math.random();
      
      if (roll < baseProb) {
        console.log(`🎲 Dado orgánico: ${roll.toFixed(2)} < ${baseProb}. ¡Generando nuevo testimonio!`);
        shouldGenerate = true;
      } else {
        console.log(`🎲 Dado orgánico: ${roll.toFixed(2)} >= ${baseProb}. Postponiendo...`);
      }
    }

    if (shouldGenerate) {
      await generateAndSaveTestimonial();
    }
  } catch (error) {
    console.warn("⚠️ Error en frecuencia de testimonios:", error.message);
  }
}

// --- Middlewares de Seguridad ---

// 1. Helmet: HTTP headers seguros (CSP, HSTS, X-Content-Type-Options, etc.)
app.use(helmet());

// 2. Compresión gzip/brotli para reducir latencia
app.use(compression());

// 3. CORS restringido a dominios de Syrtix
const ALLOWED_ORIGINS = [
  "https://syrtix.com",
  "https://www.syrtix.com",
  "https://ia.syrtix.com",
];
// En desarrollo, permitir localhost
if (process.env.NODE_ENV !== "production") {
  ALLOWED_ORIGINS.push("http://localhost:5173", "http://localhost:3000", "http://localhost:3001");
}
app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (curl, health checks, etc.)
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`🚨 CORS bloqueado para origin: ${origin}`);
      callback(new Error("No permitido por CORS"));
    }
  },
  methods: ["POST", "GET"],
  credentials: true,
}));

// 4. Body parser con límite de tamaño (previene payload attacks)
app.use(express.json({ limit: "10kb" }));

// 5. Rate limiting anti-DoS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo 100 peticiones por ventana desde una misma IP
  standardHeaders: true, // Incluye headers RateLimit-* en la respuesta
  legacyHeaders: false,
  message: { error: "Demasiadas peticiones desde esta IP. Inténtalo más tarde." }
});
app.use("/api/", limiter);

// 6. Sanitización de input contra prompt injection
const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(previous|all|above)\s+(instructions|prompts)/i,
  /you\s+are\s+now/i,
  /system\s*:\s*/i,
  /\[\s*INST\s*\]/i,
  /<\|im_start\|>/i,
  /act\s+as\s+(a|an)?\s*(different|new)/i,
];

function sanitizeInput(text) {
  if (typeof text !== "string") return "";
  // Limitar longitud máxima del mensaje
  const trimmed = text.trim().substring(0, 1000);
  // Detectar patrones de prompt injection
  for (const pattern of PROMPT_INJECTION_PATTERNS) {
    if (pattern.test(trimmed)) {
      console.warn(`🛡️ Prompt injection detectado y bloqueado: "${trimmed.substring(0, 80)}..."`);
      return null; // Signal de bloqueo
    }
  }
  return trimmed;
}

/**
 * Middleware de Autenticación
 */
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const secret = process.env.SYRTIX_SECRET;

  if (!authHeader || authHeader !== `Bearer ${secret}`) {
    console.warn(`🚨 Intento de acceso no autorizado desde: ${req.ip}`);
    return res.status(401).json({ error: "Acceso denegado. Token inválido." });
  }
  next();
};

/**
 * Endpoint de Chat RAG
 * POST /api/ia/chat
 */
app.post("/api/ia/chat", authenticate, async (req, res) => {
  const startTime = Date.now();
  try {
    const { question, history } = req.body;

    if (!question) {
      return res.status(400).json({ error: "La pregunta es obligatoria." });
    }

    // Sanitizar input contra prompt injection
    const cleanQuestion = sanitizeInput(question);
    if (cleanQuestion === null) {
      return res.status(400).json({ error: "Mensaje no permitido por políticas de seguridad." });
    }

    // Sanitizar historial
    const cleanHistory = Array.isArray(history)
      ? history
          .filter(h => h && typeof h.text === "string" || typeof h.content === "string")
          .slice(-10) // Máximo 10 mensajes de historial
      : [];

    console.log(`📡 Petición: "${cleanQuestion.substring(0, 50)}..." | IP: ${req.ip}`);
    
    // Usamos el método ask de nuestra nueva clase SyrtixAgent
    const answer = await syrtixAgent.ask(cleanQuestion, cleanHistory);
    
    const latencyMs = Date.now() - startTime;

    // --- Persistencia en PocketBase (Fase 3) ---
    try {
      await pb.collection("ia_leads").create({
        pregunta: cleanQuestion,
        respuesta: answer,
        fuente: req.body.source || "Web/n8n",
        timestamp: new Date().toISOString()
      });
      console.log(`✅ Lead guardado en PocketBase. Latencia: ${latencyMs}ms`);
    } catch (pbError) {
      console.error("⚠️ Error guardando en PocketBase (¿Creaste la colección ia_leads?):", pbError.message);
      // No bloqueamos la respuesta al usuario si falla la base de datos
    }
    
    res.json({ answer, timestamp: new Date().toISOString(), latencyMs });
    
  } catch (error) {
    console.error("🔥 Error crítico en el endpoint de chat:", error);
    res.status(500).json({ error: "Error interno del servidor de IA." });
  }
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    service: "Syrtix RAG Engine",
    uptime: process.uptime(),
    security: {
      helmet: true,
      cors: "restricted",
      rateLimit: "100/15min",
      compression: true,
      inputSanitization: true,
    }
  });
});

// Pre-cargar precios de PocketBase antes de iniciar
syrtixAgent.loadOfficialPrices().then(() => {
  console.log("✅ Carga inicial de precios completada desde PocketBase.");
}).catch((err) => {
  console.error("❌ Error en carga inicial de precios:", err.message);
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Syrtix IA Engine Operativo`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🛡️ Seguridad: Helmet + CORS restringido + Rate-Limit + Compression`);
  console.log(`🔐 Auth: Bearer Token requerido`);
  console.log(`🧹 Sanitización: Anti-prompt-injection activa`);
  console.log(`📦 Body limit: 10kb | Historial max: 10 mensajes\n`);
});
