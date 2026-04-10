---
name: qa-playbooks
description: Arsenal para la rotura y verificación del código. Contiene guías para pruebas de estrés, casos borde y manual del /qa-tester.
---

# 🧨 QA Playbooks (Testing & Assurance)

Esta es la ametralladora de pruebas del Agente `/qa-tester`. Usada en la última milla del desarrollo antes de entregar el proyecto al cliente o mandarlo a producción.

## 📋 The "Doomsday" Checklist (Pruebas de Frontera)

Cuando inspecciones un código, piensa en cómo un usuario malintencionado o distraído trataría tu aplicación.

### 1. Pruebas de Formularios (Pagos, Contacto, CRM)
- [ ] **Ataque de longitud extrema:** Intentar poner 15,000 caracteres en un campo de nombre para ver si la base de datos crashea (Debería haber un `maxLength`).
- [ ] **Ataque Numérico Negativo:** Poner una cantidad de "-5" o "1e9" en un input de precio de un carrito de compras.
- [ ] **Test del Doble Click:** Hacer click 15 veces seguidas rápido sobre el botón de Submit ("Pagar" o "Enviar form"). El código frontend DEBE tener `disabled={isSubmitting}` en React para evitar multiplicar llamadas a la API o cobrar doble.

### 2. Performance & Code Health (React Doctor)
- [ ] **Diagnóstico Automatizado:** Utiliza `npx -y react-doctor ./src` para identificar anti-patrones de React (useEffect innecesarios, prop drilling, etc.).
- [ ] Imágenes pesadas: ¿Existe algún `<img src="hi-res.png">` en vez del optimizado `<Image />` de Next.js u optimización nativa con WebP?
- [ ] Bloqueo de Re-renderizados continuos: Identificar en el código de React dependencias infinitas en un `useEffect`.

### 3. Responsive Nightmare Test
- [ ] ¿Qué pasa en un modelo como el iPhone SE (`375px`) con el menú de navegación?
- [ ] ¿Hay scroll horizontal cuando una tabla Paga tiene muchas columnas? Obligar al Dev Frontend a poner un contenedor `overflow-x-auto`.

## ⚙️ Protocolos "Superpowers" (Extraídos)
Acabamos de mejorar este agente con dos de los protocolos de código más potentes del mundo. En lugar de depurar al azar, aplica obligatoriamente estas carpetas adjuntas:

### 4. Depuración Sistemática (Root-Cause Tracing)
Si un código o ruta falla (Bug Crítico), **ESTÁS OBLIGADO a seguir las directrices en `/systematic-debugging/SKILL.md`**.
*   **Diagnóstico sobre Parches:** No propones parches ("intenta cambiar esto a true"). Primero aíslas el caso de prueba, lees la traza de raíz (stack trace) y aplicas "Defensa en Profundidad".

### 5. Test-Driven Development Estricto (TDD)
Cuando el Project Manager envíe trabajo al Frontend o al Arquitecto Dev, tú (el QA) los vigilarás para que usen la ruta `/test-driven-development/SKILL.md`. 
*   **Ciclo Inquebrantable:** Escribir la prueba fallida (Rojo). Escribir código mínimo (Verde). Refactorizar. 

## 🛠 Modo de Operación
Cuando el PM te asigne la verificación de un código/componente, abre este Playbook, corre las simulaciones mentalmente con el código fuente (y obliga a usar TDD y Systematic Debugging) y entrega un reporte brutalmente honesto.
