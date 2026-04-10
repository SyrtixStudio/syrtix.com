import * as dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { SyrtixStore } from "./syrtix-store.js";

dotenv.config();

/**
 * @typedef {Object} Message
 * @property {'user' | 'assistant'} role
 * @property {string} text
 */

/**
 * SyrtixAgent - El cerebro de la IA de Syrtix Studio.
 * Implementa un flujo RAG (Retrieval-Augmented Generation) optimizado.
 */
class SyrtixAgent {
  constructor() {
    this._validateConfig();
    
    this.model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama-3.1-8b-instant",
      temperature: 0.1,
    });

    this.embeddings = new HuggingFaceInferenceEmbeddings({
      model: "sentence-transformers/all-mpnet-base-v2",
      apiKey: process.env.HF_API_KEY,
    });

    this.store = new SyrtixStore();
    this.store.load("vectorstore.json");
    
    console.log("🤖 SyrtixAgent: Inicializado con éxito.");
  }

  /**
   * Valida que las variables de entorno necesarias estén presentes.
   * @private
   */
  _validateConfig() {
    const required = ["GROQ_API_KEY", "HF_API_KEY"];
    const missing = required.filter(key => !process.env[key]);
    if (missing.length > 0) {
      throw new Error(`❌ Configuración incompleta. Faltan: ${missing.join(", ")}`);
    }
  }

  /**
   * Procesa una pregunta del usuario utilizando contexto del VectorStore.
   * @param {string} question 
   * @param {Message[]} history 
   * @returns {Promise<string>}
   */
  async ask(question, history = []) {
    try {
      // 1. Recuperación de contexto
      const queryVector = await this.embeddings.embedQuery(question);
      const results = this.store.search(queryVector, 4);
      const context = results.map(r => r.content).join("\n\n---\n\n");

      // 2. Construcción del historial para LangChain
      const chatHistory = history.map(h => 
        h.role === 'user' ? new HumanMessage(h.text) : new AIMessage(h.text)
      );

      // 3. Definición del System Prompt (El ADN del Agente)
      const systemPrompt = `Eres SyrtixAI, el Agente de Ventas de Syrtix Studio.
Tu misión es asesorar al cliente. Sé amable y profesional.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- CONTACTO: Proporciona los enlaces de WhatsApp o Formulario ÚNICAMENTE cuando el usuario pregunte por precios, cómo comprar, o cómo contactar. NO los des en el saludo inicial.
- DATOS: Teléfono +56988126316, Email contacto@syrtix.com.

ENLACES ESTRATÉGICOS:
- WhatsApp: [Contactar por WhatsApp](https://wa.me/56988126316)
- Formulario: [Ir al formulario](/#contacto)

CONTEXTO RECUPERADO DE SYRTIX:
${context}`;

      const messages = [
        new SystemMessage(systemPrompt),
        ...chatHistory,
        new HumanMessage(question)
      ];

      // 4. Ejecución del modelo
      const response = await this.model.invoke(messages);
      let content = response.content;

      // 5. Refuerzo de conversión (Ventas)
      const purchaseIntent = /cotizar|precio|cuanto cuesta|comprar|contratar|contacto|whatsapp|hablar con alguien/i.test(question);
      const hasLink = /wa\.me|#contacto/i.test(content);

      if (purchaseIntent && !hasLink) {
        content += "\n\n**¿Te gustaría avanzar?**\n- [Contactar por WhatsApp](https://wa.me/56988126316)\n- [Ir al formulario de contacto](/#contacto)";
      }

      return content;

    } catch (error) {
      console.error("❌ Error en SyrtixAgent:", error);
      return "Lo siento, ocurrió un error en mi procesamiento. Por favor, contacta a nuestro equipo por WhatsApp directamente.";
    }
  }
}

// Exportamos una instancia única (Singleton) para el servidor
export const syrtixAgent = new SyrtixAgent();
