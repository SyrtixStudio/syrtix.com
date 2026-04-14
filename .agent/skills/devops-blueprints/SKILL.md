---
name: devops-blueprints
description: Plantillas de infraestructura, configuraciones Docker optimizadas, guías de seguridad y CI/CD para el agente /devops-engineer.
---

# 🐳 DevOps Blueprints (Skill)

Esta es el arma principal del `devops-engineer`. Contiene los planos exactos para levantar la infraestructura de cualquier proyecto moderno (Next.js, Node.js, Bases de Datos) sin consumir memoria excesiva en el servidor, manteniendo una seguridad de grado empresarial.

## 📦 Plantillas Maestras

### 1. El Dockerfile Universal de Alta Velocidad (Next.js / Node)
**Regla de Oro:** Siempre usa Multi-Stage Builds y `alpine`. El tamaño de una imagen no debe sobrepasar los 150MB para el frontend.
```dockerfile
# Dependencias Fase 1
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Builder Fase 2
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner Fase 3 (Producción Limpia)
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### 2. Coolify / Vercel Checklist (Despliegues)
- [ ] **PNPM Audit:** Uso obligatorio de `pnpm audit --audit-level=critical` en el CI/CD para **bloquear** despliegues con CVEs críticos (CVSS ≥ 9.0).
- [ ] **React Version Pin:** Si el proyecto usa React 19, verificar que NO sea una versión vulnerable a CVE-2025-55182 (19.0.0–19.2.0). Usar `node -e "console.log(require('react/package.json').version)"` en el pipeline.
- [ ] Variables `.env` inyectadas en la interfaz y nunca dentro del repositorio Git.
- [ ] Activar Let's Encrypt para forzar HTTPS por defecto.
- [ ] Middleware Obligatorio: `Helmet.js`, `express-validator` y `rate-limiting`.

### 3. Check de SecOps HTTP Headers
En tu archivo de configuración del router (ej. `next.config.js`), exige que existan:
- `X-Frame-Options: DENY` (Evita Clickjacking).
- `Referrer-Policy: origin-when-cross-origin`.
- `X-Content-Type-Options: nosniff`.

## 🛡️ Seguridad Dinámica (DAST) - Nivel Élite
Cuando la aplicación esté en un entorno de pruebas o producción, el agente **DEBE** ejecutar o sugerir:
1. **Escaneo de Vulnerabilidades Activas (DAST):** Uso de herramientas como `OWASP ZAP` o `Nuclei` para probar la web en ejecución.
2. **Escaneo de Puertos:** Verificar que solo los puertos necesarios (80, 443, 3000) estén expuestos.
3. **Pruebas de Inyección Dinámica:** Simular ataques de SQLi y XSS sobre los campos de entrada reales de la web desplegada.
4. **Pruebas de Deserialización RSC:** Si el proyecto usa React 19 + Server Components, enviar payloads Flight Protocol malformados y verificar que el servidor rechaza correctamente sin ejecutar código.

## 🚦 Roadmap de Vigilancia Continua
Manten un registro histórico de:
- **SAST:** Resultados de escaneos de código.
- **SCA:** Vulnerabilidades en dependencias (`npm audit`).
- **DAST:** Reportes de ataques simulados en vivo.
- **CVE Tracking:** Registro de CVEs detectados, parcheados y fechas de resolución.

---

## 🏗️ Catálogo de Infraestructura Coolify (Hetzner)

> **Este es el inventario completo de lo que tenemos disponible en Coolify para desplegar con un click.** Cuando el Arquitecto o el PM propongan una tecnología, verificar que esté en este catálogo.

### 📦 Bases de Datos Disponibles

| Motor | Tipo | Para Qué Sirve | ¿Cuándo usarlo en Syrtix? | RAM Mínima |
|---|---|---|---|---|
| **PostgreSQL** | SQL Relacional | La DB más robusta y profesional. Soporte para JSON, full-text search, RLS | **E-commerce, apps con datos complejos, multi-tenant** | ~256MB |
| **MySQL** | SQL Relacional | La clásica. Compatible con WordPress, Ghost, sistemas legacy | **Solo si el proyecto usa WordPress o un sistema que lo exija** | ~256MB |
| **MariaDB** | SQL Relacional | Fork mejorado de MySQL. Compatible 100% pero más rápido | **Alternativa a MySQL cuando no dependes de MySQL específico** | ~256MB |
| **MongoDB** | NoSQL (Documentos) | Guarda datos como objetos JSON sin esquema fijo | **Logs, analytics, datos sin estructura definida. NO para e-commerce** | ~512MB |
| **Redis** | In-Memory (Caché) | Almacena datos en RAM para velocidad extrema. Cache, sesiones, colas | **Cuando la web tiene muchas visitas y necesitas caché rápido** | ~50MB |
| **CouchDB** | NoSQL (Documentos) | Similar a MongoDB pero con sincronización offline-first | ❌ **Rara vez útil para proyectos web de Syrtix** | ~256MB |
| **EdgeDB** | SQL Avanzado | PostgreSQL con un lenguaje de queries propio más moderno | ❌ **Experimental. No usar en producción todavía** | ~512MB |

> **Regla Syrtix:** Para el 95% de proyectos, solo necesitas **PostgreSQL** (datos complejos) o **PocketBase** (que usa SQLite internamente). Redis es un complemento, no un reemplazo.

### 🛠️ Servicios One-Click (Clasificados por Prioridad)

#### 🟢 IMPRESCINDIBLES — Usar en CADA proyecto que lo necesite

| Servicio | ¿Qué es? | Caso de Uso en Syrtix | RAM |
|---|---|---|---|
| **PocketBase** | Backend completo en 1 archivo: DB + Auth + API REST + Real-time | CRM, booking, portfolios, landing+forms, dashboards simples. **Ya lo usamos en producción (TattooStudio)** | ~50MB |
| **n8n** | Motor de automatización visual (workflows). **Ya lo usamos** | Notificaciones WhatsApp, seguimiento de leads, emails automáticos, webhooks | ~256MB |
| **Umami** | Analytics web privado. Alternativa a Google Analytics sin cookies | **Instalar en CADA web de cliente.** Dashboard hermoso, datos propios, GDPR compliant | ~128MB |
| **UptimeKuma** | Monitor de uptime. Te avisa si una web se cae | **1 instancia para vigilar TODAS las webs de clientes.** Esencial para servicio premium | ~128MB |
| **MinIO** | Storage de archivos compatible con Amazon S3 | Cuando los clientes suben muchas fotos/videos/documentos. Alternativa self-hosted a AWS S3 | ~256MB |

#### 🟡 ESCALABILIDAD OPCIONAL — Solo para proyectos de alta complejidad
> **Atención:** Estos servicios consumen mucha más RAM (~512MB+) y solo deben sugerirse si PocketBase se queda corto.

| Servicio | ¿Qué es? | ¿Cuándo sugerirlo? |
|---|---|---|
| **Directus** | CMS Headless Profesional | Si el cliente necesita gestionar miles de registros con un panel administrativo de lujo. |
| **Appwrite** | BaaS Completo | Si el proyecto necesita funciones en la nube (Cloud Functions) y permisos de usuario ultra-granulares. |
| **Hasura** | GraphQL Engine | Solo si el frontend exige GraphQL y ya tenemos una base de datos PostgreSQL existente. |


#### 🔵 NICHO — Solo si un proyecto específico lo requiere

| Servicio | ¿Qué es? | ¿Cuándo? |
|---|---|---|
| **Ghost** | Plataforma de blogging premium | Si un cliente quiere un blog profesional con suscripciones y newsletters |
| **Hasura** | GraphQL instantáneo sobre PostgreSQL | Si el frontend necesita GraphQL en vez de REST |
| **NocoDB** | Convierte cualquier DB en una interfaz tipo Airtable/Spreadsheet | Si el cliente quiere editar datos sin saber código |
| **WordPress** | CMS clásico basado en PHP | Solo si el cliente LO EXIGE. No es el stack preferido de Syrtix |
| **Grafana** | Dashboards de métricas y monitoreo | Para visualizar métricas de servidores o datos de negocio en tiempo real |
| **Gitea** | Git server propio (como GitHub pero self-hosted) | Si Syrtix quiere su propio servidor Git privado |
| **Soketi** | WebSockets server (como Pusher pero self-hosted) | Si necesitas real-time masivo sin depender de servicios externos |
| **Libretranslate** | Motor de traducción automática self-hosted | Si un proyecto necesita traducción automática sin depender de Google |

#### ⚪ NO RECOMENDADOS para Syrtix (ignorar)

| Servicio | Por qué NO |
|---|---|
| **Appsmith / Openblocks** | Son para apps internas de empresas grandes. No aplica para agencia web |
| **Fider** | Recolección de feedback de usuarios. Muy nicho |
| **Lavalink** | Servidor de audio para bots de Discord. No aplica |
| **LanguageTool** | Corrector gramatical. No aplica para desarrollo web |
| **Mattermost** | Chat tipo Slack. Syrtix ya usa otras herramientas de comunicación |
| **Repman** | Repositorio de paquetes PHP. No aplica |
| **SearXNG / Whoogle** | Motores de búsqueda privados. No aplica |
| **Trilium Notes** | App de notas personal. No aplica |
| **Weblate** | Plataforma de traducción colaborativa. Muy nicho |
| **VSCode Server** | VS Code en el navegador. Útil pero no prioritario |

#### 🛡️ Estándar de Seguridad y Servicio Syrtix

Estas herramientas son obligatorias para elevar el nivel profesional de la agencia:

| Herramienta | Función | Por qué es Vital para Syrtix |
|---|---|---|
| **VaultWarden** | **Gestión de Credenciales** | **Obligatorio Interno.** No se guardan claves de clientes en Slack/WhatsApp/Excel. Todo va al baúl blindado en Hetzner. |
| **Keycloak** | **Identidad Enterprise (IAM)** | **Recomendado para Clientes B2B.** Si el proyecto requiere SSO, roles complejos o seguridad nivel bancario, se usa Keycloak. |
| **UptimeKuma** | **Monitoreo de Salud (SLA)** | **Obligatorio de Servicio.** Se debe monitorear cada web activa. Te permite avisar al cliente ANTES de que él note el fallo y ofrecer una "Status Page" profesional. |

---


### 🎯 Recetas Syrtix (Combinaciones Recomendadas)


```
📋 RECETA 1: Web Corporativa / Landing Page + CRM
   → PocketBase + Umami + n8n
   → RAM total: ~430MB
   → Para: Landing pages, portfolios, sitios corporativos con formularios

📋 RECETA 2: E-commerce Robusto
   → PostgreSQL + Directus (admin de productos) + MeiliSearch (buscador) + MinIO (fotos) + Umami
   → RAM total: ~1.5GB
   → Para: Tiendas online con catálogos grandes, filtros avanzados

📋 RECETA 3: App Web con Auth Compleja
   → PostgreSQL + Appwrite (o PocketBase) + Redis (caché) + n8n (automatización)
   → RAM total: ~1GB
   → Para: Dashboards, plataformas SaaS, apps con roles múltiples

📋 RECETA 4: Infraestructura de Agencia (Syrtix interno)
   → UptimeKuma (monitor) + VaultWarden (contraseñas) + n8n (automatización) + Umami (analytics de todas las webs)
   → RAM total: ~560MB
   → Para: Gestión interna de la agencia y monitoreo de clientes
```

> **⚠️ IMPORTANTE:** Antes de desplegar cualquier servicio nuevo en Coolify, verificar que el servidor Hetzner tenga suficiente RAM disponible. Usar `htop` o el panel de Coolify para verificar consumo actual.

