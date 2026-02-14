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
              title: 'Web Design',
              icon: <Palette size={32} />, 
              description: 'Professional UX/UI design: visual identity, prototypes, and user experience ready for development.',
              features: [
                'Homepage and section mockups',
                'Logo design',
                'Visual identity (colors & fonts)',
                'Wireframes and clickable prototypes',
                'Visual components (buttons, sliders, carousels)',
                'Style guide for developers',
                'Responsive design (mobile/tablet ready)',
                'Delivery in Figma, XD or PDF',
                'Review and one round of changes',
              ],
              price: 'From $99.990',
            },
            {
              title: 'Web Development',
              icon: <Code size={32} />,
              description: 'Fast, secure, and scalable websites with latest technologies.',
              note: 'Programming and functionality: performance, integrations, and stability.',
              features: [
                'Landing page',
                'Corporate/institutional website',
                'E-commerce (online store)',
                'Blog or news website',
                'Portfolio (personal or agency)',
                'Membership site (private/paid content)',
                'Booking/appointment website',
                'Educational website (courses, LMS)',
                'Event website (with registration and agenda)',
                'News website',
                'Forum or community website',
                'Catalog website (without direct sales)',
                'Microsite (small site for specific campaigns)',
                'Custom development (tell us your idea)',

              ],
              price: 'From $99.990',
            },
            {
              title: 'E-commerce',
              icon: <ShoppingCart size={32} />,
              description: 'Basic online stores with everything needed to start selling online.',
              features: ['Shopping cart', 'Payment gateway', 'Inventory management', 'Admin panel'],
              note: 'Sales-focused development: cart, payments, and inventory. Basic store.',
              price: 'From $299.990',
            },
            {
              title: 'SEO and Marketing',
              icon: <Search size={32} />,
              description: 'Search optimization that improves visibility and brings more clients.',
              note: 'Base price. Final value depends on website size and technical condition.',
              features: ['SEO audit', 'On-page optimization', 'Link building', 'Google Analytics'],
              price: 'From $79.990/month',
            },
            {
              title: 'Mobile Applications',
              icon: <Smartphone size={32} />,
              description: 'Native apps and PWA for iOS and Android to expand your digital reach.',
              note: 'Mobile apps and PWA to reach users on every device.',
              features: ['React Native', 'PWA', 'App Store / Play Store', 'Push notifications'],
              price: 'From $499.990',
            },
            {
              title: 'Maintenance',
              icon: <Settings size={32} />,
              description: 'Your site always updated, secure, and running at top performance.',
              note: 'Updates, monitoring, and ongoing support to prevent downtime.',
              features: ['Updates', 'Automatic backups', '24/7 monitoring', 'Technical support'],
              price: 'From $49.990/month',
            },
          ],
          additional: [
            { icon: <Globe size={24} />, title: 'Hosting and domains', desc: 'High-speed web hosting' },
            { icon: <Database size={24} />, title: 'Databases', desc: 'DB design and optimization' },
            { icon: <Shield size={24} />, title: 'Web security', desc: 'SSL, firewalls and DDoS protection' },
            { icon: <Monitor size={24} />, title: 'Landing pages', desc: 'Optimized landing pages' },
            { icon: <Server size={24} />, title: 'APIs and integrations', desc: 'Connection with external services' },
            { icon: <Brush size={24} />, title: 'Website redesign', desc: 'Modernization of existing sites' },
            { icon: <BarChart size={24} />, title: 'Analytics', desc: 'Performance metrics and reporting' },
            { icon: <Zap size={24} />, title: 'Optimization', desc: 'Speed and Core Web Vitals' },
          ],
          maintenanceCards: [
            { title: 'Proactive maintenance', desc: 'Updates, backups and monitoring to prevent outages.' },
            { title: 'Continuous optimization', desc: 'Monthly improvements in speed, UX and conversions.' },
            { title: 'Monthly report', desc: 'Metrics summary, progress and next steps.' },
            { title: 'Priority support', desc: 'Preferred response times and minor adjustments.' },
            { title: 'Managed hosting and domain', desc: 'Forget technical tasks: we handle them.' },
            { title: 'Loyalty benefits', desc: 'Improvements or discounts for continuity.' },
          ],
          whyItems: [
            'Agile and transparent methodology: active client participation throughout the process.',
            'Frequent deliveries and room for changes: flexibility to adapt the project to your needs.',
            'Clear documentation and defined timeline: you always know what is being done and when.',
            'Modern design optimized for performance: elegant, fast and stable sites.',
            'Professional and updated team: software engineering, machine learning, security and PM expertise.',
          ],
          process: [
            { step: '01', title: 'Consultation', desc: 'We analyze your needs and goals' },
            { step: '02', title: 'Proposal', desc: 'We send a detailed quote' },
            { step: '03', title: 'Development', desc: 'We build your project with revisions' },
            { step: '04', title: 'Delivery', desc: 'We launch and onboard you' },
          ],
          tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'],
        }
      : {
          heroBadge: 'Servicios de desarrollo web',
          heroTitleLine1: 'Soluciones digitales',
          heroTitleLine2: 'a tu medida',
          heroDescription:
            'Desde Diseño hasta desarrollo, ofrecemos todo lo que necesitas para crear una presencia digital profesional y efectiva.',
          viewPackages: 'Ver paquetes',
          requestQuote: 'Solicitar cotizacion',
          sectionTitlePrefix: 'Nuestros ',
          sectionTitleHighlight: 'servicios',
          sectionSubtitle: 'Soluciones completas para cada etapa de tu proyecto digital',
          requestService: 'Solicitar servicio',
          additionalTitlePrefix: 'Servicios ',
          additionalTitleHighlight: 'adicionales',
          additionalSubtitle: 'Complementa tu proyecto con estos servicios especializados',
          maintenanceTitlePrefix: 'Mantenimiento y ',
          maintenanceTitleHighlight: 'crecimiento continuo',
          maintenanceSubtitle:
            'Te acompanamos despues del lanzamiento para que tu sitio siga rapido, seguro y convirtiendo. Plan mensual recomendado.',
          maintenanceCta: 'Solicitar plan mensual',
          whyTitlePrefix: 'Por que ',
          whyTitleHighlight: 'elegirnos',
          workTitlePrefix: 'Como ',
          workTitleHighlight: 'trabajamos',
          techTitlePrefix: 'Tecnologias que ',
          techTitleHighlight: 'dominamos',
          ctaTitle: 'Tienes un proyecto en mente?',
          ctaDescription:
            'Cuentaños tu idea y te ayudaremos a hacerla realidad. Cotizacion gratuita y sin compromiso.',
          services: [
            {
              title: 'Diseño Web',
              icon: <Palette size={32} />, 
              description: 'Diseños profesionales UX/UI: identidad visual, prototipos y experiencia de usuario lista para desarrollo.',
              features: [
                'Mockups de página principal y secciones',
                'Diseño de logo',
                'Identidad visual (colores y tipografías)',
                'Wireframes y prototipos navegables',
                'Componentes visuales (botones, sliders, carruseles)',
                'Guía de estilos para desarrolladores',
                'Diseño responsive (adaptado a móvil/tablet)',
                'Entrega en Figma, XD o PDF',
                'Revisión y una ronda de cambios',
              ],
              price: 'Desde $99.990',
            },
            {
              title: 'Desarrollo Web',
              icon: <Code size={32} />,
              description: 'Sitios web rapidos, seguros y escalables con las ultimas tecnologias del mercado.',
              note: 'Programacion y funcionalidad: performance, integraciones y estabilidad.',
              features: [
                'Landing page', 
                'Sitio web corporativo/institucional', 
                'E-commerce (tienda online)', 
                'Blog o revista digital', 
                'Portafolio (personal o de agencia)', 
                'Web de membresía (contenido privado/pago)', 
                'Web de reservas/citas', 
                'Web educativa (cursos, LMS)', 
                'Web de eventos (con registro y agenda)', 
                'Web de noticias', 
                'Web de foro o comunidad', 
                'Web de catálogo (sin venta directa)', 
                'Micrositio (sitio pequeño para campañas puntuales)',
                'Desarrollo a medida (cuéntanos tu idea)',

              ],
              price: 'Desde $99.990',
            },
            {
              title: 'E-commerce',
              icon: <ShoppingCart size={32} />,
              description: 'Tiendas online basicas con lo esencial para empezar a vender en internet.',
              features: ['Carrito de compras', 'Pasarela de pago', 'Gestion de inventario', 'Panel de administracion'],
              note: 'Desarrollo orientado a ventas: carrito, pagos e inventario. Tienda basica.',
              price: 'Desde $299.990',
            },
            {
              title: 'SEO y Marketing',
              icon: <Search size={32} />,
              description: 'Optimizacion para buscadores que aumenta tu visibilidad y trae mas clientes.',
              note: 'Precio base. El valor final depende del tamaño del sitio y su estado tecnico.',
              features: ['Auditoria SEO', 'Optimizacion on-page', 'Link building', 'Google Analytics'],
              price: 'Desde $79.990/mes',
            },
            {
              title: 'Aplicaciones Moviles',
              icon: <Smartphone size={32} />,
              description: 'Apps nativas y PWA para iOS y Android que extienden tu presencia digital.',
              note: 'Apps moviles y PWA para alcanzar usuarios en cualquier dispositivo.',
              features: ['React Native', 'PWA', 'App Store / Play Store', 'Notificaciones push'],
              price: 'Desde $499.990',
            },
            {
              title: 'Mantenimiento',
              icon: <Settings size={32} />,
              description: 'Tu sitio siempre actualizado, seguro y funcionando al maximo rendimiento.',
              note: 'Actualizaciones, monitoreo y soporte continuo para evitar caidas.',
              features: ['Actualizaciones', 'Backups automaticos', 'Monitoreo 24/7', 'Soporte tecnico'],
              price: 'Desde $49.990/mes',
            },
          ],
          additional: [
            { icon: <Globe size={24} />, title: 'Hosting y dominios', desc: 'Alojamiento web de alta velocidad' },
            { icon: <Database size={24} />, title: 'Bases de datos', desc: 'Diseño y optimizacion de BD' },
            { icon: <Shield size={24} />, title: 'Seguridad web', desc: 'SSL, firewalls y proteccion DDoS' },
            { icon: <Monitor size={24} />, title: 'Landing pages', desc: 'Paginas de aterrizaje optimizadas' },
            { icon: <Server size={24} />, title: 'APIs e integraciones', desc: 'Conexion con servicios externos' },
            { icon: <Brush size={24} />, title: 'ReDiseño web', desc: 'Modernizacion de sitios existentes' },
            { icon: <BarChart size={24} />, title: 'Analytics', desc: 'Metricas y reportes de rendimiento' },
            { icon: <Zap size={24} />, title: 'Optimizacion', desc: 'Velocidad y Core Web Vitals' },
          ],
          maintenanceCards: [
            { title: 'Mantenimiento proactivo', desc: 'Actualizaciones, backups y monitoreo para evitar caidas.' },
            { title: 'Optimizacion continua', desc: 'Mejoras de velocidad, UX y conversiones cada mes.' },
            { title: 'Reporte mensual', desc: 'Resumen de metricas, avances y proximos pasos.' },
            { title: 'Soporte prioritario', desc: 'Tiempos de respuesta preferentes y ajustes menores.' },
            { title: 'Hosting y dominio gestionado', desc: 'Olvidate de lo tecnico: nosotros lo administramos.' },
            { title: 'Beneficios por permanencia', desc: 'Mejoras o descuentos por continuidad.' },
          ],
          whyItems: [
            'Metodologia agil y transparente: participacion activa del cliente en todo el proceso.',
            'Entregas frecuentes y posibilidad de cambios: flexibilidad para adaptar el proyecto a tus necesidades.',
            'Documentacion clara y cronogramas definidos: siempre sabras que se esta haciendo y cuando.',
            'Diseño moderno y optimizado para rendimiento: sitios elegantes, rapidos y estables.',
            'Equipo profesional y actualizado: ingenieria, machine learning, seguridad y gestion de proyectos.',
          ],
          process: [
            { step: '01', title: 'Consulta', desc: 'Analizamos tus necesidades y objetivos' },
            { step: '02', title: 'Propuesta', desc: 'Te enviamos una cotizacion detallada' },
            { step: '03', title: 'Desarrollo', desc: 'Creamos tu proyecto con revisiones' },
            { step: '04', title: 'Entrega', desc: 'Lanzamos y te capacitamos' },
          ],
          tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'],
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

                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
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
