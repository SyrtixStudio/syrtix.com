import * as dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { SyrtixStore } from "./syrtix-store.js";

dotenv.config();

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant",
  temperature: 0.1, // Bajamos la temperatura para minimizar alucinaciones
});

const embeddings = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-mpnet-base-v2",
  apiKey: process.env.HF_API_KEY,
});

const store = new SyrtixStore();
store.load("vectorstore.json");

export async function askSyrtix(question, history = []) {
  try {
    const queryVector = await embeddings.embedQuery(question);
    const results = store.search(queryVector, 4);
    const context = results.map(r => r.content).join("\n\n---\n\n");

    // Convertir historial a objetos de mensaje de LangChain
    const chatHistory = history.map(h => 
      h.role === 'user' ? new HumanMessage(h.text) : new AIMessage(h.text)
    );

    const systemPrompt = `Eres SyrtixAI, el Agente de Ventas de Syrtix Studio en Chile. 
Tu única misión es ayudar a los clientes y cerrar ventas usando los enlaces de contacto.

REGLAS CRÍTICAS DE SEGURIDAD:
- TELÉFONO REAL: +56988126316
- EMAIL REAL: contacto@syrtix.com
- UBICACIÓN: Chile Continental.
- PROHIBIDO: Inventar números de teléfono, mencionar sucursales en Estados Unidos o dar información que no esté en el contexto.
- BREVEDAD: Responde en MÁXIMO 2 frases. Sé directo.

ENLACES OBLIGATORIOS PARA CONTACTO:
- WhatsApp: [Contactar por WhatsApp](https://wa.me/56988126316)
- Formulario: [Ir al formulario](/#contacto)

CONTEXTO DE SYRTIX:
${context}`;

    const messages = [
      new SystemMessage(systemPrompt),
      ...chatHistory,
      new HumanMessage(question)
    ];

    const response = await model.invoke(messages);
    let content = response.content;

    // PASO DE SEGURIDAD: Si el usuario quiere contacto/comprar y la IA falló en dar el link, lo forzamos.
    const purchaseIntent = /contacto|whatsapp|contratar|comprar|precio|cotizar|llamar/i.test(question);
    const hasLink = /wa\.me|#contacto/i.test(content);

    if (purchaseIntent && !hasLink) {
      content += "\n\n**Acciones rápidas:**\n- [Contactar por WhatsApp](https://wa.me/56988126316)\n- [Ir al formulario de contacto](/#contacto)";
    }

    return content;

  } catch (error) {
    console.error("❌ Error en rag-core:", error);
    return "Lo siento, ocurrió un error. ¿Podrías intentar contactarnos por WhatsApp directamente?";
  }
}
