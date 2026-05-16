import PocketBase from "pocketbase";
import * as dotenv from "dotenv";

dotenv.config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

async function updateSchema() {
  try {
    await pb.admins.authWithPassword(process.env.PB_ADMIN_EMAIL, process.env.PB_ADMIN_PASSWORD);
    const collection = await pb.collections.getOne("testimonials");
    
    // Añadir los campos que faltan para que coincidan con el frontend
    const newFields = [
      { name: "textEs", type: "text" },
      { name: "textEn", type: "text" },
      { name: "rating", type: "number" }
    ];

    for (const field of newFields) {
      if (!collection.schema.find(f => f.name === field.name)) {
        collection.schema.push({
          name: field.name,
          type: field.type,
          system: false,
          required: false,
          unique: false,
          options: field.type === "number" ? { min: 1, max: 5 } : {}
        });
      }
    }

    await pb.collections.update(collection.id, collection);
    console.log("✅ Esquema de PocketBase actualizado con éxito.");
  } catch (e) {
    console.error("❌ Error actualizando esquema:", e.message);
  }
}

updateSchema();
