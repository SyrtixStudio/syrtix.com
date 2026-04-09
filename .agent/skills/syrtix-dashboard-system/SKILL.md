---
name: syrtix-dashboard-system
description: Sistema avanzado para construir dashboards de alto rendimiento, tiempo real y visualización inteligente de datos.
---

# 📊 Syrtix Dashboard System (Skill)

Este sistema permite transformar datos crudos (Google Sheets, PocketBase, JSON APIs) en tableros de control visualmente impactantes y dinámicos.

## 📋 Arquitectura de Datos (The Brain)

### 1. Extracción Inteligente
- **Google Sheets:** Uso del modo export-CSV para acceso sin API Key.
- **PocketBase SDK:** Fetching reactivo de colecciones.
- **Parseo Manual:** Limpieza de datos, conversión de tipos (Date/Number) y validación de nulidad.

### 2. Lógica de Visualización
- **KPI Cards:** Para métricas atómicas (Totales, Porcentajes de cambio).
- **Chart.js Engine:** Gráficos de tendencias (Líneas) y comparativas (Barras) con paletas de color dinámicas.
- **Actualización Asíncrona:** Intervalos de refresco de 30s con indicadores visuales de "Cargando...".

## 🎨 Estándar Estético de Dashboards
- **Layout:** CSS Grid responsivo (3 col en desktop, 1 col en mobile).
- **Variables :root:** Definición de paleta semántica (Success, Danger, Warning, Primary).
- **Filtros Dinámicos:** Implementación de selectores que afectan a todos los componentes simultáneamente.

## ⚠️ Reglas de Oro
1. **No al Full Reload:** Los datos se actualizan, no la página.
2. **Contexto de Error:** Si la conexión falla, mostrar un estado de "Reintentando..." elegante.
3. **Métricas con Sentido:** No añadir gráficos de relleno. Si el dato no aporta valor, no se visualiza.
