---
name: syrtix-wow-animations
description: Arsenal de animaciones premium para el Frontend Engineer. Patrones GSAP, Framer Motion, Lenis y CSS avanzado con código listo para copiar. Nivel Awwwards.
---

# ⚡ Syrtix WOW Animations (El Arsenal del Impacto Visual)

Esta skill es la **artillería pesada** del `/frontend-engineer`. Contiene patrones de animación probados, con código React listo para copiar y adaptar. Cada patrón está diseñado para producir el efecto "WOW" que diferencia a Syrtix de las agencias mediocres.

## 📦 Dependencias Requeridas
```bash
# Core de animación
pnpm add gsap @gsap/react framer-motion

# Smooth scrolling (obligatorio para scroll-driven animations)
pnpm add lenis

# Opcional: animaciones vectoriales
pnpm add lottie-react
```

## 🔧 Setup Inicial Único (Archivo de Configuración GSAP)

Crea este archivo UNA VEZ en el proyecto. Todos los componentes lo importan:

```javascript
// src/lib/gsapConfig.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Registrar plugins UNA sola vez
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Exportar para uso en componentes
export { gsap, ScrollTrigger, useGSAP };
```

## 🔧 Setup Lenis (Smooth Scroll Global)

```javascript
// src/lib/smoothScroll.js
import Lenis from 'lenis';
import { ScrollTrigger } from './gsapConfig';

export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  // Sincronizar Lenis con GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
}
```

---

## 🎯 PATRÓN 1: Staggered Reveal (Elementos que aparecen en cascada)
**Impacto:** ★★★★★ | **Dificultad:** ★★☆☆☆

El efecto más versátil. Los elementos aparecen uno tras otro con un delay escalonado al entrar en viewport.

```jsx
// components/StaggeredReveal.jsx
import { useRef } from 'react';
import { gsap, useGSAP, ScrollTrigger } from '../lib/gsapConfig';

export default function StaggeredReveal({ children, className = '' }) {
  const container = useRef(null);

  useGSAP(() => {
    const elements = container.current.querySelectorAll('[data-reveal]');

    gsap.set(elements, { autoAlpha: 0, y: 60 });

    ScrollTrigger.batch(elements, {
      onEnter: (batch) => {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          overwrite: true,
        });
      },
      start: 'top 85%',
      once: true,
    });
  }, { scope: container });

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

// USO:
// <StaggeredReveal>
//   <h2 data-reveal>Título</h2>
//   <p data-reveal>Párrafo 1</p>
//   <p data-reveal>Párrafo 2</p>
//   <div data-reveal><Card /></div>
// </StaggeredReveal>
```

---

## 🎯 PATRÓN 2: Text Split Reveal (Tipografía Cinética)
**Impacto:** ★★★★★ | **Dificultad:** ★★★☆☆

Títulos que se revelan línea por línea o palabra por palabra. Efecto de sitio premium.

```jsx
// components/TextReveal.jsx
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsapConfig';

export default function TextReveal({ text, tag: Tag = 'h2', className = '' }) {
  const textRef = useRef(null);

  useGSAP(() => {
    const words = textRef.current.querySelectorAll('.word');

    gsap.set(words, { y: '110%', opacity: 0 });

    gsap.to(words, {
      y: '0%',
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.05,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: textRef });

  const words = text.split(' ').map((word, i) => (
    <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
      <span className="word" style={{ display: 'inline-block' }}>
        {word}
      </span>
    </span>
  ));

  return <Tag ref={textRef} className={className}>{words}</Tag>;
}

// USO:
// <TextReveal text="Diseñamos experiencias digitales que convierten" tag="h1" />
```

---

## 🎯 PATRÓN 3: Parallax Section (Profundidad Visual)
**Impacto:** ★★★★☆ | **Dificultad:** ★★☆☆☆

Capas que se mueven a diferentes velocidades. Crea profundidad y sofisticación sin JavaScript pesado.

```jsx
// components/ParallaxImage.jsx
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsapConfig';

export default function ParallaxImage({ src, alt, speed = 0.3, className = '' }) {
  const container = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      yPercent: -20 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-[120%] object-cover scale-110"
        loading="lazy"
      />
    </div>
  );
}
```

---

## 🎯 PATRÓN 4: Gradient Hero Animado
**Impacto:** ★★★★★ | **Dificultad:** ★☆☆☆☆

Hero con gradiente que se mueve sutilmente, creando un fondo vivo y premium. CSS puro.

```css
/* styles/hero-gradient.css */
.hero-gradient {
  background: linear-gradient(
    -45deg,
    #0a0a0a,
    #1a1a2e,
    #16213e,
    #0f3460,
    #1a1a2e
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

/* Variante: Mesh Gradient con blur */
.hero-mesh {
  position: relative;
  overflow: hidden;
  background: #0a0a0a;
}

.hero-mesh::before,
.hero-mesh::after {
  content: '';
  position: absolute;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.hero-mesh::before {
  background: #6366f1;
  top: -25%;
  left: -10%;
}

.hero-mesh::after {
  background: #06b6d4;
  bottom: -25%;
  right: -10%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(5%, 10%) scale(1.1); }
  66% { transform: translate(-5%, -5%) scale(0.9); }
}
```

---

## 🎯 PATRÓN 5: Magnetic Hover Effect (Efecto Magnético)
**Impacto:** ★★★★☆ | **Dificultad:** ★★★☆☆

Elementos que "gravitan" hacia el cursor. Efecto premium para botones y CTAs.

```jsx
// components/MagneticButton.jsx
import { useRef } from 'react';
import { gsap } from '../lib/gsapConfig';

export default function MagneticButton({ children, className = '', strength = 0.3 }) {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  return (
    <button
      ref={buttonRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
```

---

## 🎯 PATRÓN 6: Scroll Progress Indicator
**Impacto:** ★★★☆☆ | **Dificultad:** ★☆☆☆☆

Barra de progreso que muestra cuánto ha scrolleado el usuario. Elegancia funcional.

```jsx
// components/ScrollProgress.jsx
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsapConfig';

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  });

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 origin-left z-50"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}
```

---

## 🎯 PATRÓN 7: Card Tilt 3D (Efecto de Inclinación)
**Impacto:** ★★★★☆ | **Dificultad:** ★★★☆☆

Cards que se inclinan siguiendo el cursor. Efecto premium de profundidad.

```jsx
// components/TiltCard.jsx
import { useRef } from 'react';

export default function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;

    cardRef.current.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}
```

---

## 🎯 PATRÓN 8: Counter Animation (Números que se incrementan)
**Impacto:** ★★★★☆ | **Dificultad:** ★★☆☆☆

Perfecto para secciones de estadísticas o logros.

```jsx
// components/AnimatedCounter.jsx
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsapConfig';

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = ''
}) {
  const counterRef = useRef(null);
  const numberRef = useRef({ value: 0 });

  useGSAP(() => {
    gsap.to(numberRef.current, {
      value: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counterRef.current,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        counterRef.current.textContent =
          `${prefix}${Math.round(numberRef.current.value)}${suffix}`;
      },
    });
  });

  return <span ref={counterRef} className={className}>0</span>;
}

// USO:
// <AnimatedCounter target={500} suffix="+" />       → "500+"
// <AnimatedCounter target={99} suffix="%" />         → "99%"
// <AnimatedCounter target={15000} prefix="$" />      → "$15000"
```

---

## 🎯 PATRÓN 9: Animated Underline Link
**Impacto:** ★★★☆☆ | **Dificultad:** ★☆☆☆☆

Links con underline que se revela de izquierda a derecha. CSS puro.

```css
/* styles/animated-link.css */
.link-reveal {
  position: relative;
  text-decoration: none;
  color: inherit;
}

.link-reveal::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}

.link-reveal:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

---

## 🎯 PATRÓN 10: Framer Motion Page Transition
**Impacto:** ★★★★★ | **Dificultad:** ★★★☆☆

Transiciones fluidas entre páginas con React Router.

```jsx
// components/PageTransition.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  in: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
  },
};

const pageTransition = {
  type: 'tween',
  ease: [0.65, 0, 0.35, 1],
  duration: 0.5,
};

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 🎯 PATRÓN 11: Image Reveal con Clip-Path
**Impacto:** ★★★★★ | **Dificultad:** ★★☆☆☆

Imágenes que se "descubren" con un efecto de cortina al hacer scroll.

```jsx
// components/ImageReveal.jsx
import { useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsapConfig';

export default function ImageReveal({ src, alt, direction = 'left', className = '' }) {
  const container = useRef(null);

  const clipPaths = {
    left:  { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
    top:   { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
    bottom:{ from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
  };

  useGSAP(() => {
    const img = container.current.querySelector('img');

    gsap.fromTo(img,
      { clipPath: clipPaths[direction].from, scale: 1.2 },
      {
        clipPath: clipPaths[direction].to,
        scale: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
          once: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
}
```

---

## 🎨 Paletas de Color Premium (Anti AI-Slop)

NO uses colores genéricos. Aquí tienes paletas probadas:

### Dark Premium (Tech / Agencias)
```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #111118;
  --bg-card: #16161d;
  --text-primary: #e8e8ed;
  --text-secondary: #8b8b9e;
  --accent-primary: #6366f1;    /* Indigo vibrante */
  --accent-secondary: #06b6d4;  /* Cyan eléctrico */
  --accent-gradient: linear-gradient(135deg, #6366f1, #06b6d4);
  --border-subtle: rgba(255, 255, 255, 0.06);
}
```

### Light Luxe (Clínicas / Profesional)
```css
:root {
  --bg-primary: #fafaf9;
  --bg-secondary: #f5f5f0;
  --bg-card: #ffffff;
  --text-primary: #1a1a1a;
  --text-secondary: #6b6b6b;
  --accent-primary: #2563eb;    /* Azul profundo */
  --accent-secondary: #0891b2;  /* Teal elegante */
  --accent-gradient: linear-gradient(135deg, #2563eb, #0891b2);
  --border-subtle: rgba(0, 0, 0, 0.06);
}
```

### Warm Dark (E-commerce / Lifestyle)
```css
:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1512;
  --bg-card: #1f1a15;
  --text-primary: #f4ede4;
  --text-secondary: #9a8e82;
  --accent-primary: #e8a838;    /* Dorado cálido */
  --accent-secondary: #d4583a;  /* Terracota */
  --accent-gradient: linear-gradient(135deg, #e8a838, #d4583a);
  --border-subtle: rgba(255, 255, 255, 0.05);
}
```

---

## 🔥 Cubic Bezier Curves de Élite

NO uses `ease-in-out` genérico. Estas curvas dan personalidad premium:

```css
:root {
  /* Suave y elegante (para reveals) */
  --ease-reveal: cubic-bezier(0.65, 0, 0.35, 1);
  
  /* Snap con rebote (para interacciones) */
  --ease-snap: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Salida dramática (para exits) */
  --ease-dramatic: cubic-bezier(0.76, 0, 0.24, 1);
  
  /* Entrada natural (para entradas de scroll) */
  --ease-natural: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Ultra suave (para parallax) */
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## ⚠️ Reglas Críticas de Rendimiento

1. **NUNCA** animes propiedades que triggean layout (`width`, `height`, `top`, `left`, `margin`). Usa SOLO `transform` y `opacity`.
2. **SIEMPRE** usa `will-change: transform` en elementos que se animan con scroll (pero quítalo cuando no se animen).
3. **OBLIGATORIO** respetar `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
4. **CLEANUP** obligatorio: Usa `useGSAP` (no `useEffect`) para que GSAP limpie automáticamente ScrollTriggers al desmontar.
5. **NUNCA** uses CSS `transition` en propiedades que GSAP está animando — causa conflicto y jank.
