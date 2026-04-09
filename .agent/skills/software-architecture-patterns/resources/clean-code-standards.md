# 🧹 Syrtix Clean Code & Scalability Standards

Este documento define el estándar de calidad de código para cualquier proyecto de Syrtix. Debe ser seguido por el `/dev-architect` y el `/frontend-engineer`.

## 1. Gestión de Contenidos (Regla Híbrida de Syrtix)
Para balancear la mantenibilidad con la velocidad de desarrollo, seguimos estas reglas:

### A. Constantes Globales (Archivo `src/constants/index.js`)
**DEBEN** estar externalizados los datos que se repiten en múltiples lugares o que son críticos para el negocio:
- Información de contacto (Teléfono, Email, Dirección).
- Enlaces de Redes Sociales.
- Rutas de la navegación (URLs).
- Configuración de la marca (Logos, Colores base).

### B. Contenido Local (Dentro del componente)
**PUEDEN** permanecer dentro del código JSX los textos que son únicos y específicos de una sección:
- Títulos de Hero, descripciones de sección, párrafos informativos.
- Preguntas frecuentes individuales.
- Copys promocionales de un solo uso.

## 2. Estructura de Carpetas (Decisión del Arquitecto)
El `/dev-architect` debe evaluar la magnitud del proyecto antes de arrancar y elegir uno de estos dos modelos:

### A. Organización por TIPO (Proyectos Pequeños / Landings)
Uso: Portafolios, Landings simples, webs de 1-3 páginas.
- Estructura: `src/components/`, `src/hooks/`, `src/pages/`.
- Ventaja: Rapidez y simplicidad.

### B. Organización por FUNCIONALIDAD / "Screaming Architecture" (Proyectos Medios/Grandes)
Uso: ERPs, CRMs, SaaS, E-commerces con lógica compleja.
- Estructura: `src/modules/[nombre-modulo]/` (Ej: `auth`, `billing`, `inventory`).
- Cada módulo es autónomo y contiene sus propios componentes, hooks y servicios.
- Ventaja: Escalabilidad total y desacoplamiento.

## 3. Estructura de los Componentes
- **Modularidad:** Un componente no debe exceder las 200 líneas. Si sobrepasa esto, divide la lógica en sub-componentes o hooks personalizados.
- **Props descriptivas:** Usa nombres de variables claros. Evita nombres genéricos como `data` o `info`; usa `clientData` o `pricingInfo`.

## 3. Escalabilidad de Estilos
- Usa Tailwind CSS como motor principal.
- Evita valores arbitrarios (`top-[123px]`) siempre que sea posible; prefiere las clases estándar de la escala de Tailwind.
- Agrupa estilos repetitivos en componentes base en lugar de duplicar clases largas.

## 4. Rendimiento (Performance)
- Prioriza Next.js Server Components para contenido estático.
- Usa `next/image` para todas las imágenes del proyecto.
- Los componentes de cliente (`'use client'`) deben estar lo más bajo posible en el árbol de componentes.

## 5. Salida de Datos y Logs
- **Limpieza de Consola:** Antes de cada despliegue, eliminar o comentar `console.log`.
- **Loggers:** En proyectos de larga escala (ERP/CRM), implementar `Winston` o `Pino` para trazabilidad profesional sin exponer datos sensibles.
