# 🏗️ Arquitectura de Syrtix Solutions (Alineada al "Plano Maestro")

Este documento describe la estructura oficial y definitiva de los proyectos de la agencia. Hemos evolucionado de una estructura "Por Tipo" a una **"Organización por Funcionalidad" (Feature-Based)**, que es el estándar de oro en la industria para proyectos escalables.

---

## ✅ La Nueva Arquitectura (Senior Feature-Based)
Nuestra infraestructura se basa en módulos independientes. Cada funcionalidad del negocio tiene su propia "casa" donde vive su lógica, UI y assets.

```text
syrtix.com/ (Directorio Raíz)
 ├── 📁 public/            # Archivos estáticos pesados, fuentes, favicon
 │
 ├── 📁 src/               # Código Fuente de React
 │    ├── 📁 assets/       # Estilos globales e imágenes compartidas
 │    │
 │    ├── 📁 modules/      # <--- ORGANIZACIÓN POR FUNCIONALIDAD
 │    │    ├── 📁 core/    # Componentes UI atómicos (Botones, Inputs) y Hooks base
 │    │    ├── 📁 chatbot/ # Lógica IA, componentes del chat, estilos del bot
 │    │    ├── 📁 landing/ # Secciones de la home (Hero, Services, Pricing)
 │    │    └── 📁 shared/  # Lógica compartida entre módulos (utils, constants)
 │    │
 │    ├── 📁 lib/          # Configuraciones de clientes (PocketBase, Axios)
 │    ├── 📁 i18n/         # Internacionalización
 │    ├── 📄 App.jsx       # Enrutador y orquestador de módulos
 │    └── 📄 main.jsx      # Punto de entrada de React
 │
 └── 📄 .env               # Variables secretas
```

## 🚀 Reglas del Arquitecto
1. **Encapsulamiento**: Si un componente solo se usa en el Chatbot, debe vivir en `modules/chatbot/`. No lo saques a la raíz de componentes a menos que se use en 3 o más módulos diferentes.
2. **Independencia**: Un módulo debería poder ser "copiado y pegado" en otro proyecto de Syrtix con el mínimo esfuerzo.
3. **Simplicidad**: Para utilidades globales o variables que no pertenecen a un módulo específico, usa `modules/shared/`.

---
*Fin del reporte de arquitectura - Evolución a Estructura Senior.*

