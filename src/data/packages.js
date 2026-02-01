/**
 * Paquetes y precios
 */
export const packages = [
  {
    id: 'basico',
    name: 'Básico',
    icon: 'Zap',
    description: 'Ideal para emprendedores y pequeños negocios.',
    price: 299000,
    priceLabel: '$299.000',
    paymentType: 'pago único',
    featured: false,
    features: [
      { text: 'Diseño personalizado', included: true },
      { text: 'Hasta 5 páginas', included: true },
      { text: 'Responsive', included: true },
      { text: 'Formulario de contacto', included: true },
      { text: 'SSL gratuito', included: true },
      { text: 'Hosting 1 año', included: true },
      { text: 'Dominio incluido', included: false },
      { text: 'Blog integrado', included: false },
      { text: 'E-commerce', included: false },
    ],
    ctaText: 'Comenzar',
    ctaLink: '/contacto',
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: 'Star',
    description: 'Para negocios en crecimiento que buscan destacar.',
    price: 599000,
    priceLabel: '$599.000',
    paymentType: 'pago único',
    featured: true,
    badge: 'MÁS POPULAR',
    features: [
      { text: 'Diseño personalizado', included: true },
      { text: 'Hasta 10 páginas', included: true },
      { text: 'Responsive', included: true },
      { text: 'Formulario de contacto', included: true },
      { text: 'SSL gratuito', included: true },
      { text: 'Hosting 1 año', included: true },
      { text: 'Dominio incluido', included: true },
      { text: 'Blog integrado', included: true },
      { text: 'E-commerce básico', included: true },
    ],
    ctaText: 'Elegir Pro',
    ctaLink: '/contacto',
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: 'Crown',
    description: 'Solución completa para máximo rendimiento.',
    price: 999000,
    priceLabel: '$999.000',
    paymentType: 'pago único',
    featured: false,
    features: [
      { text: 'Diseño premium', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Responsive', included: true },
      { text: 'Formularios avanzados', included: true },
      { text: 'SSL gratuito', included: true },
      { text: 'Hosting 2 años', included: true },
      { text: 'Dominio incluido', included: true },
      { text: 'Blog integrado', included: true },
      { text: 'E-commerce completo', included: true },
      { text: 'SEO avanzado', included: true },
      { text: 'Soporte 24/7', included: true },
    ],
    ctaText: 'Elegir Premium',
    ctaLink: '/contacto',
  },
];

/**
 * Features de seguridad
 */
export const securityFeatures = [
  {
    id: 'ssl',
    icon: 'Lock',
    title: 'Certificado SSL/HTTPS',
    description:
      'Conexión cifrada y segura. El candado verde que genera confianza en tus visitantes.',
  },
  {
    id: 'datos',
    icon: 'Shield',
    title: 'Protección de datos',
    description:
      'Cumplimos con normativas de privacidad. Tus datos y los de tus clientes están protegidos.',
  },
  {
    id: 'hosting',
    icon: 'Server',
    title: 'Hosting seguro',
    description: 'Servidores de alta disponibilidad con backups automáticos y protección DDoS.',
  },
  {
    id: 'codigo',
    icon: 'CheckCircle',
    title: 'Código seguro',
    description: 'Desarrollo con mejores prácticas OWASP para prevenir vulnerabilidades.',
  },
];
