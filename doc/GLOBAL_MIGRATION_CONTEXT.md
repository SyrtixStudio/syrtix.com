# 🚀 Contexto Global de Despliegue (Recapitulativo para IA) 🤖

Este documento sirve como **fuente única de verdad** para que cualquier asistente de inteligencia artificial entienda la infraestructura actual de Syrtix Solutions y pueda migrar nuevos proyectos (`barber-black.cl`, `clinicadent.cl`, `sushihook.cl`, etc.) de forma exacta al modelo que ya funciona en `Tattoo.cl`.

---

## 🏗️ Stack Estándar de Despliegue
- **Infraestructura**: Hetzner Cloud (VPS dedicado).
- **IP Principal**: `5.78.86.159`
- **Orquestador**: **Coolify v4** (Panel en puerto `3000`).
- **Base de Datos / Backend**: **PocketBase** auto-hospedado en Docker vía Coolify.
- **Frontend**: Vite (React) con TypeScript y Tailwind CSS.
- **Servidor Web**: Nginx (manejo automático por Coolify en el `/dist`).

---

## 🛠️ Configuración Replicable en Coolify
Para migrar un proyecto nuevo, sigue estos parámetros exactos:

1. **Build Pack**: React (Coolify detecta `package.json` y `vite.config.ts`).
2. **Build Image**: `node:lts`
3. **Deployment Image**: `webdevops/nginx:alpine`
4. **Comandos**:
   - Install: `npm install`
   - Build: `npm run build`
   - Start: *(Dejar vacío)* -> Nginx sirve el contenido estático.
5. **Publish Directory**: `/dist`
6. **HTTPS/SSL**: Coolify lo gestiona automáticamente al asignar un FQDN (ej. `https://mi-proyecto.5.78.86.159.sslip.io`).

---

## 🧊 Modelo de Backend (PocketBase)
Cada proyecto nuevo debe tener su propio contenedor de PocketBase:
- **FQDN sugerido**: `https://db-proyecto.5.78.86.159.sslip.io`
- **CORS**: Se debe habilitar la URL del frontend en la pestaña *Settings > Dashboard* de PocketBase.
- **Esquema**: Exportar `pb_schema.json` del proyecto actual como base para nuevos módulos CRUD.

---

## 🔑 Variables de Entorno (Cruciales)
En Coolify, las variables de Vite deben estar marcadas como **"Build Time"**:
- `VITE_POCKETBASE_URL=https://db-proyecto.5.78.86.159.sslip.io`

> **Nota para la IA**: Si esta variable no está marcada como "Need during buildtime", el frontend no podrá conectarse a la DB después del despliegue.

---

## 📋 Lista de Proyectos para Migrar (Cola de Trabajo)
Todos estos proyectos en `c:\Users\Francisco\Proyectos\webs\` deben seguir este mismo patrón:
- [ ] `barber-black.cl`
- [ ] `clinicadent.cl`
- [ ] `eatburger.cl`
- [ ] `sushihook.cl`
- [ ] `ferreteriamaestro.cl`
- [ ] `openmarket.cl`

---

## 💡 Instrucciones para el Asistente IA
Cuando se te pida migrar uno de estos proyectos:
1. Revisa la estructura del proyecto original (normalmente HTML/JS plano o React viejo).
2. Refactorízalo usando el template de `Tattoo.cl` (Vite + React + Tailwind).
3. Adapta las colecciones de PocketBase basándote en los campos del proyecto actual.
4. Prepara el `package.json` y el `README.md` con las instrucciones de Coolify mencionadas arriba.
5. **NUNCA** sugieras usar Vercel, Netlify o Supabase, ya que el objetivo es la independencia total en el servidor propio.

---
*Documento generado por Antigravity para mantener la consistencia técnica entre múltiples migraciones.*
