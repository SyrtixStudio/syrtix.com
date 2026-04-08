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

    const systemPrompt = `Eres SyrtixAI, el Agente de Ventas de Syrtix Studio.
Tu misión es asesorar al cliente. Sé amable y profesional.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- CONTACTO: Proporciona los enlaces de WhatsApp o Formulario ÚNICAMENTE cuando el usuario pregunte por precios, cómo comprar, o cómo contactar. NO los des en el saludo inicial.
- DATOS: Teléfono +56988126316, Email contacto@syrtix.com.

ENLACES (Úsalos solo si es oportuno):
- WhatsApp: [Contactar por WhatsApp](https://wa.me/56988126316)
- Formulario: [Ir al formulario](/#contacto)

CONTEXTO:
${context}`;

    const messages = [
      new SystemMessage(systemPrompt),
      ...chatHistory,
      new HumanMessage(question)
    ];

    const response = await model.invoke(messages);
    let content = response.content;

    // EL REFUERZO: Solo se activa si hay una clara intención de compra o contacto
    const purchaseIntent = /cotizar|precio|cuanto cuesta|comprar|contratar|contacto|whatsapp|hablar con alguien/i.test(question);
    const hasLink = /wa\.me|#contacto/i.test(content);

    if (purchaseIntent && !hasLink) {
      content += "\n\n**¿Te gustaría avanzar?**\n- [Contactar por WhatsApp](https://wa.me/56988126316)\n- [Ir al formulario de contacto](/#contacto)";
    }


    return content;

  } catch (error) {
    console.error("❌ Error en rag-core:", error);
    return "Lo siento, ocurrió un error. ¿Podrías intentar contactarnos por WhatsApp directamente?";
  }
}
