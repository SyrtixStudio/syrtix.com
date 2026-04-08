import * as dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { SyrtixStore } from "./syrtix-store.js";

dotenv.config();

// 1️⃣ Configuración del Cerebro (LLM) y Embeddings
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
  temperature: 0.5, // Un poco más creativo pero enfocado
});

const embeddings = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-mpnet-base-v2",
  apiKey: process.env.HF_API_KEY,
});

// 2️⃣ Cargar nuestra base de conocimiento
const store = new SyrtixStore();
store.load("vectorstore.json");

/**
 * Función principal para preguntar a la IA de Syrtix
 * @param {string} question - La pregunta actual
 * @param {Array} history - Historial de mensajes previos [{role: 'user', text: '...'}, {role: 'ai', text: '...'}]
 */
export async function askSyrtix(question, history = []) {
  try {
    console.log(`\n🔍 Buscando contexto para: "${question}"...`);
    
    const queryVector = await embeddings.embedQuery(question);
    const results = store.search(queryVector, 4);
    const context = results.map(r => r.content).join("\n\n---\n\n");

    // Formatear el historial para el prompt
    const historyText = history.map(h => `${h.role === 'user' ? 'Usuario' : 'IA'}: ${h.text}`).join("\n");

    console.log(`🧠 Consultando a Llama 3.1 con historial de chat...`);

    const prompt = `
Eres SyrtixAI, el Agente de Ventas Maestro de Syrtix Studio.

REGLA ABSOLUTA: Si el usuario quiere contactar o contratar, COPIA Y PEGA EXACTAMENTE una de estas opciones:

1. [Contactar por WhatsApp](https://wa.me/56988126316)
2. [Ir al formulario de contacto](/#contacto)

CONTEXTO DE SYRTIX:
${context}

HISTORIAL:
${historyText || "No hay mensajes previos."}

PREGUNTA:
${question}

Respuesta (directa al grano y con el link de arriba):
`;





    const response = await model.invoke(prompt);
    return response.content;

  } catch (error) {
    console.error("❌ Error en rag-core:", error);
    return "Lo siento, ocurrió un error al procesar tu consulta.";
  }
}

// --- TEST DIRECTO (si ejecutas este archivo con node) ---
if (process.argv[1].endsWith('rag-core.js')) {
    const preguntaTest = process.argv[2] || "¿Qué servicios de inteligencia artificial ofrecen?";
    const respuesta = await askSyrtix(preguntaTest);
    console.log("\n================ SYRTIX AI ANSWER ================");
    console.log(respuesta);
    console.log("=================================================");
}
