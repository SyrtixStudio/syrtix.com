import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Code,
  Palette,
  ShoppingCart,
  Search,
  Smartphone,
  Settings,
  Globe,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Monitor,
  Brush,
  BarChart,
  Lightbulb,
  Layers,
  Mail,
  Video,
  Plug,
  Ticket,
  Workflow,
  Rocket,
  Building,
  Newspaper,
  Users,
  Gift,
  Briefcase,
  Calendar,
  BookOpen,
  Megaphone,
} from 'lucide-react';
import {
  SiCss,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import { useLanguage } from '../i18n/index.jsx';
import AuditModal from '../components/services/AuditModal.jsx';
import { auditsData } from '../data/auditsData.jsx';

const TECH_LOGOS = {
  React: { Icon: SiReact, color: 'text-[#61DAFB]' },
  'Next.js': { Icon: SiNextdotjs, color: 'text-white' },
  'Node.js': { Icon: SiNodedotjs, color: 'text-[#5FA04E]' },
  JavaScript: { Icon: SiJavascript, color: 'text-[#F7DF1E]' },
  TypeScript: { Icon: SiTypescript, color: 'text-[#3178C6]' },
  CSS: { Icon: SiCss, color: 'text-[#1572B6]' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  PostgreSQL: { Icon: SiPostgresql, color: 'text-[#336791]' },
  Vite: { Icon: SiVite, color: 'text-[#646CFF]' },
};

function Services() {
  const { lang } = useLanguage();
  const [selectedAudit, setSelectedAudit] = useState(null);

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'Professional Web Solutions',
          heroTitleLine1: 'Digital solutions',
          heroTitleLine2: 'for service SMBs',
          heroDescription:
            'We build websites and automation that help service SMBs in Chile capture more qualified leads and scale their operation.',
          viewPackages: 'View packages',
          requestQuote: 'Request quote',
          sectionTitlePrefix: 'Our ',
          sectionTitleHighlight: 'solutions',
          sectionSubtitle: 'Simplified solutions designed for each stage of your business',
          requestService: 'Request service',
          additionalTitlePrefix: 'Strategic ',
          additionalTitleHighlight: 'add-ons',
          additionalSubtitle: 'Complement your project with tools that boost your commercial performance',
          maintenanceTitlePrefix: 'Maintenance and ',
          maintenanceTitleHighlight: 'growth',
          maintenanceSubtitle:
            'Post-launch support so your site stays fast, secure, and ready for new customers.',
          maintenanceCta: 'View maintenance plans',
          whyTitlePrefix: 'Why ',
          whyTitleHighlight: 'Syrtix',
          workTitlePrefix: 'How we ',
          workTitleHighlight: 'work',
          techTitlePrefix: 'Tech we ',
          techTitleHighlight: 'master',
          ctaTitle: 'Ready to start your project?',
          ctaDescription:
            'Tell us about your business and we will propose the best roadmap. Free quote with no commitment.',
          services: [
            {
              title: 'Landing Pages',
              icon: <Zap size={32} />,
              description: 'Optimized for high conversion. Ideal for specific marketing campaigns and quick lead capture.',
              features: [
                'Conversion-oriented UI/UX design',
                'Optimized capture forms',
                'CRM and WhatsApp integration',
                'Perfect mobile visualization',
                'Extreme loading speed (90+ Lighthouse)',
                'Basic SEO technical setup',
              ],
              price: 'From $149.000 CLP',
            },
            {
              title: 'Corporate Websites',
              icon: <Building size={32} />,
              description: 'Professional authority for your business. Ideal for service companies requiring trust and complex content.',
              features: [
                'Full professional branding',
                'Multi-page structure (Home, Services, Blog)',
                'Appointment & booking systems',
                'Portfolio or project gallery',
                'High-performance technical infrastructure',
                'Managed scalable hosting',
              ],
              price: 'From $299.000 CLP',
            },
            {
              title: 'E-commerce',
              icon: <ShoppingCart size={32} />,
              description: 'Robust online stores. Everything you need to sell 24/7 with automated payments and inventory.',
              features: [
                'Shopping cart and secure checkout',
                'Full payment gateway integration',
                'Automated inventory management',
                'Customer accounts & order history',
                'Shipping platform integration',
                'Sales & conversion analytics',
              ],
              price: 'From $699.000 CLP',
            },
            {
              title: 'SEO & Positioning',
              icon: <Search size={32} />,
              description: 'Organic growth for your brand. We optimize your structure and content to reach the top search results.',
              features: [
                'Search Generative Experience (SGE) Optimization',
                'Keyword Research & Top 1-3 Google Positioning',
                'Fast Indexing with Immediate Response API',
                'Advanced Analytics Setup (GA4 & Search Console)',
                'Local SEO & Google Business Profile Management',
                'Monthly ROI Reports & Position Tracking',
              ],
              price: 'Custom Monthly Plan',
            },
            {
              title: 'Maintenance & Support',
              icon: <Settings size={32} />,
              description: 'Security and continuity. Your site always updated, secure, and running at peak performance.',
              features: [
                '24/7 Uptime monitoring',
                'Daily automated backups',
                'Security updates & patches',
                'Proactive performance tuning',
                'Priority technical support',
                'Monthly health reports',
              ],
              price: 'From $49.000 CLP/month',
            },
            {
              title: 'Integrations & Automation',
              icon: <Workflow size={32} />,
              description: 'Scale your operation. We connect your site with CRM, Chatbots, and automated workflows using AI.',
              features: [
                'Advanced AI Chatbots (OpenAI)',
                'Automated CRM lead injection',
                'Marketing automation (n8n/Make)',
                'Custom API & Webhook connectors',
                'Ticketing & Helpdesk systems',
                'Email marketing automation',
              ],
              price: 'Custom Quote',
            },
            {
              title: 'Digital Audits',
              icon: <Search size={32} />,
              description: 'Exhaustive check of your current digital presence to unlock its full potential.',
              features: [
                'Performance Audit (Speed & Load)',
                'UX/UI Audit (User Experience)',
                'Technical SEO & Indexing Audit',
                'Conversion Audit (CRO)',
                'Code & Scalability Audit (Technical Health)',
                'Accessibility Audit (WCAG)',
              ],
              price: 'Custom Quote',
            },
            {
              title: 'Strategic Rebranding',
              icon: <Palette size={32} />,
              description: 'Revitalize your brand identity to transmit trust and professional value.',
              features: [
                'Logo modernization & Redesign',
                'Professional color palette & Typography',
                'Brand voice & Messaging strategy',
                'Visual identity system (Brandbook)',
                'Social media assets package',
                'Consistent brand application audit',
              ],
              price: 'Custom Quote',
            },
            {
              title: 'PWA & Mobile Solutions',
              icon: <Smartphone size={32} />,
              description: 'Modern mobile experiences without the complexity of traditional app stores.',
              features: [
                'Progressive Web App (PWA) development',
                'Installable icon on mobile home screen',
                'Offline access & Fast transitions',
                'Push notifications support',
                'Native-like look and feel',
                'No app store download required',
              ],
              price: 'Custom Quote',
            },
          ],
          audits: [
            {
              id: 'performance',
              title: 'Performance & Speed',
              icon: <Zap size={24} />,
              what: 'Deep analysis of load times, Core Web Vitals, server response, and asset optimization.',
              result: 'A fast-loading site that improves SEO rankings and reduces visitor bounce rates.',
            },
            {
              id: 'uxui',
              title: 'UX/UI & UX Design',
              icon: <Monitor size={24} />,
              what: 'Evaluation of user flow, mobile usability, visual hierarchy, and CTA effectiveness.',
              result: 'A friction-less interface that guides users naturally toward conversion.',
            },
            {
              id: 'seo',
              title: 'Technical SEO',
              icon: <Search size={24} />,
              what: 'Review of indexing, sitemaps, headers (H1-H4), metadata, and keyword reach.',
              result: 'A site visibility map that Google loves and ranks higher on search results.',
            },
            {
              id: 'security',
              title: 'Security & Privacy',
              icon: <Shield size={24} />,
              what: 'Vulnerability scans (OWASP), SSL configuration, and data protection compliance.',
              result: 'A secure digital fortress protecting your business and client information.',
            },
            {
              id: 'code',
              title: 'Code & Scalability',
              icon: <Code size={24} />,
              what: 'Quality review of current architecture, technical debt, and growth potential.',
              result: 'Clear understanding of your technical foundation to add new features or scale.',
            },
            {
              id: 'accessibility',
              title: 'Digital Accessibility',
              icon: <Users size={24} />,
              what: 'Audit of WCAG 2.1 compliance, color contrast, and keyboard navigation.',
              result: 'An inclusive site for everyone that also boosts your brand prestige and SEO.',
            },
            {
              id: 'rebranding',
              title: 'Strategic Rebranding',
              icon: <Palette size={24} />,
              what: 'Visual identity audit, logo revitalization, professional color palette, and brand voice consistency.',
              result: 'A premium and modern brand image that reflects the true value of your business.',
            },
            {
              id: 'pwa',
              title: 'PWA & Mobile Solutions',
              icon: <Smartphone size={24} />,
              what: 'Conversion of your website into a Progressive Web App (PWA) that installs on mobile without app stores.',
              result: 'Increased user loyalty with an app-like experience, push notifications, and offline access.',
            },
          ],
          webTypesTitlePrefix: 'Websites we ',
          webTypesTitleHighlight: 'build',
          webTypesSubtitle: 'The most in-demand solutions for service businesses in Chile',
          webTypes: [
            { icon: <Rocket size={20} />, title: 'Landing Pages' },
            { icon: <ShoppingCart size={20} />, title: 'E-commerce' },
            { icon: <Building size={20} />, title: 'Corporate Sites' },
            { icon: <Calendar size={20} />, title: 'Booking Systems' },
            { icon: <BookOpen size={20} />, title: 'LMS Platform' },
            { icon: <Briefcase size={20} />, title: 'Portfolios' },
            { icon: <Users size={20} />, title: 'Member Portals' },
            { icon: <Newspaper size={20} />, title: 'Blogs & News' },
          ],
          maintenanceCards: [
            {
              title: 'Proactive maintenance',
              desc: 'Updates, backups and monitoring to prevent outages.',
            },
            {
              title: 'Continuous optimization',
              desc: 'Monthly improvements in speed, UX and conversions.',
            },
            {
              title: 'Monthly report',
              desc: 'Metrics summary, progress and next steps.',
            },
          ],
          whyItems: [
            {
              icon: <BarChart size={18} />,
              title: 'Results-focused',
              desc: 'Each delivery is designed to capture more leads or improve sales conversion.',
            },
            {
              icon: <Calendar size={18} />,
              title: 'Clear Timelines',
              desc: 'You know what is included, delivery phases, and dates from day one.',
            },
            {
              icon: <Layers size={18} />,
              title: 'Unified Team',
              desc: 'Less friction, faster execution, and visual plus technical consistency.',
            },
          ],
          process: [
            {
              step: '01',
              title: 'Consultation',
              desc: 'We analyze your needs and goals',
            },
            {
              step: '02',
              title: 'Proposal',
              desc: 'We send a detailed quote',
            },
            {
              step: '03',
              title: 'Development',
              desc: 'We build your project with revisions',
            },
            { step: '04', title: 'Delivery', desc: 'We launch and onboard you' },
          ],
          tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vite'],
        }
      : {
          heroBadge: 'Soluciones Web Profesionales',
          heroTitleLine1: 'Soluciones digitales',
          heroTitleLine2: 'para pymes de servicios',
          heroDescription:
            'Desarrollamos sitios web y automatizaciones diseñadas para que las pymes en Chile capten más leads y escalen su operación.',
          viewPackages: 'Ver paquetes',
          requestQuote: 'Solicitar cotización',
          sectionTitlePrefix: 'Nuestras ',
          sectionTitleHighlight: 'soluciones',
          sectionSubtitle: 'Sistemas simplificados diseñados para cada etapa de tu negocio',
          requestService: 'Solicitar servicio',
          additionalTitlePrefix: 'Complementos ',
          additionalTitleHighlight: 'estratégicos',
          additionalSubtitle: 'Potencia tu presencia digital con herramientas que impulsan tus ventas',
          maintenanceTitlePrefix: 'Mantenimiento y ',
          maintenanceTitleHighlight: 'crecimiento',
          maintenanceSubtitle:
            'Soporte post-lanzamiento para que tu sitio siga rápido, seguro y listo para nuevos clientes.',
          maintenanceCta: 'Ver planes de mantenimiento',
          whyTitlePrefix: 'Por qué ',
          whyTitleHighlight: 'Syrtix',
          workTitlePrefix: 'Cómo ',
          workTitleHighlight: 'trabajamos',
          techTitlePrefix: 'Tecnologías que ',
          techTitleHighlight: 'dominamos',
          ctaTitle: '¿Tienes un proyecto en mente?',
          ctaDescription:
            'Cuéntanos sobre tu negocio de servicios y te propondremos la mejor hoja de ruta. Cotización gratuita.',
          services: [
            {
              title: 'Landing Pages',
              icon: <Rocket size={32} />,
              description: 'Máxima conversión para tus campañas. Incluye diseño visual de alto impacto, copy persuasivo y desarrollo técnico optimizado.',
              features: [
                'Diseño UX/UI enfocado en resultados',
                'Diseño de Logotipo básico incluido',
                'Integración completa con CRM y WhatsApp',
                'Optimización extrema de carga y SEO',
                'Formularios de captura de alta performance',
                'Setup técnico de analítica (GA4/GSC)',
              ],
              price: 'Desde $149.000 CLP',
            },
            {
              title: 'Web Corporativa',
              icon: <Building size={32} />,
              description: 'Autoridad y confianza para tu marca. Un sistema digital sólido que proyecta el valor real de tu negocio.',
              features: [
                'Diseño de Identidad Visual y Logo Pro',
                'Estructura multi-página estratégica',
                'Sistemas de agendamiento y reservas',
                'Arquitectura técnica de alta velocidad',
                'Hosting escalable y seguridad gestionada',
                'Estrategia de contenidos inicial',
              ],
              price: 'Desde $299.000 CLP',
            },
            {
              title: 'E-commerce',
              icon: <ShoppingCart size={32} />,
              description: 'Tu tienda lista para escalar. Nos encargamos de todo el ecosistema de venta, pagos y logística.',
              features: [
                'Branding y Manual de Estilo incluido',
                'Pasarelas de pago (Webpay/Stripe)',
                'Gestión de inventario y stock automático',
                'Integración con plataformas de despacho',
                'Dashboard de analítica de ventas Pro',
                'Optimización de embudo de conversión',
              ],
              price: 'Desde $699.000 CLP',
            },
            {
              title: 'SEO & Posicionamiento',
              icon: <Search size={32} />,
              description: 'Crecimiento orgánico para tu marca. Optimizamos tu estructura y contenido para alcanzar los primeros lugares.',
              features: [
                'Optimización para Búsqueda con IA (Google SGE)',
                'Investigación de Keywords y Posicionamiento Top 1-3',
                'Indexación Rápida con API de Respuesta Inmediata',
                'Configuración Avanzada de GA4 y Search Console',
                'Posicionamiento en Google Maps y Búsqueda Local',
                'Reportes Mensuales de ROI y Seguimiento de Posiciones',
              ],
              price: 'Plan Mensual Personalizado',
            },
            {
              title: 'Mantenimiento & Soporte',
              icon: <Settings size={32} />,
              description: 'Seguridad y continuidad. Tu sitio siempre actualizado, protegido y funcionando al máximo rendimiento.',
              features: [
                'Monitoreo de uptime 24/7',
                'Backups automatizados diarios',
                'Actualizaciones de seguridad y parches',
                'Optimización técnica proactiva',
                'Soporte técnico prioritario',
                'Reportes mensuales de salud web',
              ],
              price: 'Desde $49.000 CLP/mes',
            },
            {
              title: 'Integraciones & Automatización',
              icon: <Workflow size={32} />,
              description: 'Escala tu operación. Conectamos tu web con CRM, Chatbots inteligentes y flujos de trabajo automáticos.',
              features: [
                'Chatbots con IA (OpenAI)',
                'Inyección automática de leads en CRM',
                'Automatización de marketing (n8n/Make)',
                'Conectores API y Webhooks personalizados',
                'Sistemas de tickets y Helpdesk',
                'Email marketing automatizado',
              ],
              price: 'Cotización Personalizada',
            },
            {
              title: 'Auditorías',
              icon: <Search size={32} />,
              description: 'Chequeo exhaustivo de tu presencia digital actual para desbloquear todo su potencial.',
              features: [
                'Auditoría de Performance (Velocidad & Carga)',
                'Auditoría UX/UI (Experiencia de Usuario)',
                'Auditoría SEO (Posicionamiento Técnico)',
                'Auditoría de Conversión (CRO)',
                'Auditoría de Código & Escalabilidad (Salud Técnica)',
                'Auditoría de Accesibilidad',
              ],
              price: 'Cotización Personalizada',
            },
            {
              title: 'Rebranding Estratégico',
              icon: <Palette size={32} />,
              description: 'Revitaliza tu identidad visual para transmitir confianza y el valor real de tu negocio.',
              features: [
                'Modernización y rediseño de logo',
                'Paleta de colores y tipografía profesional',
                'Estrategia de voz de marca y mensajes',
                'Sistema de identidad visual (Brandbook)',
                'Pack de recursos para redes sociales',
                'Auditoría de aplicación de marca coherente',
              ],
              price: 'Cotización Personalizada',
            },
            {
              title: 'PWA & Soluciones Móviles',
              icon: <Smartphone size={32} />,
              description: 'Experiencias móviles modernas sin la complejidad de las tiendas de aplicaciones.',
              features: [
                'Desarrollo de Progressive Web App (PWA)',
                'Icono instalable en pantalla de inicio móvil',
                'Acceso offline y transiciones rápidas',
                'Soporte para notificaciones push',
                'Look and feel nativo en cualquier dispositivo',
                'Sin descargas en App Store o Google Play',
              ],
              price: 'Cotización Personalizada',
            },
          ],
          audits: [
            {
              id: 'performance',
              title: 'Performance & Velocidad',
              icon: <Zap size={24} />,
              what: 'Análisis profundo de tiempos de carga, Core Web Vitals y optimización de recursos.',
              result: 'Un sitio ultrarrápido que mejora el ranking en Google y retiene a tus visitantes.',
            },
            {
              id: 'uxui',
              title: 'UX/UI & Experiencia',
              icon: <Monitor size={24} />,
              what: 'Evaluación de flujos de usuario, usabilidad móvil y efectividad de llamados a la acción.',
              result: 'Una interfaz sin fricciones que guía al usuario naturalmente hacia la conversión.',
            },
            {
              id: 'seo',
              title: 'SEO Técnico',
              icon: <Search size={24} />,
              what: 'Revisión de indexación, sitemaps, arquitectura de encabezados y meta-etiquetas.',
              result: 'Un mapa de visibilidad optimizado para que Google te ponga en los primeros puestos.',
            },
            {
              id: 'security',
              title: 'Seguridad & Privacidad',
              icon: <Shield size={24} />,
              what: 'Escaneo de vulnerabilidades, configuración SSL y cumplimiento de protección de datos.',
              result: 'Un entorno digital blindado que protege la información de tu negocio y clientes.',
            },
            {
              id: 'code',
              title: 'Código & Escalabilidad',
              icon: <Code size={24} />,
              what: 'Revisión de calidad de arquitectura, deuda técnica y potencial de crecimiento.',
              result: 'Claridad total sobre tu base técnica para añadir nuevas funciones o escalar sin riesgos.',
            },
            {
              id: 'accessibility',
              title: 'Accesibilidad Digital',
              icon: <Users size={24} />,
              what: 'Auditoría de cumplimiento WCAG 2.1, contraste de colores y navegación asistida.',
              result: 'Un sitio inclusivo para todos que además potencia tu imagen de marca y SEO.',
            },
            {
              id: 'rebranding',
              title: 'Rebranding Estratégico',
              icon: <Palette size={24} />,
              what: 'Auditoría de identidad visual, revitalización de logo, paletas de colores y coherencia en la voz de marca.',
              result: 'Una imagen de marca premium y moderna que transmite confianza y el valor real de tu negocio.',
            },
            {
              id: 'pwa',
              title: 'PWA & Soluciones Móviles',
              icon: <Smartphone size={24} />,
              what: 'Conversión de tu sitio web en una Progressive Web App (PWA) instalable en móviles sin pasar por las tiendas.',
              result: 'Mayor fidelización de usuarios con una experiencia de app, notificaciones push y acceso offline.',
            },
          ],
          webTypesTitlePrefix: 'Tipos de webs que ',
          webTypesTitleHighlight: 'creamos',
          webTypesSubtitle: 'Las soluciones más demandadas para negocios de servicios en Chile',
          webTypes: [
            { icon: <Rocket size={20} />, title: 'Landing Pages' },
            { icon: <ShoppingCart size={20} />, title: 'E-commerce' },
            { icon: <Building size={20} />, title: 'Sitios Corporativos' },
            { icon: <Calendar size={20} />, title: 'Sistemas de Reservas' },
            { icon: <BookOpen size={20} />, title: 'Plataformas Educativas' },
            { icon: <Briefcase size={20} />, title: 'Portafolios' },
            { icon: <Users size={20} />, title: 'Portales de Miembros' },
            { icon: <Newspaper size={20} />, title: 'Blogs & Noticias' },
          ],
          maintenanceCards: [
            {
              title: 'Mantenimiento proactivo',
              desc: 'Actualizaciones, backups y monitoreo para evitar caídas.',
            },
            {
              title: 'Optimización continua',
              desc: 'Mejoras de velocidad, UX y conversiones cada mes.',
            },
            {
              title: 'Reporte mensual',
              desc: 'Resumen de métricas, avances y próximos pasos.',
            },
          ],
          whyItems: [
            {
              icon: <BarChart size={18} />,
              title: 'Foco en resultados',
              desc: 'Cada entrega busca captar más contactos o mejorar la conversión comercial.',
            },
            {
              icon: <Calendar size={18} />,
              title: 'Tiempos Claros',
              desc: 'Desde el inicio sabes qué incluye el proyecto, etapas de entrega y fechas.',
            },
            {
              icon: <Layers size={18} />,
              title: 'Equipo Unificado',
              desc: 'Menos fricción, más velocidad de ejecución y coherencia visual con técnica.',
            },
          ],
          process: [
            {
              step: '01',
              title: 'Consulta',
              desc: 'Analizamos tus necesidades y objetivos',
            },
            {
              step: '02',
              title: 'Propuesta',
              desc: 'Te enviamos una cotización detallada',
            },
            {
              step: '03',
              title: 'Desarrollo',
              desc: 'Creamos tu proyecto con revisiones',
            },
            {
              step: '04',
              title: 'Entrega',
              desc: 'Lanzamos y te capacitamos',
            },
          ],
          tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vite'],
        };

  return (
    <main className="min-h-screen bg-base">
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/img-servicios.avif"
            alt="services background"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Code size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">{copy.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.heroTitleLine1}
            <br />
            <span className="text-primary">{copy.heroTitleLine2}</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">{copy.heroDescription}</p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 w-full max-w-xl mx-auto">
            <Link
              to="/paquetes"
              className="flex-1 bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center min-w-[180px]"
            >
              {copy.viewPackages}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contacto"
              className="flex-1 border-2 border-white text-white font-bold px-8 py-4 hover:bg-white hover:text-gray-900 transition duration-300 min-w-[180px]"
            >
              {copy.requestQuote}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.sectionTitlePrefix}
              <span className="text-primary">{copy.sectionTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-base border-2 border-gray-200 hover:border-primary p-6 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 mr-4 group-hover:bg-primary transition-all duration-300">
                      <div className="text-primary group-hover:text-gray-900 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{service.title}</h3>
                      <p className="text-primary font-bold text-xs mt-1">{service.price}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-6 min-h-[40px]">{service.description}</p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => {
                      // Check if it's the "360° Digital Audit" card (usually the 7th item, index 6)
                      const isAuditCard = service.title.includes('Auditoría') || service.title.includes('Digital Audit');
                      
                      if (isAuditCard) {
                        // Find the relevant audit data based on index or title match
                        const auditItem = auditsData[lang][i];

                        return (
                          <li key={i} className="flex items-start text-sm text-gray-700">
                            <CheckCircle size={14} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <button 
                              onClick={() => setSelectedAudit(auditItem)}
                              className="text-left hover:text-secondary hover:underline transition-colors decoration-secondary underline-offset-4"
                            >
                              {feature}
                            </button>
                          </li>
                        );
                      }

                      return (
                        <li key={i} className="flex items-start text-sm text-gray-700">
                          <CheckCircle size={14} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <Link
                  to="/contacto"
                  className="inline-flex items-center text-secondary font-bold text-sm hover:text-primary transition-all duration-300 group/link"
                >
                  {copy.requestService}
                  <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.webTypesTitlePrefix}
              <span className="text-primary">{copy.webTypesTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.webTypesSubtitle}</p>
          </div>

          <div className="marquee">
            <div className="marquee-track" style={{ '--marquee-duration': '40s' }}>
              {[...copy.webTypes, ...copy.webTypes].map((item, i) => {
                const isDuplicate = i >= copy.webTypes.length;

                return (
                  <div
                    key={`${item.title}-${i}`}
                    className="marquee-card bg-base border border-gray-300 px-6 py-4 shadow-sm hover:border-primary hover:shadow-md transition flex flex-col items-center text-center gap-2"
                    aria-hidden={isDuplicate ? 'true' : undefined}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{item.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.maintenanceTitlePrefix}
              <span className="text-primary">{copy.maintenanceTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.maintenanceSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.maintenanceCards.map((item, idx) => (
              <div key={idx} className="border border-gray-200 bg-base p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/contacto"
              className="inline-flex items-center bg-secondary text-white font-bold px-6 py-3 hover:bg-primary transition duration-300"
            >
              {copy.maintenanceCta}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.whyTitlePrefix}
              <span className="text-primary">{copy.whyTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.whyItems.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className="border border-gray-200 bg-base px-4 py-4 shadow-sm hover:border-secondary/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.workTitlePrefix}
              <span className="text-primary">{copy.workTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {copy.process.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-gray-900 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {copy.techTitlePrefix}
            <span className="text-primary">{copy.techTitleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>

          <div className="marquee marquee--secondary">
            <div className="marquee-track" style={{ '--marquee-duration': '30s' }}>
              {[...copy.tech, ...copy.tech].map((tech, idx) => {
                const techLogo = TECH_LOGOS[tech];
                const Icon = techLogo?.Icon;
                const iconColor = techLogo?.color || 'text-primary';
                const isDuplicate = idx >= copy.tech.length;

                return (
                  <div
                    key={`${tech}-${idx}`}
                    className="marquee-card inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-2 text-white/90 hover:border-primary/60 hover:bg-white/10 transition-all duration-300 min-w-[170px] justify-center"
                    aria-hidden={isDuplicate ? 'true' : undefined}
                  >
                    {Icon && <Icon size={18} className={iconColor} aria-hidden />}
                    <span className="text-sm sm:text-base font-semibold">{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{copy.ctaTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{copy.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center"
            >
              {copy.requestQuote}
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/paquetes"
              className="border-2 border-secondary text-secondary font-bold px-8 py-4 hover:bg-secondary hover:text-white transition duration-300"
            >
              {copy.viewPackages}
            </Link>
          </div>
        </div>
      </section>

      <AuditModal 
        isOpen={selectedAudit !== null} 
        onClose={() => setSelectedAudit(null)} 
        auditData={selectedAudit}
        lang={lang}
      />
    </main>
  );
}

export default Services;



