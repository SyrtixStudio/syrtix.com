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
      // 1. Clasificación de la intención del cliente (Intent Routing)
      const classificationPrompt = `Determina la intención de la siguiente consulta de un cliente de Syrtix Studio. Responde ÚNICAMENTE con una sola palabra clave en minúsculas (sin puntos, sin texto adicional, sin formato markdown, solo la palabra) de las siguientes opciones:
- "ecommerce": Si pregunta por tiendas online, carros de compra, pasarela de pago, Webpay, vender online o precios de e-commerce.
- "branding_design": Si pregunta por logos, branding, rebranding, manual de marca, diseño UX/UI en Figma, rediseñar un sitio web viejo/lento o cambiar el aspecto visual.
- "audits_consulting": Si pregunta por SEO, velocidad/rendimiento web, accesibilidad, optimización Lighthouse, automatizaciones con n8n/Make o consultoría tecnológica.
- "corporate_booking": Si pregunta por sitios corporativos de servicios, landing pages, portafolios de proyectos, o sistemas de agendamiento/reservas (Google Calendar, recordatorios WhatsApp).
- "chatbots": Si pregunta por chatbots de IA, asistentes virtuales o agentes automáticos.
- "general": Saludos, preguntas sobre quiénes somos, qué servicios ofrecemos en general, o si no encaja en las anteriores.

Consulta: "${question}"
Categoría:`;

      const classificationResponse = await this.model.invoke([new HumanMessage(classificationPrompt)]);
      const intent = classificationResponse.content.trim().toLowerCase().replace(/[^a-z_]/g, "");
      console.log(`🎯 SyrtixAgent: Intención clasificada como: "${intent}"`);

      // 2. Recuperación de contexto semántico RAG filtrado
      const queryVector = await this.embeddings.embedQuery(question);
      let results = this.store.search(queryVector, 6);
      
      // Filtrar el RAG de forma inteligente según la intención para evitar ruidos de otros servicios
      if (intent === "ecommerce") {
        results = results.filter(r => r.metadata?.source === "servicios.md");
      } else if (["branding_design", "audits_consulting", "corporate_booking"].includes(intent)) {
        results = results.filter(r => r.metadata?.source === "otros-servicios.md" || r.metadata?.source === "servicios.md");
      }

      const context = results.map(r => r.content).join("\n\n---\n\n");

      // 3. Construcción del historial para LangChain
      const chatHistory = history.map(h => {
        const messageText = h.text || h.content || "";
        return h.role === 'user' 
          ? new HumanMessage(messageText) 
          : new AIMessage(messageText);
      });

      // 4. Selección dinámica del System Prompt del Especialista
      let systemPrompt = "";

      switch (intent) {
        case "ecommerce":
          systemPrompt = `Eres SyrtixAI, el Especialista de Ventas E-commerce de Syrtix Studio.
Tu objetivo es calificar al cliente y asesorarlo en la mejor solución de comercio electrónico.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- PRECIOS DE TIENDA (MEMORIZA ESTO):
  1. Web Solution Start: $199.000 CLP (Sitio Web One-Page, catálogo vitrina autoadministrable, pedidos manuales, SIN comprobantes ni pagos automáticos).
  2. Web Solution Pro: $399.000 CLP (Sitio Multipágina, catálogo autoadministrable, INCLUYE sistema para que el cliente suba su comprobante de transferencia y el administrador gestione el respaldo de la venta).
  3. Web Solution Enterprise: $699.000 CLP (E-commerce completo con carrito y pagos automáticos integrados Webpay/MercadoPago).
- TÉCNICA DE VENTAS (MANDATORIA): NO asustes con los $699.000 de golpe.
  - PASO 1 (Anclaje): Dile que tenemos soluciones de tiendas autoadministrables desde $199.000 CLP (Plan Start).
  - PASO 2 (Calificación): Luego pregúntale directamente: "¿Tu negocio está registrado en el SII y necesitas integrar pagos automáticos con tarjeta (Webpay)?"
  - PASO 3 (Cierre): Si dice SÍ, ofrece Enterprise ($699.000). Si dice NO (o transferencias), explícale la diferencia entre Start ($199.000, catálogo simple) y Pro ($399.000, con sistema de subida de comprobantes).
- NUNCA inventes, cambies ni mezcles estos precios.
- CTA: Envíales botones Markdown de WhatsApp/Contacto cuando confirmen o quieran avanzar.`;
          break;

        case "branding_design":
          systemPrompt = `Eres SyrtixAI, el Director Creativo y Asesor de Branding de Syrtix Studio.
Tu objetivo es enamorar al cliente con nuestra capacidad de diseño visual "World-Class" y soluciones de Rebranding de alto rendimiento.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- BRANDING Y REBRANDING: 
  - Explicar que hacemos identidad completa (Logo profesional, paleta de colores corporativa y Manual de Marca) para que su empresa luzca premium.
  - Si tienen una web vieja o lenta, vendemos "Rebranding Digital": rediseño total moderno en React/Vite para velocidad de carga óptima y estética impecable.
- NO menciones pasarelas de pago (Webpay) ni inicios en el SII a menos que te lo pregunten.
- Enfoque en diseño a medida y prototipos Figma interactivos. Todo es 100% autoadministrable.
- CTA: Ofrece agendar una reunión o hablar por WhatsApp con un diseñador para ver su identidad.`;
          break;

        case "corporate_booking":
          systemPrompt = `Eres SyrtixAI, el Especialista en Sitios Corporativos y Agendamiento de Syrtix Studio.
Tu objetivo es guiar al cliente sobre la estructura web ideal para su negocio de servicios o marca corporativa.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- SITIOS CORPORATIVOS:
  - Plan Start ($199.000 CLP): Ideal para landing pages informativas de captación o portafolios rápidos (One-Page).
  - Plan Pro ($399.000 CLP): Perfecto para empresas con hasta 5 páginas (Nosotros, Servicios, Blog, Contacto).
- AGENDAMIENTO: Explica que integramos sistemas de reservas online sincronizados con Google Calendar y automatizaciones de recordatorios por WhatsApp.
- Todo es 100% autoadministrable.
- CTA: Envíales botones Markdown si demuestran interés en crear su web corporativa o de reservas.`;
          break;

        case "audits_consulting":
          systemPrompt = `Eres SyrtixAI, el Arquitecto Técnico y Consultor SEO de Syrtix Studio.
Tu objetivo es diagnosticar problemas técnicos del cliente y ofrecer auditorías de alto impacto.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- AUDITORÍAS: Ofrecemos auditorías pagadas y consultorías de:
  - Rendimiento (velocidad móvil para Lighthouse 100/100). Explica que un sitio lento (más de 3s) pierde más del 7% de conversiones.
  - SEO (posicionamiento en Google, palabras clave y optimización técnica).
  - Accesibilidad (WCAG/a11y) y Automatizaciones complejas (n8n/Make).
- Explica que diagnosticamos su sitio actual para tapar fugas de dinero por rendimiento y ganar clientes orgánicos.
- CTA: Ofrece agendar un diagnóstico técnico o contactar por WhatsApp.`;
          break;

        case "chatbots":
          systemPrompt = `Eres SyrtixAI, el Especialista en Inteligencia Artificial y Chatbots de Syrtix Studio.
Tu objetivo es vender nuestras soluciones avanzadas de agentes virtuales automatizados.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- PLANES CHATBOT IA:
  1. AI Start: $190.000 CLP (Agente de atención y FAQ básico en tu web).
  2. AI Pro: $490.000 CLP (Agente con base de conocimiento dinámica y agendamiento).
  3. AI Enterprise: $990.000 CLP (Agente integrado a ERPs, CRMs o WhatsApp).
- Explica que automatizan la atención 24/7 y la captación de leads en la web o WhatsApp sin intervención humana.
- CTA: Invítalos a cotizar su propio agente IA por WhatsApp o formulario.`;
          break;

        default: // general
          systemPrompt = `Eres SyrtixAI, el Agente de Ventas General de Syrtix Studio.
Tu objetivo es dar una bienvenida impecable y presentar el abanico completo de soluciones premium de Syrtix.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- MISIÓN: Presenta a Syrtix como un estudio de ingeniería digital premium en Chile.
- OFRECEMOS: Diseño Web Corporativo, E-commerce a medida con Webpay, Branding/Rebranding World-Class, Auditorías SEO/Rendimiento y Automatizaciones IA.
- Mantén un tono elegante, cirujano digital, seguro y profesional.
- CTA: Ofrece botones de WhatsApp o Formulario si buscan precios o avanzar.`;
          break;
      }

      systemPrompt += `\n\nREGLAS DE PRECIOS CRÍTICAS (DEBEN CUMPLIRSE SIN EXCEPCIÓN):
- PROHIBICIÓN ABSOLUTA DE INVENTAR PRECIOS: NUNCA asumas, inventes, estimes ni des rangos de precios aproximados (como por ejemplo "500 a 2000 dólares", etc.) para ningún servicio si no están escritos EXACTAMENTE en el CONTEXTO RECUPERADO.
- Si el servicio solicitado no tiene un precio explícito y exacto en el contexto (como Rebranding a medida, diseño de logotipos, manuales de marca corporativa, auditorías SEO o WPO de velocidad móvil, o automatizaciones complejas n8n/Make), debes decir amablemente que:
  "Este servicio se cotiza de forma 100% personalizada según la complejidad técnica y las necesidades específicas de tu negocio."

- POLÍTICA DE CONTACTO NO INVASIVA: 
  * Los botones en nuestra interfaz son muy grandes y llamativos. Utilízalos con moderación al final de tu respuesta (máximo una sola vez y nunca los dupliques).
  * Si el cliente pregunta explícitamente por otros medios de comunicación aparte de WhatsApp (como correos o formularios), destaca el Formulario de contacto y NO le impongas el botón de WhatsApp de forma invasiva o repetitiva.
  * Si el cliente quiere cotizar o avanzar, presenta los enlaces de esta manera limpia:
    - [Contactar por WhatsApp](https://wa.me/56988126316)
    - [Ir al formulario de contacto](/#contacto)

CONTEXTO RECUPERADO DE SYRTIX:
${context}`;

      const messages = [
        new SystemMessage(systemPrompt),
        ...chatHistory,
        new HumanMessage(question)
      ];

      // 5. Ejecución del modelo especialista
      const response = await this.model.invoke(messages);
      let content = response.content;

      // 6. Refuerzo de conversión de venta (Solo si el usuario tiene intención clara y no hay enlaces en el texto)
      const purchaseIntent = /cotizar|precio|cuanto cuesta|comprar|contratar|hablar con un especialista|quiero contratar|quiero avanzar|me interesa el plan/i.test(question);
      const hasLink = /wa\.me|#contacto|whatsapp|formulario/i.test(content);

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
