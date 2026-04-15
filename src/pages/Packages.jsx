import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Check, X, Zap, Star, ArrowRight, Building2, ShoppingCart, Bot, MessageSquare } from 'lucide-react';

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
          emailFootnote: '',
          customTitle: 'Need something more custom?',
          customDescription:
            'Every project is unique. If you need special requirements or additional features, contact us for a tailored quote.',
          customCta: 'Request custom quote',
          moreInfoCta: 'Need more information?',
          detailToggleShow: 'View details',
          detailSubtitle: 'Package scope',
          detailClose: 'Close details',
          enterpriseBadge: 'Custom quote',
          enterpriseTitle: 'Need a custom solution?',
          enterpriseDescription:
            'Tell us what you need and we will send a tailored proposal for your project.',
          enterprisePrimaryCta: 'Go to form',
          enterpriseSecondaryCta: 'View services',
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
              'Self-manageable menú or catalog',
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
              description:
                'All plans include post-launch guidance to resolve questions and small adjustments.',
            },
          ],
          plans: [
            {
              name: 'Entrepreneur Solution',
              icon: <Zap size={32} />,
              description: 'Single-page website for service SMBs that need fast lead capture.',
              priceMonthly: 149000,
              oldPriceMonthly: 299000,
              priceYearly: 899000,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Basic Maintenance plan.',
              conditionNote:
                'Monthly hosting: CLP 19,900/month. Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
              scopeDetails: {
                audience:
                  'Entrepreneurs, professionals, and service SMBs that need a fast professional online presence.',
                objective:
                  'Launch a conversión-focused page to capture qualified leads and open direct contact channels from day one.',
                focus:
                  'Speed, visual clarity, and essential integrations to publish quickly without custom development.',
                webTypes: [
                  'Single-page website for service businesses',
                  'Professional profile site for freelancers and consultants',
                  'Lead generation landing page (ads, social, or WhatsApp)',
                  'Digital menú website (without checkout)',
                  'Basic product or service catalog showcase',
                  'Simple campaign or event information page',
                ],
                includes: [
                  'Single-page website',
                  'Professional design + visual identity',
                  'UX/UI-focused approach for conversión',
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
              features: [
                { name: 'Single-page website', included: true },
                { name: 'Professional design + visual identity', included: true },
                { name: 'UX/UI-focused approach for conversión', included: true },
                { name: '3 logo concepts', included: true },
                { name: 'Responsive development', included: true },
                { name: 'Buttons to WhatsApp and social media', included: true },
                { name: 'Testimonials section', included: true },
                { name: 'Contact form connected to your email', included: true },
                { name: 'Google Maps + YouTube embeds', included: true },
                { name: 'Basic Google visibility + visits tracking', included: true },
                { name: 'Up to 30 products in catalog', included: true },
                { name: 'Domain billed separately', included: false },
                { name: 'Website launch configuration', included: true },
                { name: '15-day post-launch guidance', included: true },
                { name: '1 revision round included', included: true },
                { name: 'Business email setup*', included: true },
                { name: 'Online booking (Calendly) - optional, quoted separately', included: true },
                {
                  name: 'Basic bilingual setup (ES/EN) - optional, quoted separately',
                  included: true,
                },
                { name: 'Custom system development', included: false },
                { name: 'E-commerce module', included: false },
                { name: 'Priority support', included: false },
              ],
              cta: 'Start',
            },
            {
              name: 'SMB Solution',
              icon: <Building2 size={32} />,
              description:
                'Multi-page corporate website for service SMB positioning and lead generation.',
              priceMonthly: 299000,
              oldPriceMonthly: 599000,
              priceYearly: 1299000,
              popular: true,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Basic Maintenance plan.',
              conditionNote:
                'Monthly hosting: CLP 29,900/month. Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
              scopeDetails: {
                audience:
                  'Service SMBs that need stronger digital positioning and a steady lead capture flow.',
                objective:
                  'Build a professional multi-page website that explains services clearly and converts visits into qualified inquiries.',
                focus:
                  'Brand credibility, clear information architecture, and conversión points across key pages.',
                webTypes: [
                  'Corporate services website',
                  'Website for clinic, studio, consultancy, or agency',
                  'Professional/company portfolio',
                  'Commercial catalog without checkout',
                  'Restaurant website (menú + external bookings)',
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
                excludes: ['Full e-commerce flow with product catalog and checkout'],
              },
              features: [
                { name: 'Everything in Entrepreneur Solution', included: true },
                { name: 'Website up to 5 sections', included: true },
                { name: 'Up to 50 products in catalog', included: true },
                { name: 'Testimonials section', included: true },
                {
                  name: 'Basic bilingual setup (ES/EN) - optional, quoted separately',
                  included: true,
                },
                { name: 'Speed optimization', included: true },
                { name: 'Mandatory HTTPS + proper SSL', included: true },
                {
                  name: 'Essential pre-launch audit - optional, quoted separately',
                  included: true,
                },
                { name: 'Custom 404 page + Home redirect', included: true },
                { name: 'Service and company pages', included: true },
                { name: 'Conversion-focused contact sections', included: true },
                { name: 'Essential on-page SEO for Google', included: true },
                { name: '15-day post-launch guidance', included: true },
                { name: 'Up to 2 revision rounds included', included: true },
                {
                  name: 'Custom feature development (optional, quoted separately)',
                  included: true,
                },
              ],
              cta: 'Choose SMB',
            },
            {
              name: 'Business Solution',
              icon: <ShoppingCart size={32} />,
              description:
                'Advanced corporate website for service businesses, with a manageable catalog and payment integrations without custom backend development.',
              priceMonthly: 699000,
              oldPriceMonthly: 999000,
              priceYearly: 1999000,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Professional Maintenance plan.',
              conditionNote:
                'Monthly hosting: CLP 49,900/month. Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
              scopeDetails: {
                audience:
                  'Service businesses that need to scale digital presence with catalog and lead capture, without building a complex internal system.',
                objective:
                  'Launch a robust website with catalog, forms, and provider-based checkout, prioritizing speed-to-market and simple maintenance.',
                focus:
                  'Commercial conversión and simple operations using standard tools, avoiding custom backoffice development.',
                webTypes: [
                  'SMB ecommerce website with scalable catalog',
                  'Corporate site + online sales channel',
                  'Product-focused website with provider-based checkout',
                  'Multi-category catalog website for service companies',
                  'Business website with robust standard management panel',
                  'Commercial platform for growing operations',
                ],
                includes: [
                  'Everything from SMB Solution',
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
              features: [
                { name: 'Everything in SMB Solution', included: true },
                { name: 'Expanded corporate website (up to 10 pages)', included: true },
                { name: 'Manageable catalog (up to 100 items)', included: true },
                { name: 'Checkout/payment integration through external provider', included: true },
                { name: 'Centralized contact and lead capture forms', included: true },
                { name: 'Email notifications for inquiries and sales', included: true },
                { name: 'Essential Google visibility setup', included: true },
                { name: '15-day post-launch guidance', included: true },
                { name: 'Up to 3 revision rounds included', included: true },
                {
                  name: 'Custom feature development (optional, quoted separately)',
                  included: true,
                },
                {
                  name: 'Client-owned source code (no dependency on third-party plugin licenses)',
                  included: true,
                },
                { name: 'Priority support', included: true },
              ],
              cta: 'Choose Business',
            },
            {
              name: 'Enterprise Solution',
              enterpriseOnly: true,
              icon: <Star size={32} />,
              description:
                'Advanced ecommerce and automation platform for companies scaling beyond standard SMB operations.',
              priceMonthly: 999000,
              oldPriceMonthly: 1899000,
              priceYearly: 3099000,
              popular: false,
              cycleNoteMonthly: 'Project implementation only.',
              cycleNoteYearly: 'Includes 12 months Premium Maintenance plan.',
              conditionNote:
                'Monthly hosting: CLP 99,900/month (depends on infrastructure). Includes hosting, SSL, basic backups, and base monitoring. Domain and transactional email are billed separately.',
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
                  'Executive KPI dashboard (revenue, conversión, average order value, recurrence)',
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
                { name: 'CRO and UX optimization for conversión', included: true },
                { name: 'Technical documentation + team training', included: true },
                {
                  name: 'Continuous strategic iteration cycles (according to approved roadmap)',
                  included: true,
                },
                {
                  name: 'Pro integrations with sync (ERP/CRM/logistics/payments) - optional, quoted separately',
                  included: true,
                },
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
            {
              name: 'Chatbot AI Start',
              icon: <Bot size={32} />,
              description: 'Basic RAG assistant to answer FAQs and capture leads on a single website or landing page.',
              priceMonthly: 190000,
              oldPriceMonthly: 290000,
              priceYearly: 449000,
              popular: false,
              cycleNoteMonthly: 'Initial setup single payment.',
              cycleNoteYearly: 'Initial setup + 12 months hosting & tokens.',
              conditionNote: 'Maintenance and servers start at $29.900/month. Includes hosting, AI tokens and document training.',
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
              features: [
                { name: 'Embedded Website Widget', included: true },
                { name: 'Trained on 10 documents/URLs', included: true },
                { name: 'FAQ & Lead capture flows', included: true },
                { name: 'Export lead to Email/Sheets', included: true },
                { name: 'Tailored brand tone of voice', included: true },
                { name: 'WhatsApp integration', included: false },
                { name: 'Advanced CRM/API integration', included: false },
              ],
              cta: 'Get Chatbot Start',
            },
            {
              name: 'Chatbot AI Enterprise',
              icon: <MessageSquare size={32} />,
              description: 'Omnichannel AI Assistant integrating advanced CRMs, APIs, WhatsApp, and advanced context.',
              priceMonthly: 490000,
              oldPriceMonthly: 590000,
              priceYearly: 1390000,
              popular: false,
              cycleNoteMonthly: 'Initial setup single payment.',
              cycleNoteYearly: 'Initial setup + 12 months hosting & tokens.',
              conditionNote: 'Maintenance and servers start at $89.900/month. Includes WhatsApp connection, complex RAG and AI tokens.',
              scopeDetails: {
                audience: 'Medium to large clinics, e-commerce, and enterprises with complex data structures and high message volume.',
                objective: 'Automate multi-step processes like booking, tracking, and pre-sales qualification over WhatsApp.',
                focus: 'Omnichannel presence (Web + WhatsApp), advanced CRM connection and dynamic queries.',
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
              features: [
                { name: 'Everything in Chatbot Start', included: true },
                { name: 'WhatsApp Official Integration', included: true },
                { name: 'Enterprise CRM integrations', included: true },
                { name: 'Complex API hookups (Bookings, Tracking)', included: true },
                { name: 'Unlimited Document Pages for RAG', included: true },
                { name: 'Dynamic human handoff routing', included: true },
                { name: 'Advanced conversation analytics', included: true },
              ],
              cta: 'Get Enterprise AI',
            },
          ],
        }
      : {
          heroBadge: 'Paquetes y precios',
          heroTitlePrefix: 'Paquetes y ',
          heroTitleHighlight: 'Precios',
          heroDescription:
            'Pensado para pymes de servicios en Chile: parte liviano y escala a operación negocio o empresa.',
          monthlyLabel: 'Solo implementación',
          yearlyLabel: 'Implementación + 12 meses mantenimiento',
          fromLabel: 'Desde',
          badgePopular: 'MÁS POPULAR',
          paymentMonthly: 'pago único de implementación',
          paymentYearly: 'pago único con mantenimiento anual incluido',
          emailFootnote: '',
          customTitle: 'Necesitas algo más personalizado?',
          customDescription:
            'Cada proyecto es único. Si tienes requerimientos especiales o necesitas funcionalidades adicionales, contáctanos para una cotización a medida.',
          customCta: 'Solicitar cotización personalizada',
          moreInfoCta: '¿Necesitas más información?',
          detailToggleShow: 'Ver detalle',
          detailSubtitle: 'Alcance del paquete',
          detailClose: 'Cerrar detalle',
          enterpriseBadge: 'Cotización personalizada',
          enterpriseTitle: '¿Necesitas una solución a medida?',
          enterpriseDescription:
            'Cuéntanos qué necesitas y te enviamos una propuesta hecha para tu proyecto.',
          enterprisePrimaryCta: 'Ir al formulario',
          enterpriseSecondaryCta: 'Ver servicios',
          detailLabels: {
            audience: 'Dirigido a',
            objective: 'Objetivo',
            focus: 'Enfoque',
            includes: 'Incluye',
            excludes: 'No incluye (alcance)',
            webTypes: 'Tipos de webs que sí calzan',
          },
          saasOffer: {
            badge: 'NUEVO SAAS',
            title: 'SaaS Home Page',
            subtitle:
              'Una plataforma SaaS multi-tenant por suscripción para negocios que necesitan una home page profesional y autogestionable, sin contratar un proyecto distinto cada vez.',
            setupLabel: 'Setup inicial',
            monthlyLabel: 'Plan mensual base',
            setupNote:
              'Incluye onboarding, configuración del tenant, branding inicial y publicación.',
            monthlyNote: 'Incluye acceso a la plataforma, operación y continuidad del servicio.',
            includesTitle: 'Incluye',
            includes: [
              'Home page autogestionable',
              'Edición de colores, imágenes, títulos y descripciones',
              'Menú o catálogo autogestionable',
              'Formulario de contacto',
              '3 secciones de contenido',
              'Configuración y publicación inicial',
            ],
            primaryCta: 'Solicitar demo SaaS',
            secondaryCta: 'Hablar con ventas',
          },
          saasSection: {
            title: 'Servicios SaaS',
            description:
              'Productos por suscripción construidos sobre una plataforma compartida. No compras un código separado: accedes y administras tu espacio dentro de nuestro sistema.',
          },
          customSection: {
            title: 'Servicios a Medida',
            description:
              'Estas 3 soluciones son servicios de implementación a medida. Definimos el alcance, desarrollamos el proyecto para tu negocio y lo publicamos según el nivel de paquete que necesites.',
          },
          guarantees: [
            {
              title: 'Garantia de satisfaccion',
              description: 'Incluimos iteraciones estrategicas hasta cierre del alcance acordado.',
            },
            {
              title: 'Entrega rápida',
              description:
                'Tu sitio web listo en tiempo record gracias a nuestra tecnologia con IA.',
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
              description:
                'Página web para emprendedores y pymes de servicios que necesitan captar leads rápido.',
              priceMonthly: 149000,
              oldPriceMonthly: 299000,
              priceYearly: 899000,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementación del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Basico.',
              conditionNote:
                'Hosting mensual: $19.900/mes. Incluye hosting, SSL, backups y monitoreo base.',
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
                  'Integracion Google Maps + videos YouTube',
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
                  'Modulo e-commerce',
                  'Soporte prioritario',
                ],
              },
              features: [
                { name: 'Página web', included: true },
                { name: 'Diseño profesional + identidad visual', included: true },
                { name: 'Enfoque UX/UI orientado a conversión', included: true },
                { name: '3 propuestas de logo', included: true },
                { name: 'Sitio adaptable a celular y computador', included: true },
                { name: 'Botones de WhatsApp y redirección a redes', included: true },
                { name: 'Sección de reseñas', included: true },
                { name: 'Formulario de contacto conectado a tu correo', included: true },
                { name: 'Integracion Google Maps + videos YouTube', included: true },
                { name: 'Hasta 30 productos en catálogo', included: true },
                { name: 'Dominio', included: true },
                { name: 'Configuración y publicación del sitio', included: true },
                { name: 'Acompañamiento post-lanzamiento por 15 días', included: true },
                { name: '1 ronda de ajustes incluida', included: true },
                { name: 'Configuración de correo corporativo*', included: true },
                { name: 'Multiidioma (ES/EN) - opcional, se cotiza aparte', included: false },
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
              description:
                'Sitio corporativo multipágina para pymes de servicios enfocadas en posicionamiento y leads.',
              priceMonthly: 299000,
              oldPriceMonthly: 599000,
              priceYearly: 1299000,
              popular: true,
              cycleNoteMonthly: 'Incluye solo implementación del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Basico.',
              conditionNote:
                'Hosting mensual: $29.900/mes. Incluye hosting, SSL, backups y monitoreo base.',
              scopeDetails: {
                audience:
                  'Pymes de servicios que necesitan mejor posicionamiento digital y un flujo constante de contactos.',
                objective:
                  'Construir un sitio multipágina que explique servicios con claridad y convierta visitas en consultas calificadas.',
                focus:
                  'Credibilidad de marca, arquitectura clara de informacion y puntos de conversión en páginas clave.',
                webTypes: [
                  'Web corporativa de servicios',
                  'Web para clinica, estudio, consultora o agencia',
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
                  'Secciónes de contacto orientadas a conversión',
                  'SEO on-page esencial Google',
                  'Acompañamiento post-lanzamiento por 15 días',
                  'Hasta 2 rondas de ajustes incluidas (dentro del alcance acordado)',
                  'Desarrollo de funciones a medida (opcional, se cotiza aparte)',
                ],
                excludes: ['Flujo completo e-commerce con catálogo y checkout'],
              },
              features: [
                { name: 'Todo lo de Solución Emprendedor', included: true },
                { name: 'Sitio de hasta 5 secciones', included: true },
                { name: 'Hasta 50 productos en catálogo', included: true },
                { name: 'Sección de testimonios', included: true },
                { name: 'Multiidioma (ES/EN) - se cotiza aparte', included: true },
                { name: 'Optimización de velocidad', included: true },
                { name: 'HTTPS obligatorio + SSL', included: true },
                { name: 'Auditoría esencial pre-lanzamiento - opcional', included: true },
                { name: 'Página 404 personalizada + redirección al inicio', included: true },
                { name: 'Páginas de servicios y empresa', included: true },
                { name: 'Secciónes de contacto orientadas a conversión', included: true },
                { name: 'SEO on-page esencial Google', included: true },
                { name: 'Acompañamiento post-lanzamiento por 15 días', included: true },
                { name: 'Hasta 2 rondas de ajustes incluidas', included: true },
                {
                  name: 'Desarrollo de funciones a medida (opcional, se cotiza aparte)',
                  included: true,
                },
              ],
              cta: 'Elegir Pyme',
            },
            {
              name: 'Solucion Empresa',
              icon: <ShoppingCart size={32} />,
              description:
                'Sitio corporativo avanzado para negocios de servicios, con catálogo administrable e integraciones de pago sin backend a medida.',
              priceMonthly: 699000,
              oldPriceMonthly: 999000,
              priceYearly: 1999000,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementación del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Profesional.',
              conditionNote:
                'Hosting mensual: $49.900/mes. Incluye hosting, SSL, backups y monitoreo base.',
              scopeDetails: {
                audience:
                  'Negocios de servicios que necesitan escalar su presencia digital con catálogo y captación comercial, sin desarrollar un sistema interno complejo.',
                objective:
                  'Lanzar un sitio robusto con catálogo, formularios y checkout integrado por proveedor externo, priorizando velocidad de salida y mantenimiento simple.',
                focus:
                  'Conversion comercial y operación simple con herramientas estandar, evitando desarrollo de backoffice personalizado.',
                webTypes: [
                  'Ecommerce pyme con catálogo escalable',
                  'Sitio corporativo + canal de ventas online',
                  'Web orientada a productos con checkout por proveedor',
                  'Catálogo multiproducto para negocios de servicios',
                  'Web comercial con panel de gestion robusto estandar',
                  'Plataforma comercial para operaciónes en crecimiento',
                ],
                includes: [
                  'Todo lo de Solucion Pyme',
                  'Sitio corporativo ampliado (hasta 10 páginas)',
                  'Catálogo administrable (hasta 100 items)',
                  'Integracion de checkout/pago con proveedor externo',
                  'Formularios de contacto y captación centralizados',
                  'Notificaciones por email de solicitudes y ventas',
                  'Visibilidad esencial en Google',
                  'Acompañamiento post-lanzamiento por 15 días',
                  'Hasta 3 rondas de ajustes incluidas (dentro del alcance acordado)',
                  'Desarrollo de funciones a medida (opcional, se cotiza aparte)',
                  'Código Fuente Propiedad del Cliente (No depende de licencias de plugins de terceros).',
                  'Soporte prioritario',
                ],
                excludes: [
                  'Panel/backoffice a medida para stock, pedidos o clientes',
                  'Automatizaciones avanzadas e integraciones enterprise a medida',
                ],
              },
              features: [
                { name: 'Todo lo de Solucion Pyme', included: true },
                { name: 'Sitio corporativo ampliado (hasta 10 páginas)', included: true },
                { name: 'Catálogo administrable (hasta 100 items)', included: true },
                { name: 'Integracion de checkout/pago con proveedor externo', included: true },
                { name: 'Formularios de contacto y captación centralizados', included: true },
                { name: 'Notificaciones por email de solicitudes y ventas', included: true },
                { name: 'Visibilidad esencial en Google', included: true },
                { name: 'Acompañamiento post-lanzamiento por 15 días', included: true },
                { name: 'Hasta 3 rondas de ajustes incluidas', included: true },
                {
                  name: 'Desarrollo de funciones a medida (opcional, se cotiza aparte)',
                  included: true,
                },
                {
                  name: 'Código Fuente Propiedad del Cliente (No depende de licencias de plugins de terceros).',
                  included: true,
                },
                { name: 'Soporte prioritario', included: true },
              ],
              cta: 'Elegir Empresa',
            },
            {
              name: 'Solucion Empresa',
              enterpriseOnly: true,
              icon: <Star size={32} />,
              description:
                'Plataforma avanzada de ecommerce y automatizacion para empresas que escalan mas alla de una operación pyme estandar.',
              priceMonthly: 999000,
              oldPriceMonthly: 1899000,
              priceYearly: 3099000,
              popular: false,
              cycleNoteMonthly: 'Incluye solo implementación del proyecto.',
              cycleNoteYearly: 'Incluye 12 meses de plan de mantenimiento Premium.',
              conditionNote:
                'Hosting mensual: $99.900/mes (según infraestructura). Incluye hosting, SSL, backups y monitoreo base.',
              scopeDetails: {
                audience:
                  'Empresas con operaciónes mas complejas, mayor trafico y necesidades avanzadas fuera de flujos pyme estandar.',
                objective:
                  'Construir una plataforma ecommerce empresarial que soporte trabajo multi-equipo, automatizacion avanzada y crecimiento estrategico.',
                focus:
                  'Escalabilidad, seguridad, automatizacion y visibilidad ejecutiva con operaciónes confiables.',
                includes: [
                  'Todo lo de Solucion Empresa',
                  'Panel multi-rol con permisos (admin, ventas, operaciónes y marketing)',
                  'Flujos automatizados (correo post-compra, recuperacion de carrito y estados de pedido)',
                  'Dashboard ejecutivo de KPIs (ventas, conversión, ticket promedio y recurrencia)',
                  'Seguridad avanzada (hardening, auditoria esencial y estrategia de respaldos)',
                  'Ambiente staging + proceso QA antes de publicar cambios',
                  'CRO y UX comercial (checkout optimizado, embudos y pruebas A/B basicas)',
                  'Documentacion tecnica + capacitacion a tu equipo interno',
                  'Ciclos continuos de iteracion estrategica (según roadmap aprobado)',
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
                { name: 'Todo lo de Solucion Empresa', included: true },
                { name: 'Panel multi-rol con permisos granulares', included: true },
                { name: 'Flujos automatizados (carrito y post-compra)', included: true },
                { name: 'Dashboard ejecutivo con KPIs estrategicos', included: true },
                { name: 'Seguridad avanzada + auditoria esencial', included: true },
                { name: 'Ambiente staging + QA antes de produccion', included: true },
                { name: 'Optimización CRO y UX para conversión', included: true },
                { name: 'Documentacion tecnica + capacitacion de equipo', included: true },
                {
                  name: 'Ciclos continuos de iteracion estrategica (según roadmap aprobado)',
                  included: true,
                },
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
            {
              name: 'Chatbot AI Start',
              icon: <Bot size={32} />,
              description: 'Asistente RAG básico para responder FAQs y capturar leads en una página web o landing page.',
              priceMonthly: 190000,
              oldPriceMonthly: 290000,
              priceYearly: 449000,
              popular: false,
              cycleNoteMonthly: 'Pago único de implementación.',
              cycleNoteYearly: 'Implementación + 12 meses de servidor y tokens.',
              conditionNote: 'Mantenimiento y servidores desde $29.900/mes. Incluye alojamiento, reentrenamiento documental y tokens de IA.',
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
              features: [
                { name: 'Widget Web Embebido', included: true },
                { name: 'Entrenado con hasta 10 documentos/URLs', included: true },
                { name: 'Dudas generales y filtro de leads', included: true },
                { name: 'Exportación a Email / Spreadsheets', included: true },
                { name: 'Tono de voz de la marca', included: true },
                { name: 'Integración WhatsApp Oficial', included: false },
                { name: 'Integración avanzada (CRMs/APIs)', included: false },
              ],
              cta: 'Elegir Asistente Start',
            },
            {
              name: 'Chatbot AI Enterprise',
              icon: <MessageSquare size={32} />,
              description: 'Asistente de IA Omnicanal con integración en tu CRM, APIs, WhatsApp Oficial y contexto avanzado.',
              priceMonthly: 490000,
              oldPriceMonthly: 590000,
              priceYearly: 1390000,
              popular: false,
              cycleNoteMonthly: 'Pago único de implementación.',
              cycleNoteYearly: 'Implementación + 12 meses de servidor y tokens.',
              conditionNote: 'Mantenimiento y servidores desde $89.900/mes. Incluye tarifas API WhatsApp, mantenimiento y tokens IA.',
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
              features: [
                { name: 'Todo lo del Asistente Start', included: true },
                { name: 'Integración WhatsApp Oficial API', included: true },
                { name: 'Integración con CRM o ERPS vía API', included: true },
                { name: 'Acciones complejas (Reservas, Seguimiento)', included: true },
                { name: 'Entrenamiento RAG sin límite de páginas', included: true },
                { name: 'Derivación inteligente a humano', included: true },
                { name: 'Analítica de chats avanzada', included: true },
              ],
              cta: 'Elegir Enterprise IA',
            },
          ],
        };

  const enterprisePlan = copy.plans.find((pkg) => pkg.enterpriseOnly);
  const visiblePlans = copy.plans.filter((pkg) => !pkg.enterpriseOnly);

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
      typeof COMPANY.phone === 'string' && COMPANY.phone.trim()
        ? COMPANY.phone.replace(/[^0-9]/g, '')
        : '';
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
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Zap size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">{copy.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.heroTitlePrefix}
            <span className="text-primary">{copy.heroTitleHighlight}</span>
          </h1>
          <p className="text-gray-300 sm:text-lg mb-8 max-w-2xl mx-auto">{copy.heroDescription}</p>
        </div>
      </section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 p-8">
        <div className="mb-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{copy.saasSection.title}</h2>
          <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800">
            {copy.saasSection.description}
          </p>
        </div>

        <div className="mb-10 border-2 border-secondary/20 bg-gradient-to-br from-base via-white to-base2/70 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-4">
                {copy.saasOffer.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {copy.saasOffer.title}
              </h2>
              <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800 max-w-2xl">
                {copy.saasOffer.subtitle}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {copy.saasOffer.setupLabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-800">{formatPrice(149000)}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{copy.saasOffer.setupNote}</p>
                </div>
                <div className="border border-secondary/30 bg-secondary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
                    {copy.saasOffer.monthlyLabel}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-gray-800">{formatPrice(39900)}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    {copy.saasOffer.monthlyNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-[420px] border border-gray-200 bg-white p-5">
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-gray-800 mb-4">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {copy.customSection.title}
          </h2>
          <p className="mt-3 text-sm sm:text-gray-700 leading-7 text-gray-800">
            {copy.customSection.description}
          </p>
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
                      pkg.popular ? 'bg-secondary text-white' : 'bg-primary text-gray-800'
                    }`}
                  >
                    {pkg.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{pkg.name}</h3>
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
                        <span className="line-through decoration-gray-400">
                          {formatPrice(pkg.oldPriceMonthly)}
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
                    <span className="align-middle">{formatPrice(selectedPrice)}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    ~ {formatUsdPrice(selectedPrice)}
                  </div>
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
                        setSelectedDetailPlan({ name: pkg.name, details: pkg.scopeDetails })
                      }
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
                        : 'bg-primary text-gray-800 hover:bg-amber-600'
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

        {enterprisePlan && (
          <div className="mt-8 border-2 border-secondary/30 bg-gradient-to-r from-secondary/10 via-base to-secondary/10 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="max-w-3xl">
                <span className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary bg-secondary/10 border border-secondary/30 rounded-full mb-3">
                  {copy.enterpriseBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {copy.enterpriseTitle}
                </h3>
                <p className="text-sm text-gray-700 mt-2">{copy.enterpriseDescription}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center bg-secondary text-white font-bold px-6 py-3 hover:bg-blue-900 transition-all duration-300"
                >
                  {copy.enterprisePrimaryCta}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  to="/servicios"
                  className="inline-flex items-center justify-center border border-secondary text-secondary font-bold px-6 py-3 hover:bg-secondary/10 transition-all duration-300"
                >
                  {copy.enterpriseSecondaryCta}
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          {copy.emailFootnote && <p className="text-[11px] text-gray-500">{copy.emailFootnote}</p>}
        </div>

        {/* Bloque de cotización personalizada eliminado por solicitud del usuario */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.guarantees.map((item) => (
            <div key={item.title} className="text-center p-6">
              <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
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
