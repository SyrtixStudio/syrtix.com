import * as dotenv from "dotenv";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";

dotenv.config();

const embeddings = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-mpnet-base-v2",
  apiKey: process.env.HF_API_KEY,
});

try {
  const result = await embeddings.embedQuery("Hola mundo");
  console.log("✅ Embeddings funcionando! Longitud:", result.length);
} catch (error) {
  console.error("❌ Error en embeddings:", error);
}
