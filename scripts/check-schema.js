import PocketBase from "pocketbase";
import * as dotenv from "dotenv";

dotenv.config();

const pb = new PocketBase(process.env.VITE_POCKETBASE_URL);

async function check() {
  try {
    await pb.admins.authWithPassword(process.env.PB_ADMIN_EMAIL, process.env.PB_ADMIN_PASSWORD);
    const collection = await pb.collections.getOne("testimonials");
    console.log("Schema:", JSON.stringify(collection.schema, null, 2));
  } catch (e) {
    console.error("Error:", e.message);
  }
}

check();
