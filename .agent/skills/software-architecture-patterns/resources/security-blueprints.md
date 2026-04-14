# 🛡️ Syrtix Security Blueprints (Node.js)

Usa estos fragmentos de código como base obligatoria para todas las APIs de Syrtix.

## 1. Cabeceras y CORS Estricto
```javascript
const helmet = require('helmet');
const cors = require('cors');

// Configuración de Seguridad
app.use(helmet()); 

const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'https://syrtix.com', 
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
```

## 2. Sanitización (Express-Validator)
```javascript
const { body, validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Ejemplo de uso:
// app.post('/api/data', body('email').isEmail().normalizeEmail(), validateRequest, handler);
```

## 3. Rate Limiting (Protección Anti-Bots)
```javascript
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Límite por IP
  message: { error: "Demasiadas peticiones desde esta IP, intenta en 15 minutos." }
});

app.use('/api/auth/', apiLimiter);
```

## 4. Autenticación Robusta (JWT)
```javascript
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Acceso denegado. No hay token.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Token inválido o expirado.' });
  }
};
```

## 5. Auditoría y HTTPS

### A. Forzado de HTTPS (Vía Código/Middleware)
- **Producción:** En plataformas como Cloudflare/Coolify, el SSL se gestiona en la capa de red.
- **Servidor Manual:** Si el servidor requiere gestión directa de SSL, usa este bloque:

```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('llave-privada.pem'),
  cert: fs.readFileSync('certificado.pem')
};

https.createServer(options, app).listen(443);
```

### B. Auditores de Dependencias
- **CI/CD:** El DevOps debe ejecutar `pnpm audit` antes de cada despliegue.

## 6. Protección contra Deserialización Insegura en RSC (CVE-2025-55182)

> ⚠️ Si el proyecto usa React 19 + Server Components, estos bloques son **OBLIGATORIOS**.

### A. Validación de Server Actions con Zod
```javascript
// src/lib/actions/contact.js
'use server';
import { z } from 'zod';

// SIEMPRE definir el esquema ANTES de la acción
const ContactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().max(254),
  message: z.string().min(10).max(2000).trim(),
});

export async function submitContact(formData) {
  // PASO 1: Validar y sanitizar ANTES de tocar la DB
  const raw = Object.fromEntries(formData);
  const result = ContactSchema.safeParse(raw);

  if (!result.success) {
    return { error: 'Datos inválidos.', details: result.error.flatten() };
  }

  // PASO 2: Solo datos validados tocan la lógica de negocio
  const { name, email, message } = result.data;
  // ... lógica segura con datos limpios
}
```

### B. Script CI para Bloqueo de Versiones Vulnerables
```bash
#!/bin/bash
# ci/check-react-version.sh
# Bloquea el despliegue si React está en una versión con CVE-2025-55182

VULNERABLE_VERSIONS=("19.0.0" "19.1.0" "19.1.1" "19.2.0")
REACT_VERSION=$(node -e "console.log(require('react/package.json').version)")

for v in "${VULNERABLE_VERSIONS[@]}"; do
  if [ "$REACT_VERSION" == "$v" ]; then
    echo "🚨 BLOQUEADO: React $REACT_VERSION es vulnerable a CVE-2025-55182 (React2Shell)"
    echo "   Actualiza a la versión parcheada más reciente: https://react.dev"
    exit 1
  fi
done

echo "✅ React $REACT_VERSION no está en la lista de versiones vulnerables conocidas."

# Auditoría general de CVEs críticos
pnpm audit --audit-level=critical
if [ $? -ne 0 ]; then
  echo "🚨 BLOQUEADO: Se encontraron vulnerabilidades críticas. Ejecuta 'pnpm audit' para detalles."
  exit 1
fi
```

### C. Verificación de Paquetes RSC Peligrosos
```javascript
// ci/check-rsc-packages.js
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

const RSC_PACKAGES = [
  'react-server-dom-webpack',
  'react-server-dom-parcel',
  'react-server-dom-turbopack'
];

RSC_PACKAGES.forEach(name => {
  if (allDeps[name]) {
    console.warn(`⚠️  ALERTA: "${name}" detectado. Verifica que esté parcheado contra CVE-2025-55182.`);
  }
});
```
