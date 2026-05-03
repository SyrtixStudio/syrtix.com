# 🚀 Syrtix AI Engine (RAG) - Documentación Maestra (Core)

**Documento Técnico de Arquitectura, Despliegue y Replicación**
*Desarrollado para la infraestructura interna de Syrtix Studio y portafolio de AI Engineering*

Esta documentación unifica el diseño arquitectónico, la bitácora de problemas resueltos en producción y la guía de replicación del Motor RAG de Syrtix, consolidando la información de manera estructurada para no perder ningún detalle relevante.

---

## 📑 Índice de Contenidos

1. [Resumen Ejecutivo del Proyecto](#1-resumen-ejecutivo-del-proyecto)
2. [Tecnologías y Arquitectura](#2-tecnologías-y-arquitectura)
3. [Fases de Implementación Técnica](#3-fases-de-implementación-técnica)
4. [Bitácora de Ingeniería y Resolución en Producción (Troubleshooting)](#4-bitácora-de-ingeniería-y-resolución-en-producción-troubleshooting)
5. [Conceptos Clave de Inferencia y Optimizaciones Avanzadas](#5-conceptos-clave-de-inferencia-y-optimizaciones-avanzadas)
6. [Infraestructura Cloud y Despliegue (Fase Final)](#6-infraestructura-cloud-y-despliegue-fase-final)
7. [Guía de Replicación e Implementación para Nuevos Proyectos](#7-guía-de-replicación-e-implementación-para-nuevos-proyectos)
8. [Apéndice: Pitch Estratégico (Defensa en Entrevistas)](#8-apéndice-pitch-estratégico-defensa-en-entrevistas)

---

## 1. Resumen Ejecutivo del Proyecto

El proyecto consistió en el diseño e implementación de un **Motor RAG (Retrieval-Augmented Generation)** personalizado para Syrtix Studio. El objetivo principal fue crear un asistente de IA capaz de responder a consultas de usuarios basándose exclusivamente en el conocimiento corporativo interno (servicios, precios, filosofía), evitando alucinaciones del modelo y proporcionando respuestas precisas y orientadas a la venta.

Se construyó una infraestructura completa de backend (API) y frontend (Chat Interface flotante), optimizada para baja latencia computacional y coste operativo $0, demostrando aplicabilidad directa a entornos de producción.

---

## 2. Tecnologías y Arquitectura

### 2.1 Stack Tecnológico
- **Lenguaje Core:** JavaScript / Node.js
- **Orquestación de IA:** `LangChain.js` (`@langchain/core`, `@langchain/community`, `@langchain/groq`)
- **LLM para Inferencia:** Llama 3.1 8B Instant (proveído vía **Groq Cloud API**)
- **Modelo de Embeddings:** `sentence-transformers/all-mpnet-base-v2` (operado vía **Hugging Face Inference API**)
- **Base de Datos Vectorial:** Implementación personalizada en Vanilla JS (`SyrtixStore`) respaldada en JSON.
- **Backend / Capa de Servicio:** Express.js, CORS, Helmet, Express-Rate-Limit.
- **Frontend / Client Layer:** React (`AIChatbot.jsx` + `AIChatbot.css`).
- **Persistencia de interacciones:** PocketBase (v0.17.0) para Leads (`ia_leads`).
- **Infraestructura Cloud:** Coolify Native Docker (Orquestación), Cloudflare (DNS/SSL proxy).

### 2.2 Decisiones Arquitectónicas Justificadas (Trade-offs)
- **Groq (Llama 3.1) vs OpenAI (GPT-4o):** Se seleccionó Groq debido a su procesamiento en LPUs, otorgando respuestas en milisegundos, fundamental en chatbots. Reduce radicalmente el costo operativo estructural.
- **Vector Store Personalizada vs Pinecone/Chroma:** Las librerías de C++ (como `hnswlib-node`) causan fricción en entornos Windows o en contenedores genéricos de hosting. Para priorizar privacidad on-premise y portabilidad total sin fallos de compilación cruzada, se diseñó `SyrtixStore`, un in-memory store propio basado en similitud de coseno vectorial (Cosine Similarity) salvando los vectores indexados en JSON nativo.
- **Hugging Face Inference API:** Externalizó el costo computacional pesado de vectorizar el texto, liberando CPU al runtime global de Node en modo local.

---

## 3. Fases de Implementación Técnica

### Fase 1: Infraestructura y Connectivity Setup
- Se consolidaron fuertemente las variables de entorno (`.env`) para manejar autenticaciones de manera segregada y segura (Groq API, HF inference tokens).
- Se implementaron las instancias principales de las clases de ecosistema `ChatGroq` y `HuggingFaceInferenceEmbeddings`.

### Fase 2: Pipeline de Ingestión de Conocimiento (Data Ingestion)
- **Extracción:** Lectura síncrona mediante el nodo `fs` de archivos flat `.md` de data no estructurada en `data/conocimiento/`.
- **Chunking:** Se configuró rigurosamente el iterador vectorial `RecursiveCharacterTextSplitter` con fragmentos de 1000 caracteres y un solapamiento (overlap) de 200 caracteres para evitar romper el contexto semántico entre sentencias en cortes contiguos.
- **Vectorización y Persistencia:** Procesamiento asíncrono con el modelo de HF para posicionar fragmentos texturados en el espacio vectorial matemático. La data consolidada se persiste nativamente en disco file json (`vectorstore.json`).

### Fase 3: Motor Lógico RAG (RAG Core)
- **Recuperación Semántica (Retrieval):** En `rag-core.js`, el string user-query se procesa como vector y se compara vectorialmente en memoria local devolviendo exhaustivamente los Top-K vecinos más cercanos matemáticamente.
- **Aumento (Augmented Generation):** Consolidación de *system prompt engineering* integrando dinámicamente in-line los "chunks" topográficos recuperados al sistema Prompting principal.
- **Persona Engineering:** Guidelines muy rígidos ajustando Llama-3.1 y enfocados orgánicamente en un comportamiento vendedor asertivo corporativo limitado exclusivamente a la Data-Lake proporcionada en el corpus base.

### Fase 4: API Segura (Backend Integration)
- Se desarrolló un microservicio RESTful en crudo sobre `server.js` (Express.js), inyectando su endpoint principal de streaming en `POST /api/ia/chat`.
- Implementación de middlewares en la pila TCP y validaciones de Headers restrictos criptográficamente.

### Fase 5: Client Layer & UI Integration
- Componentización del UI de chat visual inyectable en React (`AIChatbot.jsx`), manejando transiciones nativas complejas en interacciones de estado React con Historial contextual recursivos entre chat y el layout padre.

---

## 4. Bitácora de Ingeniería y Resolución en Producción (Troubleshooting)

### Conflicto 1: Integración ESM vs CommonJS en LangChain
- **Incidente:** Error fatal `ERR_PACKAGE_PATH_NOT_EXPORTED` en rutinas Build.
- **Causa Raíz:** Incompatibilidades internas de Node. LangChain modernizó sus módulos completamente hacia ES Modules (`import/export`) pero Node intentaba correrlo clásicamente en `require`.
- **Solución:** Se solucionó inyectando explícitamente el flag en el archivo padre `package.json` para definir la directiva de compilación modular absoluta.

### Conflicto 2: Falla de Compilación C++ (`hnswlib-node`) en Windows/Host
- **Incidente:** La vector Store instalada de por defecto falló de manera cíclica instando a compilar módulos binarios en local invocando "Visual Studio Build Tools" nativos faltantes.
- **Solución (Pivot Arquitectónico de Oro):** Desarrollo completo e íntegro de nivel base de un simulador vectorial in-memory bautizado como **`SyrtixStore`**, erradicando en absoluto dependencias de capas subyacentes C++.

### Conflicto 3: "Hallucinations" Alucinasiones Modelares con Precios Vagos
- **Incidente:** Ante queries presupuestarias estrictas del usuario el framework reaccionaba vacío rellenando con texto inútil: ("Disculpa no cuento con esa información...").
- **Solución Aplicada:** Ruteando mejoramientos (Data Ingeneering). Extracción paramétrica en archivos estructurados precisando explícitamente los costos del portal front-end e inyección al base vectorial con subsiguiente mitigación de umbrales térmicos (Bajar "Temperatura" del LLM en general).

### Conflicto 4: Rechazo 404 Autenticando Lead-Base en la Base de Datos Externa
- **Incidente:** Al entrar en etapa de guardado Lead, la conexión entre API Express AI Server fallaba interactuando a Socket Base contra el Motor CMS (PocketBase) en admin-mode devolviendo error 404 Not Found a los endópints.
- **Causa Raíz y Solución Resolutiva:** Corrupción total de inter-compatiblidad con el backend SDK. Se realizó obligadamente una depuración de versiones desinstalando el cliente web de PocketBase forzando de downgrade el paquete en el JSON local con las tags `v0.17.0` que correspondían puristaménte a los endpoints nativos del Binario desplegados en panel Coolify Host.

### Conflicto 5: La "Trampa" del Enrutamiento localhost de n8n
- **Incidente:** Ambientes conversacionales paralizados al ser escalados en modo nube pero operacionales localmente (Daba un error genérico: `Lo siento, mi conexión con el cuartel general esta fallando`).
- **Solución Definitiva:** Se reformateó directamente las conexiones API Frontend Bypassando interconexiones o webhooks intermedios fallidos en red local de los desarrolladores (localhost N8N loop) directo y en crudo HTTP sobre endpoints productivos en `https://ia.syrtix.com`.

### Conflicto 6: Exception Null `reading additional_kwargs` en History Log
- **Incidente:** Adaptar el histórico (chat loop context) tras saltar n8n rompía la estructura map devolviendo exception array null object reading reference.
- **Solución Resolutiva:** Re-formateo del parser log, admitiendo el array de entrada con lecturas elásticas mediante operador genérico map fall-back inyectado: `const messageText = h.text || h.content || "";`.

### Conflicto 7: Prevención de Explotaciones y Fugas Económicas (Security Hardening Industrial)
- **Aseguramiento de Defensas:** Riesgo de peticiones spam consumiendo masivamente la LPU base del Groq Cloud externa y tokens de coste HF. Solucionado inyectando en las tramas secretales compartidas cabeceras validativas obligatorias para consumo (`Authorization: Bearer <TOKEN>`) que solo el Web Frontend de origen porta validamente gestionado sobre variables Vault coolify Server.

---

## 5. Conceptos Clave de Inferencia y Optimizaciones Avanzadas

### 5.1 Calibración del Comportamiento: La "Temperatura"
Es el parámetro matemático intrínseco en el prompt constructor que balancea la fiabilidad vs la "creatividad libre" dictando las decisiones en predicciones de cadenas.
- **En este motor se configuró a `Temperature 0.5`.**
- **Justificación Práctica:** Al perfilarse como un Agente Ejecutivo Ventas enfocado a B2B o Booking de servicios con cotizaciones precisas y en firme, bajar intencionadamente la temperatura suprime la creatividad salvaje típica conversacional, erradicando a cero las alucinaciones comerciales donde el LLM inventa, omite compromisos inútiles de servicios irreales o sobrepromesas fuera de lo estipulado en la base vectorial cargada.

### 5.2 Optimizaciones Estratégicas y Barreras de Seguridad en AI Engineering:
- **Top-K Limitado (K=4 retrieval limits):** Técnicamente se previno activando el fenómeno degradativo "Lost In the Middle" donde los LLMs dispersan su atención con información parasítica no fundamental saturando contexto. Limitar recuperar máximo a 4 "k vecinos" garantiza solo bloques concentrados altísimamente certeros frente el input natural.
- **Groundedness Enfocada Hardcoded:** Forzado extremo inyectado base del System Prompts determinando que todas variables se responderán ciñéndose inexcusablemente solo y únicamente sustentadas en data Inyectada, desvaneciendo los ataques Prompt-Jailbreak en seco.
- **Long-Pool Context Conversational (Memory Injection):** Mantenimiento fluido coherente acarreando por arrastre una arquitectura history en array pasándolo siempre al input del Engine como state principal previniendo Alzheimer contextual o bucle saludos del RAG genérico.

### 5.3 Roadmap de Madurez Tecnológica (Vision Pipeline V2.0):
- **Hybrid Search Engine:** Modificación hacia cruces factoriales entre Similitud Semántica (Dense Retrievals Array) e intersección léxica pura (Matchings Booleanos TF-IDF Exactos Sparse Retrievement `bm25` style algorithm).
- **Inteligencia Predictora Route (Intents):** Gateways Inteligentes Previos; Inyectar pre-filtro NLP detectando de manera instintiva intencion real para no ejecutar base de conocimiento (con carga costo CPU embebings) ni encender búsqueda RAG a interrogantes coloquiales basurales resolviéndose del puro modelo base.

---

## 6. Infraestructura Cloud y Despliegue (Fase Final)

La orquestación hacia la etapa de Producción Final y estabilización de ecosistema hacia (Entorno HA en `syrtix.com`):

### 6.1 Orquestación Docker Nativa con Sistema Coolify Host
- **Isolación Servicio:** Micro-Instancia Aislada `syrtix-ai-engine` para preservar balance de cargas UI Base.
- **Containerización Avanzada Build:** Pre-ensamblado orquestado sobre un `Dockerfile.backend` configurando doble etapa que ejecuta sub-procesos preparatorios (Base Vectorial/Data) levantando simultáneo instanciación principal de consumo por `PM2 / Node.Js` hacia puerto root mapeado `3001` expuestos proxy local de docker reverse proxy coolify auto.

### 6.2 Estrategia Enrutamiento de TLS DNS (Cloudflare Tunnelings Edge Layer)
- **Target Endpoints:** Alojamiento sobre record base A a `ia.syrtix.com`.
- **Modo Security Proxy Activado:** Se puenteó a las redes subyacentes la canalización Proxy Strict Mode (Nube Naranaja). Crítico habilitador para no ser rechazado automáticamente desde los policy in-browser por fallos bloqueadores `ERR_CERT_AUTHORITY_INVALID` ya que el cliente web (UI en dominio HTTPS Valid) bloquea instintívamente inyecciones Fetch HTTP a un motor IA inter-pares huérfano de certificaciones root de validación mutua.

### 6.3 Capas Inteligentes Fallback Conversions Integrados
- **Escudos Regex Fallsafe Compra:** Dentro de los core lógicos en `rag-core` hay capas detectoras secundarias paralelas a IA; Si las keywords user infieren petitorios comerciales explícitos (cotizar, quiero ver, pagar) pero filtros LLM censuran provistos link por razones internas en respuesta generada, el detector obliga re-inyecciones estáticas forzadas del Action-Btn Direct Leads Form a Front.

---

## 7. Guía de Replicación e Implementación para Nuevos Proyectos

Esta guía paso a paso fue concebida para tomar tu código base del `ia-engine` y portarlo a la velocidad de la luz a cualquier agencia o proyectos B2B/B2C con arquitectura basada en React JS (o Vite/Next) estandar.

### Requisitos Previos:
1. Setup credenciales LLM de inferencias rápidas **(API Key de Entorno Groq LPU o Similares OpenAI)** y Accesos Endpoints **HF** `HuggingFace-API` para incrustación vectorial rápida externa.
2. Contar con tu Proyecto Raíz a modificar exportando librerías `ia-engine` original base code.

### Paso 1: Configuración del Corpus del Nuevo Negocio (Setup Matrix Data)
- Ve al directorio fuente `ia-engine/data/conocimiento/` re-imprimiendo todos documentos informativos `.md` reabasteciéndolos con características explícitas del modelo ventas e información de target del nuevo emprendimiento (evitar lenguajes difusos, favoreciendo tablas literales con parámetros costos explícitos).
- Generar Pre-Digestión Vectorial: Procesa compilación e indexado hacia el espacio base lanzando local terminal Scripting Engine: `node ia-engine/ingest.js` recreando index VectorJson Data file target store memory principal de forma persistente.

### Paso 2: Tuneo de Cerebro Transaccional (RAG Behavior)
- En zona cerebral `ia-engine/rag-core.js` edite exhaustivamente reescribiendo y ajustando `systemPrompt`. Implementa personalidad del Agente dictando el nuevo set de restricciones del prompt y los métodos obligatorios a sugerir los Call Contacts del nuevo dominio empresarial.
- Validar las condiciones booleanas de cierres condicionales inyectados en capas regex previniendo escapes transaccionales Fall-safes (actualiza botones y rutas generadas).

### Paso 3: Acondicionamiento de Protocolos del API Backend
- Dotar ambiente raíz `.env` alojando todas las sub string `GROQ_API_KEY`, `HF_API_KEY` y tu invención nueva custom para autorizar pass Token bearer en la regla maestra de Firewall llamada `SYRTIX_SECRET`.
- Limpieza CORS origins: en app.use Cross origin backend file verifique e implemente los Endpoints Domains públicos FQDN Oradores autorizados del UI project Final a no bloquear.

### Paso 4: Ensamblaje Visual Front-End Injecting
- Porta tus Archivos base React Modulares Visual components (`AIChatbot.jsx`, `AIChatbot.css`).
- Asegura presencia en Layout UI Base anclando permanentemente por la etiqueta `<AIChatbot/>` en el Main App Wrapper Global Contextual.
- Implementa en entorno cliente variables `.env` Vite equivalentes a origen `VITE_API_URL` conectando el endpoint final y re-asegurando paso secreto portando en header `VITE_SYRTIX_SECRET` correspondiente al env configurado de manera Backend unísona.

### Paso 5: Estrategias en Despliegue Multi-Nube Subservicios (Deploy)
- Migra contenedor completo del Sub-app `ia-Engine` por Vías Microservicio Aislado (Micro-backend). Explotados natívamente Build docker images standardizados al cloud Coolify u parecidos con auto run pnpm backend server init points.
- Delega Dominios Sub Nube DNS al servicio backend asilado AI e inicia puenteamiento HTTPS auto-validatorio por interposición proxmox reverso Cloudflare Edge Server Proxy rules.
- Ejecuta compilado Build definitivo UI Modulando apuntamientos Endpoint Final Cloud. Disfruta un Agente Inteligente Transaccional Privado, Escapable $0 en tu producto y robusto como el titanio.

---

## 8. Apéndice: Pitch Estratégico (Defensa en Entrevistas Ejecutivas)

*Este bloque sintetiza tu capacidad operativa, resolutiva y todo el valor cognitivo e ingenieril detrás de esta herramienta. Puede y debe usarse textualmente en rondas de validación de perfiles como Senior Tech Leads.*

> "Para este motor RAG conversacional, identifiqué y erradiqué los cuellos de botella clásicos de LLM limitándonos inteligentemente a modelos ágiles optimizando brutalmente el **TTFT (*Time-To-First-Token*)** acoplándonos nativamente sobre hardware inferencial **LPUs de Groq**. Detecté incompatibilidades C++ recurrentes en stacks de Windows host en sistemas clásicos Hnswlib para bases vectoriales, lo que resolví con un **Pivot Arquitectural directo** maquetando local e iterando una BBDD referencial In-Memory en JS Vainilla en estado crudo utilizando Similitudes Coseno puro algebraico vectorial mitigando al 100% las fallas del compilador cruzado. \n
> Controlé el riesgo de alucinaciones aplicando reducciones paramétricas por calibración Térmica (Temperatura) junto Limitaciones de Ventana Selectiva Top-K Retrieval controlando fugas tipo `Lost In the Middle` y mitigación Jail-break Prompt base. La alta disponibilidad de orquestación a producción final culminó segmentada y encriptada sobre Node bajo Coolify env con inyecciones dinámicas de Proxies Autoridad Edge Cloudflare previniendo vulnerabilidades y robos nativos Tokens. \n
> **No conecté una API y ya. Es una obra integral Core diseñada bajo una visión orquestacional robusta para infraestructura B2B.**"
