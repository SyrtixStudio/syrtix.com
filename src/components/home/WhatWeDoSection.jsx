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
    title: 'Que hacemos en',
    company: 'syrtix',
    intro:
      'Creamos soluciones digitales enfocadas en resultados: sitios web, ecommerce y mejoras continuas para vender mas.',
    servicesTitle: 'Servicios integrales:',
    services: [
      'Landing pages de conversion',
      'Sitios web corporativos',
      'Tiendas online (ecommerce)',
      'SEO inicial y analitica',
      'Panel administrador y reportes de ventas',
      'Integracion de pagos y WhatsApp',
      'Correos corporativos',
      'Mantenimiento mensual',
    ],
    closing:
      'Nuestro objetivo es ayudarte a crecer, digitalizar tu negocio y convertir visitantes en clientes.',
  },
  en: {
    title: 'What do we do at',
    company: 'syrtix',
    intro:
      'We build digital solutions focused on results: websites, ecommerce, and continuous improvements to help you sell more.',
    servicesTitle: 'Comprehensive services:',
    services: [
      'Conversion-focused landing pages',
      'Corporate websites',
      'Online stores (ecommerce)',
      'Initial SEO and analytics',
      'Admin panel and sales reports',
      'Payment and WhatsApp integrations',
      'Business email setup',
      'Monthly maintenance',
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
