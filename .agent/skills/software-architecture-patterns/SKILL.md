---
name: software-architecture-patterns
description: Core architecture templates, database schemas, and security checklists for the /dev-architect agent.
---

# 🏛️ Software Architecture Patterns (Skill)

Esta es la base de conocimientos y herramientas principales para el agente **Dev-Architect** de Syrtix. Contiene los modelos estándar comprobados para crear aplicaciones web robustas.

## 📦 Contenido de esta Skill

### 1. Plantillas de Bases de Datos (PocketBase/SQL)
Ubicación: `resources/pocketbase-crm-schema.json`
- Utiliza esta plantilla como punto de partida cuando el usuario solicite un CRM o sistema de gestión de usuarios. Incluye manejo de roles, seguridad básica y relaciones.

### 2. Estándares de Código Limpio (Clean Code & Modular Data)
Ubicación: `resources/clean-code-standards.md`
- Define la ley de Syrtix: **Feature-Based Architecture** obligatoria y la **Estrategia de Modular Data** para bilingüismo y escalabilidad. Prohíbe el hardcoding de contenido denso.

### 3. Checklists de Seguridad (Security Guardrails)
Ubicación: `resources/security-guardrails.md`
- Contiene las validaciones obligatorias de seguridad antes de autorizar código de producción.

### 4. Planos de Código Seguro (Security Blueprints)
Ubicación: `resources/security-blueprints.md`
- Fragmentos de código listos para usar (Helmet, CORS, JWT, Rate-limit) para Node.js/Express.

## ⚙️ Cómo usar esta Skill
- Cuando se te pida diseñar una base de datos para retención de clientes o gestión, lee inmediatamente el archivo de la plantilla del CRM.
- Al revisar PRs o proponer implementaciones, valida el código contra el `security-guardrails.md` y asegura el cumplimiento de la regla de **Gestión de Contenidos Híbrida** en `clean-code-standards.md`.

## 🛠 Puntos de Integración con el Sistema
- **Infraestructura:** Todos los diseños asumen un despliegue mediante Docker o Coolify.
- **Frontend Stack:** La arquitectura backend diseñada debe favorecer el consumo mediante Next.js Server Components.
