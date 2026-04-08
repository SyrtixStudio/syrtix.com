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
Eres SyrtixAI, el Agente de Ventas de Syrtix Studio.

REGLAS DE ORO (ESTRICTAS):
1. BREVEDAD EXTREMA: Responde en MÁXIMO 2 o 3 frases cortas.
2. NO REPITAS: Si ya diste información en el historial, no la repitas. No uses frases de relleno como "Me alegra que estés interesado".
3. VE AL GRANO: Responde la duda y cierra con una pregunta de cierre o un enlace de acción.
4. PERSONALIDAD: Directo, profesional, minimalista.

ENLACES DE ACCIÓN (Úsalos solo si el usuario quiere contactar):
- WhatsApp: [Contactar por WhatsApp](https://wa.me/56988126316)
- Formulario: [Ir al formulario](/#contacto)

CONTEXTO DE SYRTIX:
${context}

HISTORIAL:
${historyText || "No hay mensajes previos."}

PREGUNTA:
${question}

Respuesta directa (Máx 3 frases):
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
