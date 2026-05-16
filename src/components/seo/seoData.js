/**
 * seoData.js — SEO meta data centralizado para cada página del sitio.
 *
 * Cada key corresponde a un slug de ruta.
 * Los datos de cada página incluyen:
 *   - title: Tag <title> optimizado con keyword principal
 *   - description: Meta description (max 155 chars idealmente)
 *   - canonical: Ruta canónica
 *   - ogImage: Imagen OG (opcional, usa default si no se define)
 *   - jsonLd: Schema.org structured data específico de esa página
 */

const SITE_URL = 'https://syrtix.com';

// ─────────────────────────────────────────────────────
// JSON-LD Schemas reutilizables
// ─────────────────────────────────────────────────────

const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

const serviceSchema = (name, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE_URL}${url}`,
  provider: {
    '@type': 'Organization',
    name: 'Syrtix',
    url: SITE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
});

const articleSchema = (title, description, slug, datePublished, dateModified) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url: `${SITE_URL}/blog/${slug}`,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    '@type': 'Person',
    name: 'Francisco Campos',
    url: `${SITE_URL}/nosotros`,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Syrtix',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/img/logos/logo-syrtix.webp`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/${slug}`,
  },
});

// ─────────────────────────────────────────────────────
// SEO DATA POR PÁGINA
// ─────────────────────────────────────────────────────

export const seoData = {
  home: {
    es: {
      title: 'Syrtix | Comprar y Contratar tu Página Web Profesional en Chile',
      description:
        '¿Buscas comprar o contratar una página web profesional? Syrtix es la agencia líder en Chile desarrollando sitios a medida para Pymes y Empresas con React y Vite. Entrega en 7 días.',
      canonical: '/',
    },
    en: {
      title: 'Syrtix | Buy & Hire Your Professional Website in Chile',
      description:
        'Looking to buy or hire a professional website? Syrtix is the leading agency in Chile building custom sites for SMBs and Enterprises with React and Vite. 7-day delivery.',
      canonical: '/',
    },
  },

  servicios: {
    es: {
      title: 'Servicios de Diseño Web y Desarrollo de Software a Medida | Syrtix Chile',
      description:
        'Servicios de diseño web profesional, desarrollo de software a medida, e-commerce, SEO, automatización IA y mantenimiento web para Pymes en Chile. Cotización gratuita.',
      canonical: '/servicios',
      ogImage: `${SITE_URL}/img/img-servicios.avif`,
      jsonLd: [
        serviceSchema(
          'Diseño Web Profesional y Desarrollo de Software',
          'Servicios completos de ingeniería web: landing pages, sitios corporativos, e-commerce, SEO y automatización IA para empresas chilenas.',
          '/servicios'
        ),
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Servicios', path: '/servicios' },
        ]),
      ],
    },
    en: {
      title: 'Web Design & Custom Software Development Services | Syrtix Chile',
      description:
        'Professional web design, custom software development, e-commerce, SEO, AI automation and web maintenance services for SMBs in Chile. Free quote.',
      canonical: '/servicios',
      ogImage: `${SITE_URL}/img/img-servicios.avif`,
      jsonLd: [
        serviceSchema(
          'Professional Web Design & Software Development',
          'Complete web engineering services: landing pages, corporate sites, e-commerce, SEO and AI automation for Chilean businesses.',
          '/servicios'
        ),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/servicios' },
        ]),
      ],
    },
  },

  paquetes: {
    es: {
      title: 'Paquetes y Precios de Páginas Web en Chile | Syrtix',
      description:
        'Compara nuestros paquetes de diseño web: Landing Page desde $199.000, Web Corporativa desde $299.000, E-commerce desde $699.000. Precios transparentes para Pymes chilenas.',
      canonical: '/paquetes',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Paquetes y Precios', path: '/paquetes' },
        ]),
      ],
    },
    en: {
      title: 'Website Packages & Pricing in Chile | Syrtix',
      description:
        'Compare our web design packages: Landing Page from $199,000 CLP, Corporate Website from $299,000, E-commerce from $699,000. Transparent pricing for Chilean SMBs.',
      canonical: '/paquetes',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Packages & Pricing', path: '/paquetes' },
        ]),
      ],
    },
  },

  nosotros: {
    es: {
      title: 'Sobre Nosotros — Agencia de Diseño Web en Santiago | Syrtix',
      description:
        'Conoce a Francisco Campos, Ingeniero Informático y fundador de Syrtix. Agencia de desarrollo web y software a medida en Santiago de Chile. Comunicación directa, precios transparentes.',
      canonical: '/nosotros',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Sobre Nosotros', path: '/nosotros' },
        ]),
      ],
    },
    en: {
      title: 'About Us — Web Design Agency in Santiago | Syrtix',
      description:
        'Meet Francisco Campos, Software Engineer and founder of Syrtix. Custom web development and software agency in Santiago, Chile. Direct communication, transparent pricing.',
      canonical: '/nosotros',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/nosotros' },
        ]),
      ],
    },
  },

  contacto: {
    es: {
      title: 'Cotización Gratis de Página Web | Contacto Syrtix Chile',
      description:
        'Solicita tu cotización gratuita y sin compromiso. Cuéntanos tu proyecto y recibirás una propuesta personalizada en menos de 24 horas. Contacto por WhatsApp disponible.',
      canonical: '/contacto',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Contacto', path: '/contacto' },
        ]),
      ],
    },
    en: {
      title: 'Free Website Quote | Contact Syrtix Chile',
      description:
        'Request your free, no-commitment quote. Tell us about your project and receive a personalized proposal in less than 24 hours. WhatsApp contact available.',
      canonical: '/contacto',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contacto' },
        ]),
      ],
    },
  },

  blog: {
    es: {
      title: 'Syrtix Educa | Blog de Diseño Web, SEO y Estrategia Digital',
      description:
        'Aprende sobre diseño web, SEO, desarrollo de software y estrategias digitales para tu negocio. Guías prácticas y comparativas de tecnologías para Pymes en Chile.',
      canonical: '/blog',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]),
      ],
    },
    en: {
      title: 'Syrtix Educa | Web Design, SEO & Digital Strategy Blog',
      description:
        'Learn about web design, SEO, software development and digital strategies for your business. Practical guides and technology comparisons for SMBs in Chile.',
      canonical: '/blog',
      jsonLd: [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]),
      ],
    },
  },

  // ─── Blog Articles ───
  'blog/cuanto-cuesta-una-pagina-web-en-chile': {
    es: {
      title: '¿Cuánto Cuesta una Página Web en Chile? Guía de Precios 2026',
      description:
        'Descubre los precios reales de páginas web en Chile: Landing $199.000, Web Corporativa $299.000, E-commerce $699.000. Tablas comparativas y recomendaciones para Pymes.',
      canonical: '/blog/cuanto-cuesta-una-pagina-web-en-chile',
      jsonLd: [
        articleSchema(
          '¿Cuánto Cuesta una Página Web en Chile? Guía de Precios 2026',
          'Descubre los precios reales de páginas web en Chile según tipo de sitio y funcionalidades.',
          'cuanto-cuesta-una-pagina-web-en-chile',
          '2026-03-08',
          '2026-05-15'
        ),
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: '¿Cuánto Cuesta una Página Web?', path: '/blog/cuanto-cuesta-una-pagina-web-en-chile' },
        ]),
      ],
    },
  },

  'blog/por-que-necesito-una-pagina-web': {
    es: {
      title: '¿Por Qué Necesito una Página Web para mi Negocio? 7 Razones',
      description:
        '7 razones por las que tu negocio necesita una página web profesional en 2026. Datos del mercado chileno, ventajas competitivas y cómo empezar hoy.',
      canonical: '/blog/por-que-necesito-una-pagina-web',
      jsonLd: [
        articleSchema(
          '¿Por Qué Necesito una Página Web para mi Negocio?',
          '7 razones respaldadas por datos del mercado chileno para invertir en una página web profesional.',
          'por-que-necesito-una-pagina-web',
          '2026-03-08',
          '2026-05-15'
        ),
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: '¿Por Qué Necesito una Página Web?', path: '/blog/por-que-necesito-una-pagina-web' },
        ]),
      ],
    },
  },

  'blog/shopify-vs-woocommerce-vs-custom-code': {
    es: {
      title: 'Shopify vs WooCommerce vs Custom Code: Comparativa 2026 | Syrtix',
      description:
        'Comparativa técnica: Shopify vs WooCommerce vs desarrollo a medida. Descubre cuál plataforma es la mejor inversión para tu e-commerce o sitio web en Chile.',
      canonical: '/blog/shopify-vs-woocommerce-vs-custom-code',
      jsonLd: [
        articleSchema(
          'Shopify vs WooCommerce vs Custom Code: ¿Cuál elegir?',
          'Comparativa de las plataformas más populares vs desarrollo a medida para tu negocio.',
          'shopify-vs-woocommerce-vs-custom-code',
          '2026-05-01',
          '2026-05-15'
        ),
        breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'Shopify vs WooCommerce vs Custom', path: '/blog/shopify-vs-woocommerce-vs-custom-code' },
        ]),
      ],
    },
  },
};

export default seoData;
