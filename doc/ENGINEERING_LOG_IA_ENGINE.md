# 🚀 Despliegue Exitoso: Syrtix AI Engine en Producción
**Fecha:** 2026-04-16
**Autor:** Syrtix AI Assistant (Antigravity) & Francisco

Este documento detalla los problemas encontrados y las soluciones implementadas durante la finalización de la **Fase 3** del ecosistema de IA de Syrtix Studio.

---

## 1. El Desafío de Autenticación (Error 404) 🛡️
- **Problema:** El servidor de IA no podía conectarse a PocketBase, devolviendo un error `404 Not Found` al intentar autenticarse como administrador.
- **Causa Raíz:** Incompatibilidad de versiones. El servidor PocketBase corre la versión `0.17.7`, pero el código original intentaba usar el SDK `v0.26.x`, cuyas rutas de API de administración son diferentes.
- **Solución:** Se realizó un *downgrade* del SDK de PocketBase en `package.json` a la versión `0.17.0`. Esto restauró la compatibilidad total con la base de datos `syrtix-db`.

## 2. La Trampa del Localhost y Bypass de n8n 🌐
- **Problema:** El chatbot funcionaba en desarrollo (`localhost`) pero fallaba en producción con el mensaje: *"Lo siento, mi conexión con el cuartel general está fallando"*.
- **Causa Raíz:** El componente Frontend (`AIChatbot.jsx`) estaba configurado para enviar webhooks a `localhost:5678` (n8n local). Las personas externas no podían acceder a esa ruta privada.
- **Solución (Arquitectura Pathway 1):** 
    - Se rediseñó el flujo para conectar el Frontend **directamente** al Motor de IA en la nube (`https://ia.syrtix.com`).
    - Esto hizo al bot independiente del PC de Francisco, reduciendo la latencia y mejorando la disponibilidad.

## 3. Blindaje de Seguridad Industrial 🔐
- **Problema:** Riesgo de acceso no autorizado y consumo de tokens por terceros.
- **Solución:** 
    - Se implementó un secreto de alta entropía de 32 bits.
    - Se añadió un Middleware de autenticación en `server.js` que exige una cabecera `Authorization: Bearer <TOKEN>`.
    - Se configuraron los Secrets en Coolify para manejar estas claves de forma segura fuera del código.

## 4. El Conflicto de "Additional Kwargs" (Mapping) 🧠
- **Problema:** Al conectar la web directamente, el bot devolvía: `Cannot read properties of undefined (reading 'additional_kwargs')`.
- **Causa Raíz:** El formato de los mensajes del historial cambió de `text` a `content` al pasar del formato de n8n al formato nativo de la web.
- **Solución:** Se implementó una lógica de mapeo elástica en `rag-core.js` que detecta dinámicamente el campo de contenido:
  ```javascript
  const messageText = h.text || h.content || "";
  ```

## 5. Configuración en Coolify 🐳
- **Problema:** El servidor respondía errores 500 o no cargaba el conocimiento.
- **Causa Raíz:** La ruta del `Dockerfile` en Coolify apuntaba a `/Dockerfile.backend` (inexistente) en lugar de `ia-engine/Dockerfile`.
- **Solución:** Se corrigió la ruta del Dockerfile en la configuración general de Coolify y se forzó un redeploy masivo.

---

### 🛠️ Stack de Resiliencia Utilizado:
1.  **Coolify Native Docker:** Orquestación y despliegue.
2.  **PocketBase (v0.17.0):** Persistencia de interacciones (ia_leads).
3.  **LangChain + ChatGroq:** Cerebro RAG ultra-rápido.
4.  **Helmet + Express-Rate-Limit:** Capas de seguridad y anti-spam.

**Estado del Proyecto:** PRODUCCIÓN - OPERATIVO (HEALTHY) ✅
