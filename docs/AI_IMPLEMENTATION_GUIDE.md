# Guía de Implementación del Motor de IA "Syrtix RAG" para Nuevos Proyectos

Este documento es una guía paso a paso diseñada para que una Inteligencia Artificial pueda replicar e implementar el chatbot RAG (Retrieval-Augmented Generation) de Syrtix en cualquier otro proyecto web (React/Vite).

## Requisitos Previos (Para la nueva IA)
Antes de iniciar, debes asegurarte de que el proyecto de destino cuente con:
1.  **Frontend**: Preferiblemente React con Vite.
2.  **API Keys**:
    *   `GROQ_API_KEY`: Para el modelo Llama 3.1.
    *   `HF_API_KEY`: Token de Hugging Face para embeddings (`sentence-transformers/all-mpnet-base-v2`).
3.  **Archivos Base**: Esta guía asume que se exportarán los archivos del directorio `ia-engine/` de Syrtix y los componentes de UI (`AIChatbot.jsx`, `AIChatbot.css`).

---

## Fase 1: Adaptación de la Data (Ingesta de Conocimiento)
El nuevo proyecto tendrá sus propios servicios, precios e información de contacto.

1.  **Modificar Archivos Markdown**: Ve a la carpeta `ia-engine/data/conocimiento/` y edita o crea nuevos archivos `.md` con la información de la nueva empresa.
    *   *Importante*: Asegúrate de que los precios, características y datos de contacto estén escritos de forma explícita y estructurada (idealmente listas o tablas) para que los embeddings capturen bien la intención.
2.  **Ejecutar Ingesta**: Una vez adaptada la información, ejecuta el script de ingesta para convertir el texto en vectores matemáticos.
    ```bash
    node ia-engine/ingest.js
    ```
    *   Esto generará un archivo `vectorstore.json` que actuará como la "memoria" del bot.

---

## Fase 2: Personalización del Cerebro (RAG Core)
El archivo principal que controla la personalidad y el proceso de ventas es `ia-engine/rag-core.js`.

1.  **Ajustar el System Prompt**: Modifica la variable `systemPrompt` para adaptarla a la voz de la nueva marca.
    *   Cambiar el nombre del agente.
    *   Cambiar el tono (ej. más corporativo, más informal).
    *   **Crucial**: Actualizar las *Reglas de Oro* con los nuevos números de teléfono y correos electrónicos.
2.  **Adaptar el Fail-Safe de Conversión**: Revisa las expresiones regulares de `purchaseIntent` y los enlaces forzados al final de la función para inyectar los botones de contacto (WhatsApp/Formulario) específicos del nuevo negocio.

---

## Fase 3: Variables de Entorno y Seguridad backend
1.  **Configurar `.env` backend**:
    ```env
    GROQ_API_KEY=tu_api_key_aqui
    HF_API_KEY=tu_token_aqui
    SYRTIX_SECRET=tu_secreto_elegido_para_api
    PORT=3001 # O el puerto deseado
    ```
2.  **CORS**: En `ia-engine/server.js`, asegúrate de que los orígenes permitidos en CORS coincidan con los dominios del nuevo proyecto (ej. `http://localhost:5173`, `https://nuevodominio.com`).
3.  **Middleware de Seguridad**: El servidor utiliza validación de un "Bearer Token" (`SYRTIX_SECRET`). Asegúrate de que tanto el backend como el frontend tengan la misma clave.

---

## Fase 4: Integración en el Frontend (React)
1.  **Variables `.env` Frontend**:
    ```env
    VITE_API_URL=http://localhost:3001 # Cambiar por la URL de producción después
    VITE_SYRTIX_SECRET=tu_secreto_elegido_para_api 
    ```
2.  **Importar Componentes**: Copia `AIChatbot.jsx` y `AIChatbot.css` a la carpeta de componentes del nuevo proyecto.
3.  **Inyectar en la App**: Importa el chatbot en `App.jsx` (o equivalente) para que esté globalmente disponible:
    ```javascript
    import AIChatbot from './components/AIChatbot';
    
    // Dentro del return:
    <AIChatbot />
    ```
4.  **Ajustes CSS**: Revisa `AIChatbot.css` para adaptar los colores primarios (`--primary-color`), hover states y tipografías a la identidad visual de la nueva marca.

---

## Fase 5: Estrategia de Despliegue en Producción (Docker + Coolify/Cloudflare)
1.  **Dockerfile**: Usa el `Dockerfile.backend` provisto (o crea uno similar) que ejecute `pnpm run ia:server`.
2.  **Despliegue Independiente**: Despliega el directorio `ia-engine` como un microservicio (Web Service) separado del frontend.
3.  **Red y SSL**:
    *   Crea un subdominio (ej. `api-bot.nuevodominio.com`) apuntando al servidor de backend.
    *   **CRÍTICO**: Activa el proxy inverso (ej. Nube Naranja en Cloudflare) para asegurar la provisión de un certificado SSL. El frontend (`https`) bloqueará conexiones al backend si no tiene un certificado válido (`ERR_CERT_AUTHORITY_INVALID`).
4.  **Actualizar Frontend**: Una vez desplegado el backend, cambia `VITE_API_URL` en el frontend a la nueva URL pública (`https://api-bot.nuevodominio.com`) y fuerza un nuevo despliegue (*Force Redeploy*).

---
*Con esto, cualquier agente de IA o desarrollador podrá replicar el éxito de este motor conversacional en pocas horas.*
