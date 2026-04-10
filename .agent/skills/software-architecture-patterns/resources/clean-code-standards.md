# 🧹 Syrtix Clean Code & Scalability Standards

Este documento define el estándar de calidad de código para cualquier proyecto de Syrtix. Es la ley que rige el comportamiento de los agentes `/dev-architect` y `/frontend-engineer`.

## 1. Gestión de Contenido Senior (Modular Data Strategy)
Para garantizar el bilingüismo y la escalabilidad sin sacrificar la rapidez de edición, seguimos esta regla de oro:

### A. Modular Data por Feature
**Toda información densa o estructurada** (Reviews, FAQs, Planes de Precio, Catálogo de Servicios, Términos Legales) **DEBE** vivir en su propio archivo de datos dentro de su módulo correspondiente.
- **Ubicación:** `src/modules/{funcionalidad}/{funcionalidad}.data.js`
- **Estructura Recomendada:** Exportar un objeto con claves de idioma (`es`, `en`, etc.) para soportar bilingüismo desde el día 1.

### B. Internationalization (i18n) para UI
- Se usa exclusivamente para etiquetas de interfaz cortas (Botones, labels de formularios, navegación, placeholders).
- **Ubicación Central:** `src/i18n/translations.js`

### C. Prohibición de Hardcoding
- No se permiten bloques de texto de más de 10 palabras directamente en el código JSX. 
- Si un párrafo es informativo, debe ser extraído a un archivo de datos o al sistema de i18n.

## 2. Estructura de Carpetas Obligatoria (Feature-Based Architecture)
Para todos los proyectos de Syrtix (excepto micro-landings experimentales), el estándar es la **Organización por Funcionalidad**:

- **Estructura:** `src/modules/[nombre-modulo]/`
- **Contenido del Módulo:** Cada carpeta es un universo autónomo que incluye:
    - Componentes Visuales (`.jsx`)
    - Lógica y Cerebro (`.hooks.js`)
    - Contenido y Datos (`.data.js`)
    - Estilos específicos (`.css` opcional)

## 3. Estructura de los Componentes (Separación de Capas)
- **Capa de Presentación:** El archivo JSX solo se encarga del renderizado. Su código debe ser "invisible", limitándose a mapear datos y mostrar componentes UI.
- **Capa de Lógica:** Todo proceso de cálculo, fetching o estado complejo debe externalizarse a un Custom Hook.
- **Capa de Datos:** El componente recibe la información ya formateada desde los archivos de Data.

## 4. Escalabilidad de Estilos
- Motor Principal: **Vanilla CSS + Diseño Atómico** (Syrtix UI System) o Tailwind CSS según el proyecto.
- Agrupar estilos repetitivos en el módulo `core/` para evitar duplicidad.

## 5. Rendimiento y Seguridad
- **Code Splitting:** Los módulos deben estar preparados para ser cargados mediante Lazy Loading.
- **Sanitización:** Todo contenido proveniente de archivos Data que use HTML debe ser sanitizado antes de renderizarse.

---
*Este estándar transforma el código en una biblioteca de módulos portátiles, listos para ser escalados o replicados en nuevos proyectos de Syrtix.*
