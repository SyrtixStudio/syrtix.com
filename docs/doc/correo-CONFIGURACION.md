# Configuración de Correo para syrtix.com

## 1. Recepción de correos (Cloudflare Email Routing)
- **Proveedor DNS:** Cloudflare
- **Email Routing:** Activado
- **Dirección personalizada:** contacto@syrtix.com (puedes crear más en Cloudflare)
- **Reenvío:** Los correos enviados a contacto@syrtix.com se reenvían a tu correo personal configurado en Cloudflare Email Routing.
- **Registros DNS:**
  - MX y TXT configurados automáticamente por Cloudflare para Email Routing.

## 2. Envío de correos (MailerLite)
  - CNAME y TXT para autenticación y verificación de dominio (agregados automáticamente o manualmente según el asistente de MailerLite).
  - El registro SPF fue reemplazado para incluir a MailerLite.
  - Registro DKIM configurado para autenticación de envío.
  - Registro DMARC añadido para monitoreo y protección contra suplantación:
    - **Nombre:** _dmarc
    - **Valor:** v=DMARC1; p=none; rua=mailto:contacto@syrtix.com

## 3. Notas importantes

### Estado final de la configuración
- El dominio syrtix.com está autenticado y verificado en MailerLite.
- Los registros SPF, DKIM y DMARC están correctamente configurados en Cloudflare.
- El correo corporativo contacto@syrtix.com recibe mensajes y los reenvía a tu Gmail.
- Puedes enviar campañas desde MailerLite usando contacto@syrtix.com como remitente.

## 4. Pruebas recomendadas
- Envía un correo a contacto@syrtix.com y verifica que llegue a tu correo personal.
- Envía una campaña de prueba desde MailerLite usando contacto@syrtix.com como remitente y verifica la entrega.

---

**Última actualización:** 6 de febrero de 2026
