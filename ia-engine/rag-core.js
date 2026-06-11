import * as dotenv from "dotenv";
import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import PocketBase from "pocketbase";
import { SyrtixStore } from "./syrtix-store.js";

// CLP price format helper
const formatCLP = (num) => {
  if (num === undefined || num === null) return "";
  return `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} CLP`;
};

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

    // Configuración de PocketBase para precios dinámicos
    const pbUrl = (process.env.VITE_POCKETBASE_URL || "https://syrtix.5.78.86.159.sslip.io").replace(/\/$/, "");
    this.pb = new PocketBase(pbUrl);
    this.plansMap = null;
    this.lastFetched = 0;
    this.ttlMs = 5 * 60 * 1000; // 5 minutos de cache en memoria
    
    console.log("🤖 SyrtixAgent: Inicializado con éxito.");
  }

  /**
   * Carga los precios oficiales desde PocketBase.
   * Si falla, usa los precios de fallback locales.
   */
  async loadOfficialPrices(force = false) {
    const now = Date.now();
    if (!force && this.plansMap && (now - this.lastFetched < this.ttlMs)) {
      return; // Usar caché
    }

    try {
      console.log("🔄 SyrtixAgent: Cargando precios oficiales de PocketBase...");
      const records = await this.pb.collection("plans").getFullList();
      if (records && records.length > 0) {
        const plansMap = {};
        records.forEach((record) => {
          const key = `${record.category}-${record.tier}`;
          plansMap[key] = {
            name: record.name,
            price_normal: record.price_normal,
            price_offer: record.price_offer,
            is_on_offer: record.is_on_offer,
            delivery_time: record.delivery_time,
          };
        });

        this.plansMap = plansMap;
        this.lastFetched = now;
        console.log("📈 SyrtixAgent: Precios actualizados exitosamente de PocketBase.");
      } else {
        console.warn("⚠️ SyrtixAgent: Colección 'plans' vacía, usando fallback.");
        if (!this.plansMap) this._useFallbackPrices();
      }
    } catch (error) {
      console.warn("⚠️ SyrtixAgent: Error al obtener precios de PocketBase, usando fallback:", error.message);
      if (!this.plansMap) this._useFallbackPrices();
    }
  }

  _useFallbackPrices() {
    this.plansMap = {
      "web-start": { price_normal: 299000, price_offer: 199000, is_on_offer: true, delivery_time: "7 días hábiles" },
      "web-pro": { price_normal: 599000, price_offer: 499000, is_on_offer: true, delivery_time: "2 a 4 semanas" },
      "web-enterprise": { price_normal: 999000, price_offer: 899000, is_on_offer: true, delivery_time: "2 a 4 semanas" },
      "chatbot-start": { price_normal: 299000, price_offer: 199000, is_on_offer: true, delivery_time: "Setup inmediato" },
      "chatbot-pro": { price_normal: 599000, price_offer: 499000, is_on_offer: true, delivery_time: "1 a 2 semanas" },
      "chatbot-enterprise": { price_normal: 999000, price_offer: 899000, is_on_offer: true, delivery_time: "2 a 4 semanas" }
    };
    this.lastFetched = Date.now();
  }

  getPlanPriceInfo(category, tier) {
    const key = `${category}-${tier}`;
    if (!this.plansMap || !this.plansMap[key]) {
      return { price_normal: 0, price_offer: 0, is_on_offer: false };
    }
    return this.plansMap[key];
  }

  getPlanPriceDescription(category, tier) {
    const plan = this.getPlanPriceInfo(category, tier);
    if (plan.is_on_offer) {
      return `${formatCLP(plan.price_offer)} (Precio de Oferta, precio base normal ${formatCLP(plan.price_normal)})`;
    }
    return `${formatCLP(plan.price_normal)}`;
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
      // Cargar precios de PocketBase antes de armar el system prompt
      await this.loadOfficialPrices();

      // 1. Clasificación de la intención del cliente (Intent Routing)
      const classificationPrompt = `Determina la intención de la siguiente consulta de un cliente de Syrtix Studio. Responde ÚNICAMENTE con una sola palabra clave en minúsculas (sin puntos, sin texto adicional, sin formato markdown, solo la palabra) de las siguientes opciones:
- "ecommerce": Si pregunta por tiendas online, e-commerce, carros de compra, pasarela de pago, Webpay, vender online, precios de webs, precios de páginas web, planes web, precios en general, cotizaciones de sitios web o costos de desarrollo web.
- "branding_design": Si pregunta por logos, branding, rebranding, manual de marca, diseño UX/UI en Figma, rediseñar un sitio web viejo/lento o cambiar el aspecto visual.
- "audits_consulting": Si pregunta por SEO, velocidad/rendimiento web, accesibilidad, optimización Lighthouse, automatizaciones con n8n/Make o consultoría tecnológica.
- "corporate_booking": Si pregunta por sitios corporativos de servicios, landing pages, portafolios de proyectos, o sistemas de agendamiento/reservas (Google Calendar, recordatorios WhatsApp).
- "chatbots": Si pregunta por chatbots de IA, asistentes virtuales, agentes automáticos o precios/planes de chatbots.
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
      const planWebStart = this.getPlanPriceInfo("web", "start");
      const planWebPro = this.getPlanPriceInfo("web", "pro");
      const planWebEnterprise = this.getPlanPriceInfo("web", "enterprise");
      const planChatbotStart = this.getPlanPriceInfo("chatbot", "start");
      const planChatbotPro = this.getPlanPriceInfo("chatbot", "pro");
      const planChatbotEnterprise = this.getPlanPriceInfo("chatbot", "enterprise");

      const webStartAnchor = planWebStart.is_on_offer ? planWebStart.price_offer : planWebStart.price_normal;

      let systemPrompt = "";

      switch (intent) {
        case "ecommerce":
          systemPrompt = `Eres SyrtixAI, el Especialista de Ventas E-commerce de Syrtix Studio.
Tu objetivo es calificar al cliente y asesorarlo en la mejor solución de comercio electrónico.

REGLAS DE ORO:
- BREVEDAD: Responde en máximo 3 frases.
- PRECIOS DE TIENDA (MEMORIZA ESTO):
  1. Web Solution Start: ${this.getPlanPriceDescription("web", "start")} (Sitio Web One-Page, catálogo vitrina autoadministrable, pedidos manuales, SIN comprobantes ni pagos automáticos).
  2. Web Solution Pro: ${this.getPlanPriceDescription("web", "pro")} (Sitio Multipágina, catálogo autoadministrable, INCLUYE sistema para que el cliente suba su comprobante de transferencia y el administrador gestione el respaldo de la venta).
  3. Web Solution Enterprise: ${this.getPlanPriceDescription("web", "enterprise")} (E-commerce completo con carrito y pagos automáticos integrados Webpay/MercadoPago).
- TÉCNICA DE VENTAS (MANDATORIA): NO asustes con los $899.000 de golpe.
  - PASO 1 (Anclaje): Dile que tenemos soluciones de tiendas autoadministrables desde ${formatCLP(webStartAnchor)} (${planWebStart.is_on_offer ? "Precio Oferta" : "Precio"} del Plan Start).
  - PASO 2 (Calificación): Luego pregúntale directamente: "¿Tu negocio está registrado en el SII y necesitas integrar pagos automáticos con tarjeta (Webpay)?"
  - PASO 3 (Cierre): Si dice SÍ, ofrece Enterprise (${this.getPlanPriceDescription("web", "enterprise")}). Si dice NO (o transferencias), explícale la diferencia entre Start (${this.getPlanPriceDescription("web", "start")}) y Pro (${this.getPlanPriceDescription("web", "pro")}).
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
  - Plan Start (${this.getPlanPriceDescription("web", "start")}): Ideal para landing pages informativas de captación o portafolios rápidos (One-Page).
  - Plan Pro (${this.getPlanPriceDescription("web", "pro")}): Perfecto para empresas con hasta 5 páginas (Nosotros, Servicios, Blog, Contacto).
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
  1. AI Start: ${this.getPlanPriceDescription("chatbot", "start")} (Agente de atención y FAQ básico en tu web).
  2. AI Pro: ${this.getPlanPriceDescription("chatbot", "pro")} (Agente con base de conocimiento dinámica y agendamiento).
  3. AI Enterprise: ${this.getPlanPriceDescription("chatbot", "enterprise")} (Arquitectura Multi-Agente idéntica a la mía, con filtros anti-alucinación, integración a CRMs y WhatsApp).
- Explica que no somos un chatbot básico, automatizamos la captación de leads de forma inteligente y segura.
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

      systemPrompt += `\n\nHOJA DE PRECIOS OFICIALES DE SYRTIX (UTILIZA ESTOS PRECIOS SIEMPRE Y NUNCA INVENTES OTROS):
- PLANES DE SITIOS WEB (Todos incluyen dominio y hosting gratis por el 1er año y son autoadministrables):
  1. Web Solution Start: ${this.getPlanPriceDescription("web", "start")}. Plan One-Page, catálogo vitrina hasta 30 productos, SIN pagos automáticos.
  2. Web Solution Pro: ${this.getPlanPriceDescription("web", "pro")}. Sitio multipágina hasta 5 secciones, catálogo vitrina hasta 50 productos, SIN pagos automáticos.
  3. Web Solution Enterprise (E-commerce): ${this.getPlanPriceDescription("web", "enterprise")}. E-commerce completo con carrito, pagos automáticos (Webpay/MercadoPago), hasta 100 productos.
- ASISTENTES DE INTELIGENCIA ARTIFICIAL (CHATBOTS IA):
  1. Chatbot AI Start: ${this.getPlanPriceDescription("chatbot", "start")} (Agente de atención y FAQ básico en tu web).
  2. Chatbot AI Pro: ${this.getPlanPriceDescription("chatbot", "pro")} (Agente en Web y WhatsApp, reservas y citas online).
  3. Chatbot AI Enterprise: ${this.getPlanPriceDescription("chatbot", "enterprise")} (Multi-Agente omnicanal, API oficial de WhatsApp, integraciones con CRMs).

REGLAS DE PRECIOS CRÍTICAS (DEBEN CUMPLIRSE SIN EXCEPCIÓN):
- NUNCA inventes ni estimes precios en dólares (USD) ni des rangos de precios aproximados que no sean los indicados en la HOJA DE PRECIOS OFICIALES.
- Si el servicio solicitado no tiene un precio explícito en los planes oficiales (como Rebranding a medida, diseño de logotipos, manuales de marca corporativa, auditorías SEO o WPO de velocidad móvil, o automatizaciones complejas n8n/Make), debes decir amablemente que:
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
