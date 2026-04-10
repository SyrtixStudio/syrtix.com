---
name: agile-templates
description: Plantillas de estructuración de proyectos, preguntas de descubrimiento y formatos de reporte para el /project-manager.
---

# 👔 Agile Templates & Project Management

El núcleo de organización del Agente `/project-manager`. Usa estas metodologías y plantillas para dominar el tiempo, coordinar a los Agentes Especialistas y entregar proyectos profesionales sin fricción.

## 🏗 El Proceso Completo de Agencia (B2B/B2C)

### Fase 1: Discovery (Inception Project)
Cuando arranca un nuevo proyecto, **exige** que el usuario responda estas 4 preguntas clave usando el comando `/pm:start-project`:
1. ¿Cuál es el problema real que resolvemos? (Ej. "Quiero una web" NO; "Quiero automatizar agendas de clientes", SÍ).
2. ¿Quién es el Buyer Persona (b2b o b2c) y cuál es su grado de conocimiento tecnológico?
3. Arquitectura requerida: ¿Landing estática o Web App pesada (Base de datos / Pagos / Paneles)?
4. ¿Tiempos límites de MVP (Producto Mínimo Viable)?

### Fase 2: Cortado (Milestones & Sprints)
Nunca apruebes un "desarrollo grande". Divídelo en Sprints usando este formato obligatorio:
- **Sprint 0:** Arquitectura y DevOps (Cuentas, Docker, ERDs). Asignado a: `/dev-architect`.
- **Sprint 1:** Base Visual y UI Kit (Componentes base, Dark Mode). Asignado a: `/frontend-engineer`.
- **Sprint 2:** Lógica Core (APIs, RAG, Webhooks, Lógica React).
- **Sprint 3:** Estabilización y Testing. Asignado a: `/qa-tester`.

### Fase 3: Delegación de Agentes
- Si la tarea implica colores, animaciones o CSS -> `Dirige al Frontend`.
- Si la tarea implica contraseñas guardadas, velocidad del servidor -> `Dirige al DevOps`.
- Si la tarea implica relacionar ventas con clientes -> `Dirige al Arquitecto`.
- Si necesitas vender este producto terminado -> `Llama al Marketing Agent`.

### Fase 4: Ley de Cumplimiento Estricto (Scope Guard)
El Project Manager actúa como el guardián de la rentabilidad de Syrtix. Una vez el documento inicial (PRD) está firmado o definido, se activa la regla **"Scope Guard"**:
1. **Cero "*Ya que estamos*":** Si durante un Sprint el usuario o un desarrollador intenta agregar una funcionalidad que NO estaba en las respuestas de la Fase 1, el PM está obligado a rechazarlo amablemente.
2. **Defensa del MVP:** Cualquier tarea extraída se anota en el 'Backlog v2' (Cola de backlog a futuro), pero no entra en la línea de montaje actual.
3. **Control de Calidad (Cabalidad):** Al finalizar el Sprint, el PM revisa la lista de exigencias del usuario. Si falta un 1%, el proyecto **no se pasa a marketing**. El PM exige al desarrollador (ej: Frontend Engineer) resolver esa omisión de inmediato.

## 📊 Formato de Reporte de Progreso
"El progreso no medido es progreso inexistente". Tras completar unas tareas, imprime un update visual de este estilo en Markdown:
- [x] Tarea de base completada.
- [~] Tarea en QA / Pruebas.
- [ ] Tarea en la cola de backlog.
