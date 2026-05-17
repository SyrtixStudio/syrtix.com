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
      const chatHistory = history.map(h => {
        const messageText = h.text || h.content || "";
        return h.role === 'user' 
          ? new HumanMessage(messageText) 
          : new AIMessage(messageText);
      });

      // 3. Definición del System Prompt (El ADN del Agente)
      const systemPrompt = `Eres SyrtixAI, el Agente de Ventas de Syrtix Studio.
Tu misión es asesorar al cliente. Sé amable y profesional.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- PRECIOS ESTRICTOS Y OBLIGATORIOS (MEMORIZA ESTO):
  1. Web Solution Start: $199.000 CLP (Sitio Web One-Page, catálogo vitrina autoadministrable, pedidos manuales, SIN sistema de comprobantes ni pagos).
  2. Web Solution Pro: $399.000 CLP (Sitio Multipágina, catálogo autoadministrable, INCLUYE sistema para que el cliente suba su comprobante de transferencia y el administrador gestione el respaldo de la venta).
  3. Web Solution Enterprise: $699.000 CLP (E-commerce completo, con carrito y pagos automáticos integrados Webpay/MercadoPago).
- DIVERSIDAD DE SERVICIOS (CRÍTICO): Syrtix ofrece más que e-commerce. Identifica qué necesita el cliente y responde de forma específica:
  - BRANDING / REBRANDING: Diseñamos logos y manuales de marca desde cero. Si el cliente tiene un sitio web viejo o lento, ofrecemos "Rebranding" para rediseñarlo desde cero y llevarlo al estándar "World-Class" ultra-rápido en React/Vite.
  - SITIOS CORPORATIVOS / PORTAFOLIOS: Recomendamos el plan Start ($199.000 CLP, One-Page) o Pro ($399.000 CLP, multipágina de 5 secciones con blog). Ambos son 100% autoadministrables.
  - SITIOS CON AGENDAMIENTO: Integramos calendarios en tiempo real sincronizados con Google Calendar y automatizamos confirmaciones de citas por correo/WhatsApp.
  - AUDITORÍAS TÉCNICAS: Ofrecemos auditorías pagadas y consultorías en Rendimiento (velocidad móvil), SEO (posicionamiento), Accesibilidad (a11y) y Automatizaciones de procesos con n8n/Make.
  - CHATBOTS CON IA: Desarrollamos asistentes personalizados de atención al cliente (AI Start $190.000, AI Pro $490.000, AI Enterprise $990.000).
- TÉCNICA DE VENTAS E-COMMERCE (APLICAR SÓLO SI PREGUNTAN POR VENTAS ONLINE / E-COMMERCE): Si el cliente pregunta explícitamente por vender online, carros de compra o e-commerce, aplica este flujo:
  - PASO 1 (Anclaje): Dile que tenemos soluciones de tiendas autoadministrables desde $199.000 CLP (Plan Start).
  - PASO 2 (Calificación): Luego pregúntale directamente: "¿Tu negocio está registrado en el SII y necesitas integrar pagos automáticos con tarjeta (Webpay)?"
  - PASO 3 (Cierre): Si dice SÍ, ofrece Enterprise ($699.000). Si dice NO (o transferencias), explícale la diferencia entre Start ($199.000, catálogo simple) y Pro ($399.000, con sistema de subida de comprobantes).
- NUNCA inventes, cambies ni mezcles estos precios.
- CTA Y CIERRE DE VENTAS (OBLIGATORIO): Si el cliente confirma que quiere un plan, demuestra interés ("quiero esta opción", "me interesa"), o pide contactar, SIEMPRE envíale estos dos enlaces EXACTOS en formato Markdown (botones):
  - [Contactar por WhatsApp](https://wa.me/56988126316)
  - [Ir al formulario de contacto](/#contacto)
  NUNCA le digas el número de teléfono en texto plano ni le digas "llena el formulario" sin darle el link en Markdown.

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
      const purchaseIntent = /cotizar|precio|cuanto cuesta|comprar|contratar|contacto|whatsapp|hablar con alguien|quiero|interesa|empezar|avanzar|opci[oó]n|me gusta/i.test(question);
      const hasLink = /wa\.me|#contacto/i.test(content);

      if (purchaseIntent && !hasLink) {
        content += "\n\n**¿Te gustaría avanzar?**\n- [Contactar por WhatsApp](https://wa.me/56988126316)\n- [Ir al formulario de contacto](/#contacto)";
      }

      return content;

    } catch (error) {
      console.error("❌ Error en SyrtixAgent:", error);
      return `❌ Error de procesamiento: ${error.message}. Por favor, contacta a soporte.`;
    }
  }
}

// Exportamos una instancia única (Singleton) para el servidor
export const syrtixAgent = new SyrtixAgent();
