import PocketBase from "pocketbase";
import * as dotenv from "dotenv";
import { Groq } from "groq-sdk";

dotenv.config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `
Eres un generador de testimonios para Syrtix. Genera un testimonio REALISTA y CHILENO.
Devuelve EXCLUSIVAMENTE un JSON: { "name": "...", "textEs": "...", "textEn": "...", "rating": 5 }
`;

async function seed() {
  try {
    await pb.admins.authWithPassword(process.env.PB_ADMIN_EMAIL, process.env.PB_ADMIN_PASSWORD);
    
    const dates = [
      new Date().toISOString(), // Hoy
      new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // Hace 3 días
      new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // Hace 10 días
    ];

    for (const date of dates) {
      const completion = await groq.chat.completions.create({
        messages: [{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: "Genera un testimonio." }],
        model: "llama-3.3-70b-versatile",
        response_format: { type: "json_object" }
      });

      const data = JSON.parse(completion.choices[0].message.content);
      await pb.collection("testimonials").create({ ...data, created: date });
      console.log(`✅ Testimonio creado para la fecha: ${date}`);
    }
    console.log("🚀 Seeding completado.");
  } catch (e) {
    console.error("❌ Error seeding:", e.message);
  }
}

seed();
