import { ChatGroq } from "@langchain/groq";
import * as dotenv from "dotenv";

// 1. Cargamos las variables de entorno (.env)
dotenv.config();

// 2. Inicializamos el Cerebro (LLM)
// Usamos ChatGroq, pasándole la API KEY que guardamos en el .env
const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant", // Updated to a supported Groq model
  temperature: 0.7, // Qué tan "creativo" queremos que sea (0=rígido, 1=loco)
});

async function testIA() {
  console.log("🤖 Conectando con la IA de Syrtix...");

  try {
    // 3. Enviamos una pregunta simple
    const response = await model.invoke("Hola! Soy un ingeniero de IA en formación. Salúdame brevemente como si fueras el asistente de Syrtix.");
    
    console.log("\n✨ Respuesta de la IA:");
    console.log(response.content);
  } catch (error) {
    console.error("\n❌ Error al conectar:", error.message);
    console.log("Revisa si pegaste bien tu GROQ_API_KEY en el archivo .env!");
  }
}

testIA();
