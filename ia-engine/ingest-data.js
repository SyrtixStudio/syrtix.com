// ingest-data.js – Ingesta de documentos a una vector store (HNSWLib)

import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai"; // Necesita OPENAI_API_KEY en .env
import { HNSWLib } from "@langchain/vectorstores/hnswlib";

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

// 4️⃣ Generar embeddings (requiere OPENAI_API_KEY)
if (!process.env.OPENAI_API_KEY) {
  console.error("⚠️ OPENAI_API_KEY no está configurada en .env. Añádela para generar embeddings.");
  process.exit(1);
}

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: "text-embedding-3-large", // modelo de embeddings de OpenAI
});

// 5️⃣ Crear y guardar la vector store
const store = await HNSWLib.fromDocuments(chunks, embeddings);
await store.save("vectorstore");
console.log("✅ Ingesta completada. Vector store guardado en ./vectorstore");
