import {
  BarChart,
  Brush,
  Code,
  Gauge,
  GraduationCap,
  Layout,
  LifeBuoy,
  Mail,
  MessageCircle,
  Monitor,
  PenTool,
  QrCode,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Wrench,
  Youtube,
  Image,
} from 'lucide-react';

import { useLanguage } from '../../i18n/index.jsx';

const content = {
  es: {
    title: '¿Qué hacemos en',
    company: 'syrtix',
    intro:
      'En syrtix desarrollamos soluciones digitales a tu medida: desde landing pages efectivas hasta sitios web profesionales y tiendas e-commerce personalizadas. Nos especializamos en entender tu problemática, proponer estrategias y llevarlas a la realidad con tecnología de vanguardia y diseño UX/UI enfocado en resultados.',
    servicesTitle: 'Servicios integrales:',
    services: [
      'Desarrollo web (básico, medio y avanzado)',
      'Diseño web y experiencia de usuario (UX/UI)',
      'Tiendas online (e-commerce)',
      'Posicionamiento SEO',
      'Desarrollo de aplicaciones web',
      'Aplicaciones móviles (iOS y Android)',
      'Migración web a stack moderno',
      'Auditorías de sitios y optimización',
      'Mantenimiento',
      'Integración WhatsApp, redes sociales y formularios simples',
      'Creación e integración de QR',
      'Optimización de velocidad básica',
      'Landing pages para campañas',
      'Configuración Google Analytics y Search Console',
      'Capacitación corta para administrar el sitio',
      'Integración de videos de YouTube',
      'Soporte técnico',
      'Correos corporativos',
      'Optimización de imágenes',
      'Creación de logos',
    ],
    closing:
      'Nuestro objetivo es ayudarte a crecer, digitalizar tu negocio y convertir visitantes en clientes.',
  },
  en: {
    title: 'What do we do at',
    company: 'syrtix',
    intro:
      'At syrtix, we develop digital solutions tailored to your needs: from effective landing pages to professional websites and custom e-commerce stores. We specialize in understanding your challenges, proposing strategies, and bringing them to life with cutting-edge technology and UX/UI design focused on results.',
    servicesTitle: 'Comprehensive services:',
    services: [
      'Web development (basic, medium and advanced)',
      'Web design and user experience (UX/UI)',
      'Online stores (e-commerce)',
      'SEO optimization',
      'Web application development',
      'Mobile apps (iOS and Android)',
      'Website migration to a modern stack',
      'Site audits and optimization',
      'Maintenance',
      'WhatsApp, social media, and simple form integrations',
      'QR creation and integration',
      'Basic speed optimization',
      'Landing pages for campaigns',
      'Google Analytics and Search Console setup',
      'Short training to manage the site',
      'YouTube video integrations',
      'Technical support',
      'Corporate email setup',
      'Image optimization',
      'Logo creation',
    ],
    closing:
      'Our goal is to help you grow, digitize your business, and turn visitors into customers.',
  },
};

function WhatWeDoSection() {
  const { lang } = useLanguage();
  const t = content[lang] || content.es;
  const icons = [
    Code,
    Brush,
    ShoppingCart,
    Search,
    Monitor,
    Smartphone,
    RefreshCw,
    ShieldCheck,
    Wrench,
    MessageCircle,
    QrCode,
    Gauge,
    Layout,
    BarChart,
    GraduationCap,
    Youtube,
    LifeBuoy,
    Mail,
    Image,
    PenTool,
  ];
  const repeatedServices = [...t.services, ...t.services];

  return (
    <section className="bg-base py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.title} <span className="text-primary">{t.company}</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6">{t.intro}</p>
        <div className="text-base md:text-lg text-gray-700 mb-4">
          <div className="font-semibold text-gray-900 mb-4">{t.servicesTitle}</div>
          <div className="marquee">
            <div className="marquee-track" style={{ '--marquee-duration': '45s' }}>
              {repeatedServices.map((item, i) => {
                const Icon = icons[i % t.services.length];
                const isDuplicate = i >= t.services.length;

                return (
                  <div
                    key={`${item}-${i}`}
                    className="marquee-card bg-base border border-gray-300 px-4 py-3 shadow-sm hover:border-primary hover:shadow-md transition"
                    aria-hidden={isDuplicate ? 'true' : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary">
                        <Icon size={18} />
                      </span>
                      <div className="text-sm md:text-gray-500 text-gray-500 font-semibold">{item}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="text-gray-700 md:text-lg text-gray-700 mt-4">{t.closing}</p>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
