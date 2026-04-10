import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import * as dotenv from "dotenv";
import { syrtixAgent } from "./rag-core.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middlewares de Seguridad Senior ---
app.use(helmet()); // Protege contra vulnerabilidades web comunes configurando HTTP headers
app.use(cors({
  origin: "*", // En producción, limita esto al dominio de syrtix.com
  methods: ["POST", "GET"],
}));
app.use(express.json());

// Limitador de peticiones para evitar abusos o ataques DoS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Máximo 100 peticiones por ventana desde una misma IP
  message: { error: "Demasiadas peticiones desde esta IP. Inténtalo más tarde." }
});
app.use("/api/", limiter);

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
  try {
    const { question, history } = req.body;

    if (!question) {
      return res.status(400).json({ error: "La pregunta es obligatoria." });
    }

    console.log(`📡 Petición: "${question.substring(0, 50)}..."`);
    
    // Usamos el método ask de nuestra nueva clase SyrtixAgent
    const answer = await syrtixAgent.ask(question, history);
    
    res.json({ answer, timestamp: new Date().toISOString() });
    
  } catch (error) {
    console.error("🔥 Error crítico en el endpoint de chat:", error);
    res.status(500).json({ error: "Error interno del servidor de IA." });
  }
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "ok", 
    service: "Syrtix RAG Engine",
    uptime: process.uptime() 
  });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`\n🚀 Syrtix IA Engine Operativo`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🛡️ Seguridad: Helmet y Rate-Limit activos`);
  console.log(`🔐 Auth: Bearer Token requerido\n`);
});
