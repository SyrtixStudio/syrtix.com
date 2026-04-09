---
name: syrtix-ui-system
description: El estándar de diseño "World-Class" de Syrtix. Contiene reglas de UI premium, checklists pre-entrega y el ADN visual de la agencia.
---

# 🎨 Syrtix UI System (El Estándar "Pro-Max")

Esta skill consolida el **ADN visual de Syrtix**. A diferencia de los repositorios genéricos, estas son las reglas absolutas para que tu código frontend luzca caro, premium y convierta. 

No necesitas ejecutar scripts de Python; todo lo que debes saber para programar React / Tailwind "Pixel-Perfect" está aquí.

## 🧬 El ADN Visual de Syrtix
Cuando programes componentes para Syrtix o sus clientes (ERPs, SaaS, Páginas B2B), los diseños **DEBEN** inclinarse por:
1. **Premium por Defecto:** Uso de sombras suaves (`box-shadow`), bordes redondeados calculados y tipografía moderna (Inter, Outfit, Roboto).
2. **Micro-interacciones:** Todo botón o enlace debe reaccionar al toque (Hover, Active).
3. **Optimización de Activos:** Uso de WebP, carga diferida y SVGs para una rapidez total.

## 🔍 Protocolo de Descubrimiento (Briefing Obligatorio)
**ANTES** de generar cualquier código visual o UI, el agente **DEBE** solicitar al usuario la siguiente información:
- **Estilo Visual:** (Ej: Elegante/Lujoso, Moderno/Tech, Minimalista, Brutalist).
- **Paleta de Colores:** (Colores primarios, secundarios y si prefiere Dark Mode o Light Mode).
- **Audiencia Objetivo:** (Para quién es la web).
- **Referencias:** (URLs de sitios que el usuario considere "World-Class").

## 💎 Protocolo 4K (Ultra-HD Asset Hygiene)
Antes de usar cualquier imagen en producción, si esta no tiene la calidad suficiente, el agente debe proceder con su restauración siguiendo este estándar:
- **Objetivo:** 4096px en el borde más largo.
- **Instrucciones:** Reconstruir detalles finos con máxima fidelidad, recuperar texturas perdidas, eliminar artefactos de compresión y reducir el ruido.
- **Regla de Oro:** NO alterar, reinterpretar o estilizar el contenido. La salida debe ser una versión fotorrealista e indistinguible del original pero en ultra-alta definición.

### 1. Iconos y Elementos Visuales
| Regla | CORRECTO (Haz esto) | INCORRECTO (No hagas esto) |
| :--- | :--- | :--- |
| **Cero Emojis** | Usa SVGs reales (Lucide, Heroicons, Radix). | Usar emojis como 🎨 🚀 ⚙️ para UI. |
| **Hover Estable** | Usa cambios de color/brillo y sombras (`hover:shadow-lg`). | Escalar tanto un botón que mueva el resto del layout de la página. |
| **Consistencia** | `w-6 h-6` y el mismo trazo para todos los iconos. | Mezclar tamaños e iconos gruesos con iconos delgados. |

### 2. Light vs Dark Mode (El Desafío)
| Regla | CORRECTO (Haz esto) | INCORRECTO (No hagas esto) |
| :--- | :--- | :--- |
| **Glass en Light Mode** | Usar `bg-white/80` (alta opacidad para legibilidad). | Usar `bg-white/10` en fondo blanco (no se ve). |
| **Texto Plomizo** | Light Mode: `#0F172A` (slate-900). | Light Mode: `slate-400` (Es ilegible para texto principal). |

## ✅ Checklist Pre-Entrega
Antes de decirle al usuario "Hecho", revisa de forma mental lo siguiente en tu código:

### Calidad Visual
- [ ] ¿Hay al menos una sombra suave o gradiente sutil?
- [ ] ¿Los botones principales parecen clickeables y tienen `cursor-pointer`?
- [ ] ¿Es Responsive? (Nunca entregues un componente que se rompe en pantallas móviles de `375px`).

### Accesibilidad (A11Y)
- [ ] ¿Las imágenes tienen su atributo `alt=""`?
- [ ] ¿Los formularios tienen `<label>` o claro placeholder?
- [ ] Revisé el contraste de colores para que cumpla con WCAG básico.

*Usa esta skill cada vez que se te pida diseñar o crear un nuevo componente `.jsx` o modificar los estilos de Tailwind.*
