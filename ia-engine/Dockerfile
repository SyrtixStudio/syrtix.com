# Dockerfile para Syrtix AI Engine
FROM node:18-slim

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instalar pnpm y dependencias
RUN npm install -g pnpm && pnpm install --prod

# Copiar el resto de los archivos del motor
COPY . .

# Exponer el puerto del servidor
EXPOSE 3001

# Variable de entorno para entorno producción
ENV NODE_ENV=production

# Comando para arrancar el servidor
CMD ["node", "ia-engine/server.js"]
