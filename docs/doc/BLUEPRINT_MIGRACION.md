# 🚀 Blueprint de Migración: Estándar SyrtixStudio
Este documento define el estándar técnico oficial para el despliegue de sitios web de la agencia **SyrtixStudio** en infraestructura propia (Hetzner + Coolify).

## 1. Estructura del Código (Frontend SPA)
Todos los proyectos nuevos o migrados deben seguir este estándar de construcción:
*   **Framework:** React + Vite.
*   **Gestor de Paquetes:** `pnpm`.
*   **Backend (BaaS):** PocketBase (desplegado en el mismo VPS de Hetzner).
*   **Servicio de Datos:** Singleton en `src/lib/pocketbase.js`.

## 2. Configuración de Repositorio (GitHub)
*   **Organización:** `SyrtixStudio`.
*   **Nombre de Repo:** `dominio.com` (ej: `syrtix.com`).
*   **Estatus:** Privado o público (según cliente), pero siempre bajo la marca de la agencia.

## 3. Configuración del Despliegue (Coolify v4)
Para garantizar la máxima robustez y evitar errores de scripts automáticos, usar siempre el **Build Pack de Docker**.

### Ajustes en la pestaña "Configuration":
*   **Build Pack:** `Dockerfile`.
*   **Dockerfile Location:** `/Dockerfile`.
*   **Port:** `80` (muy importante, ya que usamos Nginx interno).
*   **URL (FQDN):** `https://dominio.com`.

### Ajustes en la pestaña "Secrets":
*   Inyectar siempre las variables de entorno necesarias (ej: `VITE_POCKETBASE_URL`) marcando el check de **"Build Time"**.

## 4. El Dockerfile Estándar (Copiar y Pegar)
Este Dockerfile usa `corepack` para manejar `pnpm` y un servidor `nginx` ligero para producción.

```dockerfile
# Etapa 1: Construcción
FROM node:lts AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# Etapa 2: Servidor de producción (Nginx)
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Configuración para React Router
RUN echo 'server { \
    listen 80; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 5. Configuración de DNS (Cloudflare)
Para una propagación segura y protección SSL inmediata:
1.  **Modo DNS Only (Gris):** Durante el primer despliegue en Coolify para que el certificado SSL se genere correctamente si usas el de la plataforma.
2.  **Modo Proxied (Naranja):** Una vez que el sitio está vivo, activar el modo Proxy en los registros `A` de `@` y `www` para blindar el servidor con el escudo de Cloudflare.

## 6. Lista de Verificación (Checklist)
- [ ] Repositorio creado en SyrtixStudio.
- [ ] Dockerfile añadido a la raíz.
- [ ] PocketBase configurado en Hetzner con sus colecciones.
- [ ] Variables de entorno inyectadas en Coolify (Build Time).
- [ ] Puerto 80 configurado en Coolify.
- [ ] DNS apuntando a la IP de Hetzner (`5.78.86.159`).
- [ ] Verificar SSL (candadito verde).
- [ ] Borrar infraestructura antigua (Railway/Vercel).
