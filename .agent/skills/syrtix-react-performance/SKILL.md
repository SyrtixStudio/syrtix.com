---
name: syrtix-react-performance
description: Reglas críticas y definitivas de rendimiento en React y Next.js (Basado en Vercel Engineering). Uso obligatorio para el Frontend Engineer.
---

# ⚡ Syrtix React Performance System (World-Class Speed)

Este documento contiene la destilación de las **Reglas de Rendimiento de Vercel Engineering**, adaptadas para garantizar que los proyectos en Syrtix Studio (React/Vite/Next.js) carguen instantáneamente y no desperdicien recursos del cliente ni del servidor. Estas reglas son absolutas y deben aplicarse en todas las refactorizaciones y creación de nuevos componentes.

## 🔴 Nivel 1: Eliminación de Cuellos de Botella (Waterfalls) - CRÍTICO

El error más común es hacer que el código "espere" innecesariamente. Las promesas y llamadas a la API deben ser paralelas siempre que sea posible.

### 1. Iniciar Promesas Temprano, Esperar (Await) Tarde (`async-defer-await`)
**Regla:** Si tienes variables o lógica que no dependen de una promesa, ejecútalas *antes* del `await`. Si tienes dos promesas que no dependen entre sí, ejecútalas al mismo tiempo usando `Promise.all()`.
*   **Incorrecto:** `const a = await getA(); const b = await getB();` (Waterfall: *b* espera a *a* sin motivo).
*   **Correcto:** `const [a, b] = await Promise.all([getA(), getB()]);` (Carga en paralelo: el tiempo total es el de la más lenta, no la suma de ambas).

### 2. Condiciones Baratas Antes que Promesas Caras (`async-cheap-condition-before-await`)
**Regla:** Nunca hagas un `await` a una base de datos o API si una condición síncrona (como verificar si falta un ID o un parámetro de búsqueda corto) va a rechazar la operación de todos modos.
*   **Correcto:** Validar `if (!userId) return null;` ANTES de `await fetchUserData(userId)`.

### 3. Evitar Barrel Files en Importaciones (`bundle-barrel-imports`)
**Regla:** En proyectos grandes, exportar todo desde un index.js central (`export * from './components'`) hace que el bundler (Vite/Webpack) analice y, a veces, incluya código innecesario, inflando el tamaño del JavaScript inicial.
*   **Incorrecto:** `import { Button, Modal } from '../components'` (si 'components' es un barrel file gigante).
*   **Correcto:** `import { Button } from '../components/Button'` (Importación directa y limpia).

---

## 🟡 Nivel 2: Optimización del Bundle y Renderizado - ALTO

### 4. Carga Dinámica Estratégica (`bundle-dynamic-imports` / Lazy Loading)
**Regla:** Componentes pesados (Gráficos, Modales complejos, Bibliotecas enormes de mapas) que **no son visibles de inmediato en el viewport principal** (por debajo del "fold" o condicionales) NO deben estar en el bundle inicial.
*   **Acción:** Usa `React.lazy()` en Vite o `next/dynamic` en Next.js.
*   **Ejemplo:** `const HeavyChart = lazy(() => import('./HeavyChart'));` y envuélvelo en `<Suspense fallback={<Skeleton />}>`.
*   **Terceros:** Carga los scripts de Analytics, píxeles de Meta y chat widgets **DESPUÉS** de la hidratación (Hydration), no bloquees la carga inicial con ellos (`bundle-defer-third-party`).

### 5. Suspense para Streaming (`async-suspense-boundaries`)
**Regla:** El usuario no debe ver una pantalla en blanco. Envuelve los componentes que hacen fetch en componentes `<Suspense>` con un estado de carga (Skeleton) para que la UI "esqueleto" cargue inmediatamente y las distintas piezas "aparezcan" según vayan resolviendo sus datos, sin bloquear el resto de la página.

---

## 🟢 Nivel 3: Higiene de Memolización (Re-renders) - MEDIO-ALTO

### 6. Minimizar Estados y Efectos Innecesarios (`rerender-derived-state-no-effect`)
**Regla:** El 80% de los `useEffect` que usan los desarrolladores Junior son innecesarios. Si una variable puede calcularse basándose en el estado o las props existentes, calcúlala *durante el renderizado*, no sincronizándola en un `useEffect`.
*   **Incorrecto:** Usar `useEffect` para calcular `isFormValid` cada vez que cambian el email o el password. Efecto secundario inútil.
*   **Correcto:** `const isFormValid = email.includes('@') && password.length > 6;` calculado directamente en el cuerpo del componente.

### 7. Memolización Responsable (`rerender-memo` & `js-set-map-lookups`)
**Regla:** No envuelvas todo en `useMemo` o `useCallback`. Eso añade sobrecarga (overhead). USA memoria solo si:
*   Pasas el objeto/función como prop a un componente re-renderizado costoso envuelto en `React.memo`.
*   Estás haciendo un cálculo matemático grande o filtrando grandes arrays.
*   Dato: Para búsquedas recurrentes en listas largas, convierte el Array en un `Set` o `Map`. Buscar en un mapa es O(1), buscar en un array con `.find()` es O(N).

---

## ✅ Protocolo de Auditoría Rápida de Rendimiento
Antes de dar por finalizado un componente Frontend o RAG, el IA Engineer debe revisar:
- [ ] **Data Fetching:** ¿Están los fetch en paralelo o bloquean el hilo (waterfall)?
- [ ] **Bundle:** ¿Hay librerías pesadas (ej: Lottie, Three.js, Date-fns totales) cargándose en el hilo principal?
- [ ] **Renderizado:** ¿Hay `useEffects` que cambian el estado e invocan renderizados dobles que se pueden evitar calculando las variables al vuelo?
- [ ] **UI Resiliente:** ¿Hay estados de `<Suspense>` o Skeletons fluidos para evitar frustración visual?

---

## 📚 El Santo Grial (Las 69 Reglas Completas)
El resumen anterior contiene lo más urgente, pero he almacenado **TODO el documento oficial de Vercel (las 69 reglas exactas)** en esta misma carpeta, en el archivo:
📄 `VERCEL_AGENTS_RULES.md`

**IMPORTANTE:** Si te solicitan una auditoría profunda de rendimiento, un refactor crítico o solucionar un problema de velocidad, DEBES leer el archivo `VERCEL_AGENTS_RULES.md` para aplicar las reglas avanzadas de nivel 4, 5, 6, 7 y 8 (incluyendo Content Visibility, Optimización de SVGs y Caché de funciones).
