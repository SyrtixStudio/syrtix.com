# 🗝️ Central de Accesos - Syrtix Solutions (Hetzner VPS)

Este documento es tu **Mapa de Control** para gestionar toda tu infraestructura en el nuevo servidor de Hetzner. 

> [!IMPORTANT]
> **SEGURIDAD:** Nunca guardes tus contraseñas reales en este archivo si planeas subirlo a GitHub. Úsalo solo como referencia de direcciones.

---

## 🛠️ 1. Orquestador: Coolify v4
Es el panel principal desde donde prendes, apagas y creas nuevos sitios (como Railway pero propio).
- **URL:** [http://5.78.86.159:3000](http://5.78.86.159:3000)
- **Uso:** Gestión de contenedores, SSL, Git y despliegues automáticos.

---

## 🧊 2. Backends: PocketBase (Administración)
Cada proyecto tiene su propia base de datos independiente. Para entrar al panel de administración, siempre debes agregar **`/_/`** al final de la URL.

### 🏢 Syrtix.com (Principal)
- **Panel de Admin:** [https://syrtix.5.78.86.159.sslip.io/_/](https://syrtix.5.78.86.159.sslip.io/_/)
- **API URL (para el .env):** `https://syrtix.5.78.86.159.sslip.io`

### 🎨 Tattoo.cl (TattooStudio)
- **Panel de Admin:** [https://tattoostudio.5.78.86.159.sslip.io/_/](https://tattoostudio.5.78.86.159.sslip.io/_/)
- **API URL (para el .env):** `https://tattoostudio.5.78.86.159.sslip.io`

---

## 🌐 3. Frontends: Sitios Web (Producción)
Estas son las direcciones donde tus clientes y el mundo verán tus sitios funcionando:

| Proyecto | URL Temporal (Coolify) | Dominio Real (Cloudflare) |
| :--- | :--- | :--- |
| **Syrtix.com** | Por definir en Coolify... | [https://syrtix.com](https://syrtix.com) |
| **Tattoo.cl** | [https://syrtix.tattoo.5.78.86.159.sslip.io](https://syrtix.tattoo.5.78.86.159.sslip.io) | [https://tattoo.cl](https://tattoo.cl) |

---

## 📝 Notas de Mantenimiento:
1. **SSL:** Si alguna URL te da error de "Sitio no seguro", ve a Coolify, entra al servicio, pestaña **Configurations** y asegúrate de que el FQDN empiece con `https://` y que el botón de **Generate SSL** esté en verde.
2. **Nuevos Proyectos:** Cuando crees un nuevo cliente (ej: `sushihook.cl`), sigue el patrón: `https://sushi.5.78.86.159.sslip.io/_/` para su base de datos.
