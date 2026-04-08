# 🚀 Plan de Implementación: Proyecto "Syrtix AI Engineer"

**Objetivo:** Construir un sistema RAG funcional y escalable dentro del proyecto `syrtix.com` para dominar los conceptos que pide Usercode (LLMs, Vector DBs, Agents, Orquestación) utilizando un stack 100% JavaScript/Node.js, manteniendo los costos en $0.

---

## Fase 1: Arquitectura Base y Herramientas (Costo $0)
*Objetivo: Instalar las dependencias y conectar el "Cerebro" (LLM).*

1.  **Instalar el "Pegamento" (LangChain.js):**
    *   Instalar paquetes core de LangChain.
2.  **Configurar el LLM (Groq):**
    *   Crear una cuenta gratuita en [Groq Cloud](https://console.groq.com/).
    *   Obtener Groq API Key y guardarla en el archivo `.env`.
    *   *Prueba:* Crear un script simple (`test-llm.js`) que salude usando un modelo veloz como Llama-3.

---

## Fase 2: Creación de la "Biblioteca" (Ingesta de Datos)
*Objetivo: Enseñar a la IA sobre Syrtix leyendo nuestros propios archivos.*

1.  **Preparar Documentos Corporativos:**
    *   Crear una carpeta `data/conocimiento/`.
    *   Escribir un par de archivos (ej. `servicios.md`, `filosofia.md`) con información real sobre qué hace la empresa.
2.  **Cargar y Dividir (Text Splitters):**
    *   Escribir un script que lea estos archivos y los divida en pequeños "trozos de información" para que la IA los pueda digerir mejor.

---

## Fase 3: El Núcleo RAG y la Vector DB
*Objetivo: Convertir el texto en números (Embeddings) y guardarlos para búsqueda rápida.*

1.  **Vector DB Local (HNSWLib o MemoryVectorStore):**
    *   Utilizamos una base de datos vectorial que vive en la memoria de la computadora o en una pequeña carpeta (sin pagar servidores).
2.  **Generar e Ingestar Embeddings:**
    *   Un script que tome los trozos de información de la Fase 2, los convierta en números matemáticos y los guarde en la biblioteca vectorial.
3.  **Buscador Inteligente (Retriever):**
    *   Probar que si preguntamos "precios", la base de datos es capaz de encontrar y devolvernos el párrafo exacto de nuestros archivos.

---

## Fase 4: El Agente / Chain (Uniendo Cerebro y Biblioteca)
*Objetivo: Darle al LLM la capacidad de consultar la Vector DB cuando le hagan preguntas.*

1.  **Ingeniería de Prompts RAG:**
    *   Escribir la instrucción core: *"Eres el asistente experto de Syrtix. Responde dudas usando SOLO la información compartida: {contexto}"*
2.  **Unir todo (Orquestación en código):**
    *   Combinar el buscador con el modelo de lenguaje.
    *   *Prueba Final:* Preguntar `"¿Qué servicios de auditoría ofrecen?"` y ver cómo la IA no inventa nada, sino que lee nuestros archivos y responde profesionalmente.

---

## Fase 5: Exposición vía API (Simulando entorno real)
*Objetivo: Hacer que nuestro agente sea consumible y cumpla con el requisito de "Desarrollo de Software y APIs".*

1.  **Crear Endpoint NodeJS (Express/Next.js API):**
    *   Hacer una ruta `POST /api/ia/chat` que reciba el mensaje del usuario y nos devuelva la respuesta de la IA.
    *   Acá nos aseguramos de que sea *escalable* y *seguro* (no exponer API Keys al frontend).

---

## (Bonus) Fase 6: Flujo Visual (n8n)
*Objetivo: Transformar lo escrito en código a un orquestador logístico como piden en el cargo.*

1.  Instalar n8n localmente y armar un escenario donde un nuevo mensaje (simulado) dispara una consulta a nuestra base vectorial automáticamente.
