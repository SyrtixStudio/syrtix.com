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
- [ ] **PNPM Audit:** Uso obligatorio de `pnpm audit` en el CI/CD para bloquear dependencias vulnerables.
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

## 🚦 Roadmap de Vigilancia Continua
Manten un registro histórico de:
- **SAST:** Resultados de escaneos de código.
- **SCA:** Vulnerabilidades en dependencias (`npm audit`).
- **DAST:** Reportes de ataques simulados en vivo.
