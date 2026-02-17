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
  Server,
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

import { useLanguage } from '../i18n/index.jsx';

function Services() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'Web development services',
          heroTitleLine1: 'Digital solutions',
          heroTitleLine2: 'tailored to you',
          heroDescription:
            'From design to development, we deliver everything you need for a professional and effective digital presence.',
          viewPackages: 'View packages',
          requestQuote: 'Request quote',
          sectionTitlePrefix: 'Our ',
          sectionTitleHighlight: 'services',
          sectionSubtitle: 'Complete solutions for each stage of your digital project',
          requestService: 'Request service',
          additionalTitlePrefix: 'Additional ',
          additionalTitleHighlight: 'services',
          additionalSubtitle: 'Enhance your project with these specialized services',
          maintenanceTitlePrefix: 'Maintenance and ',
          maintenanceTitleHighlight: 'continuous growth',
          maintenanceSubtitle:
            'We support you after launch so your site stays fast, secure, and conversion-ready. Monthly plan recommended.',
          maintenanceCta: 'Request monthly plan',
          whyTitlePrefix: 'Why ',
          whyTitleHighlight: 'choose us',
          workTitlePrefix: 'How we ',
          workTitleHighlight: 'work',
          techTitlePrefix: 'Technologies we ',
          techTitleHighlight: 'master',
          ctaTitle: 'Do you have a project in mind?',
          ctaDescription:
            'Tell us your idea and we will help you make it real. Free quote with no commitment.',
          services: [
            {
              title: 'Web Design & UX/UI',
              icon: <Palette size={32} />,
              description: (
                <>
                  Professional UX/UI design: visual identity, prototypes, and user experience ready for development.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is web design important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Good web design creates a strong first impression, builds trust, and guides users to conversion. It's essential for brand identity and user experience.
                  </div>
                </>
              ),
              features: [
                'Professional web design & UX/UI',
                'Logo and visual identity design',
                'Complete branding (colors, typography, guidelines)',
                'Wireframes and clickable prototypes',
                'Accessible design (WCAG compliance)',
                'Responsive & mobile-ready design',
                'Figma delivery with style guide',
                'Review with design revisions included',
              ],
              price: 'From $99.990',
            },
            {
              title: 'Web Development',
              icon: <Code size={32} />,
              description: (
                <>
                  Fast, secure, and scalable websites with modern technologies. From landing pages to complex applications.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is web development important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Robust development ensures your site works reliably, loads quickly, and adapts to growth. It's the foundation for business success online.
                  </div>
                </>
              ),
              note: 'Programming and functionality: performance, integrations, and stability.',
              features: [
                'Landing pages optimized for conversion',
                'Corporate and institutional websites',
                'Complex web applications, dashboards & CRM/ERP',
                'Membership portals & communities',
                'Multi-language support (i18n)',
                'Booking and reservation systems',
                'Educational platforms (LMS) & news/magazine sites',
                'Custom requirements: blogs, forums, events',
              ],
              price: 'From $99.990',
            },
            {
              title: 'E-commerce & Marketplaces',
              icon: <ShoppingCart size={32} />,
              description: (
                <>
                  Complete online stores and multi-vendor platforms with everything needed to sell and scale.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is e-commerce important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    E-commerce lets you reach more customers, automate sales, and grow your business 24/7. It's key for modern commercial success.
                  </div>
                </>
              ),
              features: [
                'Basic and advanced online stores',
                'Shopping cart and secure checkout',
                'Payment integration (Stripe, PayPal, crypto)',
                'Inventory management & automation',
                'Order tracking & fulfillment',
                'Shipping integration & labels',
                'Sales analytics & reporting',
                'Affiliate and referral programs',
                'Multi-vendor platform (PREMIUM)',
                'Commission automation (PREMIUM)',
              ],
              note: 'Available in Basic, Advanced, and Premium (marketplace) tiers.',
              price: 'From $299.990',
            },
            {
              title: 'Mobile Applications',
              icon: <Smartphone size={32} />,
              description: (
                <>
                  Native apps and PWA for iOS and Android to expand your digital reach and engage users on all devices.
                  <div className="mt-3 text-primary text-sm font-semibold">Why are mobile apps important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Mobile apps connect you with users wherever they are, boost engagement, and unlock new business models. They're vital for digital presence.
                  </div>
                </>
              ),
              note: 'Native, hybrid (React Native/Flutter), and PWA options available. MVP and rapid prototyping available.',
              features: [
                'iOS and Android native apps',
                'Hybrid apps (React Native/Flutter)',
                'Progressive Web Apps (PWA)',
                'MVP and rapid prototyping',
                'Geolocation & GPS integration',
                'Push notifications & engagement',
                'In-app purchases & monetization',
                'App Store optimization (ASO)',
                'Camera, sensors & biometric integration',
                'Offline sync & data persistence',
                'QA testing on multiple devices',
                'Firebase & custom backend options',
                'Maintenance & continuous updates',
              ],
              price: 'From $499.990',
            },
            {
              title: 'Security & Performance Audit',
              icon: <Shield size={32} />,
              description: (
                <>
                  Complete security and performance audit to identify vulnerabilities, speed issues, and accessibility gaps. Get actionable recommendations to improve your site.
                  <div className="mt-3 text-primary text-sm font-semibold">Why audit your site?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Regular security and performance audits prevent data breaches, improve load times, and ensure accessibility. Critical for user experience and trust.
                  </div>
                </>
              ),
              features: [
                'Security audit (OWASP Top 10, SSL, vulnerabilities)',
                'Accessibility audit (WCAG, digital inclusion)',
                'UX/UI audit (user testing, heatmaps, behavior mapping)',
                'Performance optimization (load speed, Core Web Vitals, Lighthouse)',
                'Image optimization (compression, WebP & AVIF formats)',
                'Database optimization (queries, indexes, caching)',
                'A/B testing & conversion analysis (funnel, abandonment points)',
                'Complete audit report with action plan & recommendations',
              ],
              price: 'From $49.990',
            },
            {
              title: 'SEO Strategy Setup',
              icon: <Search size={32} />,
              description: (
                <>
                  Complete SEO audit and optimization setup to get your site ready for search visibility. Initial one-time setup includes strategy and implementation.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is SEO setup important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    A solid SEO foundation is critical for visibility. Setup includes technical fixes, keyword strategy, and GA4 tracking so you can measure success from day one.
                  </div>
                </>
              ),
              note: 'One-time setup. After completion, optional monthly retainer available for ongoing optimization.',
              features: [
                'Complete site technical audit',
                'Keyword strategy (15-20 keywords)',
                'Full site on-page optimization',
                'GA4 + Search Console setup',
                'Initial positioning report',
                'Implementation recommendations',
                'Basic training and handover',
              ],
              price: 'From $399.990',
            },
            {
              title: 'SEO Monthly Retainer',
              icon: <BarChart size={32} />,
              description: (
                <>
                  Continuous SEO maintenance and optimization to protect and improve your search rankings every month. Builds on your SEO setup foundation.
                  <div className="mt-3 text-primary text-sm font-semibold">Why monthly SEO maintenance?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    SEO is not one-time. Competitors change, algorithms update, and your site needs continuous monitoring and optimization to stay competitive and maintain rankings.
                  </div>
                </>
              ),
              note: 'Monthly retainer. Perfect for sites already with SEO setup or those wanting continuous optimization.',
              features: [
                'Monthly on-page optimization',
                'Link building and backlink strategy',
                'Competitive monitoring and analysis',
                'GA4 + positioning reports',
                'Content optimization recommendations',
                'Technical performance monitoring',
                'Monthly strategy calls and support',
              ],
              price: 'From $149.990/month',
            },
            {
              title: 'Maintenance & Support',
              icon: <Settings size={32} />,
              description: (
                <>
                  Your site always updated, secure, and running at top performance. Available in multiple plan levels.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is maintenance important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Ongoing maintenance prevents downtime, keeps your site secure, and ensures optimal performance. It's essential for protecting your investment.
                  </div>
                </>
              ),
              features: [
                'Security updates & patches',
                'Automatic daily backups',
                'Uptime monitoring 24/7',
                'Performance optimization',
                'Dependency & library updates',
                'Database optimization & cleaning',
                'Monthly health reports & analytics',
                'Priority technical support',
              ],
              note: 'Available in Basic, Professional, and Premium (99.9% uptime SLA) plans.',
              price: 'From $49.990/month',
            },
            {
              title: 'Rebranding & Strategy',
              icon: <Brush size={32} />,
              description: (
                <>
                  Complete brand transformation and market positioning strategy to strengthen your market presence.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is rebranding important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Rebranding helps you stay competitive, attract new audiences, and communicate your evolution. It's essential when pivoting, merging, or reaching new markets.
                  </div>
                </>
              ),
              features: [
                'Complete brand audit and analysis',
                'Visual identity redesign',
                'Logo and color palette design',
                'Website redesign',
                'Brand guidelines and documentation',
                'Brand positioning strategy',
                'Refresh or complete rebranding',
                'Market positioning consultation',
              ],
              note: 'Available as complete rebranding or light refresh option.',
              price: 'From $199.990',
            },
            {
              title: 'Strategy & Analysis',
              icon: <Lightbulb size={32} />,
              description: (
                <>
                  Strategic consulting and data-driven analysis to optimize conversions and competitive positioning.
                  <div className="mt-3 text-primary text-sm font-semibold">Why is strategic analysis important?</div>
                  <div className="text-gray-700 text-xs mb-2">
                    Strategy and analysis uncover hidden opportunities and help you make data-driven decisions. They're essential for competitive advantage and growth.
                  </div>
                </>
              ),
              features: [
                'UX/UI audit with user testing',
                'Conversion Rate Optimization (CRO)',
                'Competitive benchmarking analysis',
                'User behavior mapping',
                'Funnel analysis & optimization',
                'A/B testing strategy',
                'Market positioning analysis',
                'Data-driven recommendations',
              ],
              note: 'Includes research, testing, and actionable recommendations.',
              price: 'From $249.990',
            },
          ],
          additional: [
            {
              icon: <ArrowRight size={24} />,
              title: 'QR Codes',
              desc: 'Professional dynamic QR codes with tracking and analytics',
            },
            {
              icon: <Monitor size={24} />,
              title: 'Lead Capture',
              desc: 'Professional forms, lead capture, CRM integration automation',
            },
            {
              icon: <Globe size={24} />,
              title: 'Chatbots & AI',
              desc: 'OpenAI chatbots, helpdesk systems, customer support automation',
            },
            {
              icon: <Database size={24} />,
              title: 'CRM Setup',
              desc: 'Implementation and configuration of CRM systems and workflows',
            },
            {
              icon: <Zap size={24} />,
              title: 'Automation',
              desc: 'Workflows with n8n/Make, API integrations, data synchronization',
            },
            {
              icon: <Layers size={24} />,
              title: 'Integrations',
              desc: 'Custom webhooks and API connectors for external services',
            },
            {
              icon: <Ticket size={24} />,
              title: 'Helpdesk & Support',
              desc: 'Ticketing systems and customer support automation',
            },
            {
              icon: <Video size={24} />,
              title: 'Video Hosting',
              desc: 'Professional video hosting with player customization and analytics',
            },
            {
              icon: <Plug size={24} />,
              title: 'Webhooks & APIs',
              desc: 'Custom API connectors and webhooks for external services',
            },
            {
              icon: <Workflow size={24} />,
              title: 'n8n/Make Automation',
              desc: 'Advanced automation workflows and data synchronization',
            },
            {
              icon: <Mail size={24} />,
              title: 'Newsletter Setup',
              desc: 'Professional email templates, automation, and list management',
            },
          ],
          webTypesTitlePrefix: 'Types of webs we ',
          webTypesTitleHighlight: 'specialize in',
          webTypesSubtitle: 'Check the most in-demand website types and use cases',
          webTypes: [
            { icon: <Rocket size={20} />, title: 'Landing Pages' },
            { icon: <ShoppingCart size={20} />, title: 'E-commerce Stores' },
            { icon: <Building size={20} />, title: 'Corporate Sites' },
            { icon: <Newspaper size={20} />, title: 'Blogs & News' },
            { icon: <Gift size={20} />, title: 'Membership Portal' },
            { icon: <Briefcase size={20} />, title: 'Portfolio' },
            { icon: <Calendar size={20} />, title: 'Booking Systems' },
            { icon: <BookOpen size={20} />, title: 'Learning Platforms' },
            { icon: <Megaphone size={20} />, title: 'Event Platforms' },
            { icon: <Users size={20} />, title: 'Community Forum' },
            { icon: <Globe size={20} />, title: 'Catalog' },
            { icon: <Code size={20} />, title: 'Custom Web Apps' },
            { icon: <Monitor size={20} />, title: 'Microsite Campaign' },
            { icon: <Zap size={20} />, title: 'Web Solutions' },
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
            {
              title: 'Priority support',
              desc: 'Preferred response times and minor adjustments.',
            },
            {
              title: 'Managed hosting and domain',
              desc: 'Forget technical tasks: we handle them.',
            },
            {
              title: 'Loyalty benefits',
              desc: 'Improvements or discounts for continuity.',
            },
          ],
          whyItems: [
            'Agile and transparent methodology: active client participation throughout the process.',
            'Frequent deliveries and room for changes: flexibility to adapt the project to your needs.',
            'Clear documentation and defined timeline: you always know what is being done and when.',
            'Modern design optimized for performance: elegant, fast and stable sites.',
            'Professional and updated team: software engineering, machine learning, security and PM expertise.',
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
          tech: [
            'React',
            'Next.js',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'PostgreSQL',
            'MongoDB',
          ],
        }
      : {
          heroBadge: 'Servicios de desarrollo web',
          heroTitleLine1: 'Soluciones digitales',
          heroTitleLine2: 'a tu medida',
          heroDescription:
            'Desde Diseño hasta desarrollo, ofrecemos todo lo que necesitas para crear una presencia digital profesional y efectiva.',
          viewPackages: 'Ver paquetes',
          requestQuote: 'Solicitar cotización',
          sectionTitlePrefix: 'Nuestros ',
          sectionTitleHighlight: 'servicios',
          sectionSubtitle:
            'Soluciones completas para cada etapa de tu proyecto digital',
          requestService: 'Solicitar servicio',
          additionalTitlePrefix: 'Servicios ',
          additionalTitleHighlight: 'adicionales',
          additionalSubtitle:
            'Complementa tu proyecto con estos servicios especializados',
          maintenanceTitlePrefix: 'Mantenimiento y ',
          maintenanceTitleHighlight: 'crecimiento continuo',
          maintenanceSubtitle:
            'Te acompañamos después del lanzamiento para que tu sitio siga rápido, seguro y convirtiendo. Plan mensual recomendado.',
          maintenanceCta: 'Solicitar plan mensual',
          whyTitlePrefix: 'Por qué ',
          whyTitleHighlight: 'elegirnos',
          workTitlePrefix: 'Cómo ',
          workTitleHighlight: 'trabajamos',
          techTitlePrefix: 'Tecnologías que ',
          techTitleHighlight: 'dominamos',
          ctaTitle: '¿Tienes un proyecto en mente?',
          ctaDescription:
            'Cuéntanos tu idea y te ayudaremos a hacerla realidad. Cotización gratuita y sin compromiso.',
          services: [
            {
              title: 'Diseño Web & UX/UI',
              icon: <Palette size={32} />,
              description: (
                <>
                  Diseños profesionales UX/UI: identidad visual, prototipos y experiencia de usuario lista para desarrollo.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el diseño web?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    Un buen diseño web genera confianza, refuerza tu marca y guía al usuario hacia la conversión. Es clave para destacar y lograr resultados.
                  </div>
                </>
              ),
              features: [
                'Diseño web profesional UX/UI',
                'Diseño de logo e identidad visual',
                'Identidad visual completa (colores, tipografía, manual de marca)',
                'Wireframes y prototipos navegables',
                'Diseño accesible (cumplimiento WCAG)',
                'Diseño responsive y adaptado a móvil',
                'Entrega en Figma con guía de estilos',
                'Revisión con rondas de cambios incluidas',
              ],
              price: 'Desde $99.990',
            },
            {
              title: 'Desarrollo Web',
              icon: <Code size={32} />,
              description: (
                <>
                  Sitios web rápidos, seguros y escalables con las últimas tecnologías del mercado. Desde landing pages hasta aplicaciones complejas.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el desarrollo web?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    Un desarrollo robusto garantiza que tu sitio funcione bien, sea rápido y crezca contigo. Es la base del éxito digital.
                  </div>
                </>
              ),
              note: 'Programación y funcionalidad: performance, integraciones y estabilidad.',
              features: [
                'Landing pages optimizadas para conversión',
                'Sitios web corporativos e institucionales',
                'Aplicaciones web complejas, dashboards, CRM y ERP',
                'Portales de membresía y comunidades',
                'Soporte multiidioma (i18n)',
                'Sistemas de reservas y citas',
                'Plataformas educativas (LMS) y sitios de noticias',
                'Requisitos personalizados: blogs, foros, eventos',
              ],
              price: 'Desde $99.990',
            },
            {
              title: 'E-commerce & Marketplaces',
              icon: <ShoppingCart size={32} />,
              description: (
                <>
                  Tiendas online completas y plataformas multi-vendedor con todo lo necesario para vender y escalar.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el e-commerce?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    El e-commerce te permite llegar a más clientes, automatizar ventas y crecer 24/7. Es fundamental para el éxito comercial moderno.
                  </div>
                </>
              ),
              features: [
                'Tiendas online básicas y avanzadas',
                'Carrito de compras y checkout seguro',
                'Integración de pagos (Stripe, PayPal, cripto)',
                'Gestión de inventario y automatización',
                'Seguimiento de pedidos y cumplimiento',
                'Integración de plataformas de envío',
                'Analytics y reportes de ventas',
                'Programas de afiliados y referidos',
                'Plataforma multi-vendedor (PREMIUM)',
                'Automatización de comisiones (PREMIUM)',
              ],
              note: 'Disponible en niveles Basic, Advanced y Premium (marketplace).',
              price: 'Desde $299.990',
            },
            {
              title: 'Aplicaciones Móviles',
              icon: <Smartphone size={32} />,
              description: (
                <>
                  Apps nativas y PWA para iOS y Android que extienden tu presencia digital y engancha usuarios en todos los dispositivos.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué son importantes las apps móviles?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    Las apps móviles te conectan con usuarios donde sea, aumentan el engagement y abren nuevas oportunidades de negocio. Son vitales para tu presencia digital.
                  </div>
                </>
              ),
              note: 'Apps nativas, híbridas (React Native/Flutter) y PWA disponibles. MVP y prototipado rápido disponibles.',
              features: [
                'Apps nativas iOS y Android',
                'Apps híbridas (React Native/Flutter)',
                'Progressive Web Apps (PWA)',
                'MVP y prototipado rápido',
                'Integración de geolocalización y GPS',
                'Push notifications y engagement',
                'Compras dentro de la app y monetización',
                'Optimización App Store (ASO)',
                'Integración de cámara, sensores y biometría',
                'Sincronización offline y persistencia de datos',
                'QA testing en múltiples dispositivos',
                'Firebase e integración de backend personalizado',
                'Mantenimiento y actualizaciones continuas',
              ],
              price: 'Desde $499.990',
            },
            {
              title: 'Auditoría de Seguridad & Performance',
              icon: <Shield size={32} />,
              description: (
                <>
                  Auditoría completa de seguridad y performance para identificar vulnerabilidades, problemas de velocidad y brechas de accesibilidad. Recomendaciones accionables.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué auditar tu sitio?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    Las auditorías regulares previenen brechas de seguridad, mejoran velocidad y aseguran accesibilidad. Crítico para experiencia de usuario y confianza.
                  </div>
                </>
              ),
              features: [
                'Auditoría de seguridad (OWASP Top 10, SSL, vulnerabilidades)',
                'Auditoría de accesibilidad (WCAG, inclusión digital)',
                'Auditoría UX/UI (testing con usuarios, mapas de calor, comportamiento)',
                'Optimización de rendimiento (velocidad de carga, Core Web Vitals, Lighthouse)',
                'Optimización de imágenes (compresión, formatos WebP y AVIF)',
                'Optimización de base de datos (queries, índices, caché)',
                'Testing A/B y conversiones (análisis de funnel, puntos de abandono)',
                'Reporte completo de auditoría (recomendaciones detalladas y plan de acción)',
              ],
              price: 'Desde $49.990',
            },
            {
              title: 'Setup SEO Estratégico',
              icon: <Search size={32} />,
              description: (
                <>
                  Auditoría completa y setup SEO para posicionar tu sitio en búsquedas. Setup inicial único que incluye estrategia e implementación.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el setup SEO?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    Una base SEO sólida es crítica para visibilidad. Incluye fixes técnicos, estrategia de keywords y GA4 para medir resultados desde el primer día.
                  </div>
                </>
              ),
              note: 'Setup único. Después de completar, retainer mensual disponible para optimización continua.',
              features: [
                'Auditoría técnica completa del sitio',
                'Estrategia de 15-20 palabras clave',
                'Optimización on-page de todo el sitio',
                'GA4 + Search Console configuración',
                'Reporte inicial de posicionamiento',
                'Recomendaciones de implementación',
                'Capacitación básica y entrega',
              ],
              price: 'Desde $399.990',
            },
            {
              title: 'SEO Retainer Mensual',
              icon: <BarChart size={32} />,
              description: (
                <>
                  Mantenimiento y optimización SEO continua cada mes para proteger y mejorar tu posicionamiento en búsquedas. Construye sobre tu setup SEO.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué mantenimiento SEO mensual?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    SEO no es de una sola vez. Los competidores cambian, los algoritmos se actualizan y tu sitio necesita monitoreo continuo para mantener posiciones competitivas.
                  </div>
                </>
              ),
              note: 'Retainer mensual. Ideal para sitios con setup SEO listo o que quieren optimización continua.',
              features: [
                'Optimización on-page mensual',
                'Link building y estrategia de backlinks',
                'Monitoreo competitivo y análisis',
                'Reportes GA4 y posicionamiento',
                'Recomendaciones de contenido',
                'Monitoreo técnico y performance',
                'Llamadas estratégicas mensuales y soporte',
              ],
              price: 'Desde $149.990/mes',
            },
            {
              title: 'Mantenimiento & Soporte',
              icon: <Settings size={32} />,
              description: (
                <>
                  Tu sitio siempre actualizado, seguro y funcionando al máximo rendimiento. Disponible en múltiples niveles.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el mantenimiento?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    El mantenimiento continuo previene caídas, mantiene tu sitio seguro y asegura el mejor rendimiento. Es esencial para proteger tu inversión.
                  </div>
                </>
              ),
              features: [
                'Actualizaciones de seguridad y patches',
                'Backups automáticos diarios',
                'Monitoreo de uptime 24/7',
                'Optimización de performance',
                'Actualizaciones de dependencias y librerías',
                'Optimización de base de datos y limpieza',
                'Reportes mensuales de salud del sitio',
                'Soporte técnico prioritario',
              ],
              note: 'Disponible en planes Basic, Professional y Premium (SLA 99.9% uptime).',
              price: 'Desde $49.990/mes',
            },
            {
              title: 'Rebranding & Estrategia',
              icon: <Brush size={32} />,
              description: (
                <>
                  Transformación completa de marca y estrategia de posicionamiento para fortalecer tu presencia en el mercado.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el rebranding?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    El rebranding te ayuda a mantenerte competitivo, atraer nuevas audiencias y comunicar tu evolución. Es esencial al pivotar, fusionarse o llegar a nuevos mercados.
                  </div>
                </>
              ),
              features: [
                'Auditoría y análisis completo de marca',
                'Rediseño de identidad visual',
                'Diseño de logo y paleta de colores',
                'Rediseño de sitio web',
                'Guía de marca y documentación',
                'Estrategia de posicionamiento',
                'Refreshing o rebranding completo',
                'Consultoría de posicionamiento en mercado',
              ],
              note: 'Disponible como rebranding completo o opción de refreshing ligero.',
              price: 'Desde $199.990',
            },
            {
              title: 'Estrategia & Análisis',
              icon: <Lightbulb size={32} />,
              description: (
                <>
                  Consultoría estratégica y análisis basado en datos para optimizar conversiones y posicionamiento competitivo.
                  <div className="mt-3 text-primary text-sm font-semibold">
                    ¿Por qué es importante el análisis estratégico?
                  </div>
                  <div className="text-gray-700 text-xs mb-2">
                    La estrategia y análisis descubren oportunidades ocultas y te ayudan a tomar decisiones basadas en datos. Son esenciales para ventaja competitiva y crecimiento.
                  </div>
                </>
              ),
              features: [
                'Auditoría UX/UI con testing de usuarios',
                'Optimización de Tasa de Conversión (CRO)',
                'Análisis de benchmarking competitivo',
                'Mapeo de comportamiento de usuarios',
                'Análisis de funnel y optimización',
                'Estrategia de testing A/B',
                'Análisis de posicionamiento en mercado',
                'Recomendaciones basadas en datos',
              ],
              note: 'Incluye investigación, testing y recomendaciones accionables.',
              price: 'Desde $249.990',
            },
          ],
          additional: [
            {
              icon: <ArrowRight size={24} />,
              title: 'Códigos QR',
              desc: 'Códigos QR profesionales dinámicos con tracking y analytics',
            },
            {
              icon: <Monitor size={24} />,
              title: 'Captura de Leads',
              desc: 'Formularios profesionales, captura de leads y automatización CRM',
            },
            {
              icon: <Globe size={24} />,
              title: 'Chatbots & IA',
              desc: 'Chatbots OpenAI, sistemas de helpdesk, automatización de soporte',
            },
            {
              icon: <Database size={24} />,
              title: 'Setup CRM',
              desc: 'Implementación y configuración de sistemas CRM y workflows',
            },
            {
              icon: <Zap size={24} />,
              title: 'Automatización',
              desc: 'Flujos con n8n/Make, integraciones de APIs, sincronización de datos',
            },
            {
              icon: <Layers size={24} />,
              title: 'Integraciones',
              desc: 'Webhooks personalizados y conectores de APIs externas',
            },
            {
              icon: <Ticket size={24} />,
              title: 'Helpdesk & Soporte',
              desc: 'Sistemas de ticketing y automatización de soporte al cliente',
            },
            {
              icon: <Video size={24} />,
              title: 'Video Hosting',
              desc: 'Video hosting profesional con personalización de player y analytics',
            },
            {
              icon: <Plug size={24} />,
              title: 'Webhooks & APIs',
              desc: 'Conectores de APIs personalizados y webhooks para servicios externos',
            },
            {
              icon: <Workflow size={24} />,
              title: 'Automatización n8n/Make',
              desc: 'Flujos avanzados de automatización y sincronización de datos',
            },
            {
              icon: <Mail size={24} />,
              title: 'Newsletter Setup',
              desc: 'Templates profesionales, automatización y gestión de listas de email',
            },
          ],
          webTypesTitlePrefix: 'Tipos de webs que ',
          webTypesTitleHighlight: 'especializamos',
          webTypesSubtitle: 'Conoce los tipos de sitios más demandados y casos de uso',
          webTypes: [
            { icon: <Rocket size={20} />, title: 'Landing Pages' },
            { icon: <ShoppingCart size={20} />, title: 'Tiendas E-commerce' },
            { icon: <Building size={20} />, title: 'Sitios Corporativos' },
            { icon: <Newspaper size={20} />, title: 'Blogs y Noticias' },
            { icon: <Gift size={20} />, title: 'Portal de Membresía' },
            { icon: <Briefcase size={20} />, title: 'Portfolio Profesional' },
            { icon: <Calendar size={20} />, title: 'Sistemas de Reservas' },
            { icon: <BookOpen size={20} />, title: 'Plataformas Educativas' },
            { icon: <Megaphone size={20} />, title: 'Plataformas de Eventos' },
            { icon: <Users size={20} />, title: 'Foro de Comunidad' },
            { icon: <Globe size={20} />, title: 'Catálogos y Directorios' },
            { icon: <Code size={20} />, title: 'Aplicaciones Web' },
            { icon: <Monitor size={20} />, title: 'Micrositios' },
            { icon: <Zap size={20} />, title: 'Soluciones Digitales' },
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
            {
              title: 'Soporte prioritario',
              desc: 'Tiempos de respuesta preferentes y ajustes menores.',
            },
            {
              title: 'Hosting y dominio gestionado',
              desc: 'Olvídate de lo técnico: nosotros lo administramos.',
            },
            {
              title: 'Beneficios por permanencia',
              desc: 'Mejoras o descuentos por continuidad.',
            },
          ],
          whyItems: [
            'Metodología ágil y transparente: participación activa del cliente en todo el proceso.',
            'Entregas frecuentes y posibilidad de cambios: flexibilidad para adaptar el proyecto a tus necesidades.',
            'Documentación clara y cronogramas definidos: siempre sabrás qué se está haciendo y cuándo.',
            'Diseño moderno y optimizado para rendimiento: sitios elegantes, rápidos y estables.',
            'Equipo profesional y actualizado: ingeniería, machine learning, seguridad y gestión de proyectos.',
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
          tech: [
            'React',
            'Next.js',
            'Node.js',
            'TypeScript',
            'Tailwind CSS',
            'PostgreSQL',
            'MongoDB',
          ],
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
                className="bg-base border-2 border-gray-200 hover:border-primary p-6 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 mr-4 group-hover:bg-primary transition-all duration-300">
                    <div className="text-primary group-hover:text-gray-900 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    <p className="text-primary font-bold text-sm">{service.price}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-3">{service.description}</div>
                {service.note && <p className="text-xs text-gray-500 mb-4">{service.note}</p>}

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <CheckCircle size={14} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contacto"
                  className="inline-flex items-center text-secondary font-bold text-sm hover:text-primary transition-all duration-300"
                >
                  {copy.requestService}
                  <ArrowRight size={16} className="ml-1" />
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
              {copy.additionalTitlePrefix}
              <span className="text-primary">{copy.additionalTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.additionalSubtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {copy.additional.map((service, idx) => (
              <div
                key={idx}
                className="bg-base p-4 border border-gray-200 hover:border-primary text-center transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/10 text-secondary mb-3">
                  {service.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-xs text-gray-600">{service.desc}</p>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {copy.whyTitlePrefix}
            <span className="text-primary">{copy.whyTitleHighlight}</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
            {copy.whyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            {copy.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-lg font-bold hover:text-primary transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
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
    </main>
  );
}

export default Services;
