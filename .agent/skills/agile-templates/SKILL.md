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

## 📊 Formato de Reporte de Progreso
"El progreso no medido es progreso inexistente". Tras completar unas tareas, imprime un update visual de este estilo en Markdown:
- [x] Tarea de base completada.
- [~] Tarea en QA / Pruebas.
- [ ] Tarea en la cola de backlog.
