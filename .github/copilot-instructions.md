# Instrucciones para Copilot / Agentes — Syrtix

Propósito
-------
Documento mínimo para que un agente (Copilot/AGENT) sea productivo en este repositorio: comandos esenciales, variables de entorno críticas, archivos clave y checklist para PRs. Sigue la regla: "linkea, no embebas" — apunta a documentación existente en `doc/`, `docs/` y `design-system/`.

Quick start (local)
-------------------
- Instalar dependencias: `pnpm install`
- Frontend (dev): `pnpm dev` (Vite)
- Build frontend: `pnpm build`
- Preview build: `pnpm preview`
- IA - regenerar embeddings: `pnpm run ia:ingest`
- IA - servidor RAG local: `pnpm run ia:server`
- Lint / format: `pnpm run lint` / `pnpm run format`

Variables de entorno mínimas
---------------------------
Estas variables son obligatorias para ejecutar `ia-engine` y para builds reproducibles. No cometas secretos en el repo; añade un `.env.example`.

- `GROQ_API_KEY` — API key para Groq / embeddings
- `HF_API_KEY` — HuggingFace API key
- `OPENAI_API_KEY` — (si aplica) OpenAI key
- `SYRTIX_SECRET` — secreto interno
- `VITE_POCKETBASE_URL` — URL de PocketBase
- `VITE_N8N_WEBHOOK_URL` — webhook para integraciones de chatbot

Run / Build en contenedores
--------------------------
- Frontend (ejemplo): `docker build -t syrtix-frontend .`
- Backend/IA (ejemplo): `docker build -f Dockerfile.backend -t syrtix-ia .`
- Nota: los Dockerfile esperan que pases `VITE_` build-args o que estén disponibles en tiempo de build.

Archivos y lugares importantes (resumen)
--------------------------------------
- `package.json` — scripts y comandos principales
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` — configuración frontend
- `ia-engine/` — código RAG, ingest y server (`ia-engine/ingest-data.js`, `ia-engine/server.js`)
- `design-system/syrtix/MASTER.md` — tokens / guía de UI
- `.agent/` — skills y workflows ya presentes (ver `.agent/skills/`)
- `Dockerfile`, `Dockerfile.backend` — recipies de build

Convenciones y patrones clave
----------------------------
- UI: React + Vite + Tailwind; estructura por `components/`, `sections/`, `pages/`.
- i18n en `src/i18n/` con `translations.js`.
- PocketBase cliente en `src/lib/pocketbase.js`.
- RAG local usa `vectorstore.json` para almacenar embeddings.

Riesgos y puntos de fricción (rápido)
-----------------------------------
- Variables secretas en `.env` — migrar a vault/secret manager.
- `ia-engine` no arrancará sin `GROQ_API_KEY` y `HF_API_KEY`.
- No hay scripts de test ni CI definidos; añadir `pnpm test` y workflows.
- Dependencia de servicios externos (PocketBase, N8N) para flujo completo.

Checklist mínimo para PRs
------------------------
- Ejecutar `pnpm run lint` y `pnpm run format` antes de abrir PR.
- Documentar cambios arquitectónicos en `doc/` o `docs/`.
- Si se modifica ingest/RAG, incluir nota sobre impact en `vectorstore.json`.

Secciones sugeridas para este archivo (si se expande)
---------------------------------------------------
1. Quick start detallado (comandos exactos y ejemplos). 
2. `.env.example` y guía de secretos.
3. Instrucciones de ingest y troubleshooting (ia-engine).
4. Build & deploy con Docker (ejemplos concretos).
5. Playbooks para problemas comunes (fallo de embed, LLM timeouts).

Prompts de ejemplo para usar con el agente
-----------------------------------------
- "¿Cómo arranco el entorno de desarrollo local paso a paso?"
- "Resume la arquitectura y los comandos para regenerar embeddings en ia-engine."
- "Genera un checklist para revisar un PR que modifica `ia-engine/ingest-data.js`."

Propuestas de personalizaciones (siguientes artefactos)
----------------------------------------------------
- `create-instruction: ia-ingest` — instrucción paso a paso para regenerar embeddings.
- `create-agent: dev-runner` — agente que arranca frontend + ia-server y verifica env.
- `create-prompt: pr-check` — prompt que ejecuta el checklist de PRs y resumen de cambios.
- `create-skill: env-validator` — skill que valida presencia y formato de variables de entorno.

Notas finales
-----------
Si quieres, genero ahora un `.env.example`, un `README.dev.md` con pasos de inicio rápido, y una sección `AGENTS.md` con instrucciones para cada skill en `.agent/skills/`. Indica qué prefieres crear primero.
