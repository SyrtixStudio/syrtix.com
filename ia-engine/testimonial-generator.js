import PocketBase from "pocketbase";
import * as dotenv from "dotenv";
import { Groq } from "groq-sdk";

dotenv.config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `
Eres un generador de testimonios para Syrtix, una agencia de desarrollo web y marketing de alto rendimiento.
Tu objetivo es generar un testimonio REALISTA, PROFESIONAL y con IDENTIDAD CHILENA.

Debes rotar entre estos temas clave, dándole ESPECIAL PRIORIDAD al punto 1 (Atención):
1. Atención y Soporte (PRIORIDAD ALTA): Destaca el profesionalismo, la EMPATÍA y la capacidad de dar alternativas de solución inteligentes. El cliente debe sentirse seguro y escuchado.
2. Chatbots e IA: Automatización de atención y ventas 24/7 con agentes inteligentes.
3. Diseño y Desarrollo Premium: Sitios "World-Class", rápidos (rendimiento 100%), seguros y el nuevo rebranding.
4. Auditorías y SEO Local: Mejoras de visibilidad en Google para ciudades específicas de Chile y performance Lighthouse al 100%.
5. Automatizaciones con n8n: Integración de la web con CRMs y flujos de trabajo.
6. Marketing de Datos: Implementación de Meta Pixel y CAPI para campañas efectivas.

Reglas:
1. Nombre: Debe ser un nombre y apellido común en Chile.
2. Contenido: Debe mencionar un beneficio específico. Si es de Atención, debe sonar muy humano y agradecido por el trato recibido.
3. Tono: Profesional, ejecutivo, pero muy cercano y empático.
4. Idioma: Español (textEs) e Inglés (textEn).
5. Rating: Siempre entre 4 y 5.
6. Formato: JSON con name, textEs, textEn, rating.
`;

export async function generateAndSaveTestimonial() {
  try {
    console.log("🤖 Generando nuevo testimonio semanal...");
    
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: "Genera el testimonio de esta semana." }
      ],
      model: "llama-3.3-70b-versatile",
      response_format: { type: "json_object" }
    });

    const testimonialData = JSON.parse(completion.choices[0].message.content);
    console.log("📦 Datos brutos de IA:", JSON.stringify(testimonialData, null, 2));
    console.log("✅ Testimonio generado:", testimonialData.name);

    // Autenticar en PocketBase
    await pb.admins.authWithPassword(
      process.env.PB_ADMIN_EMAIL,
      process.env.PB_ADMIN_PASSWORD
    );

    // Generar una fecha de creación orgánica (hace unas horas o minutos, no justo ahora)
    const randomMinutesOffset = Math.floor(Math.random() * 480); // Hasta 8 horas de desfase
    const organicDate = new Date(Date.now() - randomMinutesOffset * 60000).toISOString();

    // Guardar en la colección 'testimonials'
    const record = await pb.collection("testimonials").create({
      ...testimonialData,
      created: organicDate
    });

    console.log("🚀 Testimonio guardado en PocketBase con ID:", record.id);
    return record;
  } catch (error) {
    console.error("❌ Error en la generación semanal:", error.message);
    throw error;
  }
}
