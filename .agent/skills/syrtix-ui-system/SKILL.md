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

## 🧠 Leyes Maestras de UX (Psicología Aplicada)
Para Syrtix, el diseño no es solo estética, es **ingeniería de conversión**. Al programar, el agente debe aplicar estas leyes:

1. **Ley de Jakob (Familiaridad):** Los usuarios pasan la mayor parte del tiempo en *otros* sitios. No reinventes la rueda en flujos críticos (ej: carritos, logins, navegación). Mantén patrones estándar para que el usuario se sienta en casa.
2. **Ley de Hick (Carga Cognitiva):** El tiempo que se tarda en tomar una decisión aumenta con el número y la complejidad de las opciones. **Simplifica:** Si hay más de 5 opciones en un menú o formulario, usa pasos o categorías.
3. **Ley de Fitts (Puntos Clave):** El tiempo para alcanzar un objetivo depende de su tamaño y distancia. Los CTA (Call to Action) principales deben ser grandes y estar en zonas de fácil alcance (especialmente en móvil).
4. **Efecto de Posición Serial:** Los usuarios recuerdan mejor el primer y el último elemento de una lista. Coloca la información más importante al principio (Hero) y al final (Cierre/CTA) de la página.
5. **Regla del Pico-Fin:** Las personas juzgan una experiencia basándose principalmente en cómo se sintieron en su punto máximo (pico) y en su final. Crea un momento "WOW" visual y una confirmación final satisfactoria.

## ✅ Checklist Pre-Entrega
Antes de decirle al usuario "Hecho", revisa de forma mental lo siguiente en tu código:

### Calidad Visual
- [ ] ¿Hay al menos una sombra suave o gradiente sutil?
- [ ] ¿Los botones principales parecen clickeables y tienen `cursor-pointer`?
- [ ] ¿Es Responsive? (Nunca entregues un componente que se rompe en pantallas móviles de `375px`).

### Inteligencia UX (Psicología)
- [ ] **Simplicidad:** ¿He eliminado elementos innecesarios que distraen del objetivo principal?
- [ ] **Feedback:** ¿El usuario sabe qué está pasando (loading, éxito, error)?
- [ ] **Jerarquía:** ¿Lo más importante es lo primero que se ve?
- [ ] **Prevención de Errores:** ¿Hay validaciones o advertencias claras antes de que el usuario cometa un error?

### Accesibilidad (A11Y)
- [ ] ¿Las imágenes tienen su atributo `alt=""`?
- [ ] ¿Los formularios tienen `<label>` o claro placeholder?
- [ ] Revisé el contraste de colores para que cumpla con WCAG básico.

*Usa esta skill cada vez que se te pida diseñar o crear un nuevo componente `.jsx` o modificar los estilos de Tailwind.*
