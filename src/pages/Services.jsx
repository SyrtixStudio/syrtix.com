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

const services = [
  {
    title: 'Diseño Web',
    icon: <Palette size={32} />,
    description:
      'Diseños únicos y personalizados que reflejan la identidad de tu marca y conectan con tu audiencia.',
    note: 'Enfocado en UI/UX, prototipos e identidad visual.',
    features: [
      'Diseño UI/UX profesional',
      'Prototipado interactivo',
      'Identidad visual',
      'Responsive design',
      'Landing simple',
      'rediseño',
      'sección adicional',
    ],
    price: 'Desde $99.000',
  },
  {
    title: 'Desarrollo Web',
    icon: <Code size={32} />,
    description:
      'Sitios web rápidos, seguros y escalables con las últimas tecnologías del mercado.',
    note: 'Programación y funcionalidad: performance, integraciones y estabilidad.',
    features: ['React / Next.js', 'WordPress / PHP', 'APIs REST', 'Optimización de rendimiento'],
    price: 'Desde $199.000',
  },
  {
    title: 'E-commerce',
    icon: <ShoppingCart size={32} />,
    description:
      'Tiendas online básicas con lo esencial para empezar a vender en internet.',
    features: [
      'Carrito de compras',
      'Pasarela de pago',
      'Gestión de inventario',
      'Panel de administración',
    ],
    note: 'Desarrollo orientado a ventas: carrito, pagos e inventario. Tienda básica.',
    price: 'Desde $299.000',
  },
  {
    title: 'SEO y Marketing',
    icon: <Search size={32} />,
    description: 'Optimización para buscadores que aumenta tu visibilidad y trae más clientes.',
    note: 'Precio base. El valor final depende del tamaño del sitio y su estado técnico.',
    features: ['Auditoría SEO', 'Optimización on-page', 'Link building', 'Google Analytics'],
    price: 'Desde $79.000/mes',
  },
  {
    title: 'Aplicaciones Móviles',
    icon: <Smartphone size={32} />,
    description: 'Apps nativas y PWA para iOS y Android que extienden tu presencia digital.',
    note: 'Apps móviles y PWA para alcanzar usuarios en cualquier dispositivo.',
    features: ['React Native', 'PWA', 'App Store / Play Store', 'Notificaciones push'],
    price: 'Desde $499.000',
  },
  {
    title: 'Mantenimiento',
    icon: <Settings size={32} />,
    description: 'Tu sitio siempre actualizado, seguro y funcionando al máximo rendimiento.',
    note: 'Actualizaciones, monitoreo y soporte continuo para evitar caídas.',
    features: ['Actualizaciones', 'Backups automáticos', 'Monitoreo 24/7', 'Soporte técnico'],
    price: 'Desde $49.000/mes',
  },
];

const additionalServices = [
  {
    icon: <Globe size={24} />,
    title: 'Hosting y dominios',
    desc: 'Alojamiento web de alta velocidad',
  },
  { icon: <Database size={24} />, title: 'Bases de datos', desc: 'Diseño y optimización de BD' },
  { icon: <Shield size={24} />, title: 'Seguridad web', desc: 'SSL, firewalls y protección DDoS' },
  {
    icon: <Monitor size={24} />,
    title: 'Landing pages',
    desc: 'Páginas de aterrizaje optimizadas',
  },
  {
    icon: <Server size={24} />,
    title: 'APIs e integraciones',
    desc: 'Conexión con servicios externos',
  },
  { icon: <Brush size={24} />, title: 'Rediseño web', desc: 'Modernización de sitios existentes' },
  { icon: <BarChart size={24} />, title: 'Analytics', desc: 'Métricas y reportes de rendimiento' },
  { icon: <Zap size={24} />, title: 'Optimización', desc: 'Velocidad y Core Web Vitals' },
];

function Services() {
  return (
    <main className="min-h-screen bg-base">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/escalabilidad.jpg"
            alt="Fondo servicios syrtix"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Code size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">
              Servicios de desarrollo web
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Soluciones digitales
            <br />
            <span className="text-primary">a tu medida</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Desde diseño hasta desarrollo, ofrecemos todo lo que necesitas para crear una presencia
            digital profesional y efectiva.
          </p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 w-full max-w-xl mx-auto">
            <Link
              to="/paquetes"
              className="flex-1 bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center min-w-[180px]"
            >
              Ver paquetes
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contacto"
              className="flex-1 border-2 border-white text-white font-bold px-8 py-4 hover:bg-white hover:text-gray-900 transition duration-300 min-w-[180px]"
            >
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nuestros <span className="text-primary">servicios</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
            Soluciones completas para cada etapa de tu proyecto digital
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
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
                {service.note && (
                  <p className="text-xs text-gray-500 mb-4">{service.note}</p>
                )}

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
                  Solicitar servicio
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios adicionales */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Servicios <span className="text-primary">adicionales</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
              Complementa tu proyecto con estos servicios especializados
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalServices.map((service, idx) => (
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

      {/* Mantenimiento y crecimiento */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Mantenimiento y <span className="text-primary">crecimiento continuo</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
              Te acompañamos después del lanzamiento para que tu sitio siga rápido, seguro y
              convirtiendo. Plan mensual recomendado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
            ].map((item, idx) => (
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
              Solicitar plan mensual
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            ¿Por qué <span className="text-primary">elegirnos?</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
            <li>
              <span className="font-bold text-primary">Metodología ágil y transparente:</span>{' '}
              Participación activa del cliente en todo el proceso.
            </li>
            <li>
              <span className="font-bold text-primary">
                Entregas frecuentes y posibilidad de cambios:
              </span>{' '}
              Flexibilidad para adaptar el proyecto a tus necesidades.
            </li>
            <li>
              <span className="font-bold text-primary">
                Documentación clara y cronogramas definidos:
              </span>{' '}
              Siempre sabrás qué se está haciendo y cuándo.
            </li>
            <li>
              <span className="font-bold text-primary">
                Diseño moderno y optimizado para rendimiento:
              </span>{' '}
              Nos especializamos en sitios elegantes, rápidos y estables.
            </li>
            <li>
              <span className="font-bold text-primary">Equipo profesional y actualizado:</span>{' '}
              Formación en ingeniería, machine learning, seguridad y gestión de proyectos.
            </li>
          </ul>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Cómo <span className="text-primary">trabajamos</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consulta', desc: 'Analizamos tus necesidades y objetivos' },
              { step: '02', title: 'Propuesta', desc: 'Te enviamos una cotización detallada' },
              { step: '03', title: 'Desarrollo', desc: 'Creamos tu proyecto con revisiones' },
              { step: '04', title: 'Entrega', desc: 'Lanzamos y te capacitamos' },
            ].map((item, idx) => (
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

      {/* Tecnologías */}
      <section className="py-16 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Tecnologías que <span className="text-primary">dominamos</span>
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            {[
              'React',
              'Next.js',
              'Node.js',
              'WordPress',
              'Tailwind CSS',
              'PostgreSQL',
              'MongoDB',
            ].map((tech, idx) => (
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Cuéntanos tu idea y te ayudaremos a hacerla realidad. Cotización gratuita y sin
            compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center"
            >
              Solicitar cotización
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/paquetes"
              className="border-2 border-secondary text-secondary font-bold px-8 py-4 hover:bg-secondary hover:text-white transition duration-300"
            >
              Ver paquetes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
