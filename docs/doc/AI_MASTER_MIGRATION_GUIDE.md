# 🛡️ Guía Maestra de Migración: Arquitectura Syrtix "Gold Standard" 🚀

Este documento es la **instrucción suprema** para cualquier IA encargada de migrar proyectos heredados (@.html, @.php, @.js plano) al ecosistema moderno de Syrtix Solutions.

---

## 🏗️ 1. El "Modelo Syrtix" (The Stack)

Para garantizar independencia y control total, **SIEMPRE** usamos:

1.  **Infraestructura**: VPS en Hetzner (Ubuntu/Docker).
2.  **Orquestador**: [Coolify v4](http://5.78.86.159:3000).
3.  **Frontend**: Vite + React + TypeScript + Tailwind CSS + **PNPM**.
4.  **Backend**: PocketBase (Un contenedor Docker por cada proyecto).
5.  **Despliegue**: **Docker nativo** (usando el Dockerfile de Syrtix).

---

## ⚡ 2. Flujo de Trabajo de Migración (Paso a Paso)

### Paso 1: Análisis y Auditoría ��
- Listar secciones (Servicios, Portfolio, FAQ) para modelar la DB.

### Paso 2: Backend (PocketBase) 🧊
- Crear instancia en Coolify (Service > PocketBase).
- URL: https://db-[proyecto].5.78.86.159.sslip.io.

### Paso 3: Frontend (React + Vite + PNPM) ⚛️
- Basarse en la estructura de syrtix.com/src.
- Configurar el SDK de PocketBase.

### Paso 4: Dockerización (El Corazón) 🐳
- **Copiado de Dockerfile**: Usar siempre el Dockerfile multi-stage de Syrtix que incluye la configuración de Nginx para SPAs.

### Paso 5: Despliegue en Coolify 🚀
- **Build Pack**: **NUNCA** usar "React" o "Vite" nativos de Coolify.
- **SIEMPRE** seleccionar **Docker**.
- **Variables de Entorno**: Configurar VITE_POCKETBASE_URL como **BUILD TIME**.

---
*Documento corregido para reflejar el Modelo Syrtix (Docker) como el estándar superior.*
