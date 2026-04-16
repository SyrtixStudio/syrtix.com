# Arquitecturas de Software Web: Top 5

## 1) Arquitectura en capas (Layered / N-tier)
**Qué es:**  
Separa la aplicación en capas: presentación, negocio y datos.

**Cuándo usarla:**  
Proyectos CRUD clásicos, paneles admin, sistemas internos y MVPs rápidos.

---

## 2) MVC (Model-View-Controller)
**Qué es:**  
Separa UI, lógica y datos de forma clara.

**Cuándo usarla:**  
Sitios web y apps server-rendered con rutas/formularios (portales, webs corporativas con backend simple).

---

## 3) Clean Architecture / Hexagonal (Ports & Adapters)
**Qué es:**  
Desacopla el dominio de frameworks, base de datos y detalles de infraestructura.

**Cuándo usarla:**  
Proyectos de negocio complejos o de larga vida donde importa testear mucho y cambiar tecnologías sin romper el dominio (fintech, logística, salud, contratos, SaaS serio).

---

## 4) Monolito modular (Modular Monolith)
**Qué es:**  
Una sola app desplegable, pero dividida por módulos bien separados.

**Cuándo usarla:**  
Startups y pymes que necesitan crecer sin complejidad operativa excesiva; ideal para productos con varios módulos (usuarios, pagos, contratos, CRM).

**Nota práctica:**  
Hoy es una de las opciones más recomendadas para empezar la mayoría de SaaS.

---

## 5) Microservicios
**Qué es:**  
Varios servicios independientes.

**Cuándo usarla:**  
Productos grandes con equipos múltiples, alto tráfico, dominios muy separados y necesidad de escalar servicios por separado (marketplaces grandes, plataformas enterprise).

**Tradeoff:**  
Muy potente a escala, pero más complejo y caro de operar.

---

## Recomendación para este caso (`syrtix + contratos + firma`)
La mejor base es: **Monolito modular + principios de Clean Architecture**.

Motivo: permite crecer por módulos con buena mantenibilidad, sin asumir de inicio la complejidad operativa de microservicios.
