---
name: qa-playbooks
description: Arsenal completo de testing, depuración sistemática, code review con Confidence Scoring y TDD estricto para el /qa-tester.
---

# 🧨 QA Playbooks (The Definitive Testing Arsenal)

Esta es la ametralladora de pruebas del Agente `/qa-tester`. Usada en la última milla del desarrollo antes de entregar el proyecto al cliente o mandarlo a producción.

---

## 📋 The "Doomsday" Checklist (Pruebas de Frontera)

Cuando inspecciones un código, piensa en cómo un usuario malintencionado o distraído trataría tu aplicación.

### 1. Pruebas de Formularios (Pagos, Contacto, CRM)
- [ ] **Ataque de longitud extrema:** Intentar poner 15,000 caracteres en un campo de nombre para ver si la base de datos crashea (Debería haber un `maxLength`).
- [ ] **Ataque Numérico Negativo:** Poner una cantidad de "-5" o "1e9" en un input de precio de un carrito de compras.
- [ ] **Test del Doble Click:** Hacer click 15 veces seguidas rápido sobre el botón de Submit ("Pagar" o "Enviar form"). El código frontend DEBE tener `disabled={isSubmitting}` en React para evitar multiplicar llamadas a la API o cobrar doble.
- [ ] **Inyección HTML/Script:** Poner `<script>alert('xss')</script>` en campos de texto. Debe renderizarse como texto plano, nunca como HTML.
- [ ] **Campos opcionales vacíos:** Enviar el form con TODOS los campos opcionales vacíos. ¿La app explota?
- [ ] **Copy-paste especial:** Pegar texto con caracteres Unicode raros (emojis, RTL text, zero-width spaces). ¿El layout se rompe?

### 2. Performance & Code Health (React Doctor)
- [ ] **Diagnóstico Automatizado:** Utiliza `npx -y react-doctor ./src` para identificar anti-patrones de React (useEffect innecesarios, prop drilling, etc.).
- [ ] Imágenes pesadas: ¿Existe algún `<img src="hi-res.png">` en vez del optimizado `<Image />` de Next.js u optimización nativa con WebP?
- [ ] Bloqueo de Re-renderizados continuos: Identificar en el código de React dependencias infinitas en un `useEffect`.
- [ ] **Bundle Analysis:** ¿Hay librerías enormes importadas completas? (ej: todo lodash vs lodash/debounce)
- [ ] **Memory Leaks:** ¿Los event listeners, intervals y subscriptions se limpian en unmount?

### 3. Responsive Nightmare Test
- [ ] ¿Qué pasa en un modelo como el iPhone SE (`375px`) con el menú de navegación?
- [ ] ¿Hay scroll horizontal no deseado cuando una tabla tiene muchas columnas? Verificar contenedor `overflow-x-auto`.
- [ ] ¿Los textos largos rompen el layout? (ej: un nombre de producto de 200 caracteres)
- [ ] ¿Los modales son usables en mobile? (¿Se puede cerrar? ¿Se ve el content completo?)

### 4. Pruebas de Deserialización y Server Actions (CVE-2025-55182)
> ⚠️ Aplicar SOLO cuando el proyecto usa React 19 + Server Components

- [ ] **Verificación de Validación:** Toda Server Action (`"use server"`) debe tener un esquema `zod` como primera línea. Si falta → **Bug Crítico de seguridad**.
- [ ] **Fuzzing de Argumentos:** Intentar invocar Server Actions con tipos de datos inesperados (objetos anidados profundos, arrays de 10,000 elementos, strings de 1MB, valores `__proto__` o `constructor`). La función debe rechazarlos limpiamente.
- [ ] **Payload Malformado HTTP:** Si el proyecto expone endpoints RSC, enviar POST requests con payloads Flight Protocol malformados para verificar que el servidor no crashea ni ejecuta código arbitrario.
- [ ] **Verificación de Versiones:** Ejecutar `node -e "console.log(require('react/package.json').version)"` y verificar que NO sea 19.0.0, 19.1.0, 19.1.1 o 19.2.0. Si lo es → **Alerta Roja: Actualización de emergencia**.
- [ ] **Prototype Pollution check:** Enviar `{"__proto__": {"admin": true}}` como input a formularios y Server Actions para verificar que no contaminan la cadena de prototipos.

---

## ⚙️ Protocolos "Superpowers" (Framework de Depuración de Élite)

Estos protocolos están extraídos del framework de Jesse Vincent (355,000+ instalaciones). Son la metodología de depuración más robusta disponible.

### 5. Depuración Sistemática en 4 Fases (Root-Cause Tracing)
Si un código o ruta falla (Bug Crítico), **ESTÁS OBLIGADO a seguir estas 4 fases en orden estricto.**

> **PROHIBIDO:** "Intenta cambiar esto a true y ve si funciona" — eso es un parche, no un diagnóstico.

**Fase 1 — Aislamiento:**
- Reproduce el fallo con el caso de prueba más simple posible
- Documenta: input exacto, output esperado, output real, entorno (browser, OS, node version)

**Fase 2 — Root-Cause Tracing:**
- Lee el stack trace COMPLETO, de arriba a abajo
- Usa breakpoints, `console.trace()`, y el debugger del browser
- Identifica la CAUSA RAÍZ, no el síntoma
- 📄 Referencia: `systematic-debugging/root-cause-tracing.md`

**Fase 3 — Defensa en Profundidad:**
- ¿Si esta función recibe un input inesperado EN OTRO LUGAR del código, también fallará?
- Si sí → el fix debe ser más amplio (validación en la capa de servicio)
- 📄 Referencia: `systematic-debugging/defense-in-depth.md`

**Fase 4 — Verificación y Regresión:**
- Escribe un test que reproduzca el bug ANTES del fix (🔴 test rojo)
- Aplica el fix → el test debe pasar (🟢 test verde)
- Ejecuta toda la suite de tests para verificar que nada se rompió (regresión)

### 🚨 Regla de los 3 Fallos → Escalación Automática
**Si después de 3 intentos de fix el bug persiste:**
1. **STOP.** No se intenta un 4to fix
2. Se escala al `/dev-architect` vía el PM
3. Se asume que el problema es **estructural** (diseño, acoplamiento, abstracción incorrecta)
4. El Arquitecto responde con un ADR (Architecture Decision Record)

### 6. Test-Driven Development Estricto (TDD)
Cuando el Project Manager envíe trabajo al Frontend o al Arquitecto Dev, tú (el QA) los vigilarás para que usen el ciclo TDD inquebrantable:

**Ciclo Sagrado: 🔴 Rojo → 🟢 Verde → 🔄 Refactor**
1. **🔴 Rojo:** Escribe la prueba PRIMERO. Debe fallar (porque el código no existe aún)
2. **🟢 Verde:** Escribe el MÍNIMO código necesario para que la prueba pase
3. **🔄 Refactor:** Limpia, optimiza y mejora sin cambiar el comportamiento

📄 Referencia completa: `test-driven-development/SKILL.md`
📄 Anti-patrones de testing: `test-driven-development/testing-anti-patterns.md`

---

## 🎯 Confidence Scoring System (Sistema de Confianza)
> Extraído del Code Review de Anthropic (212,000+ instalaciones)

### Reglas del Sistema
1. **Solo se reportan issues con Confidence ≥ 70** (excepto seguridad, que se reporta desde 50)
2. **Prohibido reportar preferencias de estilo como bugs** (ejs: "yo hubiera usado const en vez de let")
3. **Cada issue debe ser actionable** — si no puedes proponer un fix concreto, no es un issue

### Escala de Confianza

| Score | Nivel | Criterio | Acción |
|---|---|---|---|
| **90-100** | 🔴 Certeza | Bug reproducible con evidencia. Causa raíz identificada | **BLOQUEA entrega** |
| **70-89** | 🟠 Alto | Muy probable bug. Falta 1 dato para certeza total | **Reportar con nota** |
| **50-69** | 🟡 Medio | Sospechoso pero sin evidencia sólida | Solo si es de seguridad |
| **0-49** | ⚪ Bajo | Opinión, preferencia de estilo, "me parece raro" | **NO reportar** |

### Formato de Bug Report

```markdown
## 🐛 [CONF: 95] Bug — [Nombre descriptivo]
- **Categoría:** [Seguridad | UX | Performance | Logic | Visual | A11Y]
- **Severidad:** [Crítico | Alto | Medio | Bajo]
- **Archivo:** `src/components/Example.jsx:L45`
- **Reproducción:**
  1. Abrir la página X
  2. Hacer click en Y
  3. Observar que Z explota
- **Root Cause:** [Análisis técnico de por qué falla]
- **Fix Sugerido:** [Código o dirección del fix]
- **Tests Afectados:** [Qué tests agregar o modificar]
```

---

## 🔍 Code Review Multi-Ángulo (Las 5 Lentes)

Cuando revises un PR, componente o módulo completo, aplica las 5 lentes en paralelo. Cada lente tiene sus propios criterios:

### Lente 1: 🔒 Seguridad
- Server Actions sin validación Zod
- Datos del usuario renderizados sin sanitización (XSS)
- Secrets o API keys en el código fuente
- Prototype pollution en objetos `req.body`
- CVE-2025-55182 (si aplica React 19 + RSC)

### Lente 2: 🐛 Bugs Lógicos
- Off-by-one errors en loops y arrays
- Race conditions en async/await
- null/undefined no manejados (optional chaining faltante)
- Comparaciones con `==` en vez de `===`
- Promises sin error handling (`.catch()` o `try/catch`)

### Lente 3: ⚡ Performance
- Waterfalls (awaits secuenciales que deberían ser `Promise.all`)
- Re-renders innecesarios (estado derivado en useEffect)
- Bundle bloat (imports de librerías completas)
- Event listeners sin cleanup en unmount
- Imágenes sin lazy loading ni formato optimizado

### Lente 4: ♿ Accesibilidad
- Imágenes sin `alt` text descriptivo
- Formularios sin `<label>` asociados
- Contraste de colores insuficiente (WCAG AA mínimo)
- Navegación por teclado rota
- Focus traps en modales y dropdowns

### Lente 5: 🎨 Calidad Visual (WOW Audit)
- ¿Pasa el checklist Anti AI-Slop de `syrtix-ui-system`?
- ¿Tiene al menos 3 patrones de animación de `syrtix-wow-animations`?
- ¿La tipografía usa pares Display + Body de calidad?
- ¿Es responsive en 375px sin scroll horizontal?
- ¿Los micro-interacciones están en todos los elementos interactivos?

---

## 🛡️ Saltar Reviews Innecesarios
> Para evitar ruido, el QA NO revisa:
- PRs marcados como `draft`
- Commits automatizados (bots, CI/CD)
- Cambios exclusivos en `.md` o `.txt` (documentación pura)
- Cambios en archivos de configuración menores (`.prettierrc`, etc.)

---

## 🛠 Modo de Operación
Cuando el PM te asigne la verificación de un código/componente:
1. Abre este Playbook
2. Ejecuta la Doomsday Checklist relevante
3. Aplica las 5 Lentes del Code Review
4. Usa TDD y Systematic Debugging si hay bugs
5. Asigna Confidence Scores a cada issue encontrado
6. Entrega un reporte brutalmente honesto con formato estándar
