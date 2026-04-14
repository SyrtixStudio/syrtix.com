---
name: syrtix-context7-docs
description: Protocolo de consulta de documentación fresca vía Context7 MCP. Define cuándo, cómo y bajo qué condiciones los agentes deben consultar documentación actualizada de librerías.
---

# 📚 Syrtix Context7 Documentation Protocol

Context7 es un servidor MCP (Model Context Protocol) de Upstash que proporciona **documentación actualizada y versionada** directamente desde los repositorios fuente de las librerías. Está instalado como MCP server en el ecosistema Syrtix.

## 🎯 ¿Por Qué Existe Esta Skill?

El problema que resuelve:
- La IA tiene datos de entrenamiento con fechas de corte → sugiere APIs deprecadas
- Los frameworks cambian rápido (React 18→19, Next.js 14→15, GSAP 3→4) → el código sugerido puede no funcionar
- Los desarrolladores pierden tiempo debuggeando código que la IA generó con documentación vieja

**Context7 trae documentación FRESCA directamente del repo oficial** → APIs correctas, ejemplos actuales.

## 🔧 Configuración (Ya Instalado)

Context7 está configurado como MCP server en:
```
C:\Users\Francisco\.gemini\antigravity\mcp_config.json
```

Funciona con 2 herramientas MCP:
1. **`resolve-library-id`**: Busca el ID de una librería en el índice de Context7
2. **`query-docs`**: Trae documentación actualizada de una librería específica

## 📋 Protocolo de Uso (Reglas de Syrtix)

### ✅ CUÁNDO Consultar Context7

| Situación | ¿Consultar? | Ejemplo |
|---|---|---|
| Configurar un framework por primera vez | ✅ SÍ | "Configurar GSAP ScrollTrigger en React" |
| Usar una API que no has usado en 3+ meses | ✅ SÍ | "PocketBase auth con email/password" |
| Un import o función falla con "not found" | ✅ SÍ | La API puede haber cambiado de nombre |
| Integrar una librería nueva al proyecto | ✅ SÍ | "Añadir Lenis smooth scroll" |
| Verificar breaking changes de una actualización | ✅ SÍ | "¿Qué cambió en React Router v7?" |
| Escribir CSS básico o lógica de negocio simple | ❌ NO | No necesitas docs para un `if/else` |
| Código que ya conoces y funciona | ❌ NO | No desperdicies rate limits |
| Preguntas sobre tu propio código / proyecto | ❌ NO | Context7 solo tiene docs de librerías |

### 🔄 Flujo de Consulta Correcto

```
1. Necesito usar [librería X]
   └── ¿Estoy 100% seguro de la API actual? 
       ├── SÍ → Procede sin Context7
       └── NO → Consulta Context7:
           
2. Resolver el Library ID:
   └── resolve-library-id(libraryName: "gsap", query: "scroll animation")
   └── Resultado: /greensock/gsap → Este es el ID
   
3. Consultar documentación:
   └── query-docs(libraryId: "/greensock/gsap", query: "ScrollTrigger with React")
   └── Resultado: Documentación actualizada con ejemplos
   
4. Implementar con la documentación fresca
   └── Verificar que los imports, funciones y patrones coincidan con lo que Context7 devolvió
```

### 🚫 Anti-Patrones (NO Hacer)

1. **NO consultes Context7 para cada línea de código** — tiene rate limits
2. **NO ignores la respuesta de Context7** si contradice tu conocimiento previo — la docs fresca gana
3. **NO uses Context7 como sustituto de leer el código del proyecto** — Context7 es para docs de librerías externas, no para tu propio código
4. **NO consultes sin un query específico** — "dame toda la docs de React" es inútil; "React useTransition con Suspense" es útil

## 🏢 IDs de Librerías Frecuentes en Syrtix

Para agilizar consultas, estos son los IDs de las librerías que más usamos:

| Librería | Context7 Library ID | Cuándo Consultar |
|---|---|---|
| React | `/facebook/react` | Hooks avanzados, APIs nuevas |
| Next.js | `/vercel/next.js` | App Router, Server Components, middleware |
| GSAP | `/greensock/gsap` | ScrollTrigger, SplitText, plugins |
| Framer Motion | `/framer/motion` | Layout animations, gestures, AnimatePresence |
| PocketBase | `/pocketbase/pocketbase` | Auth, collections, realtime, migrations |
| Supabase | `/supabase/supabase` | Auth, storage, realtime, edge functions |
| Vite | `/vitejs/vite` | Configuración, plugins, build options |
| Tailwind CSS | `/tailwindlabs/tailwindcss` | v4 syntax, plugins, customization |
| Zod | `/colinhacks/zod` | Schemas, validación, refinements |
| Lenis | `/darkroomengineering/lenis` | Smooth scroll, config options |
| Docker | `/docker/docs` | Dockerfile best practices, multi-stage |

## 🔗 Integración con Agentes Syrtix

### Frontend Engineer
- **DEBE** consultar Context7 antes de usar cualquier API de GSAP, Framer Motion o Lenis que no sea básica
- **DEBE** verificar imports de React si el proyecto cambia de versión

### Dev Architect
- **DEBE** consultar Context7 al diseñar integración con servicios externos (PocketBase, Supabase, etc.)
- **DEBE** verificar la API actual de cualquier ORM o DB driver que proponga

### DevOps Engineer
- **DEBE** consultar Context7 para configuraciones de Docker, GitHub Actions o CI/CD
- **DEBE** verificar sintaxis de `docker-compose` / `Dockerfile` al crear nuevas configs

### QA Tester
- **PUEDE** consultar Context7 para verificar que los tests usen la API actual de Vitest/Playwright/Jest
- No es obligatorio para el QA si el código ya funciona — su rol es validar, no buscar docs

## ⚠️ Reglas de Seguridad

1. **Context7 NO reemplaza el CVE scan** — La docs actualizada no garantiza que la versión sea segura
2. **Verificar versiones contra `security-guardrails.md`** DESPUÉS de consultar Context7
3. **Los datos de Context7 son de repositorios comunitarios** — Si la documentación de una librería parece sospechosa, verificar directamente en el repositorio oficial
4. **No enviar datos del proyecto a Context7** — Solo enviar queries genéricos de documentación, nunca código fuente o datos privados

## 🔄 Mantenimiento

- **Rate Limits:** Tier gratuito tiene límites. Si se agotan, considerar obtener un API key en `context7.com/dashboard`
- **Actualización:** Context7 se actualiza automáticamente vía `npx -y` (descarga la última versión cada vez)
- **Fallback:** Si Context7 está caído, usar `read_url_content` con la URL oficial de la documentación de la librería
