# Plan de Despliegue y Correo Administrativo por Paquete

## Paquete 1: Personal - Pyme (Solo Frontend)
- **Despliegue:**  
  - Usar Vercel o Netlify.
  - No requiere backend ni base de datos.
  - Ideal para sitios estáticos o SPA (React).

- **Correo administrativo:**  
  - No incluido en la plataforma de hosting.
  - Se debe usar un proveedor externo (Zoho Mail, Google Workspace, Microsoft 365, etc.).
  - Configuración: Apuntar los registros MX del dominio al proveedor de correo.



## Precios de Hosting y Bases de Datos (Referencia 2026)

| Plataforma         | Plan Gratis         | Plan Pago (básico)         | Notas |
|-------------------|--------------------|----------------------------|-------|
| **Vercel**        | Sí (limitado)      | USD $20/mes por usuario    | Frontend, Pro recomendado para empresas |
| **Netlify**       | Sí (limitado)      | USD $19/mes por usuario    | Frontend, Pro recomendado para empresas |
| **Railway**       | Sí (limitado)      | Desde USD $5/mes           | Backend/API y PostgreSQL, recursos según plan |
| **Render**        | Sí (con sleep)     | Desde USD $7/mes           | Backend/API y PostgreSQL, sin sleep en pago |
| **Fly.io**        | Sí (limitado)      | Desde USD $5/mes           | Backend/API y PostgreSQL, escalable |

**Notas:**
- Los planes gratuitos tienen limitaciones (recursos, "sleep", almacenamiento, etc.).
- Para proyectos empresariales o ecommerce, se recomienda plan pago para backend y base de datos.
- Los precios pueden variar según uso, almacenamiento y cantidad de servicios.

## Notas Generales
- **Despliegue:**  
  - Frontend: Vercel o Netlify.
  - Backend y base de datos PostgreSQL: Railway, Render o Fly.io.
  - Permite aplicaciones completas con API y base de datos.

- **Correo administrativo:**  
  - No incluido en las plataformas de hosting.
  - Se debe usar un proveedor externo (Zoho Mail, Google Workspace, Microsoft 365, etc.).
  - Configuración: Apuntar los registros MX del dominio al proveedor de correo.

---

## Paquete 3: Empresa (Fullstack)
- **Despliegue:**  
  - Frontend: Vercel o Netlify.
  - Backend y base de datos PostgreSQL: Railway, Render o Fly.io.
  - Permite aplicaciones empresariales, escalables y seguras.

- **Correo administrativo:**  
  - No incluido en las plataformas de hosting.
  - Se debe usar un proveedor externo (Zoho Mail, Google Workspace, Microsoft 365, etc.).
  - Configuración: Apuntar los registros MX del dominio al proveedor de correo.

---

## Notas Generales

- **Correo administrativo:**  
  Ninguna de las plataformas de hosting mencionadas (Vercel, Netlify, Railway, Render, Fly.io) ofrece servicio de correo electrónico integrado. Siempre se debe contratar y configurar aparte.

- **Recomendación de proveedores de correo:**  
  - Zoho Mail (gratuito para un dominio)
  - Google Workspace (de pago)
  - Microsoft 365 (de pago)
  - Otros: Titan, Namecheap Email, etc.

- **Flujo típico:**  
  1. Desplegar la web en la plataforma correspondiente.
  2. Apuntar el dominio al hosting.
  3. Configurar los registros MX del dominio hacia el proveedor de correo.
  4. Gestionar los correos desde el panel del proveedor de email.
