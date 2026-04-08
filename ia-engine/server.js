import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { askSyrtix } from "./rag-core.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

/**
 * Middleware de Seguridad: Verifica el Token de Syrtix
 */
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const secret = process.env.SYRTIX_SECRET;

  if (!authHeader || authHeader !== `Bearer ${secret}`) {
    return res.status(401).json({ error: "No autorizado. Token inválido." });
  }
  next();
};

/**
 * Endpoint de Chat RAG
 * POST /api/ia/chat
 * Body: { "question": "¿..." }
 */
app.post("/api/ia/chat", authenticate, async (req, res) => {
  const { question, history } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Falta la pregunta en el cuerpo de la solicitud." });
  }

  console.log(`📡 Recibida petición API: "${question}" (con historial de ${history?.length || 0} mensajes)`);
  
  const answer = await askSyrtix(question, history);
  
  res.json({ answer });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", engine: "Syrtix RAG v1.0" });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Servidor de IA Syrtix corriendo en http://localhost:${PORT}`);
  console.log(`🔐 Seguridad activada (Header: Authorization: Bearer ${process.env.SYRTIX_SECRET})`);
});
