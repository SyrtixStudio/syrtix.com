# Implementación de Sistema RAG (Retrieval-Augmented Generation) para Syrtix Studio
**Documento Técnico de Arquitectura y Desarrollo**
*Desarrollado para portafolio de AI Engineering*

---

## 1. Resumen Ejecutivo del Proyecto
El proyecto consistió en el diseño e implementación de un **Motor RAG (Retrieval-Augmented Generation)** personalizado para Syrtix Studio. El objetivo principal fue crear un asistente de IA capaz de responder a consultas de usuarios basándose exclusivamente en el conocimiento corporativo interno (servicios, precios, filosofía), evitando alucinaciones del modelo y proporcionando respuestas precisas y orientadas a la venta.

Se construyó una infraestructura completa de backend (API) y frontend (Chat Interface flotante), optimizada para baja latencia computacional y coste operativo $0, demostrando aplicabilidad directa a entornos de producción.

---

## 2. Tecnologías y Arquitectura

### 2.1 Stack Tecnológico
- **Lenguaje Core:** JavaScript / Node.js
- **Orquestación de IA:** `LangChain.js` (Específicamente `@langchain/core`, `@langchain/community`, `@langchain/groq`)
- **LLM para Inferencia:** Llama 3.1 8B Instant (proveído vía **Groq Cloud API**)
- **Modelo de Embeddings:** `sentence-transformers/all-mpnet-base-v2` (operado vía **Hugging Face Inference API**)
- **Base de Datos Vectorial:** Implementación personalizada en Vanilla JS (`SyrtixStore`) respaldada en JSON.
- **Backend / Capa de Servicio:** Express.js, CORS.
- **Frontend / Client Layer:** React (`AIChatbot.jsx` + `AIChatbot.css`).

### 2.2 Decisiones Arquitectónicas Justificadas (Trade-offs)
*   **Groq (Llama 3.1) vs OpenAI (GPT-4o):** Se seleccionó Groq para inferencia debido a su procesamiento basado en LPUs (Language Processing Units), lo que otorga respuestas en latencias de milisegundos, fundamental para una buena experiencia de usuario en chatbots asíncronos. Además, redujo el costo operativo estructural.
*   **Vector Store Personalizada vs Pinecone/Chroma:** En entornos Windows y despliegues sin containers nativos, las librerías C++ (como `hnswlib-node`) causan fricción. Para priorizar escalabilidad ligera, portabilidad sin dependencias en el host, y privacidad de datos on-premise, se construyó una librería Vector Database *ad-hoc* basada en similitud de coseno vectorial (Cosine Similarity algorithm).
*   **Hugging Face Inference API:** Externalizó el costo computacional pesado de vectorizar el texto (Embeddings computation), liberando CPU al runtime de Node local.

---

## 3. Fases de Implementación (El Plan a Nivel Técnico)

### Fase 1: Infraestructura y Connectivity Setup
- Se establecieron variables de entorno críticas (`.env`) para manejar autenticaciones (Groq API, HF inference tokens).
- Se implementó la instanciación principal de las clases `ChatGroq` para generación sintáctica y `HuggingFaceInferenceEmbeddings` del paquete `@langchain/community` para codificación semántica.

### Fase 2: Pipeline de Ingestión de Conocimiento (Data Ingestion)
- **Extracción:** Lectura síncrona mediante el nodo `fs` de archivos `.md` del directorio `data/conocimiento/` (Unstructured Data).
- **Chunking (Segmentación):** Se implementó el `RecursiveCharacterTextSplitter` configurado con fragmentos de 1000 caracteres y un overlape de 200 caracteres (mitigación para evitar rupturas de contexto semántico crítico entre sentencias contiguas).
- **Vectorización & Persistencia:** El array de *chunks* se procesó asíncronamente con el modelo de HF para trazar su posición en espacio euclídeo. Finalmente, la data de conocimiento embebida (chunks + vectores + metadatos) se serializó en disco dentro de `vectorstore.json`.

### Fase 3: Motor Lógico de Recuperación RAG (RAG Core)
- **Recuperación Semántica (Retrieval):** Script `rag-core.js`. Al recibir el query string (`question`), éste es primeramente procesado y mapeado como vector (Embebing query). Luego, la base vectorial local opera una similitud de Coseno y devuelve los Top-K fragmentos más cercanos (Neighbors list).
- **Inyección de Contexto en Prompt (Augmented Generation):** Consolidación de *system prompt engineering*, inyectando dinámicamente los fragmentos k-vecinos en la estructura inicial.
- **Persona Engineering:** Redefinimos los guidelines de Llama-3.1 para adoptar una personalidad vendedora, asertiva y basada explícitamente en el corpus (reducción total del parámetro default de Temperatura, enfocando su certidumbre).

### Fase 4 y 5: API Segura (Backend Integration)
- Se desarrolló el microservicio RESTful en `server.js` (Express.js).
- **Endpoint principal:** `POST /api/ia/chat`
- **Security Hardening Layer:** Instauración de un `Middleware Function` sobre las peticiones HTTP que evalúa criptográficamente el payload `Authorization: Bearer <SYRTIX_SECRET>` contra las credenciales del entorno. Garantiza denegación instantánea de anomalías.

### Fase 6: Client Layer & UI Integration
- Componentización `AIChatbot.jsx` implementado con iteraciones completas sobre Hooks (`useState`, `useEffect`, `useRef`).
- Desarrollo de un layout "floating chat bubble" con animaciones transicionales en `AIChatbot.css`.
- Integración en `App.jsx`, haciendo al componente omnipresente durante la navegación de Single Page Application.

---

## 4. Problemas Encontrados y Soluciones Estructurales (Troubleshooting)

### Problema 1: Fallo de Integración de Módulos (ESM vs CommonJS) en LangChain
- **Incidente:** `ERR_PACKAGE_PATH_NOT_EXPORTED`. Subdependencias obsoletas de Node con Langchain al hacer `import`.
- **Análisis/Debugging:** LangChain se modernizó a arquitecturas puramente ECMAScript Modules (ESM). Node.js rechazaba lecturas combinadas sin `type: module` estructural.
- **Solución Aplicada:** Modificamos explícitamente el `package.json` insertando la directiva de módulo absoluto.

### Problema 2: Compilación Fallida (Build Error) C++ en HNSWLib-Node
- **Incidente:** `node-gyp rebuild failed` / Falla de bindings en `hnswlib-node` bajo sistema Windows del Host.
- **Análisis/Debugging:** El vector store de Langchain por defecto invocaba el compilador de C++ (Visual Studio build tools), ausente en el equipo local de desarrollo.
- **Solución Aplicada (Pivot Arquitectónico):** Deprecación total de paquetes externos problemáticos. Desarrollo manual de clase `SyrtixStore` - Una in-memory vector database en puro JS que emula algebraicamente el cómputo de la similitud del coseno iterando en Arrays de Arrays numéricos y salvando persistencia vía FileSystem nativo JSON.

### Problema 3: "Hallucinations" (Alucinaciones) y Comportamiento "Robótico"
- **Incidente:** El modelo ofrecía respuestas diplomáticamente vacías ("no cuento con esa información") ante queries sobre presupuestos precisos.
- **Análisis/Debugging:** El data ingestion file original (`servicios.md`) carecía de las métricas comerciales actualizadas que, paradójicamente, sí existían en el Frontend source code (React views).
- **Solución Aplicada:** Data engineering; cruzamos datos, documentamos en Markdown precios exactos de React y reajustamos el Behavior del Prompt (Temperatura agresiva para transaccionar).

---

## 5. Conceptos Clave para la Inferencia: El Parámetro "Temperature"

Un aspecto crítico en el ajuste del motor de Syrtix fue la calibración de la **Temperatura** del modelo Llama-3.1. En la entrevista, este punto demuestra control sobre la fiabilidad del sistema.

### ¿Qué es la Temperatura?
Es el parámetro que controla la aleatoriedad o "creatividad" del modelo al predecir la siguiente palabra:
- **0.0 a 0.3 (Baja):** El modelo es determinista. Elige siempre la opción más probable. Ideal para datos exactos y RAG.
- **0.7 (Media):** Balance entre coherencia y fluidez humana. Es el estándar para chats generales.
- **1.0+ (Alta):** Máxima aleatoriedad. Riesgo elevado de alucinaciones (inventar datos).

### Estrategia aplicada en Syrtix:
En este proyecto, se configuró una **Temperatura baja (0.5)**. 
**Justificación técnica:** Dado que el objetivo es transaccional (vender servicios con precios reales), se buscó mitigar la probabilidad de que el modelo alucine ofertas o invente servicios no contenidos en los vectores recuperados. Se priorizó la **fidelidad al contexto** sobre la creatividad literaria.

---

## 6. Optimizaciones de Ingeniería y Escalabilidad Futura

Para elevar la robustez del sistema, se aplicaron conceptos avanzados de AI Engineering que garantizan la precisión del motor:

### Optimizaciones Implementadas:
- **Top-K Retrieval (K=4):** Se limitó la recuperación a los 4 fragmentos más relevantes para mitigar el fenómeno **"Lost in the Middle"**, donde los LLMs pierden efectividad si se les satura con un contexto excesivo en la ventana de atención.
- **Groundedness Enforcement:** Mediante *System Instructions* estrictas, se forzó al modelo a responder únicamente basándose en la fuente de verdad (Source of Truth) inyectada, minimizando el riesgo de "jailbreaking" o usos indebidos (ej. pedirle tareas no relacionadas con Syrtix).
- **TTFT (Time To First Token) Optimization:** El uso de **Groq (LPUs)** garantiza una latencia de inferencia líder en la industria, esencial para la retención de usuarios en interfaces conversacionales.
- **Conversational Memory Integration:** Se implementó una arquitectura de "Short-term Memory" mediante el envío sistemático del historial de la sesión (`history` array) desde el cliente hacia el LLM. Esto permite mantener la coherencia del diálogo y evita saludos repetitivos o pérdida de contexto en hilos de conversación complejos.

### Roadmap de Escalabilidad (Fase 2.0):
- **Hybrid Search:** Evaluación de la implementación de búsqueda híbrida combinando *Dense Retrieval* (vectores) con *Sparse Retrieval* (BM25) para mejorar la precisión en términos técnicos exactos.
- **Intent Routing:** Implementación de una capa de clasificación de intención previa para decidir si un query requiere búsqueda en la base vectorial o puede ser resuelto por el conocimiento general del modelo (reduciendo latencia y coste).

---

## 7. Apéndice: Guía de Defensa Estratégica (Pitch de Entrevista)

*Utiliza este bloque para resumir la complejidad técnica y el valor de negocio de la implementación:*

> **"Para este motor, optimicé el TTFT aprovechando la arquitectura de inferencia en LPUs de Groq, lo que nos da una respuesta casi en tiempo real. Además, para garantizar la precisión, implementé un filtrado Top-K en la búsqueda vectorial; esto previene el fenómeno de 'Lost in the Middle', asegurando que el modelo reciba solo información relevante y no se confunda con exceso de contexto inútil."**

---

**Resumen Cierre Técnico:** Se orquestó exitosamente un Data Pipeline de IA completo superando el *Developer Environment Limitation* con programación orientada a objetos cruda. La orquestación actual es Highly Available, Serverless Ready (exportable a Lambda Functions) y tiene zero cost variable.
