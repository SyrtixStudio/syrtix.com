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
