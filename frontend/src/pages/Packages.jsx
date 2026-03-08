import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Check, X, Zap, Star, ArrowRight, Building2, ShoppingCart } from 'lucide-react';

import PackageDetailModal from '../components/pricing/PackageDetailModal.jsx';
import { COMPANY } from '../constants/index.js';
import { useLanguage } from '../i18n/index.jsx';

const USD_REFERENCE_RATE = 950;

function Packages() {
  const [selectedDetailPlan, setSelectedDetailPlan] = useState(null);
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'Packages and pricing',
          heroTitlePrefix: 'Packages and ',
          heroTitleHighlight: 'Pricing',
          heroDescription:
            'Built for service SMBs in Chile: start lean, then scale to business and enterprise operations.',
          monthlyLabel: 'Setup only',
          yearlyLabel: 'Setup + 12 months maintenance',
          fromLabel: 'From',
          badgePopular: 'MOST POPULAR',
          paymentMonthly: 'single setup payment',
          paymentYearly: 'single payment including annual maintenance',
          emailFootnote:
            '* Hosting, domains, and provider licenses are billed separately. Need continuous growth? Ask for our monthly maintenance plan.',
          customTitle: 'Need something more custom?',
          customDescription:
            'Every project is unique. If you need special requirements or additional features, contact us for a tailored quote.',
          customCta: 'Request custom quote',
          moreInfoCta: 'Need more information?',
          detailToggleShow: 'View details',
          detailSubtitle: 'Package scope',
          detailClose: 'Close details',
          enterpriseBadge: 'Enterprise',
          enterpriseTitle: 'Do you need an enterprise-level solution?',
          enterpriseDescription:
            'For medium-sized companies with higher traffic, multi-team workflows, advanced automations, or ERP/CRM integrations.',
          enterprisePrimaryCta: 'Request enterprise quote',
          enterpriseSecondaryCta: 'View enterprise scope',
          enterpriseStartingFrom: 'Starting from',
          detailLabels: {
            audience: 'For whom',
            objective: 'Objective',
            focus: 'Focus',
            includes: 'Includes',
            excludes: 'Excludes (scope)',
            webTypes: 'Web Types That Fit',
          },
          saasOffer: {
            badge: 'NEW SAAS',
            title: 'SaaS Home Page',
            subtitle:
              'A multi-tenant subscription platform for businesses that need a professional home page they can manage themselves without commissioning a separate project.',
            setupLabel: 'Initial setup',
            monthlyLabel: 'Base monthly plan',
            setupNote: 'Includes onboarding, tenant setup, initial branding, and publishing.',
            monthlyNote: 'Includes platform access, operation, and service continuity.',
            includesTitle: 'Includes',
            includes: [
              'Self-manageable home page',
              'Editable colors, images, titles, and descriptions',
              'Self-manageable menu or catalog',
              'Contact form',
              '3 content sections',
              'Initial launch and configuration',
            ],
            primaryCta: 'Request SaaS demo',
            secondaryCta: 'Talk to sales',
          },
          saasSection: {
            title: 'SaaS Services',
            description:
              'Subscription-based products built on a shared platform. You do not buy a separate codebase: you access and manage your business space within our system.',
          },
          customSection: {
            title: 'Custom Services',
            description:
              'These 3 solutions are custom implementation services. We define scope, build the project for your business, and launch it according to the package level you need.',
          },
          guarantees: [
            {
              title: 'Satisfaction guarantee',
              description: 'Strategic iterations are included until agreed scope closure.',
            },
            {
              title: 'Fast delivery',
              description: 'Your website ready in record time with our AI-powered workflow.',
            },
            {
              title: 'Post-launch guidance included',
              description: 'All plans include post-launch guidance to resolve questions and small adjustments.',
            },
          ],
          plans: [
            {
              name: 'Entrepreneur Solution',
              icon: <Zap size={32} />,
              description: 'Single-page website for service SMBs that need fast lead capture.',
              priceMonthly: 149000,
              oldPriceMonthly: 299000,
              offerMeta: 'Launch offer: 10 slots until Mar 31, 2026.',
              priceYearly: 899000,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Basic Maintenance plan.',
              conditionNote:
                'Hosting, domains, and transactional email providers are billed by usage. Optional features are quoted separately.',
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
              features: [
                { name: 'Single-page website', included: true },
                { name: 'Professional design + visual identity', included: true },
                { name: 'UX/UI-focused approach for conversion', included: true },
                { name: '3 logo concepts', included: true },
                { name: 'Responsive development', included: true },
                { name: 'Buttons to WhatsApp and social media', included: true },
                { name: 'Testimonials section', included: true },
                { name: 'Contact form connected to your email', included: true },
                { name: 'Google Maps + YouTube embeds', included: true },
                { name: 'Basic Google visibility + visits tracking', included: true },
                { name: 'Up to 30 products in catalog', included: true },
                { name: 'Free domain (1st year)', included: true },
                { name: 'Website launch configuration', included: true },
                { name: '15-day post-launch guidance', included: true },
                { name: '1 revision round included', included: true },
                { name: 'Business email setup*', included: true },
                { name: 'Online booking (Calendly) - optional, quoted separately', included: true },
                { name: 'Basic bilingual setup (ES/EN) - optional, quoted separately', included: true },
                { name: 'Custom system development', included: false },
                { name: 'E-commerce module', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Start',
            },
            {
              name: 'SMB Solution',
              icon: <Building2 size={32} />,
              description: 'Multi-page corporate website for service SMB positioning and lead generation.',
              priceMonthly: 299000,
              oldPriceMonthly: 599000,
              priceYearly: 1299000,
              popular: true,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Basic Maintenance plan.',
              conditionNote:
                'Hosting, domains, and transactional email providers are billed by usage. Optional features are quoted separately.',
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
              features: [
                { name: 'Everything in Entrepreneur Solution', included: true },
                { name: 'Website up to 5 sections', included: true },
                { name: 'Up to 50 products in catalog', included: true },
                { name: 'Testimonials section', included: true },
                { name: 'Basic bilingual setup (ES/EN) - optional, quoted separately', included: true },
                { name: 'Speed optimization', included: true },
                { name: 'Mandatory HTTPS + proper SSL', included: true },
                { name: 'Essential pre-launch audit - optional, quoted separately', included: true },
                { name: 'Custom 404 page + Home redirect', included: true },
                { name: 'Service and company pages', included: true },
                { name: 'Conversion-focused contact sections', included: true },
                { name: 'Essential on-page SEO for Google', included: true },
                { name: '15-day post-launch guidance', included: true },
                { name: 'Up to 2 revision rounds included', included: true },
                { name: 'Custom feature development (optional, quoted separately)', included: true },
              ],
              cta: 'Choose SMB',
            },
            {
              name: 'Business Solution',
              icon: <ShoppingCart size={32} />,
              description:
                'Self-manageable website for service businesses, with backend control for content, leads, orders, and payments.',
              priceMonthly: 699000,
              oldPriceMonthly: 999000,
              priceYearly: 1999000,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Professional Maintenance plan.',
              conditionNote:
                'Hosting, domains, and transactional email providers are billed by usage. Optional features are quoted separately.',
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
              features: [
                { name: 'Everything in SMB Solution', included: true },
                { name: 'Corporate website + self-manageable admin', included: true },
                { name: 'Up to 10 pages', included: true },
                { name: 'Basic ecommerce + secure checkout', included: true },
                { name: '100+ products in catalog or self-manageable catalog', included: true },
                { name: 'Payment gateway integration', included: true },
                { name: 'Admin panel for content, products, and stock', included: true },
                { name: 'Order and customer management', included: true },
                { name: 'Email center in admin panel', included: true },
                { name: 'Payment voucher/receipt generation (non-tax)', included: true },
                { name: 'Basic sales dashboard (orders, revenue, avg ticket)', included: true },
                { name: 'Essential Google visibility setup', included: true },
                { name: '15-day post-launch guidance', included: true },
                { name: 'Up to 3 revision rounds included', included: true },
                { name: 'Custom feature development (optional, quoted separately)', included: true },
                { name: 'Priority support', included: true },
              ],
              cta: 'Choose Business',
            },
            {
              name: 'Enterprise Solution',
              enterpriseOnly: true,
              icon: <Star size={32} />,
              description: 'Advanced ecommerce and automation platform for companies scaling beyond standard SMB operations.',
              priceMonthly: 999000,
              oldPriceMonthly: 1899000,
              priceYearly: 3099000,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Premium Maintenance plan.',
              conditionNote:
                'Hosting, domains, and transactional email providers are billed by usage. Optional features are quoted separately.',
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
              features: [
                { name: 'Everything in Business Solution', included: true },
                { name: 'Multi-role admin panel with granular permissions', included: true },
                { name: 'Automated workflows (cart recovery and post-purchase)', included: true },
                { name: 'Executive KPI dashboard with strategic metrics', included: true },
                { name: 'Advanced security setup + essential audit', included: true },
                { name: 'Staging environment + QA before go-live', included: true },
                { name: 'CRO and UX optimization for conversion', included: true },
                { name: 'Technical documentation + team training', included: true },
                { name: 'Continuous strategic iteration cycles (according to approved roadmap)', included: true },
                { name: 'Pro integrations with sync (ERP/CRM/logistics/payments) - optional, quoted separately', included: true },
                {
                  name: 'Scalable high-traffic architecture + monitoring - optional, quoted separately',
                  included: true,
                },
                {
                  name: 'Priority support with SLA (active maintenance plan required) - optional, quoted separately',
                  included: true,
                },
                {
                  name: 'Monthly strategic follow-up (during active maintenance contract) - optional, quoted separately',
                  included: true,
                },
              ],
              cta: 'Choose Enterprise',
            },
          ],
        }
      : {
          heroBadge: 'Paquetes y precios',
          heroTitlePrefix: 'Paquetes y ',
          heroTitleHighlight: 'Precios',
          heroDescription:
            'Pensado para pymes de servicios en Chile: parte liviano y escala a operacion negocio o empresa.',
          monthlyLabel: 'Solo implementacion',
          yearlyLabel: 'Implementacion + 12 meses mantenimiento',
          fromLabel: 'Desde',
          badgePopular: 'MAS POPULAR',
          paymentMonthly: 'pago unico de implementacion',
          paymentYearly: 'pago unico con mantenimiento anual incluido',
          emailFootnote:
            '* Hosting, dominio y licencias de proveedores se cotizan por separado. Para mejoras continuas, soporte y evolucion mensual, activa nuestro plan de mantenciones.',
          customTitle: 'Necesitas algo mas personalizado?',
          customDescription:
            'Cada proyecto es unico. Si tienes requerimientos especiales o necesitas funcionalidades adicionales, contactaños para una cotizacion a medida.',
          customCta: 'Solicitar cotizacion personalizada',
          moreInfoCta: '¿Necesitas mas informacion?',
          detailToggleShow: 'Ver detalle',
          detailSubtitle: 'Alcance del paquete',
          detailClose: 'Cerrar detalle',
          enterpriseBadge: 'Enterprise',
          enterpriseTitle: 'Necesitas una solucion nivel enterprise?',
          enterpriseDescription:
            'Para empresas medianas con mayor trafico, trabajo multi-equipo, automatizaciones avanzadas o integraciones ERP/CRM.',
          enterprisePrimaryCta: 'Solicitar cotizacion enterprise',
          enterpriseSecondaryCta: 'Ver alcance enterprise',
          enterpriseStartingFrom: 'Desde',
          detailLabels: {
            audience: 'Dirigido a',
            objective: 'Objetivo',
            focus: 'Enfoque',
            includes: 'Incluye',
            excludes: 'No incluye (alcance)',
            webTypes: 'Tipos de webs que si calzan',
          },
          saasOffer: {
            badge: 'NUEVO SAAS',
            title: 'SaaS Home Page',
            subtitle:
              'Una plataforma SaaS multi-tenant por suscripcion para negocios que necesitan una home page profesional y autogestionable, sin contratar un proyecto distinto cada vez.',
            setupLabel: 'Setup inicial',
            monthlyLabel: 'Plan mensual base',
            setupNote: 'Incluye onboarding, configuracion del tenant, branding inicial y publicacion.',
            monthlyNote: 'Incluye acceso a la plataforma, operacion y continuidad del servicio.',
            includesTitle: 'Incluye',
            includes: [
              'Home page autogestionable',
              'Edicion de colores, imagenes, titulos y descripciones',
              'Menu o catalogo autogestionable',
              'Formulario de contacto',
              '3 secciones de contenido',
              'Configuracion y publicacion inicial',
            ],
            primaryCta: 'Solicitar demo SaaS',
            secondaryCta: 'Hablar con ventas',
          },
          saasSection: {
            title: 'Servicios SaaS',
            description:
              'Productos por suscripcion construidos sobre una plataforma compartida. No compras un codigo separado: accedes y administras tu espacio dentro de nuestro sistema.',
          },
          customSection: {
            title: 'Servicios a Medida',
            description:
              'Estas 3 soluciones son servicios de implementacion a medida. Definimos el alcance, desarrollamos el proyecto para tu negocio y lo publicamos segun el nivel de paquete que necesites.',
          },
          guarantees: [
            {
              title: 'Garantia de satisfaccion',
              description: 'Incluimos iteraciones estrategicas hasta cierre del alcance acordado.',
            },
            {
              title: 'Entrega rapida',
              description: 'Tu sitio web listo en tiempo record gracias a nuestra tecnologia con IA.',
            },
            {
              title: 'Soporte incluido',
              description: 'Todos los planes incluyen soporte tecnico para resolver tus dudas.',
            },
          ],
          plans: [
            {
              name: 'Solución Emprendedor',
              icon: <Zap size={32} />,
              description: 'Pagina web para emprendedores y pymes de servicios que necesitan captar leads rapido.',
              priceMonthly: 149000,
              oldPriceMonthly: 299000,
              offerMeta: 'Oferta lanzamiento: 10 cupos hasta el 31 de marzo de 2026.',
              priceYearly: 899000,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Basico.',
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
              scopeDetails: {
                audience:
                  'Emprendedores, profesionales y pymes de servicios que necesitan presencia digital profesional rapida.',
                objective:
                  'Lanzar una pagina enfocada en conversion para captar leads calificados y abrir canales directos con clientes.',
                focus:
                  'Velocidad de salida, claridad visual e integraciones esenciales sin desarrollo personalizado.',
                includes: [
                  'Pagina web',
                  'Diseño profesional + identidad visual',
                  'Enfoque UX/UI orientado a conversion',
                  '3 propuestas de logo',
                  'Sitio adaptable a celular y computador',
                  'Botones de WhatsApp y redireccion a redes',
                  'Seccion de resenas',
                  'Formulario de contacto conectado a tu correo',
                  'Integracion Google Maps + videos YouTube',
                  'Hasta 30 productos en catalogo',
                  'Dominio gratis (primer ano)',
                  'Configuracion y publicacion del sitio',
                  'Acompanamiento post-lanzamiento por 15 dias',
                  '1 ronda de ajustes incluida (contenido y cambios visuales menores)',
                  'Configuracion de correo corporativo*',
                  'Agendamiento online (Calendly) - opcional, se cotiza aparte',
                  'Multiidioma (ES/EN) - opcional, se cotiza aparte',
                ],
                excludes: [
                  'Visibilidad esencial en Google (SEO)',
                  'Desarrollo de funciones a medida',
                  'Modulo e-commerce',
                  'Soporte prioritario',
                ],
              },
              features: [
                { name: 'Pagina web', included: true },
                { name: 'Diseño profesional + identidad visual', included: true },
                { name: 'Enfoque UX/UI orientado a conversion', included: true },
                { name: '3 propuestas de logo', included: true },
                { name: 'Sitio adaptable a celular y computador', included: true },
                { name: 'Botones de WhatsApp y redireccion a redes', included: true },
                { name: 'Seccion de resenas', included: true },
                { name: 'Formulario de contacto conectado a tu correo', included: true },
                { name: 'Integracion Google Maps + videos YouTube', included: true },
                { name: 'Hasta 30 productos en catalogo', included: true },
                { name: 'Dominio gratis (primer ano)', included: true },
                { name: 'Configuracion y publicacion del sitio', included: true },
                { name: 'Acompanamiento post-lanzamiento por 15 dias', included: true },
                { name: '1 ronda de ajustes incluida', included: true },
                { name: 'Configuracion de correo corporativo*', included: true },
                { name: 'Agendamiento online (Calendly) - opcional, se cotiza aparte', included: true },
                { name: 'Multiidioma (ES/EN) - opcional, se cotiza aparte', included: true },
                { name: 'Visibilidad esencial en Google (SEO)', included: false },
                { name: 'Desarrollo de funciones a medida', included: false },
                { name: 'Modulo e-commerce', included: false },
                { name: 'Soporte prioritario', included: false },
              ],
              cta: 'Comenzar',
            },
            {
              name: 'Solucion Pyme',
              icon: <Building2 size={32} />,
              description: 'Sitio corporativo multipagina para pymes de servicios enfocadas en posicionamiento y leads.',
              priceMonthly: 299000,
              oldPriceMonthly: 599000,
              priceYearly: 1299000,
              popular: true,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Basico.',
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
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
                  'Desarrollo de funciones a medida (opcional, se cotiza aparte)',
                ],
                excludes: [
                  'Flujo completo e-commerce con catalogo y checkout',
                ],
              },
              features: [
                { name: 'Todo lo de Solución Emprendedor', included: true },
                { name: 'Sitio de hasta 5 secciones', included: true },
                { name: 'Hasta 50 productos en catalogo', included: true },
                { name: 'Seccion de testimonios', included: true },
                { name: 'Multiidioma (ES/EN) - se cotiza aparte', included: true },
                { name: 'Optimizacion de velocidad', included: true },
                { name: 'HTTPS obligatorio + SSL', included: true },
                { name: 'Auditoria esencial pre-lanzamiento - opcional', included: true },
                { name: 'Pagina 404 personalizada + redireccion al inicio', included: true },
                { name: 'Paginas de servicios y empresa', included: true },
                { name: 'Secciones de contacto orientadas a conversion', included: true },
                { name: 'SEO on-page esencial Google', included: true },
                { name: 'Acompanamiento post-lanzamiento por 15 dias', included: true },
                { name: 'Hasta 2 rondas de ajustes incluidas', included: true },
                { name: 'Desarrollo de funciones a medida (opcional, se cotiza aparte)', included: true },
              ],
              cta: 'Elegir Pyme',
            },
            {
              name: 'Solucion Negocio',
              icon: <ShoppingCart size={32} />,
              description:
                'Sitio autoadministrable para negocios de servicios, con backend para gestionar contenido, leads, pedidos y pagos.',
              priceMonthly: 699000,
              oldPriceMonthly: 999000,
              priceYearly: 1999000,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Profesional.',
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
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
                  'Desarrollo de funciones a medida (opcional, se cotiza aparte)',
                  'Soporte prioritario',
                ],
                excludes: [
                  'Automatizaciones avanzadas e integraciones enterprise a medida',
                ],
              },
              features: [
                { name: 'Todo lo de Solucion Pyme', included: true },
                { name: 'Sitio corporativo + panel autoadministrable', included: true },
                { name: 'Hasta 10 paginas', included: true },
                { name: 'E-commerce + checkout seguro', included: true },
                { name: '100+ productos en catalogo o catalogo autogestionable', included: true },
                { name: 'Integracion de pasarela de pago', included: true },
                { name: 'Panel para gestionar contenido, productos y stock', included: true },
                { name: 'Gestion de pedidos y clientes', included: true },
                { name: 'Centro de emails en panel administrador', included: true },
                { name: 'Generacion de comprobante/voucher de pago (no tributario)', included: true },
                { name: 'Dashboard de ventas basico (pedidos, ingresos, ticket promedio)', included: true },
                { name: 'Visibilidad esencial en Google', included: true },
                { name: 'Acompanamiento post-lanzamiento por 15 dias', included: true },
                { name: 'Hasta 3 rondas de ajustes incluidas', included: true },
                { name: 'Desarrollo de funciones a medida (opcional, se cotiza aparte)', included: true },
                { name: 'Soporte prioritario', included: true },
              ],
              cta: 'Elegir Negocio',
            },
            {
              name: 'Solucion Empresa',
              enterpriseOnly: true,
              icon: <Star size={32} />,
              description: 'Plataforma avanzada de ecommerce y automatizacion para empresas que escalan mas alla de una operacion pyme estandar.',
              priceMonthly: 999000,
              oldPriceMonthly: 1899000,
              priceYearly: 3099000,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementacion del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Premium.',
              conditionNote:
                'Hosting y proveedores de correo transaccional se cobran segun uso. Funciones opcionales se cotizan aparte.',
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
                  'Integraciones pro con sincronizacion (ERP/CRM/logistica/pagos) - opcional, se cotiza aparte',
                  'Arquitectura escalable + monitoreo de alto trafico - opcional, se cotiza aparte',
                  'Soporte prioritario con SLA (solo con plan de mantenimiento activo) - opcional, se cotiza aparte',
                  'Seguimiento estrategico mensual (durante vigencia del mantenimiento contratado) - opcional, se cotiza aparte',
                ],
                excludes: [
                  'Licencias de terceros o servicios de proveedores cobrados externamente',
                  'Nuevos requerimientos mayores fuera de la hoja de ruta aprobada',
                ],
              },
              features: [
                { name: 'Todo lo de Solucion Negocio', included: true },
                { name: 'Panel multi-rol con permisos granulares', included: true },
                { name: 'Flujos automatizados (carrito y post-compra)', included: true },
                { name: 'Dashboard ejecutivo con KPIs estrategicos', included: true },
                { name: 'Seguridad avanzada + auditoria esencial', included: true },
                { name: 'Ambiente staging + QA antes de produccion', included: true },
                { name: 'Optimizacion CRO y UX para conversion', included: true },
                { name: 'Documentacion tecnica + capacitacion de equipo', included: true },
                { name: 'Ciclos continuos de iteracion estrategica (segun roadmap aprobado)', included: true },
                {
                  name: 'Integraciones pro con sincronizacion (ERP/CRM/logistica/pagos) - opcional, se cotiza aparte',
                  included: true,
                },
                {
                  name: 'Arquitectura escalable + monitoreo de alto trafico - opcional, se cotiza aparte',
                  included: true,
                },
                {
                  name: 'Soporte prioritario con SLA (solo con plan de mantenimiento activo) - opcional, se cotiza aparte',
                  included: true,
                },
                {
                  name: 'Seguimiento estrategico mensual (durante vigencia del mantenimiento contratado) - opcional, se cotiza aparte',
                  included: true,
                },
              ],
              cta: 'Elegir Empresa',
            },
          ],
        };

  const enterprisePlan = copy.plans.find((pkg) => pkg.enterpriseOnly);
  const visiblePlans = copy.plans.filter((pkg) => !pkg.enterpriseOnly);
  const enterpriseSelectedPrice = enterprisePlan ? enterprisePlan.priceMonthly : null;

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

  const whatsappDigits = (() => {
    const phoneDigits =
      typeof COMPANY.phone === 'string' && COMPANY.phone.trim() ? COMPANY.phone.replace(/[^0-9]/g, '') : '';
    if (phoneDigits) return phoneDigits;

    const linkMatch =
      typeof COMPANY.whatsappLink === 'string' ? COMPANY.whatsappLink.match(/wa\.me\/(\d+)/) : null;
    return linkMatch?.[1] || '';
  })();

  const buildPackageWhatsappHref = (pkg) => {
    if (!whatsappDigits) return null;

    const selectedPrice = formatPrice(pkg.priceMonthly);
    const selectedCycle = copy.monthlyLabel;

    const message =
      lang === 'en'
        ? `Hi, I need more information about package "${pkg.name}". Option: ${selectedCycle}. Price: ${selectedPrice}.`
        : `Hola, necesito mas informacion sobre el paquete "${pkg.name}". Opcion: ${selectedCycle}. Precio: ${selectedPrice}.`;

    return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-base">
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/acuerdo.avif"
            alt="packages background"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Zap size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">{copy.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.heroTitlePrefix}
            <span className="text-primary">{copy.heroTitleHighlight}</span>
          </h1>
          <p className="text-gray-300 sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {copy.heroDescription}
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 p-8">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{copy.saasSection.title}</h2>
          <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800">{copy.saasSection.description}</p>
        </div>

        <div className="mb-10 border-2 border-secondary/20 bg-gradient-to-br from-base via-white to-base2/70 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-4">
                {copy.saasOffer.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{copy.saasOffer.title}</h2>
              <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800 max-w-2xl">{copy.saasOffer.subtitle}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {copy.saasOffer.setupLabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{formatPrice(149000)}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{copy.saasOffer.setupNote}</p>
                </div>
                <div className="border border-secondary/30 bg-secondary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {copy.saasOffer.monthlyLabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">{formatPrice(39900)}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{copy.saasOffer.monthlyNote}</p>
                </div>
              </div>
            </div>

            <div className="lg:w-[420px] border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-900 mb-4">
                {copy.saasOffer.includesTitle}
              </h3>
              <ul className="space-y-3">
                {copy.saasOffer.includes.map((item) => (
                  <li key={item} className="flex items-start text-sm text-gray-700">
                    <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center bg-secondary text-white font-bold px-5 py-3 hover:bg-blue-900 transition-all duration-300"
                >
                  {copy.saasOffer.primaryCta}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border border-secondary/40 text-secondary font-bold px-5 py-3 hover:bg-secondary/10 transition-all duration-300"
                >
                  {copy.saasOffer.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{copy.customSection.title}</h2>
          <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800">{copy.customSection.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {visiblePlans.map((pkg, index) => {
            const selectedPrice = pkg.priceMonthly;
            const hasMonthlyOffer =
              typeof pkg.oldPriceMonthly === 'number' && pkg.oldPriceMonthly > selectedPrice;
            const discountPercent = hasMonthlyOffer
              ? Math.round(((pkg.oldPriceMonthly - selectedPrice) / pkg.oldPriceMonthly) * 100)
              : null;
            const hasScopeDetails = Boolean(pkg.scopeDetails);
            const packageWhatsappHref = buildPackageWhatsappHref(pkg);

            return (
              <div
                key={index}
                className={`relative bg-base border-2 ${
                  pkg.popular ? 'border-secondary' : 'border-gray-200'
                } p-6 transition-all duration-300 hover:border-primary hover:shadow-lg flex flex-col h-full`}
              >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-xs font-bold px-4 py-1">
                    {copy.badgePopular}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 mb-4 ${
                    pkg.popular ? 'bg-secondary text-white' : 'bg-primary text-gray-900'
                  }`}
                >
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              </div>

                <div className="text-center mb-6">
                {hasMonthlyOffer && (
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
                      <span className="line-through decoration-gray-400">{formatPrice(pkg.oldPriceMonthly)}</span>
                    </span>
                    {pkg.offerMeta && <span className="text-[11px] text-secondary font-semibold">{pkg.offerMeta}</span>}
                  </div>
                )}
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                  <span className="mr-2 text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-secondary align-middle">
                    {copy.fromLabel}
                  </span>
                  <span className="align-middle">{formatPrice(selectedPrice)}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">~ {formatUsdPrice(selectedPrice)}</div>
                <div className="text-sm text-gray-500 mt-1">{copy.paymentMonthly}</div>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-300 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.name}
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
                    onClick={() => setSelectedDetailPlan({ name: pkg.name, details: pkg.scopeDetails })}
                    className="w-full inline-flex items-center justify-center py-2 text-xs font-semibold text-gray-800 bg-base2/70 border border-gray-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
                  >
                    {copy.detailToggleShow}
                  </button>
                )}

                <Link
                  to="/contacto"
                  className={`w-full flex items-center justify-center py-3 font-bold text-sm transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-secondary text-white hover:bg-blue-900'
                      : 'bg-primary text-gray-900 hover:bg-amber-600'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

              {packageWhatsappHref && (
                <a
                  href={packageWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center text-sm font-bold text-secondary hover:text-primary transition-all duration-300"
                >
                  {copy.moreInfoCta}
                </a>
              )}
            </div>
            );
          })}
        </div>

        {enterprisePlan && enterpriseSelectedPrice && (
          <div className="mt-8 border-2 border-secondary/30 bg-gradient-to-r from-secondary/10 via-base to-secondary/10 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-3">
                  {copy.enterpriseBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{copy.enterpriseTitle}</h3>
                <p className="text-sm text-gray-700 mt-2">{copy.enterpriseDescription}</p>
                <p className="text-sm text-gray-600 mt-3">
                  {copy.enterpriseStartingFrom}{' '}
                  <span className="font-bold text-gray-900">{formatPrice(enterpriseSelectedPrice)}</span>{' '}
                  <span className="text-xs text-gray-500">(~ {formatUsdPrice(enterpriseSelectedPrice)})</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
                >
                  {copy.enterprisePrimaryCta}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                {enterprisePlan.scopeDetails && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDetailPlan({ name: enterprisePlan.name, details: enterprisePlan.scopeDetails })
                    }
                    className="inline-flex items-center justify-center bg-base border border-secondary/40 text-secondary font-bold px-6 py-3 hover:bg-secondary/10 transition-all duration-300"
                  >
                    {copy.enterpriseSecondaryCta}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-[11px] text-gray-500">{copy.emailFootnote}</p>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-transparent shadow shadow-md shadow-gray-300 p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{copy.customTitle}</h3>
            <p className="text-sm text-gray-600 mb-6">{copy.customDescription}</p>
            <Link
              to="/contacto"
              className="inline-flex items-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
            >
              {copy.customCta}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.guarantees.map((item) => (
            <div key={item.title} className="text-center p-6">
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <PackageDetailModal
        isOpen={Boolean(selectedDetailPlan)}
        onClose={() => setSelectedDetailPlan(null)}
        title={selectedDetailPlan?.name || ''}
        subtitle={copy.detailSubtitle}
        details={selectedDetailPlan?.details || null}
        labels={copy.detailLabels}
        closeLabel={copy.detailClose}
      />
    </main>
  );
}

export default Packages;





