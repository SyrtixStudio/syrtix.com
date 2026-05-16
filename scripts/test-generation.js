import { generateAndSaveTestimonial } from "../ia-engine/testimonial-generator.js";
import * as dotenv from "dotenv";

dotenv.config();

async function runTest() {
  console.log("🧪 Iniciando prueba de generación manual...");
  try {
    const record = await generateAndSaveTestimonial();
    console.log("✨ ¡Éxito! Se ha generado un nuevo testimonio orgánico.");
    console.log("ID:", record.id);
    console.log("Nombre:", record.name);
    console.log("Texto:", record.textEs);
  } catch (error) {
    console.error("❌ La prueba falló:", error.message);
  }
}

runTest();
