---
name: devops-cost-audit
description: Sistema extraído de entornos HPC para auditar y controlar fugas de tokens (LLMs) y costos de infraestructura en la nube.
---

# 💸 DevOps Cost Optimization & LLM Audit

Inspirado en scripts avanzados de optimización como `ecc-tools-cost-audit`, este skill provee al `/devops-engineer` de la capacidad de evitar fugas de dinero en plataformas de Inteligencia Artificial (Tokens) y Nube.

## 🔎 Protocolos de Auditoría de Costos

### 1. The Token Leaks Scan (RAG & LLMs)
Siempre que estés construyendo o auditando aplicaciones de Inteligencia Artificial para los clientes de Syrtix, debes obligar a la arquitectura a cumplir:
- **No enviar el corpus completo:** RAG debe limitarse a k=3 fragmentos de código. Enviar todo un archivo PFD a un LLM en cada Request quema dinero.
- **Definir `max_tokens`:** Ninguna llamada al motor LLM puede ir sin el límite máximo de respuesta (`max_tokens`). Los loops de LLM generan bancarrotas.
- **Uso de Memorias Locales:** (Redis o SQLite). Si un usuario pregunta dos veces lo mismo, tu servidor no puede pagar el LLM dos veces. Cachear obligatoriamente las respuestas frecuentes.

### 2. Infra Cloud Scan
Al revisar Vercel, AWS o Docker, el DevOps debe vigilar:
- **Imágenes Docker pesadas:** Optimización multicapa y Alpine para evitar costos enormes por GB de almacenamiento en registros.
- **Serverless Anti-Patterns:** Funciones sin límite de timeout (Max Duration). Un loop infinito en una Next.js Edge function multiplicará la factura. Límite de 5-10 segundos máximo por default.

### Acción de Seguridad (Firewall de Billetera)
Antes de poner en producción o `main` cualquier backend que dependa de APIs de pago como OpenAI o Anthropic, el Agente DevOps debe levantar la mano y garantizar que haya un `Rate-Limiter` estricto por dirección IP.
