# 🏗️ Arquitectura de Syrtix Solutions (Alineada al "Plano Maestro")

Este documento describe la estructura oficial y definitiva de los proyectos de la agencia, basados en la "Regla de Oro" establecida en `Tattoo.cl`. 

## 🚫 Lo que eliminamos (La Arquitectura Vieja)
Anteriormente, los proyectos operaban con un monorepo complejo:
- `/frontend` (React + Vite)
- `/backend` (Node + Express customizado)
- Archivos raíz que unían ambos mundos de forma artificial (`pnpm-workspace.yaml`, `package.json` global, etc).

❌ **Problemas de la arquitectura vieja:** 
- Doble esfuerzo de mantenimiento.
- Despliegues frágiles o complejos en Coolify.
- Escalabilidad costosa a nivel de desarrollo.

---

## ✅ La Nueva Arquitectura (El "Plano Maestro")
Nuestra nueva infraestructura se basa en **BaaS + SPA (Backend as a Service + Single Page Application)**. Es un modelo elegante, veloz y 100% cloud-native orientado al VPS en Hetzner.

### 1. El Backend: PocketBase (Independiente)
- Ya no escribimos código de servidor (Express, Nest, etc).
- **PocketBase** funciona como un contenedor de Docker aislado, gestionado 100% por Coolify (ej. `db-syrtix.5.78.86.159.sslip.io`).
- PocketBase se encarga de: Base de datos SQLite ultrarrápida, Autenticación, Subida de Archivos y Reglas de Seguridad (API Rules).

### 2. El Frontend: Vite + React + Tailwind (La Raíz)
El repositorio de código ahora es **100% Frontend**. Se asienta directamente en la raíz del proyecto para que Coolify lo procese automáticamente de forma nativa.

```text
syrtix.com/ (Directorio Raíz)
 ├── 📄 index.html         # Punto de entrada de la aplicación
 ├── 📄 package.json       # Un solo archivo de dependencias (¡No más monorepo!)
 ├── 📄 vite.config.js     # Configuración para Nginx y Coolify
 ├── 📄 Tailwind.config.js # Configuración de diseño base
 │
 ├── 📁 public/            # Archivos estáticos, fuentes, favicon, logos
 │
 ├── 📁 src/               # Código Fuente de React
 │    ├── 📁 assets/       # Imágenes locales (CSS, iconos)
 │    ├── 📁 components/   # Componentes encapsulados (Botones, Tarjetas)
 │    ├── 📁 constants/    # Variables y constantes de negocio
 │    ├── 📁 data/         # Mock data o estructuras estáticas
 │    ├── 📁 i18n/         # Internacionalización y traducciones
 │    ├── 📁 pages/        # Vistas completas correspondientes a rutas
 │    ├── 📁 sections/     # Secciones modulares de UI (Hero, Features, Footer)
 │    ├── 📁 utils/        # Funciones helpers o de lógica
 │    ├── 📄 main.jsx      # Montaje de React
 │    └── 📄 App.jsx       # Enrutamiento principal
 │
 └── 📄 .env               # Variables secretas (Ej: VITE_POCKETBASE_URL)
```

## 🚀 Ventajas de esta Arquitectura
1. **Un solo comando:** Escribir `pnpm dev` en la raíz arranca el proyecto. Se acabó el levantar frontend y backend por separado.
2. **Coolify-Ready:** Al estar el `package.json` en la raíz con un build pack de NodeJS normal (`pnpm install && pnpm run build`), Coolify lo compila y construye un contenedor de Nginx sin configurar nada extra.
3. **Migración Universal:** Este mismo esquema puede enroscarse en cualquier cliente sin hacer ajustes especiales. Solo cambiamos la DB de PocketBase y modificamos las vistas en `/src`.

---
*Fin del reporte de arquitectura - Migración del monolito a SPA pura.*
