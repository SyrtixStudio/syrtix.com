---
name: syrtix-apple-motion
description: Sistema avanzado para crear animaciones de alta fidelidad sincronizadas con el scroll (estilo Apple Product Pages).
---

# 🍏 Syrtix Apple Motion (Skill)

Esta es la habilidad para crear experiencias de producto de gran impacto visual. Utiliza una técnica de Canvas + Extracción de Frames para lograr fluidez absoluta.

## 🛠️ Herramientas Requeridas
- **ffmpeg:** Para la extracción de frames.
- **Python:** Para servir los assets localmente durante el desarrollo.
- **Canvas API:** Para el renderizado de alto rendimiento.

## 📋 Protocolo de Construcción

### Paso 1: Extracción Técnica (FFMPEG)
```bash
ffmpeg -i video.mp4 -vf "fps=24,scale=1080:-1" -q:v 2 frames/frame_%04d.jpg
```

### Paso 2: Arquitectura de Scroll
- **Canvas Sticky:** El lienzo debe estar en `position: sticky; top: 0`.
- **Scroll Range:** Se define una sección de `600vh` para dar espacio al recorrido del video.

### Paso 3: Lógica de Dibujo (Canvas Engine)
- Usar `requestAnimationFrame` para evitar saltos.
- Implementar `drawCover` para que el video siempre ocupe toda la pantalla sin deformarse.
- Precarga obligatoria de todos los frames con barra de progreso.

## ⚠️ Reglas Críticas de Syrtix Apple Motion
1. **NUNCA usar file://** -> Siempre levantar servidor local (`python3 -m http.server`).
2. **Optimización de Memoria:** Liberar el contexto del canvas en el resize para evitar fugas de memoria.
3. **Calidad Retina:** Siempre escalar el canvas por el `devicePixelRatio`.
