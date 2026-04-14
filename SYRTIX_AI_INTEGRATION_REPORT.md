# 🧠 REPORTE TÉCNICO-ESTRATÉGICO: SYRTIX AI WORKFLOW v2.0

**Proyecto:** Syrtix Digital Engineering — Sistema de IA Conversacional con Captación de Leads en Tiempo Real  
**Autor:** Equipo de Ingeniería Syrtix  
**Fecha:** 14 de Abril, 2026  
**Estado:** ✅ Operativo — Fase 1 Completada  

---

## 📋 Índice

1. [Resumen Ejecutivo](#1-resumen-ejecutivo)
2. [¿Qué es lo que hemos construido?](#2-qué-es-lo-que-hemos-construido)
3. [Arquitectura RAG — El Corazón del Sistema](#3-arquitectura-rag--el-corazón-del-sistema)
4. [Stack Tecnológico Completo](#4-stack-tecnológico-completo)
5. [Flujo de Datos: De la Pregunta al WhatsApp](#5-flujo-de-datos-de-la-pregunta-al-whatsapp)
6. [Componentes del Sistema (Detalle Técnico)](#6-componentes-del-sistema-detalle-técnico)
7. [Comparativa: Antes vs. Después (Python Directo vs. n8n)](#7-comparativa-antes-vs-después-python-directo-vs-n8n)
8. [Seguridad Implementada](#8-seguridad-implementada)
9. [Limitaciones Actuales y Hoja de Ruta](#9-limitaciones-actuales-y-hoja-de-ruta)
10. [Glosario Técnico](#10-glosario-técnico)

---

## 1. Resumen Ejecutivo

### Para el lector no técnico:
Hemos creado un **asistente virtual inteligente** que vive dentro de la página web de Syrtix. Cuando un visitante hace una pregunta, el asistente:
1. **Busca** información real de la empresa (no inventa).
2. **Redacta** una respuesta profesional y personalizada.
3. **Avisa al dueño** por WhatsApp en tiempo real con los datos del potencial cliente.

Todo esto ocurre en **menos de 3 segundos**, las 24 horas del día, los 7 días de la semana.

### Para el lector técnico:
Se ha implementado un pipeline **RAG (Retrieval-Augmented Generation)** orquestado por **n8n** como middleware de eventos. El sistema utiliza **LangChain** como framework de orquestación de LLM, **Groq (LLaMA 3.1 8B)** como modelo de inferencia, **HuggingFace Inference API** para la generación de embeddings semánticos, y la **WhatsApp Business Cloud API** como canal de notificación push. La arquitectura sigue el patrón **Event-Driven Microservices** con un **Vector Store local** basado en similitud de coseno.

---

## 2. ¿Qué es lo que hemos construido?

### El Problema (Antes):
- La web de Syrtix era **estática**. Un visitante llegaba, leía, y si no encontraba lo que buscaba, se iba.
- No había forma de **capturar** a ese visitante en tiempo real.
- Los formularios de contacto (Web3Forms) eran pasivos: el lead llegaba a un correo que podía pasar horas sin ser leído.

### La Solución (Después):
- Un **chatbot inteligente** que responde preguntas sobre los servicios de Syrtix con información real y precisa.
- Una **alerta instantánea por WhatsApp** cada vez que alguien interactúa, para que el equipo de ventas actúe en caliente.
- Un **orquestador visual (n8n)** que conecta todos los servicios sin necesidad de programar nueva lógica para cada integración futura.

### En términos de negocio:
> *"Cada visitante que hace una pregunta es un lead calificado. Antes lo perdíamos. Ahora lo capturamos, lo atendemos con IA y lo derivamos a ventas en menos de 3 segundos."*

---

## 3. Arquitectura RAG — El Corazón del Sistema

### ¿Qué significa RAG?

**RAG** son las siglas de **Retrieval-Augmented Generation** (Generación Aumentada por Recuperación). Es el patrón de diseño más avanzado y seguro para chatbots empresariales. Se compone de tres fases:

| Fase | Nombre Técnico | ¿Qué hace? (Explicación Simple) | ¿Qué hace? (Explicación Técnica) |
| :---: | :--- | :--- | :--- |
| **R** | **Retrieval** (Recuperación) | Busca en la "memoria" de Syrtix los datos que más se parecen a la pregunta del usuario. | Se genera un **embedding** (vector numérico de 768 dimensiones) de la pregunta del usuario usando el modelo `all-mpnet-base-v2`. Luego, se ejecuta una búsqueda por **similitud de coseno** contra el `vectorstore.json` para recuperar los **Top-K=4** fragmentos más relevantes. |
| **A** | **Augmented** (Aumentada) | Le pasa esos datos encontrados a la IA junto con la pregunta, para que no invente. | Los fragmentos recuperados se inyectan en el **System Prompt** como `CONTEXTO RECUPERADO DE SYRTIX`, junto con las **Reglas de Oro** del agente (brevedad, enlaces estratégicos, detección de intención de compra). |
| **G** | **Generation** (Generación) | La IA redacta una respuesta final que suena humana, profesional y basada en hechos reales. | El LLM **LLaMA 3.1 8B** (vía Groq API, `temperature: 0.1`) procesa el prompt completo (System + History + Human) y genera la respuesta. Un post-procesador detecta **intención de compra** con regex y añade CTAs (Call-to-Action) si corresponde. |

### ¿Por qué RAG y no un chatbot normal?

| Chatbot Tradicional (Reglas/FAQ) | Chatbot con IA sin RAG | Chatbot con RAG (Syrtix) |
| :--- | :--- | :--- |
| Solo responde a preguntas exactas que fueron programadas. | Puede "inventar" información (alucinaciones). | Responde con datos reales de la empresa, verificados. |
| Si la pregunta es diferente, falla. | Creativo, pero impredecible y peligroso. | Creativo Y preciso. Lo mejor de ambos mundos. |
| Requiere actualización manual constante. | No tiene acceso a datos específicos de la empresa. | Se actualiza ejecutando `npm run ia:ingest` con nueva información. |

---

## 4. Stack Tecnológico Completo

### Diagrama de Arquitectura:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        USUARIO (Navegador Web)                       │
│                     Escribe: "¿Cuánto cuesta una web?"               │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ POST /webhook-test/syrtix-leads
                               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                        n8n ORCHESTRATOR                               │
│                     (http://localhost:5678)                            │
│                                                                       │
│  ┌─────────┐   ┌──────────────────┐   ┌──────────┐   ┌────────────┐ │
│  │ Webhook │──▶│ Syrtix AI Engine │──▶│ LeadData │──▶│  WhatsApp  │ │
│  │ (Entry) │   │  POST :3001/api  │   │ (Mapper) │   │  Business  │ │
│  └─────────┘   └──────────────────┘   └──────────┘   └────────────┘ │
│       │                                                    │         │
│       │              ┌──────────────────────┐              │         │
│       └──────────────│  Respond to Webhook  │◀─────────────┘         │
│                      │  (Devuelve la resp.) │                        │
│                      └──────────────────────┘                        │
└──────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────────────┐
│                    SYRTIX AI ENGINE (Node.js/Express)                  │
│                      (http://localhost:3001)                           │
│                                                                       │
│  ┌────────────┐   ┌───────────────┐   ┌──────────────────────────┐  │
│  │ Helmet +   │──▶│  SyrtixAgent  │──▶│    Groq API (LLaMA 3.1) │  │
│  │ Rate Limit │   │  (rag-core)   │   │    HuggingFace Embeddings│  │
│  └────────────┘   └───────┬───────┘   └──────────────────────────┘  │
│                           │                                          │
│                   ┌───────▼───────┐                                  │
│                   │ SyrtixStore   │                                  │
│                   │ (Vector Store)│                                  │
│                   │ Cosine Search │                                  │
│                   └───────────────┘                                  │
└──────────────────────────────────────────────────────────────────────┘
```

### Tabla de Componentes:

| Componente | Tecnología | Versión | Función |
| :--- | :--- | :--- | :--- |
| **Frontend** | React + Vite | React 18.3.1 / Vite 8.0.8 | Interfaz de usuario, chatbot widget |
| **Orquestador** | n8n (Self-Hosted) | 2.14.2 | Middleware de eventos, conecta IA con WhatsApp |
| **IA Engine** | Node.js + Express | Express 5.2.1 | Servidor HTTP protegido que ejecuta el pipeline RAG |
| **Framework LLM** | LangChain | 1.3.1 | Orquestación de prompts, historial y mensajes |
| **Modelo LLM** | Groq (LLaMA 3.1 8B Instant) | Cloud API | Generación de respuestas en lenguaje natural |
| **Embeddings** | HuggingFace (`all-mpnet-base-v2`) | Cloud API | Conversión de texto a vectores numéricos (768 dim.) |
| **Vector Store** | SyrtixStore (Custom) | Propia | Almacenamiento y búsqueda por similitud de coseno |
| **Base de Datos** | PocketBase | 0.26.8 | Gestión de datos de la web (portfolio, artistas, FAQs) |
| **Notificaciones** | WhatsApp Business Cloud API | v25.0 | Alertas push de leads al móvil del administrador |
| **Seguridad** | Helmet + Rate Limiter + Bearer Token | — | Protección contra XSS, DoS y accesos no autorizados |

---

## 5. Flujo de Datos: De la Pregunta al WhatsApp

### Paso a paso (Explicación Simple):

1. 🧑 **El usuario** abre el chat en syrtix.com y escribe: *"¿Hacen integraciones con IA?"*
2. 📡 **El frontend** envía la pregunta al orquestador n8n.
3. 🧠 **n8n** reenvía la pregunta al Motor de IA (Syrtix AI Engine).
4. 🔎 **El Motor de IA** busca en su base de conocimientos los fragmentos más relevantes sobre IA e integraciones. *(Esto es la "R" de RAG: Retrieval).*
5. ✍️ **El Motor de IA** le pasa esos fragmentos + la pregunta al modelo LLaMA 3.1, que redacta una respuesta profesional. *(Esto es la "A" y la "G" de RAG: Augmented Generation).*
6. 📤 **n8n recibe la respuesta** y hace dos cosas simultáneamente:
   - **A)** Envía una notificación a **WhatsApp** con los datos del lead (pregunta + respuesta de la IA).
   - **B)** Devuelve la respuesta al **chatbot de la web** para que el usuario la vea al instante.
7. 📲 **El administrador** recibe en su móvil: *"🚀 NUEVO LEAD SYRTIX — Pregunta: ¿Hacen integraciones con IA? — IA: Sí, en Syrtix ofrecemos..."*

### Paso a paso (Detalle Técnico):

| # | Componente | Acción | Endpoint / Protocolo |
| :---: | :--- | :--- | :--- |
| 1 | `AIChatbot.jsx` | `POST` con `{ source, pregunta, history }` | `VITE_N8N_WEBHOOK_URL` |
| 2 | n8n Webhook Node | Recibe el payload y lo pasa al siguiente nodo | `POST /webhook-test/syrtix-leads` |
| 3 | n8n HTTP Request Node | Reenvía `{ question: pregunta }` con `Bearer Token` | `POST http://localhost:3001/api/ia/chat` |
| 4 | `SyrtixAgent.ask()` | Genera embedding → Búsqueda coseno Top-K=4 → Construye prompt → Invoca LLM | Internal method |
| 5 | n8n LeadData Node | Mapea `pregunta` (del Webhook) y `respuesta` (de la IA) | Manual Mapping |
| 6 | n8n WhatsApp Node | Envía mensaje de texto con datos del lead | `POST graph.facebook.com/v25.0/{phone_id}/messages` |
| 7 | n8n Respond to Webhook | Devuelve `{ answer }` al frontend usando `JSON.stringify` | HTTP Response |

---

## 6. Componentes del Sistema (Detalle Técnico)

### 6.1 — SyrtixAgent (Clase Singleton — `rag-core.js`)

Es el **cerebro** del sistema. Implementa el patrón **Singleton** para que solo exista una instancia del agente en memoria.

**Características:**
- **Modelo LLM:** `ChatGroq` con `llama-3.1-8b-instant` y `temperature: 0.1` (respuestas predecibles y profesionales, con mínima aleatoriedad).
- **Embeddings:** `HuggingFaceInferenceEmbeddings` con el modelo `sentence-transformers/all-mpnet-base-v2` (768 dimensiones).
- **System Prompt:** Contiene las "Reglas de Oro" del agente comercial: brevedad (máx. 3 frases), datos de contacto y enlaces estratégicos.
- **Post-procesador de Intención de Compra:** Un filtro regex que detecta keywords como "cotizar", "precio", "contratar" y añade automáticamente CTAs (botones de WhatsApp y formulario) si la IA no los incluyó.

### 6.2 — SyrtixStore (Vector Store Custom — `syrtix-store.js`)

Es la **memoria** del sistema. Un almacén vectorial construido desde cero en JavaScript puro, sin dependencias externas como Pinecone o ChromaDB.

**¿Por qué custom y no una DB vectorial de terceros?**
> Para el volumen actual de datos de Syrtix (pocos archivos Markdown), una base de datos vectorial en la nube sería como usar un cañón para matar una mosca. `SyrtixStore` es más rápido, gratuito, y demuestra dominio total sobre la lógica de búsqueda semántica.

**Características:**
- **Almacenamiento:** Array de objetos `{ vector: Float64[], content: string, metadata: {} }`.
- **Persistencia:** Serialización a `vectorstore.json` vía `fs.writeFileSync`.
- **Búsqueda:** Implementación manual de **Similitud de Coseno** (`cosineSimilarity`).
- **Rendimiento:** O(n) lineal. Suficiente para cientos de fragmentos. Para miles, se migraría a una DB vectorial.

### 6.3 — Pipeline de Ingesta (`ingest-data.js`)

Es el **alimentador** del sistema. Toma los archivos Markdown de la carpeta `data/conocimiento/`, los fragmenta y los convierte en vectores.

**Proceso:**
1. Lee todos los archivos `.md` del directorio `data/conocimiento/`.
2. Los fragmenta con `RecursiveCharacterTextSplitter` (chunks de 1000 caracteres con 200 de overlap).
3. Genera embeddings para cada fragmento vía HuggingFace API.
4. Guarda el resultado en `vectorstore.json`.

**Comando:** `npm run ia:ingest`

### 6.4 — Servidor Express (`server.js`)

Es la **puerta de entrada** al motor de IA. Un servidor HTTP protegido con múltiples capas de seguridad.

**Endpoints:**
- `POST /api/ia/chat` — Endpoint principal de chat (requiere Bearer Token).
- `GET /health` — Health check para monitoreo.

### 6.5 — Chatbot Frontend (`AIChatbot.jsx`)

Es la **interfaz** del usuario. Un componente React flotante con diseño premium.

**Características:**
- Auto-scroll al último mensaje.
- Parsing de enlaces Markdown `[texto](url)` en el texto de la IA.
- Indicador de "Escribiendo..." durante la carga.
- Envío del historial completo de conversación para mantener contexto.

---

## 7. Comparativa: Antes vs. Después (Python Directo vs. n8n)

| Dimensión | Antes (Script Python / JS Directo) | Después (n8n Orchestrator) |
| :--- | :--- | :--- |
| **Añadir WhatsApp** | Escribir código, instalar SDK, manejar errores, deploy. | Arrastrar un nodo de WhatsApp y conectarlo. |
| **Añadir Google Sheets** | Integrar API de Google, OAuth2, scopes, código custom. | Arrastrar un nodo de Google Sheets. |
| **Añadir CRM (HubSpot)** | SDK, webhooks, mapping manual, testing. | Un nodo más en el flujo. |
| **Debugging** | `console.log`, leer logs del servidor, rezar. | Dashboard visual: ves cada ejecución, cada dato, cada error con un clic. |
| **Tokens Expirados** | El sistema falla silenciosamente. Nadie se entera. | n8n muestra el error en rojo y puedes actualizar la credencial en 10 segundos. |
| **Escalar a 10 canales** | Semanas de desarrollo. | Horas de configuración visual. |
| **Costo de Mantenimiento** | Alto (requiere desarrollador). | Bajo (un PM o un perfil no-técnico puede operar n8n). |

### La Metáfora:
> Antes teníamos una **tubería rígida** de hierro: si querías añadir una salida, tenías que soldar. Ahora tenemos un **sistema modular** de mangueras con conectores rápidos: conectas, desconectas y reconfigurar en minutos.

---

## 8. Seguridad Implementada

| Capa | Tecnología | Protección |
| :--- | :--- | :--- |
| **HTTP Headers** | Helmet.js | Previene XSS, clickjacking, MIME sniffing y otras vulnerabilidades web comunes. |
| **Rate Limiting** | express-rate-limit | Máximo 100 peticiones por IP cada 15 minutos. Protege contra ataques DoS (Denegación de Servicio). |
| **Autenticación** | Bearer Token (`SYRTIX_SECRET`) | Solo n8n (con el token correcto) puede hablar con el motor de IA. Cualquier otra petición es rechazada con 401. |
| **CORS** | cors middleware | Controla qué dominios pueden hacer peticiones al servidor (actualmente abierto para desarrollo). |
| **Variables de Entorno** | `.env` + `dotenv` | Las API keys nunca están hardcodeadas en el código fuente. |

---

## 9. Limitaciones Actuales y Hoja de Ruta

### Limitaciones Conocidas:

| # | Limitación | Impacto | Solución Planificada |
| :---: | :--- | :--- | :--- |
| 1 | **Token de WhatsApp temporal** | Caduca cada 24h. Hay que regenerarlo manualmente en Meta. | Generar un **System User Token permanente** en el Business Manager de Meta. |
| 2 | **Número de WhatsApp en Sandbox** | Solo puede enviar a números autorizados previamente. | Solicitar verificación de la cuenta de WhatsApp Business para enviar a cualquier número. |
| 3 | **Vector Store en archivo JSON** | No escala a millones de documentos. | Migrar a **Pinecone**, **ChromaDB** o **Supabase pgvector** cuando la base de conocimientos supere los 500 documentos. |
| 4 | **n8n en modo desarrollo** | El webhook usa `/webhook-test/` (solo funciona con el workflow activo manualmente). | Publicar el workflow y usar `/webhook/` (producción). |
| 5 | **CORS abierto (`*`)** | Cualquier dominio puede llamar al API de IA. | Restringir a `syrtix.com` y el dominio de n8n en producción. |

### Hoja de Ruta (Próximas Fases):

| Fase | Descripción | Prioridad |
| :---: | :--- | :---: |
| **2** | Token permanente de Meta + Verificación de WhatsApp Business. | 🔴 Alta |
| **3** | Persistencia de conversaciones en PocketBase (historial de leads). | 🟡 Media |
| **4** | Integración con Google Sheets (registro automático de leads en planilla). | 🟡 Media |
| **5** | Deploy a producción: n8n en Docker (Coolify), webhook productivo. | 🔴 Alta |
| **6** | Base de datos vectorial (Pinecone/Supabase) para clientes con volumen alto de datos. | 🟢 Baja (futuro) |

---

## 10. Glosario Técnico

| Término | Definición Simple | Definición Técnica |
| :--- | :--- | :--- |
| **RAG** | Un sistema que busca datos reales antes de responder, en lugar de inventar. | Retrieval-Augmented Generation: patrón arquitectónico que combina búsqueda semántica con generación de texto por LLM. |
| **Embedding** | Convertir una frase en una lista de números para que la computadora pueda "entenderla". | Representación vectorial densa de un texto en un espacio de N dimensiones (768 en nuestro caso). |
| **Vector Store** | Una memoria especial que guarda textos como listas de números para buscar por "parecido". | Base de datos optimizada para almacenar y consultar vectores mediante métricas de distancia (coseno, euclidiana, etc.). |
| **Similitud de Coseno** | Una forma matemática de medir cuánto se parecen dos textos (de 0 a 1). | Métrica que calcula el coseno del ángulo entre dos vectores: `cos(θ) = (A·B) / (‖A‖ × ‖B‖)`. |
| **LLM** | Un programa de IA que sabe hablar y escribir como un humano. | Large Language Model: modelo de deep learning entrenado en billones de tokens para generar texto coherente. |
| **Groq** | El "motor" ultra-rápido que ejecuta la IA de Syrtix. | Plataforma de inferencia de LLMs basada en chips LPU (Language Processing Unit) con latencia ~100ms. |
| **LangChain** | El "framework" que organiza cómo la IA piensa y responde. | Biblioteca para construir aplicaciones con LLMs: gestión de prompts, chains, memoria y herramientas. |
| **n8n** | Un panel de control visual que conecta servicios como piezas de LEGO. | Plataforma open-source de automatización basada en nodos para orquestación de workflows event-driven. |
| **Webhook** | Una "dirección" donde la web envía datos cuando pasa algo. | Endpoint HTTP que recibe datos en tiempo real mediante callbacks (push) en lugar de polling (pull). |
| **Singleton** | Una regla que dice "solo puede existir uno de mí en todo el sistema". | Patrón de diseño creacional que garantiza una única instancia de una clase con punto de acceso global. |
| **Bearer Token** | Una contraseña especial que solo tienen los servicios autorizados. | Esquema de autenticación HTTP donde el token se envía en el header `Authorization: Bearer <token>`. |
| **System Prompt** | Las "instrucciones secretas" que le damos a la IA para que se comporte de cierta manera. | Mensaje de sistema que define el rol, restricciones y comportamiento del LLM antes de recibir la pregunta del usuario. |
| **Temperature** | Un control que decide si la IA es "creativa" (alta) o "precisa" (baja). | Parámetro de sampling que controla la aleatoriedad de la distribución de probabilidad de tokens. 0.0 = determinista, 1.0 = máxima aleatoriedad. |
| **CTA** | Un botón o enlace que dice "haz esto ahora" (ej: "Comprar", "Contactar"). | Call-to-Action: elemento de interfaz diseñado para provocar una acción inmediata del usuario. |
| **DoS** | Un ataque que intenta "tumbar" un servicio enviándole millones de peticiones. | Denial of Service: ataque que busca saturar los recursos de un servidor para hacerlo inaccesible. |

---

## 📌 Comandos para Operar el Sistema

```bash
# 1. Iniciar el Frontend (web)
pnpm run dev

# 2. Iniciar el Motor de IA
npm run ia:server

# 3. Iniciar el Orquestador n8n
n8n start

# 4. Re-indexar la Base de Conocimientos (cuando se añadan nuevos documentos)
npm run ia:ingest
```

> **⚠️ Los tres primeros servicios deben estar activos simultáneamente para que el sistema funcione.**

---

**Syrtix Digital Engineering**  
*Construyendo el futuro de la interacción digital.*  
*© 2026 — Todos los derechos reservados.*
