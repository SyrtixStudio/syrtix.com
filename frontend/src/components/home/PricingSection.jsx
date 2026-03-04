import { useState } from 'react';

import { Link } from 'react-router-dom';

import { ArrowRight, Check, X } from 'lucide-react';

import { getIcon } from './IconResolver';
import { useLanguage } from '../../i18n/index.jsx';
import PackageDetailModal from '../pricing/PackageDetailModal.jsx';

const USD_REFERENCE_RATE = 950;

function PricingSection() {
  const [selectedDetailPackage, setSelectedDetailPackage] = useState(null);
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          titlePrefix: 'Packages and ',
          titleHighlight: 'Pricing',
          subtitle: 'Choose the package that matches your service business stage and goals.',
          helper:
            'Complete solutions for service SMBs: planning, design, development, launch, and post-launch guidance.',
          growthTip: 'Want ongoing growth? We recommend a monthly maintenance plan.',
          fromLabel: 'From',
          emailFootnote:
            '* Hosting and transactional email providers are billed by usage. Need continuous growth? Ask for our monthly maintenance plan.',
          viewDetails: 'View full package details',
          enterpriseBadge: 'Enterprise',
          enterpriseTitle: 'Do you need an enterprise-level solution?',
          enterpriseDescription:
            'For medium-sized companies with higher traffic, multi-team workflows, advanced automations, or ERP/CRM integrations.',
          enterprisePrimaryCta: 'Request enterprise quote',
          enterpriseSecondaryCta: 'View enterprise scope',
          enterpriseStartingFrom: 'Starting from',
          detailToggleShow: 'View details',
          detailSubtitle: 'Package scope',
          detailClose: 'Close details',
          detailLabels: {
            audience: 'For whom',
            objective: 'Objective',
            focus: 'Focus',
            includes: 'Includes',
            excludes: 'Excludes (scope)',
            webTypes: 'Web Types That Fit',
          },
          packages: [
            {
              id: 'landing-starter',
              name: 'Entrepreneur Solution',
              icon: 'Zap',
              description: 'Single-page website for service SMBs that need fast lead capture.',
              price: 149000,
              oldPrice: 299000,
              offerMeta: 'Launch offer: 10 slots until Mar 31, 2026.',
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience:
                  'Entrepreneurs, professionals, and service SMBs that need a fast professional online presence.',
                objective:
                  'Launch a conversion-focused page to capture qualified leads and open direct contact channels from day one.',
                focus:
                  'Speed, visual clarity, and essential integrations to publish quickly without custom development.',
                includes: [
                  'Single-page website',
                  'Professional design + visual identity',
                  'UX/UI-focused approach for conversion',
                  '3 logo concepts',
                  'Responsive development',
                  'Buttons to WhatsApp and social media',
                  'Testimonials section',
                  'Contact form connected to your email',
                  'Google Maps + YouTube embeds',
                  'Basic Google visibility + visits tracking',
                  'Up to 30 products in catalog',
                  'Free domain (1st year)',
                  'Website launch configuration',
                  '15-day post-launch guidance',
                  '1 revision round included (content and minor visual adjustments)',
                  'Business email setup*',
                  'Online booking (Calendly) - optional, quoted separately',
                  'Basic bilingual setup (ES/EN) - optional, quoted separately',
                ],
                excludes: [
                  'Custom system development',
                  'E-commerce module',
                  'Priority support',
                ],
              },
              featured: false,
              features: [
                { text: 'Single-page website', included: true },
                { text: 'Professional design + visual identity', included: true },
                { text: 'UX/UI-focused approach for conversion', included: true },
                { text: '3 logo concepts', included: true },
                { text: 'Responsive website', included: true },
                { text: 'WhatsApp buttons + social links', included: true },
                { text: 'Testimonials section', included: true },
                { text: 'Contact form connected to your email', included: true },
                { text: 'Google Maps + YouTube embeds', included: true },
                { text: 'Basic Google visibility + visits tracking', included: true },
                { text: 'Up to 30 products in catalog', included: true },
                { text: 'Free domain (1st year)', included: true },
                { text: 'Website launch configuration', included: true },
                { text: '15-day post-launch guidance', included: true },
                { text: '1 revision round included', included: true },
                { text: 'Business email setup*', included: true },
                { text: 'Online booking (Calendly) - optional, quoted separately', included: true },
                { text: 'Basic bilingual setup (ES/EN) - optional, quoted separately', included: true },
                { text: 'Custom system development', included: false },
                { text: 'E-commerce module', included: false },
                { text: 'Priority support', included: false },
              ],
              ctaText: 'Start',
              ctaLink: '/contacto',
            },
            {
              id: 'corporate-web',
              name: 'SMB Solution',
              icon: 'Code',
              description: 'Multi-page corporate website for service SMB positioning and lead generation.',
              price: 299000,
              oldPrice: 599000,
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience:
                  'Service SMBs that need stronger digital positioning and a steady lead capture flow.',
                objective:
                  'Build a professional multi-page website that explains services clearly and converts visits into qualified inquiries.',
                focus:
                  'Brand credibility, clear information architecture, and conversion points across key pages.',
                webTypes: [
                  'Corporate services website',
                  'Website for clinic, studio, consultancy, or agency',
                  'Professional/company portfolio',
                  'Commercial catalog without checkout',
                  'Restaurant website (menu + external bookings)',
                  'Campaign pages or brand microsites',
                  'Website for events or informational courses',
                ],
                includes: [
                  'Everything from Entrepreneur Solution',
                  'Website up to 5 sections',
                  'Up to 50 products in catalog',
                  'Floating WhatsApp button',
                  'Testimonials section',
                  'Basic bilingual setup (ES/EN) - optional, quoted separately',
                  'Speed optimization',
                  'Mandatory HTTPS + proper SSL',
                  'Essential pre-launch audit - optional, quoted separately',
                  'Custom 404 page + Home redirect',
                  'Service and company pages',
                  'Conversion-focused contact sections',
                  'Essential on-page SEO for Google',
                  '15-day post-launch guidance',
                  'Up to 2 revision rounds included (within agreed scope)',
                  'Custom feature development (optional, quoted separately)',
                ],
                excludes: [
                  'Full e-commerce flow with product catalog and checkout',
                ],
              },
              featured: true,
              badge: 'MOST POPULAR',
              conditionNote:
                'Hosting and transactional email providers are billed by usage. Optional features are quoted separately.',
              features: [
                { text: 'Everything in Entrepreneur Solution', included: true },
                { text: 'Website up to 5 sections', included: true },
                { text: 'Up to 50 products in catalog', included: true },
                { text: 'Testimonials section', included: true },
                { text: 'Basic bilingual setup (ES/EN) - optional, quoted separately', included: true },
                { text: 'Speed optimization', included: true },
                { text: 'Mandatory HTTPS + proper SSL', included: true },
                { text: 'Essential pre-launch audit - optional, quoted separately', included: true },
                { text: 'Custom 404 page + Home redirect', included: true },
                { text: 'Service and company pages', included: true },
                { text: 'Conversion-focused contact sections', included: true },
                { text: 'Essential on-page SEO for Google', included: true },
                { text: '15-day post-launch guidance', included: true },
                { text: 'Up to 2 revision rounds included', included: true },
                { text: 'Custom feature development (optional, quoted separately)', included: true },
              ],
              ctaText: 'Choose SMB',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-standard',
              name: 'Business Solution',
              icon: 'ShoppingCart',
              description:
                'Self-manageable website for service businesses, with backend control for content, leads, orders, and payments.',
              price: 699000,
              oldPrice: 999000,
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience:
                  'Service businesses that need backend control to run a self-manageable corporate site and optional basic ecommerce.',
                objective:
                  'Launch a backend-enabled platform so your team can manage content, leads, and optional online sales autonomously.',
                focus:
                  'Operational autonomy, clear admin workflows, and reliable core commercial operations.',
                includes: [
                  'Everything from SMB Solution',
                  'Self-manageable corporate website mode (pages, content, service sections)',
                  'Basic ecommerce flow with catalog, cart, and secure checkout',
                  '100+ products in catalog or self-manageable catalog',
                  'Payment gateway integration and order management',
                  'Admin panel for content, products, inventory, and customers',
                  'Basic sales dashboard and post-launch guidance',
                  'Up to 3 revision rounds included (within agreed scope)',
                  'Custom feature development (optional, quoted separately)',
                ],
                excludes: [
                  'Advanced custom automations and enterprise integrations',
                ],
              },
              featured: false,
              conditionNote:
                'Hosting and transactional email providers are billed by usage. Optional features are quoted separately.',
              features: [
                { text: 'Everything in SMB Solution', included: true },
                { text: 'Corporate website + self-manageable admin', included: true },
                { text: 'Up to 10 pages', included: true },
                { text: 'Basic ecommerce + secure checkout', included: true },
                { text: '100+ products in catalog or self-manageable catalog', included: true },
                { text: 'Payment gateway integration', included: true },
                { text: 'Admin panel for content, products, and stock', included: true },
                { text: 'Order and customer management', included: true },
                { text: 'Basic sales dashboard', included: true },
                { text: '15-day post-launch guidance', included: true },
                { text: 'Up to 3 revision rounds included', included: true },
                { text: 'Custom feature development (optional, quoted separately)', included: true },
                { text: 'Priority support', included: false },
              ],
              ctaText: 'Choose Business',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-advanced',
              enterpriseOnly: true,
              name: 'Enterprise Solution',
              icon: 'Crown',
              description: 'Advanced ecommerce and automation platform for companies scaling beyond standard SMB operations.',
              price: 999000,
              oldPrice: 1899000,
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience:
                  'Companies with complex operations, higher traffic, and advanced needs beyond standard SMB ecommerce flows.',
                objective:
                  'Build an enterprise-grade ecommerce platform that supports multi-team execution, advanced automation, and strategic business growth.',
                focus:
                  'Scalability, security, automation, and executive visibility with reliable operational workflows.',
                includes: [
                  'Everything from Business Solution',
                  'Multi-role admin panel with permissions (admin, sales, operations, marketing)',
                  'Automated workflows (post-purchase emails, cart recovery, and order status updates)',
                  'Executive KPI dashboard (revenue, conversion, average order value, recurrence)',
                  'Advanced security setup (hardening, essential audit, and backup strategy)',
                  'Staging environment + QA process before production releases',
                  'Commercial CRO and UX optimization (checkout flow, funnels, basic A/B tests)',
                  'Technical documentation + enablement training for your internal team',
                  'Continuous strategic iteration cycles (according to approved roadmap)',
                  'Pro integrations with sync (ERP/CRM/logistics/payments) - optional, quoted separately',
                  'Scalable high-traffic architecture + monitoring - optional, quoted separately',
                  'Priority support with SLA (active maintenance plan required) - optional, quoted separately',
                  'Monthly strategic follow-up (during active maintenance contract) - optional, quoted separately',
                ],
                excludes: [
                  'Third-party licenses or provider services billed externally',
                  'New major scope requests outside approved roadmap',
                ],
              },
              featured: false,
              conditionNote:
                'Hosting and transactional email providers are billed by usage. Optional features are quoted separately.',
              features: [
                { text: 'Everything in Business Solution', included: true },
                { text: 'Multi-role admin panel with granular permissions', included: true },
                { text: 'Automated workflows (cart recovery and post-purchase)', included: true },
                { text: 'Executive KPI dashboard with strategic metrics', included: true },
                { text: 'Advanced security setup + essential audit', included: true },
                { text: 'Staging environment + QA before go-live', included: true },
                { text: 'CRO and UX optimization for conversion', included: true },
                { text: 'Technical documentation + team training', included: true },
                { text: 'Continuous strategic iteration cycles (according to approved roadmap)', included: true },
                { text: 'Pro integrations with sync (ERP/CRM/logistics/payments) - optional, quoted separately', included: true },
                {
                  text: 'Scalable high-traffic architecture + monitoring - optional, quoted separately',
                  included: true,
                },
                {
                  text: 'Priority support with SLA (active maintenance plan required) - optional, quoted separately',
                  included: true,
                },
                {
                  text: 'Monthly strategic follow-up (during active maintenance contract) - optional, quoted separately',
                  included: true,
                },
              ],
              ctaText: 'Choose Enterprise',
              ctaLink: '/contacto',
            },
          ],
        }
      : {
          titlePrefix: 'Paquetes y ',
          titleHighlight: 'Precios',
          subtitle: 'Elige el paquete que mejor se adapta a la etapa y objetivos de tu negocio de servicios.',
          helper:
            'Soluciones completas para pymes de servicios: planificación, diseño, desarrollo, publicación y acompañamiento post-lanzamiento.',
          growthTip: '¿Quieres crecimiento continuo? Recomendamos un plan mensual de mantenimiento.',
          fromLabel: 'Desde',
          emailFootnote:
            '* Hosting y proveedores de correo transaccional se cobran según uso. Para mejoras continuas, soporte y evolución mensual, activa nuestro plan de mantenciones.',
          viewDetails: 'Ver todos los detalles de cada paquete',
          enterpriseBadge: 'Enterprise',
          enterpriseTitle: '¿Necesitas una solución nivel enterprise?',
          enterpriseDescription:
            'Para empresas medianas con mayor tráfico, trabajo multi-equipo, automatizaciones avanzadas o integraciones ERP/CRM.',
          enterprisePrimaryCta: 'Solicitar cotización enterprise',
          enterpriseSecondaryCta: 'Ver alcance enterprise',
          enterpriseStartingFrom: 'Desde',
          detailToggleShow: 'Ver detalle',
          detailSubtitle: 'Alcance del paquete',
          detailClose: 'Cerrar detalle',
          detailLabels: {
            audience: 'Dirigido a',
            objective: 'Objetivo',
            focus: 'Enfoque',
            includes: 'Incluye',
            excludes: 'No incluye (alcance)',
            webTypes: 'Tipos de webs que sí calzan',
          },
          packages: [
            {
              id: 'landing-starter',
              name: 'Solución Emprendedor',
              icon: 'Zap',
              description: 'Sitio de una página para emprendedores y pymes de servicios que necesitan captar leads rápido.',
              price: 149000,
              oldPrice: 299000,
              offerMeta: 'Oferta lanzamiento: 10 cupos hasta el 31 de marzo de 2026.',
              paymentType: 'pago unico de implementacion',
              scopeDetails: {
                audience:
                  'Emprendedores, profesionales y pymes de servicios que necesitan presencia digital profesional rápida.',
                objective:
                  'Lanzar una página enfocada en conversión para captar leads calificados y abrir canales directos con clientes.',
                focus:
                  'Velocidad de salida, claridad visual e integraciones esenciales sin desarrollo personalizado.',
                includes: [
                  'Pagina web',
                  'Diseño profesional + identidad visual',
                  'Enfoque UX/UI orientado a conversion',
                  '3 propuestas de logo',
                  'Sitio adaptable a celular y computador',
                  'Botones de WhatsApp y redirección a redes',
                  'Sección de reseñas',
                  'Formulario de contacto conectado a tu correo',
                  'Integración Google Maps + videos YouTube',
                  'Hasta 30 productos en catálogo',
                  'Dominio gratis (primer año)',
                  'Configuración y publicación del sitio',
                  'Acompañamiento post-lanzamiento por 15 días',
                  '1 ronda de ajustes incluida (contenido y cambios visuales menores)',
                  'Configuración de correo corporativo*',
                  'Agendamiento online (Calendly) - opcional ',
                  'Multiidioma (ES/EN) - opcional ',
                ],
                excludes: [
                  'Visibilidad esencial en Google (SEO)',
                  'Desarrollo de funciones a medida',
                  'Módulo e-commerce',
                  'Soporte prioritario',
                ],
              },
              featured: false,
              features: [
                { text: 'Pagina web', included: true },
                { text: 'Diseño profesional + identidad visual', included: true },
                { text: 'Enfoque UX/UI orientado a conversion', included: true },
                { text: '3 propuestas de logo', included: true },
                { text: 'Sitio adaptable a celular y computador', included: true },
                { text: 'Botones de WhatsApp y redirección a redes', included: true },
                { text: 'Sección de reseñas', included: true },
                { text: 'Formulario de contacto conectado a tu correo', included: true },
                { text: 'Integración Google Maps + videos YouTube', included: true },
                { text: 'Hasta 30 productos en catálogo', included: true },
                { text: 'Dominio gratis (primer año)', included: true },
                { text: 'Configuración y publicación del sitio', included: true },
                { text: 'Acompañamiento post-lanzamiento por 15 días', included: true },
                { text: '1 ronda de ajustes incluida', included: true },
                { text: 'Configuración de correo corporativo*', included: true },
                { text: 'Agendamiento online (Calendly) - opcional ', included: true },
                { text: 'Multiidioma (ES/EN) - opcional ', included: true },
                { text: 'Visibilidad esencial en Google (SEO)', included: false },
                { text: 'Desarrollo de funciones a medida', included: false },
                { text: 'Módulo e-commerce', included: false },
                { text: 'Soporte prioritario', included: false },
              ],
              ctaText: 'Comenzar',
              ctaLink: '/contacto',
            },
            {
              id: 'web-corporativa',
              name: 'Solucion Pyme',
              icon: 'Code',
              description: 'Sitio corporativo multipagina para pymes de servicios enfocadas en posicionamiento y leads.',
              price: 299000,
              oldPrice: 599000,
              paymentType: 'pago unico de implementacion',
              scopeDetails: {
                audience:
                  'Pymes de servicios que necesitan mejor posicionamiento digital y un flujo constante de contactos.',
                objective:
                  'Construir un sitio multipagina que explique servicios con claridad y convierta visitas en consultas calificadas.',
                focus:
                  'Credibilidad de marca, arquitectura clara de informacion y puntos de conversion en paginas clave.',
                webTypes: [
                  'Web corporativa de servicios',
                  'Web para clinica, estudio, consultora o agencia',
                  'Portafolio profesional/empresa',
                  'Catalogo comercial sin checkout',
                  'Web de restaurante (menu + reservas externas)',
                  'Paginas de campana o micrositios de marca',
                  'Sitio para eventos o cursos informativos',
                ],
                includes: [
                  'Todo lo de Solución Emprendedor',
                  'Sitio de hasta 5 secciones',
                  'Hasta 50 productos en catalogo',
                  'Boton flotante de WhatsApp',
                  'Seccion de testimonios',
                  'Multiidioma (ES/EN) - se cotiza aparte',
                  'Optimizacion de velocidad',
                  'HTTPS obligatorio + SSL',
                  'Auditoria esencial pre-lanzamiento - opcional',
                  'Pagina 404 personalizada + redireccion al inicio',
                  'Paginas de servicios y empresa',
                  'Secciones de contacto orientadas a conversion',
                  'SEO on-page esencial Google',
                  'Acompanamiento post-lanzamiento por 15 dias',
                  'Hasta 2 rondas de ajustes incluidas (dentro del alcance acordado)',
                  'Desarrollo de funciones a medida (opcional )',
                ],
                excludes: [
                  'Flujo completo e-commerce con catalogo y checkout',
                ],
              },
              featured: true,
              badge: 'MAS POPULAR',
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
              features: [
                { text: 'Todo lo de Solución Emprendedor', included: true },
                { text: 'Sitio de hasta 5 secciones', included: true },
                { text: 'Hasta 50 productos en catalogo', included: true },
                { text: 'Seccion de testimonios', included: true },
                { text: 'Multiidioma (ES/EN) - se cotiza aparte', included: true },
                { text: 'Optimizacion de velocidad', included: true },
                { text: 'HTTPS obligatorio + SSL', included: true },
                { text: 'Auditoria esencial pre-lanzamiento - opcional', included: true },
                { text: 'Pagina 404 personalizada + redireccion al inicio', included: true },
                { text: 'Paginas de servicios y empresa', included: true },
                { text: 'Secciones de contacto orientadas a conversion', included: true },
                { text: 'SEO on-page esencial Google', included: true },
                { text: 'Acompanamiento post-lanzamiento por 15 dias', included: true },
                { text: 'Hasta 2 rondas de ajustes incluidas', included: true },
                { text: 'Desarrollo de funciones a medida (opcional )', included: true },
              ],
              ctaText: 'Elegir Pyme',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-standard',
              name: 'Solucion Negocio',
              icon: 'ShoppingCart',
              description:
                'Sitio autoadministrable para negocios de servicios, con backend para gestionar contenido, leads, pedidos y pagos.',
              price: 699000,
              oldPrice: 999000,
              paymentType: 'pago unico de implementacion',
              scopeDetails: {
                audience:
                  'Negocios de servicios que necesitan control backend para operar un sitio autoadministrable y ecommerce basico opcional.',
                objective:
                  'Lanzar una plataforma con backend para que tu equipo gestione contenido, leads y ventas online de forma autonoma.',
                focus:
                  'Autonomia operativa, flujo admin claro y gestion confiable de la operacion comercial base.',
                includes: [
                  'Todo lo de Solucion Pyme',
                  'Sitio corporativo + panel autoadministrable',
                  'Hasta 10 paginas',
                  'E-commerce + checkout seguro',
                  '100+ productos en catalogo o catalogo autogestionable',
                  'Integracion de pasarela de pago y gestion de pedidos',
                  'Panel administrador para contenido, productos, stock y clientes',
                  'Gestion de pedidos y clientes',
                  'Centro de emails en panel administrador',
                  'Generacion de comprobante/voucher de pago (no tributario)',
                  'Dashboard de ventas basico (pedidos, ingresos, ticket promedio)',
                  'Visibilidad esencial en Google',
                  'Acompanamiento post-lanzamiento por 15 dias',
                  'Hasta 3 rondas de ajustes incluidas (dentro del alcance acordado)',
                  'Desarrollo de funciones a medida (opcional )',
                  'Soporte prioritario',
                ],
                excludes: [
                  'Automatizaciones avanzadas e integraciones enterprise a medida',
                ],
              },
              featured: false,
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
              features: [
                { text: 'Todo lo de Solucion Pyme', included: true },
                { text: 'Sitio corporativo + panel autoadministrable', included: true },
                { text: 'Hasta 10 paginas', included: true },
                { text: 'E-commerce + checkout seguro', included: true },
                { text: '100+ productos en catalogo o catalogo autogestionable', included: true },
                { text: 'Integracion de pasarela de pago', included: true },
                { text: 'Panel para gestionar contenido, productos y stock', included: true },
                { text: 'Gestion de pedidos y clientes', included: true },
                { text: 'Centro de emails en panel administrador', included: true },
                { text: 'Generacion de comprobante/voucher de pago (no tributario)', included: true },
                { text: 'Dashboard de ventas basico (pedidos, ingresos, ticket promedio)', included: true },
                { text: 'Visibilidad esencial en Google', included: true },
                { text: 'Acompanamiento post-lanzamiento por 15 dias', included: true },
                { text: 'Hasta 3 rondas de ajustes incluidas', included: true },
                { text: 'Desarrollo de funciones a medida (opcional )', included: true },
                { text: 'Soporte prioritario', included: true },
              ],
              ctaText: 'Elegir Negocio',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-avanzado',
              enterpriseOnly: true,
              name: 'Solucion Empresa',
              icon: 'Crown',
              description: 'Plataforma avanzada de ecommerce y automatizacion para empresas que escalan mas alla de una operacion pyme estandar.',
              price: 999000,
              oldPrice: 1899000,
              paymentType: 'pago unico de implementacion',
              scopeDetails: {
                audience:
                  'Empresas con operaciones mas complejas, mayor trafico y necesidades avanzadas fuera de flujos pyme estandar.',
                objective:
                  'Construir una plataforma ecommerce empresarial que soporte trabajo multi-equipo, automatizacion avanzada y crecimiento estrategico.',
                focus:
                  'Escalabilidad, seguridad, automatizacion y visibilidad ejecutiva con operaciones confiables.',
                includes: [
                  'Todo lo de Solucion Negocio',
                  'Panel multi-rol con permisos (admin, ventas, operaciones y marketing)',
                  'Flujos automatizados (correo post-compra, recuperacion de carrito y estados de pedido)',
                  'Dashboard ejecutivo de KPIs (ventas, conversion, ticket promedio y recurrencia)',
                  'Seguridad avanzada (hardening, auditoria esencial y estrategia de respaldos)',
                  'Ambiente staging + proceso QA antes de publicar cambios',
                  'CRO y UX comercial (checkout optimizado, embudos y pruebas A/B basicas)',
                  'Documentacion tecnica + capacitacion a tu equipo interno',
                  'Ciclos continuos de iteracion estrategica (segun roadmap aprobado)',
                  'Integraciones pro con sincronizacion (ERP/CRM/logistica/pagos) - opcional ',
                  'Arquitectura escalable + monitoreo de alto trafico - opcional ',
                  'Soporte prioritario con SLA (solo con plan de mantenimiento activo) - opcional ',
                  'Seguimiento estrategico mensual (durante vigencia del mantenimiento contratado) - opcional ',
                ],
                excludes: [
                  'Licencias de terceros o servicios de proveedores cobrados externamente',
                  'Nuevos requerimientos mayores fuera de la hoja de ruta aprobada',
                ],
              },
              featured: false,
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
              features: [
                { text: 'Todo lo de Solucion Negocio', included: true },
                { text: 'Panel multi-rol con permisos granulares', included: true },
                { text: 'Flujos automatizados (carrito y post-compra)', included: true },
                { text: 'Dashboard ejecutivo con KPIs estrategicos', included: true },
                { text: 'Seguridad avanzada + auditoria esencial', included: true },
                { text: 'Ambiente staging + QA antes de produccion', included: true },
                { text: 'Optimizacion CRO y UX para conversion', included: true },
                { text: 'Documentacion tecnica + capacitacion de equipo', included: true },
                { text: 'Ciclos continuos de iteracion estrategica (segun roadmap aprobado)', included: true },
                {
                  text: 'Integraciones pro con sincronizacion (ERP/CRM/logistica/pagos) - opcional ',
                  included: true,
                },
                {
                  text: 'Arquitectura escalable + monitoreo de alto trafico - opcional ',
                  included: true,
                },
                {
                  text: 'Soporte prioritario con SLA (solo con plan de mantenimiento activo) - opcional ',
                  included: true,
                },
                {
                  text: 'Seguimiento estrategico mensual (durante vigencia del mantenimiento contratado) - opcional ',
                  included: true,
                },
              ],
              ctaText: 'Elegir Empresa',
              ctaLink: '/contacto',
            },
          ],
        };

  const formatPrice = (price) => {
    const formatted = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);

    return lang === 'en' ? `${formatted} CLP` : formatted;
  };

  const formatUsdPrice = (price) => {
    const usdValue = Math.round(price / USD_REFERENCE_RATE);
    const formatted = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(usdValue);

    return `US$${formatted}`;
  };

  const enterprisePackage = copy.packages.find((pkg) => pkg.enterpriseOnly);
  const visiblePackages = copy.packages.filter((pkg) => !pkg.enterpriseOnly);

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-900 text-gray-900 max-w-2xl mx-auto">{copy.subtitle}</p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto mt-2">{copy.helper}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {visiblePackages.map((pkg, idx) => {
            const hasOffer = typeof pkg.oldPrice === 'number' && pkg.oldPrice > pkg.price;
            const discountPercent = hasOffer ? Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100) : null;
            const hasScopeDetails = Boolean(pkg.scopeDetails);

            return (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`relative bg-base border-2 p-6 transition-all duration-300 hover:border-primary hover:shadow-lg flex flex-col h-full ${
                  pkg.featured ? 'border-secondary' : 'border-gray-200'
                }`}
              >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1">{pkg.badge}</span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                    pkg.featured ? 'bg-secondary text-white' : 'bg-primary text-gray-900'
                  }`}
                >
                  {getIcon(pkg.icon, 32)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              </div>

              <div className="text-center mb-6">
                {hasOffer && (
                  <div className="mb-2 flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full">
                        {lang === 'en' ? 'SPECIAL OFFER' : 'OFERTA ESPECIAL'}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 text-[10px] font-bold text-white bg-secondary rounded-full">
                        -{discountPercent}%
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {lang === 'en' ? 'Before' : 'Antes'}{' '}
                      <span className="line-through decoration-gray-400">{formatPrice(pkg.oldPrice)}</span>
                    </span>
                    {pkg.offerMeta && <span className="text-[11px] text-secondary font-semibold">{pkg.offerMeta}</span>}
                  </div>
                )}
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  <span className="mr-2 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-secondary align-middle">
                    {copy.fromLabel}
                  </span>
                  <span className="align-middle">{formatPrice(pkg.price)}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">~ {formatUsdPrice(pkg.price)}</div>
                <div className="text-sm text-gray-500 mt-1">{pkg.paymentType}</div>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 mb-4">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-300 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="min-h-[44px] mb-4">
                  {pkg.conditionNote && <p className="text-[11px] text-gray-500">{pkg.conditionNote}</p>}
                </div>
              </div>

              <div className="space-y-3">
                {hasScopeDetails && (
                  <button
                    type="button"
                    onClick={() => setSelectedDetailPackage({ name: pkg.name, details: pkg.scopeDetails })}
                    className="w-full inline-flex items-center justify-center py-2 text-xs font-semibold text-gray-800 bg-base2/70 border border-gray-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                  >
                    {copy.detailToggleShow}
                  </button>
                )}

                <Link
                  to={pkg.ctaLink}
                  className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-secondary text-white hover:bg-blue-900'
                      : 'bg-primary text-gray-900 hover:bg-amber-600'
                  }`}
                >
                  {pkg.ctaText} <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
            );
          })}
        </div>

        {enterprisePackage && (
          <div
            className="mt-8 border-2 border-secondary/30 bg-gradient-to-r from-secondary/10 via-base to-secondary/10 p-6 sm:p-8"
            data-aos="fade-up"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-3">
                  {copy.enterpriseBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{copy.enterpriseTitle}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.enterpriseDescription}</p>
                <p className="text-sm text-gray-600 mt-3">
                  {copy.enterpriseStartingFrom}{' '}
                  <span className="font-bold text-gray-900">{formatPrice(enterprisePackage.price)}</span>{' '}
                  <span className="text-xs text-gray-500">(~ {formatUsdPrice(enterprisePackage.price)})</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to={enterprisePackage.ctaLink}
                  className="inline-flex items-center justify-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
                >
                  {copy.enterprisePrimaryCta}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/paquetes"
                  className="inline-flex items-center justify-center bg-base border border-secondary/40 text-secondary font-bold px-6 py-3 hover:bg-secondary/10 transition-all duration-300"
                >
                  {copy.enterpriseSecondaryCta}
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-8" data-aos="fade-up">
          <p className="text-xs sm:text-sm text-gray-600 mb-3">{copy.growthTip}</p>
          <p className="text-[11px] text-gray-500 mb-3">{copy.emailFootnote}</p>
          <Link
            to="/paquetes"
            className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors"
          >
            {copy.viewDetails}
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>

      <PackageDetailModal
        isOpen={Boolean(selectedDetailPackage)}
        onClose={() => setSelectedDetailPackage(null)}
        title={selectedDetailPackage?.name || ''}
        subtitle={copy.detailSubtitle}
        details={selectedDetailPackage?.details || null}
        labels={copy.detailLabels}
        closeLabel={copy.detailClose}
      />
    </section>
  );
}

export default PricingSection;
