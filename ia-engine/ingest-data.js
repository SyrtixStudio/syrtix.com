// ingest-data.js – Ingesta de documentos a una store personalizada (SyrtixStore)
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { SyrtixStore } from "./syrtix-store.js";

dotenv.config();

// 1️⃣ Ruta de los documentos de conocimiento
const docsFolder = path.resolve("data", "conocimiento");
const mdFiles = fs.readdirSync(docsFolder).filter((f) => f.endsWith('.md'));

// 2️⃣ Leer y crear documentos
const docs = mdFiles.map((file) => ({
  pageContent: fs.readFileSync(path.join(docsFolder, file), "utf-8"),
  metadata: { source: file },
}));

console.log(`📄 Encontrados ${mdFiles.length} archivos .md para ingestión.`);

// 3️⃣ Dividir en fragmentos (chunks)
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const chunks = await splitter.splitDocuments(docs);
console.log(`🔀 Divididos en ${chunks.length} fragmentos.`);

// 4️⃣ Generar embeddings usando HuggingFace API
const embeddings = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-mpnet-base-v2",
  apiKey: process.env.HF_API_KEY,
});

// 5️⃣ Crear y guardar la vector store usando nuestra clase personalizada
const store = new SyrtixStore();
await store.addDocuments(chunks, embeddings);
store.save("vectorstore.json");

console.log("✅ Ingesta completada. Conocimiento guardado en ./vectorstore.json");
