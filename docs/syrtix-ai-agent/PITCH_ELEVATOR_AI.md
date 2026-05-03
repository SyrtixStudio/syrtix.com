# 🚀 Proyecto Destacado para CV / LinkedIn

Este es el bloque estructurado que debes copiar e insertar en tu Currículum, LinkedIn, o usar como guion en una entrevista para perfiles Senior o Tech Lead.

---

### **AI & RAG Engineer | Arquitecto de IA Conversacional y Automatización B2B**
*(Rol / Proyecto: Motor de IA Soberano - Syrtix Studio)*

**La Visión:**
Diseñé, desarrollé y desplegué un Motor RAG (Retrieval-Augmented Generation) de extremo a extremo para transformar a Llama-3.1 de un modelo generalista a un experto corporativo estricto. Logré cero alucinaciones en cotizaciones e información crítica de la empresa con una arquitectura de ultra-baja latencia y un costo operativo estructural de $0.

**Logros Arquitectónicos y Técnicos:**
*   **Motor Vectorial Custom (Vanilla JS):** Ante las severas incompatibilidades de librerías C++ (`hnswlib-node`) en entornos host, abstraí y desarrollé una base de datos vectorial *in-memory* basada en similitud de coseno algebraico, erradicando fallas de compilación cruzada y permitiendo ejecución instantánea en cualquier runtime de Node.js.
*   **Inferencia LPU & Mitigation RAG:** Implementé el motor sobre la infraestructura de Groq Cloud (LPUs), llevando el Time-To-First-Token a milisegundos. Apliqué un filtro de contexto *Top-K* y chunking semántico iterativo (`all-mpnet-base-v2`) para mitigar bloqueos de atención tipo *"Lost in the Middle"*.
*   **Orquestación Cloud de Alta Disponibilidad (DevOps):** Desplegué el motor como microservicio independiente conteinerizado (Docker) vía entorno Coolify PaaS. Configuré un Proxy Edge en Cloudflare para comunicación y terminación SSL estricta in-browser hacia el Frontend (React/Vite).
*   **Ciberseguridad y Blindaje de API:** Sistematicé defensas anti-spam y antirobo de tokens inyectando middlewares criptográficos de validación Bearer Token, forzando a la API Express a repeler peticiones huérfanas o intentos de sobrecarga.
*   **Automatización de Workflows (n8n) y Fall-Safes UI:** Arquitectura diseñada con interfaces expuestas para orquestarse nativamente como nodo inteligente en **n8n**, automatizando el push de Leads a CRMs o bases de datos (PocketBase) en tiempo real (ej. Alertas a WhatsApp). A nivel lógico, incluí escudos léxicos (*Regex Fall-Safes*) en el UI que inyectan formularios dinámicamente forzando la recolección del lead ante censuras internas del LLM interactuando con el usuario.

---

**El impacto en 1 línea (Para el extracto inicial del CV):**
> *"Especializado en Arquitectura RAG, automatización de flujos con n8n y despliegue nativo DevOps, creando inteligencias artificiales corporativas privadas y soberanas orientadas a la captación y cualificación transaccional (B2B/B2C)."*
