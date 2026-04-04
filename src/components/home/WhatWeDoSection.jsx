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
    title: '¿Quieres crear o comprar una web en',
    company: 'syrtix',
    intro:
      'Somos expertos en ayudarte a crear y comprar páginas web profesionales de alto rendimiento para vender más hoy mismo.',
    servicesTitle: 'Todo lo que necesitas para tu web:',
    services: [
      'Crear Landing Pages (Logo incluido)',
      'Comprar Sitios Web Corporativos Pro',
      'Crear Tiendas Online (E-commerce)',
      'SEO de alta autoridad para Google',
      'Branding y Diseño de Logotipos',
      'Auditorías de Performance y UX',
      'Hosting y Correo Corporativo',
      'Mantenimiento y Soporte 24/7',
    ],
    closing:
      'Dile adiós a las plantillas genéricas. Aplicamos ingeniería y diseño real para que tu negocio domine Google.',
  },
  en: {
    title: 'Want to create or buy a web at',
    company: 'syrtix',
    intro:
      'We are experts in helping you create and buy high-performance professional websites to sell more right now.',
    servicesTitle: 'Everything you need for your web:',
    services: [
      'Create high-conversion landing pages',
      'Buy Corporate Websites',
      'Create Online Stores (Ecommerce)',
      'Advanced SEO for Google',
      'Intuitive admin panel',
      'Payment and WhatsApp integrations',
      'Business email configuration',
      'Maintenance and technical support',
    ],
    closing:
      'Say goodbye to slow templates. We build the engineering your business needs to dominate Search Engines.',
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
    <section className="bg-base2 py-16">
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
