# Etapa 1: Construcción
FROM node:lts AS builder

# Activar pnpm usando Corepack (incluido en Node.js LTS de forma nativa)
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar la caché de Docker)
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Argumentos de construcción para variables de entorno (Vite requiere que estén presentes en el build)
ARG VITE_WHATSAPP_LINK
ARG VITE_WHATSAPP_PHONE
ARG VITE_WHATSAPP_PHONE_FORMATTED
ARG VITE_FACEBOOK_URL
ARG VITE_INSTAGRAM_URL
ARG VITE_LINKEDIN_URL
ARG VITE_YOUTUBE_URL
ARG VITE_CONTACT_EMAIL

# Convertir los argumentos en variables de entorno para el proceso de build
ENV VITE_WHATSAPP_LINK=$VITE_WHATSAPP_LINK
ENV VITE_WHATSAPP_PHONE=$VITE_WHATSAPP_PHONE
ENV VITE_WHATSAPP_PHONE_FORMATTED=$VITE_WHATSAPP_PHONE_FORMATTED
ENV VITE_FACEBOOK_URL=$VITE_FACEBOOK_URL
ENV VITE_INSTAGRAM_URL=$VITE_INSTAGRAM_URL
ENV VITE_LINKEDIN_URL=$VITE_LINKEDIN_URL
ENV VITE_YOUTUBE_URL=$VITE_YOUTUBE_URL
ENV VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL

# Construir la aplicación para producción
RUN pnpm run build

# Etapa 2: Servidor de producción con Nginx
FROM nginx:alpine

# Copiar el resultado de la compilación al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración de Nginx para manejar correctamente las rutas de React Router
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
