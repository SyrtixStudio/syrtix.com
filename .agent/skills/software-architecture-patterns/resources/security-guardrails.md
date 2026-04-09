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

## 🚀 Buenas Prácticas Pro (Reporting Insights)
- [ ] **Manejo de Errores Ciego:** NUNCA devolver el stack trace al cliente. Los errores de producción deben ser genéricos (ej: "Internal Server Error") para evitar filtrar rutas o lógica de BD.
- [ ] **Cero Console.log:** En producción, usar loggers profesionales como `Winston` o `Pino`. Prohibido dejar `console.log` que revelen rutas o variables de entorno.
