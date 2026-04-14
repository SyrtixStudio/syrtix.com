# 🛡️ Syrtix Security Guardrails

## 1. Authentication & Authorization
- [ ] No exponer Secretos o claves de API públicas en el frontend (Next.js config, `.env.local` sin prefijo `NEXT_PUBLIC_`).
- [ ] Implementar principio de Menor Privilegio (Ej. List Rules de base de datos solo devuelven datos pertinentes al `user_id` en sesión).
- [ ] Todos los endpoints del Backend requieren verificación de sesión válida, excepto `/login` o `Webhooks` verificados.

## 2. Prevención de Inyecciones y Manejo de Datos
- [ ] Uso exclusivo de ORMs o Query Builders tipados (Prisma, PocketBase SDK).
- [ ] **Sanitización Obligatoria:** En Node/Express, usar `express-validator` o `zod` para limpiar cada input del usuario antes de que toque la lógica de negocio o la DB (Mitigación total de SQLi y XSS).

## 3. APIs y Control de Tráfico
- [ ] **Middleware de Seguridad:** Implementar `Helmet.js` para configurar cabeceras HTTP de seguridad automáticamente.
- [ ] **CORS Estricto:** NUNCA usar `origin: "*"`. Siempre definir los dominios específicos de Syrtix.
- [ ] **Rate Limiting:** Implementar límite de velocidad (`express-rate-limit`) en todos los endpoints de la API para prevenir ataques de fuerza bruta y DoS.
- [ ] Los Webhooks de pagos (Stripe, PayPal) deben requerir firma criptográfica verificada.

## 4. Despliegue (Coolify / Docker)
- [ ] Verificar que la imagen de contenedor Docker usada sea específica y mínima (ej. `node:20-alpine` en lugar de `node:latest`).
- [ ] Nunca bindear la base de datos a `0.0.0.0` sin requerir autenticación fuerte o VPN. Mantener la DB en una Docker Network privada si es posible.

## 5. Auditoría de Terceros y Skills (Prompt Injection Risk)
- [ ] **Escaneo de Reputación:** Antes de recomendar o instalar cualquier skill, herramienta o CLI de terceros (ej: Vercel Skills), se debe verificar la reputación del autor y las advertencias de seguridad en el archivo `SKILL.md` o `README.md`.
- [ ] **Mitigación de Inyección de Prompts Indirectos:** Evaluar si la herramienta permite la ejecución de comandos basados en contenido generado por usuarios externos. Si la herramienta permite instalar o ejecutar scripts desde fuentes públicas, marcar como **High Risk**.
- [ ] **Aislamiento de Entorno:** Nunca ejecutar herramientas de terceros que requieran acceso total al sistema de archivos a menos que sea en un entorno controlado o tras una revisión manual de los archivos `.sh`, `.js` o `.py` que la componen.

## 6. React Server Components & Deserialización (CVE-2025-55182 — "React2Shell")
> ⚠️ SECCIÓN DE MÁXIMA PRIORIDAD — CVSS 10.0

- [ ] **PROHIBICIÓN DE VERSIONES VULNERABLES:** React 19.0.0, 19.1.0, 19.1.1 y 19.2.0 están afectadas por CVE-2025-55182 (RCE sin autenticación vía Flight Protocol). **NUNCA** desplegar un proyecto con estas versiones.
- [ ] **Pin de Versión Obligatorio:** Si el proyecto usa React 19, se debe fijar (`pin`) a una versión parcheada confirmada en el [advisory oficial de React](https://react.dev). Usar `"react": "19.X.Y"` exacto, **NO** `"^19.0.0"` con caret.
- [ ] **Validación de Server Actions:** Toda Server Action (`"use server"`) debe validar y sanitizar sus argumentos con `zod` o `express-validator` antes de cualquier lógica. Los argumentos vienen del cliente y son input no confiable.
- [ ] **Auditoría de Paquetes RSC:** Verificar que `react-server-dom-webpack`, `react-server-dom-parcel` y `react-server-dom-turbopack` estén en versiones parcheadas si están presentes en el `package.json` o lock file.
- [ ] **Gate de Despliegue:** `pnpm audit --audit-level=critical` debe ejecutarse en el CI/CD y **bloquear el despliegue** si detecta cualquier CVE con CVSS ≥ 9.0.
- [ ] **Principio de Deserialización Segura:** NUNCA confiar en datos serializados que llegan del cliente (Flight payloads, FormData de Server Actions, cookies de sesión). Validar estructura y tipos antes de procesar.

## 🚀 Buenas Prácticas Pro (Reporting Insights)
- [ ] **Manejo de Errores Ciego:** NUNCA devolver el stack trace al cliente. Los errores de producción deben ser genéricos (ej: "Internal Server Error") para evitar filtrar rutas o lógica de BD.
- [ ] **Cero Console.log:** En producción, usar loggers profesionales como `Winston` o `Pino`. Prohibido dejar `console.log` que revelen rutas o variables de entorno.
