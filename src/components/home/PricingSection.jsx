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
          titlePrefix: 'Packages & ',
          titleHighlight: 'Pricing',
          subtitle: 'Choose the package that fits your project type and current business stage.',
          helper:
            'Complete solutions for service SMBs: planning, design, development, launch, and post-launch guidance.',
          growthTip: 'Want ongoing growth? We recommend a monthly maintenance plan.',
          fromLabel: 'From',
          emailFootnote: '',
          viewDetails: 'View full package details',
          enterpriseBadge: 'Custom quote',
          enterpriseTitle: 'Need a custom solution?',
          enterpriseDescription:
            'Tell us what you need and we will send a tailored proposal for your project.',
          enterprisePrimaryCta: 'Go to form',
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
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience:
                  'Entrepreneurs, professionals, and service SMBs that need a fast professional online presence.',
                objective:
                  'Launch a conversion-focused page to capture qualified leads and open direct contact channels from day one.',
                focus:
                  'Speed, visual clarity, and essential integrations to publish quickly without custom development.',
                webTypes: [
                  'Single-page website for service businesses',
                  'Professional profile site for freelancers and consultants',
                  'Lead generation landing page (ads, social, or WhatsApp)',
                  'Digital menu website (without checkout)',
                  'Basic product or service catalog showcase',
                  'Simple campaign or event information page',
                ],
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
                  'Domain billed separately',
                  'Website launch configuration',
                  '15-day post-launch guidance',
                  '1 revision round included (content and minor visual adjustments)',
                  'Business email setup*',
                  'Online booking (Calendly) - optional, quoted separately',
                  'Basic bilingual setup (ES/EN) - optional, quoted separately',
                ],
                excludes: ['Custom system development', 'E-commerce module', 'Priority support'],
              },
              featured: false,
              conditionNote:
                'Monthly hosting: CLP 19,900/month. Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
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
                { text: 'Domain billed separately', included: false },
                { text: 'Website launch configuration', included: true },
                { text: '15-day post-launch guidance', included: true },
                { text: '1 revision round included', included: true },
                { text: 'Business email setup*', included: true },
                { text: 'Online booking (Calendly) - optional, quoted separately', included: true },
                {
                  text: 'Basic bilingual setup (ES/EN) - optional, quoted separately',
                  included: true,
                },
                { text: 'Custom system development', included: false },
                { text: 'E-commerce module', included: false },
                { text: 'Priority support', included: false },
              ],
              ctaText: 'Choose Landing',
              ctaLink: '/contacto',
            },
            {
              id: 'corporate-web',
              name: 'SMB Solution',
              icon: 'Code',
              description:
                'Multi-page corporate website for service SMB positioning and lead generation.',
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
                  'Everything in Entrepreneur Solution',
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
                excludes: ['Full e-commerce flow with product catalog and checkout'],
              },
              featured: true,
              badge: 'MOST POPULAR',
              conditionNote:
                'Monthly hosting: CLP 29,900/month. Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
              features: [
                { text: 'Everything in Entrepreneur Solution', included: true },
                { text: 'Website up to 5 sections', included: true },
                { text: 'Up to 50 products in catalog', included: true },
                { text: 'Testimonials section', included: true },
                {
                  text: 'Basic bilingual setup (ES/EN) - optional, quoted separately',
                  included: true,
                },
                { text: 'Speed optimization', included: true },
                { text: 'Mandatory HTTPS + proper SSL', included: true },
                {
                  text: 'Essential pre-launch audit - optional, quoted separately',
                  included: true,
                },
                { text: 'Custom 404 page + Home redirect', included: true },
                { text: 'Service and company pages', included: true },
                { text: 'Conversion-focused contact sections', included: true },
                { text: 'Essential on-page SEO for Google', included: true },
                { text: '15-day post-launch guidance', included: true },
                { text: 'Up to 2 revision rounds included', included: true },
                {
                  text: 'Custom feature development (optional, quoted separately)',
                  included: true,
                },
              ],
              ctaText: 'Choose Corporate',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-standard',
              name: 'Business Solution',
              icon: 'ShoppingCart',
              description:
                'Advanced corporate website for service businesses, with a manageable catalog and payment integrations without custom backend development.',
              price: 699000,
              oldPrice: 999000,
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience:
                  'Service businesses that need to scale digital presence with catalog and lead capture, without building a complex internal system.',
                objective:
                  'Launch a robust website with catalog, forms, and provider-based checkout, prioritizing speed-to-market and simple maintenance.',
                focus:
                  'Commercial conversion and simple operations using standard tools, avoiding custom backoffice development.',
                webTypes: [
                  'SMB ecommerce website with scalable catalog',
                  'Corporate site + online sales channel',
                  'Product-focused website with provider-based checkout',
                  'Multi-category catalog website for service companies',
                  'Business website with robust standard management panel',
                  'Commercial platform for growing operations',
                ],
                includes: [
                  'Everything in SMB Solution',
                  'Expanded corporate website (up to 10 pages)',
                  'Manageable catalog (up to 100 items)',
                  'Checkout/payment integration through external provider',
                  'Centralized contact and lead capture forms',
                  'Email notifications for inquiries and sales',
                  'Essential Google visibility setup',
                  '15-day post-launch guidance',
                  'Up to 3 revision rounds included (within agreed scope)',
                  'Custom feature development (optional, quoted separately)',
                  'Client-owned source code (no dependency on third-party plugin licenses)',
                  'Priority support',
                ],
                excludes: [
                  'Custom backoffice/admin panel for stock, orders, or customers',
                  'Advanced custom automations and enterprise integrations',
                ],
              },
              featured: false,
              conditionNote:
                'Monthly hosting: CLP 49,900/month. Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
              features: [
                { text: 'Everything in SMB Solution', included: true },
                { text: 'Expanded corporate website (up to 10 pages)', included: true },
                { text: 'Manageable catalog (up to 100 items)', included: true },
                { text: 'Checkout/payment integration through external provider', included: true },
                { text: 'Centralized contact and lead capture forms', included: true },
                { text: 'Email notifications for inquiries and sales', included: true },
                { text: 'Essential Google visibility setup', included: true },
                { text: '15-day post-launch guidance', included: true },
                { text: 'Up to 3 revision rounds included', included: true },
                {
                  text: 'Custom feature development (optional, quoted separately)',
                  included: true,
                },
                {
                  text: 'Client-owned source code (no dependency on third-party plugin licenses)',
                  included: true,
                },
                { text: 'Priority support', included: true },
              ],
              ctaText: 'Choose Ecommerce',
              ctaLink: '/contacto',
            },
            {
              id: 'ai-chatbot-start',
              name: 'Chatbot AI Start',
              icon: 'Bot',
              description: 'Basic RAG assistant to answer FAQs and capture leads on a single website or landing page.',
              price: 190000,
              oldPrice: 290000,
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience: 'Independent professionals and SMBs starting to automate their customer service.',
                objective: 'Capture leads 24/7 and answer repetitive basic questions automatically.',
                focus: 'Simple installation on a website, answering FAQs and simple lead scoring.',
                webTypes: [
                  'Service businesses website',
                  'Landing pages with high traffic',
                  'Support centers',
                ],
                includes: [
                  '1 Basic Website embedding',
                  'Training on up to 10 company URLs or documents',
                  'General FAQ and context responses',
                  'Lead generation form logic',
                  'Send leads to email or Google Sheets',
                  'Basic brand-aligned prompt (tone of voice)',
                  'One-time knowledge ingestion',
                ],
                excludes: [
                  'Integration with WhatsApp Official API',
                  'Integration with advanced CRMs (Salesforce/Hubspot)',
                  'Custom APIs (checking order status, live inventory)',
                ],
              },
              featured: false,
              conditionNote: 'Maintenance and servers start at $29.900/month. Includes hosting, document training, and AI tokens processing.',
              features: [
                { text: 'Embedded Website Widget', included: true },
                { text: 'Trained on 10 documents/URLs', included: true },
                { text: 'FAQ & Lead capture flows', included: true },
                { text: 'Export lead to Email/Sheets', included: true },
                { text: 'Tailored brand tone of voice', included: true },
                { text: 'WhatsApp integration', included: false },
                { text: 'Advanced CRM/API integration', included: false },
              ],
              ctaText: 'Get Chatbot Start',
              ctaLink: '/contacto',
            },
            {
              id: 'ai-chatbot-enterprise',
              name: 'Chatbot AI Enterprise',
              icon: 'MessageSquare',
              description: 'Omnichannel AI Assistant integrating CRMs, APIs, WhatsApp, and advanced context.',
              price: 490000,
              oldPrice: 690000,
              paymentType: 'one-time setup payment',
              scopeDetails: {
                audience: 'Medium to large clinics, e-commerce, and enterprises with complex data structures and high message volume.',
                objective: 'Automate multi-step processes like booking, tracking, and advanced pre-sales qualification over WhatsApp.',
                focus: 'Omnichannel presence (Web + WhatsApp), CRM connection and complex dynamic queries.',
                webTypes: [
                  'Enterprise websites',
                  'E-commerce platforms',
                  'Clinics and booking sites',
                ],
                includes: [
                  'Everything in Start Plan',
                  'WhatsApp Official API connection',
                  'Integration with custom CRM (Hubspot, Salesforce, etc.)',
                  'Advanced API hookups (Bookings/Order status)',
                  'Unlimited manual and document ingestion pages',
                  'Dynamic routing to human agents',
                  'Advanced analytics and session logging',
                ],
                excludes: [
                  'External tool licenses (n8n pro, message consumption)',
                  'Non-standard proprietary database bridges without APIs',
                ],
              },
              featured: true,
              badge: 'OMNICHANNEL',
              conditionNote: 'Maintenance and servers start at $89.900/month. Includes WhatsApp connection, complex RAG and AI tokens.',
              features: [
                { text: 'Everything in Chatbot Start', included: true },
                { text: 'WhatsApp Official Integration', included: true },
                { text: 'Enterprise CRM integrations', included: true },
                { text: 'Complex API hookups (Bookings, Tracking)', included: true },
                { text: 'Unlimited Document Pages for RAG', included: true },
                { text: 'Dynamic human handoff routing', included: true },
                { text: 'Advanced conversation analytics', included: true },
              ],
              ctaText: 'Get Enterprise AI',
              ctaLink: '/contacto',
            },
          ],
        }
      : {
          titlePrefix: 'Paquetes y ',
          titleHighlight: 'Precios',
          subtitle: 'Elige el paquete que mejor se adapta al tipo de proyecto que necesitas.',
          helper:
            'Soluciones completas para pymes de servicios: planificación, diseño, desarrollo, publicación y acompañamiento post-lanzamiento.',
          growthTip:
            '¿Quieres crecimiento continuo? Recomendamos un plan mensual de mantenimiento.',
          fromLabel: 'Desde',
          emailFootnote: '',
          viewDetails: 'Ver todos los detalles de cada paquete',
          enterpriseBadge: 'Cotización personalizada',
          enterpriseTitle: '¿Necesitas una solución a medida?',
          enterpriseDescription:
            'Cuéntanos qué necesitas y te enviamos una propuesta hecha para tu proyecto.',
          enterprisePrimaryCta: 'Ir al formulario',
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
              description:
                'Página web para emprendedores y pymes de servicios que necesitan captar leads rápido.',
              price: 149000,
              oldPrice: 299000,
              paymentType: 'pago único de implementación',
              scopeDetails: {
                audience:
                  'Emprendedores, profesionales y pymes de servicios que necesitan presencia digital profesional rápida.',
                objective:
                  'Lanzar una página enfocada en conversión para captar leads calificados y abrir canales directos con clientes.',
                focus:
                  'Velocidad de salida, claridad visual e integraciones esenciales sin desarrollo personalizado.',
                webTypes: [
                  'Landing page para negocios de servicios',
                  'Web profesional para independientes y consultores',
                  'Página de captación de leads (Ads, redes o WhatsApp)',
                  'Web de menú digital (sin checkout)',
                  'Catálogo básico de productos o servicios',
                  'Página simple para campañas o eventos',
                ],
                includes: [
                  'Página web',
                  'Diseño profesional + identidad visual',
                  'Enfoque UX/UI orientado a conversión',
                  '3 propuestas de logo',
                  'Sitio adaptable a celular y computador',
                  'Botones de WhatsApp y redirección a redes',
                  'Sección de reseñas',
                  'Formulario de contacto conectado a tu correo',
                  'Integración Google Maps + videos YouTube',
                  'Hasta 30 productos en catálogo',
                  'Dominio',
                  'Configuración y publicación del sitio',
                  'Acompañamiento post-lanzamiento por 15 días',
                  '1 ronda de ajustes incluida (contenido y cambios visuales menores)',
                  'Configuración de correo corporativo*',
                ],
                excludes: [
                  'Visibilidad esencial en Google (SEO)',
                  'Desarrollo de funciones a medida',
                  'Módulo e-commerce',
                  'Soporte prioritario',
                ],
              },
              featured: false,
              conditionNote:
                'Hosting mensual: $19.900/mes. Incluye hosting, SSL, backups y monitoreo base.',
              features: [
                { text: 'Página web', included: true },
                { text: 'Diseño profesional + identidad visual', included: true },
                { text: 'Enfoque UX/UI orientado a conversión', included: true },
                { text: '3 propuestas de logo', included: true },
                { text: 'Sitio adaptable a celular y computador', included: true },
                { text: 'Botones de WhatsApp y redirección a redes', included: true },
                { text: 'Sección de reseñas', included: true },
                { text: 'Formulario de contacto conectado a tu correo', included: true },
                { text: 'Integración Google Maps + videos YouTube', included: true },
                { text: 'Hasta 30 productos en catálogo', included: true },
                { text: 'Dominio', included: true },
                { text: 'Configuración y publicación del sitio', included: true },
                { text: 'Acompañamiento post-lanzamiento por 15 días', included: true },
                { text: '1 ronda de ajustes incluida', included: true },
                { text: 'Configuración de correo corporativo*', included: true },
                { text: 'Multiidioma (ES/EN) - opcional ', included: false },
                { text: 'Visibilidad esencial en Google (SEO)', included: false },
                { text: 'Desarrollo de funciones a medida', included: false },
                { text: 'Módulo e-commerce', included: false },
                { text: 'Soporte prioritario', included: false },
              ],
              ctaText: 'Elegir Landing',
              ctaLink: '/contacto',
            },
            {
              id: 'web-corporativa',
              name: 'Solución Pyme',
              icon: 'Code',
              description:
                'Sitio corporativo multipágina para pymes de servicios enfocadas en posicionamiento y leads.',
              price: 299000,
              oldPrice: 599000,
              paymentType: 'pago único de implementación',
              scopeDetails: {
                audience:
                  'Pymes de servicios que necesitan mejor posicionamiento digital y un flujo constante de contactos.',
                objective:
                  'Construir un sitio multipagina que explique servicios con claridad y convierta visitas en consultas calificadas.',
                focus:
                  'Credibilidad de marca, arquitectura clara de informacion y puntos de conversion en paginas clave.',
                webTypes: [
                  'Web corporativa de servicios',
                  'Web para clínica, estudio, consultora o agencia',
                  'Portafolio profesional/empresa',
                  'Catálogo comercial sin checkout',
                  'Web de restaurante (menú + reservas externas)',
                  'Páginas de campaña o micrositios de marca',
                  'Sitio para eventos o cursos informativos',
                ],
                includes: [
                  'Todo lo de Solución Emprendedor',
                  'Sitio de hasta 5 secciones',
                  'Hasta 50 productos en catálogo',
                  'Botón flotante de WhatsApp',
                  'Sección de testimonios',
                  'Multiidioma (ES/EN) - se cotiza aparte',
                  'Optimización de velocidad',
                  'HTTPS obligatorio + SSL',
                  'Auditoría esencial pre-lanzamiento - opcional',
                  'Página 404 personalizada + redirección al inicio',
                  'Páginas de servicios y empresa',
                  'Secciones de contacto orientadas a conversión',
                  'SEO on-page esencial Google',
                  'Acompañamiento post-lanzamiento por 15 días',
                  'Hasta 2 rondas de ajustes incluidas (dentro del alcance acordado)',
                  'Desarrollo de funciones a medida (opcional)',
                ],
                excludes: ['Flujo completo e-commerce con catalogo y checkout'],
              },
              featured: true,
              badge: 'MÁS POPULAR',
              conditionNote:
                'Hosting mensual: $29.900/mes. Incluye hosting, SSL, backups básicos y monitoreo base.',
              features: [
                { text: 'Todo lo de Solución Emprendedor', included: true },
                { text: 'Sitio de hasta 5 secciones', included: true },
                { text: 'Hasta 50 productos en catálogo', included: true },
                { text: 'Sección de testimonios', included: true },
                { text: 'Multiidioma (ES/EN) - se cotiza aparte', included: true },
                { text: 'Optimización de velocidad', included: true },
                { text: 'HTTPS obligatorio + SSL', included: true },
                { text: 'Auditoría esencial pre-lanzamiento - opcional', included: true },
                { text: 'Página 404 personalizada + redirección al inicio', included: true },
                { text: 'Páginas de servicios y empresa', included: true },
                { text: 'Secciones de contacto orientadas a conversión', included: true },
                { text: 'SEO on-page esencial Google', included: true },
                { text: 'Acompañamiento post-lanzamiento por 15 días', included: true },
                { text: 'Hasta 2 rondas de ajustes incluidas', included: true },
                { text: 'Desarrollo de funciones a medida (opcional )', included: true },
              ],
              ctaText: 'Elegir Corporativo',
              ctaLink: '/contacto',
            },
            {
              id: 'ecommerce-standard',
              name: 'Solución Empresa',
              icon: 'ShoppingCart',
              description:
                'Sitio corporativo avanzado para negocios de servicios, con catálogo administrable e integraciones de pago sin backend a medida.',
              price: 699000,
              oldPrice: 999000,
              paymentType: 'pago único de implementación',
              scopeDetails: {
                audience:
                  'Negocios de servicios que necesitan escalar su presencia digital con catálogo y captación comercial, sin desarrollar un sistema interno complejo.',
                objective:
                  'Lanzar un sitio robusto con catálogo, formularios y checkout integrado por proveedor externo, priorizando velocidad de salida y mantenimiento simple.',
                focus:
                  'Conversión comercial y operación simple con herramientas estándar, evitando desarrollo de backoffice personalizado.',
                webTypes: [
                  'Ecommerce pyme con catalogo escalable',
                  'Sitio corporativo + canal de ventas online',
                  'Web orientada a productos con checkout por proveedor',
                  'Catalogo multiproducto para negocios de servicios',
                  'Web comercial con panel de gestion robusto estandar',
                  'Plataforma comercial para operaciones en crecimiento',
                ],
                includes: [
                  'Todo lo de Solución Pyme',
                  'Sitio corporativo ampliado (hasta 10 paginas)',
                  'Catalogo administrable (hasta 100 items)',
                  'Integracion de checkout/pago con proveedor externo',
                  'Formularios de contacto y captacion centralizados',
                  'Notificaciones por email de solicitudes y ventas',
                  'Visibilidad esencial en Google',
                  'Acompanamiento post-lanzamiento por 15 dias',
                  'Hasta 3 rondas de ajustes incluidas (dentro del alcance acordado)',
                  'Desarrollo de funciones a medida (opcional )',
                  'Código Fuente Propiedad del Cliente (No depende de licencias de plugins de terceros).',
                  'Soporte prioritario',
                ],
                excludes: [
                  'Panel/backoffice a medida para stock, pedidos o clientes',
                  'Automatizaciones avanzadas e integraciones enterprise a medida',
                ],
              },
              featured: false,
              conditionNote:
                'Hosting mensual: $49.900/mes. Incluye hosting, SSL, backups básicos y monitoreo base.',
              features: [
                { text: 'Todo lo de Solución Pyme', included: true },
                { text: 'Sitio corporativo ampliado (hasta 10 paginas)', included: true },
                { text: 'Catalogo administrable (hasta 100 items)', included: true },
                { text: 'Integracion de checkout/pago con proveedor externo', included: true },
                { text: 'Formularios de contacto y captacion centralizados', included: true },
                { text: 'Notificaciones por email de solicitudes y ventas', included: true },
                { text: 'Visibilidad esencial en Google', included: true },
                { text: 'Acompanamiento post-lanzamiento por 15 dias', included: true },
                { text: 'Hasta 3 rondas de ajustes incluidas', included: true },
                { text: 'Desarrollo de funciones a medida (opcional )', included: true },
                {
                  text: 'Código Fuente Propiedad del Cliente (No depende de licencias de plugins de terceros).',
                  included: true,
                },
                { text: 'Soporte prioritario', included: true },
              ],
              ctaText: 'Elegir Ecommerce',
              ctaLink: '/contacto',
            },
            {
              id: 'ai-chatbot-start',
              name: 'Chatbot AI Start',
              icon: 'Bot',
              description: 'Asistente RAG básico para responder FAQs y capturar leads en una página web o landing page.',
              price: 190000,
              oldPrice: 290000,
              paymentType: 'pago único de implementación',
              scopeDetails: {
                audience: 'Profesionales independientes y pymes que buscan empezar a automatizar su atención al cliente.',
                objective: 'Capturar leads 24/7 y responder las preguntas frecuentes repetitivas de forma instantánea.',
                focus: 'Instalación simple en el sitio web para responder dudas y hacer un prefiltro de leads básicos.',
                webTypes: [
                  'Página web de servicios',
                  'Landing pages con tráfico de anuncios',
                  'Centro de soporte básico',
                ],
                includes: [
                  '1 Widget embebido en tu sitio web',
                  'Entrenamiento de hasta 10 URLs o documentos de contexto (PDFs)',
                  'Respuestas de FAQs y contexto del negocio',
                  'Flujo de generación de leads',
                  'Envío de leads a correo o Google Sheets',
                  'Prompt personalizado alineado al tono de la marca',
                  'Ingesta de conocimiento (primera vez)',
                ],
                excludes: [
                  'Integración con la API Oficial de WhatsApp',
                  'Integración con CRMs avanzados (Salesforce/Hubspot)',
                  'Llamadas a APIs internas (consultar estado de pedidos, etc)',
                ],
              },
              featured: false,
              conditionNote: 'Mantenimiento y servidores desde $29.900/mes. Incluye alojamiento, reentrenamiento documental y tokens de IA.',
              features: [
                { text: 'Widget Web Embebido', included: true },
                { text: 'Entrenado con hasta 10 documentos/URLs', included: true },
                { text: 'Dudas generales y filtro de leads', included: true },
                { text: 'Exportación a Email / Spreadsheets', included: true },
                { text: 'Tono de voz de la marca', included: true },
                { text: 'Integración WhatsApp Oficial', included: false },
                { text: 'Integración avanzada (CRMs/APIs)', included: false },
              ],
              ctaText: 'Elegir Chatbot Start',
              ctaLink: '/contacto',
            },
            {
              id: 'ai-chatbot-enterprise',
              name: 'Chatbot AI Enterprise',
              icon: 'MessageSquare',
              description: 'Asistente de IA Omnicanal con integración en tu CRM, APIs, WhatsApp Oficial y contexto avanzado.',
              price: 490000,
              oldPrice: 590000,
              paymentType: 'pago único de implementación',
              scopeDetails: {
                audience: 'Clínicas, e-commerce o empresas con alto volumen de consultas que requieren integraciones con sus sistemas.',
                objective: 'Automatizar múltiples pasos operativos como confirmación de reservas, estado de envíos y calificación comercial avanzada en WhatsApp.',
                focus: 'Flujo omnicanal (Web + WhatsApp), integración profunda a CRM y manejo de consultas variables.',
                webTypes: [
                  'Proyectos Inmobiliarios y Constructoras',
                  'Sitios e-commerce amplios',
                  'Clínicas Médicas con agendamiento',
                ],
                includes: [
                  'Todo lo del Chatbot Start',
                  'Conexión a API Oficial de WhatsApp de Meta',
                  'Integración con tu CRM (Hubspot, Salesforce, Buk, etc.)',
                  'Hooks y llamadas a APIs internas (disponibilidad, inventario)',
                  'Entrenamiento RAG profundo ilimitado',
                  'Derivación inteligente a agentes humanos',
                  'Registro de sesiones y analítica conversacional',
                ],
                excludes: [
                  'Costo de terceros, créditos por envíos transaccionales en WhatsApp',
                  'Nuevos requerimientos no mapeados en la matriz inicial',
                ],
              },
              featured: true,
              badge: 'OMNICANAL',
              conditionNote: 'Mantenimiento y servidores desde $89.900/mes. Incluye tarifas API WhatsApp, mantenimiento y tokens IA.',
              features: [
                { text: 'Todo lo del Asistente Start', included: true },
                { text: 'Integración WhatsApp Oficial API', included: true },
                { text: 'Integración con CRM o ERPS vía API', included: true },
                { text: 'Acciones complejas (Reservas, Seguimiento)', included: true },
                { text: 'Entrenamiento RAG sin límite de páginas', included: true },
                { text: 'Derivación inteligente a humano', included: true },
                { text: 'Analítica de chats avanzada', included: true },
              ],
              ctaText: 'Elegir Enterprise IA',
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

  const visiblePackages = copy.packages;

  return (
    <section className="py-16 px-4 sm:px-6 bg-base">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {copy.titlePrefix}
            <span className="text-primary">{copy.titleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-800 text-gray-800 max-w-2xl mx-auto">
            {copy.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto mt-2">{copy.helper}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {visiblePackages.map((pkg, idx) => {
            const hasOffer = typeof pkg.oldPrice === 'number' && pkg.oldPrice > pkg.price;
            const discountPercent = hasOffer
              ? Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100)
              : null;
            const hasScopeDetails = Boolean(pkg.scopeDetails);

            return (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`relative bg-base border p-6 transition-shadow duration-300 hover:shadow-lg flex flex-col h-full ${
                  pkg.featured ? 'border-secondary' : 'border-gray-200'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-white text-xs font-bold px-4 py-1">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                      pkg.featured ? 'bg-secondary text-white' : 'bg-primary text-gray-800'
                    }`}
                  >
                    {getIcon(pkg.icon, 32)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
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
                        <span className="line-through decoration-gray-400">
                          {formatPrice(pkg.oldPrice)}
                        </span>
                      </span>
                      {pkg.offerMeta && (
                        <span className="text-[11px] text-secondary font-semibold">
                          {pkg.offerMeta}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="text-3xl sm:text-4xl font-bold text-gray-800">
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
                    {pkg.conditionNote && (
                      <p className="text-[11px] text-gray-500">{pkg.conditionNote}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {hasScopeDetails && (
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDetailPackage({ name: pkg.name, details: pkg.scopeDetails })
                      }
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
                        : 'bg-primary text-gray-800 hover:bg-amber-600'
                    }`}
                  >
                    {pkg.ctaText} <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8" data-aos="fade-up">
          <p className="text-xs sm:text-sm text-gray-600 mb-3">{copy.growthTip}</p>
          {copy.emailFootnote && (
            <p className="text-[11px] text-gray-500 mb-3">{copy.emailFootnote}</p>
          )}
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
