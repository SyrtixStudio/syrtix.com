// Información de la empresa
export const COMPANY = {
  name: 'Syrtix',
  domain: 'syrtix.com',
  email: 'contacto@syrtix.com',
  phone: import.meta.env.VITE_WHATSAPP_PHONE,
  phoneFormatted: import.meta.env.VITE_WHATSAPP_PHONE_FORMATTED,
  whatsappLink: import.meta.env.VITE_WHATSAPP_LINK,
  description: 'Agencia de Desarrollo Web',
  country: 'Chile',
};

// URLs de redes sociales
export const SOCIAL = {
  whatsapp: COMPANY.whatsappLink,
  facebook: import.meta.env.VITE_FACEBOOK_URL,
  instagram: import.meta.env.VITE_INSTAGRAM_URL,
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  youtube: import.meta.env.VITE_YOUTUBE_URL,
};

// Rutas de la aplicación
export const ROUTES = {
  home: '/',
  about: '/nosotros',
  services: '/servicios',
  packages: '/paquetes',
  contact: '/#contacto',
  privacy: '/politica-privacidad',
  terms: '/terminos-condiciones',
  legal: '/aviso-legal',
};

// Colores del tema (referencia para documentación)
export const COLORS = {
  primary: '#c8aa5a',
  secondary: '#0021ad',
  base: '#fdfdfd',
  base2: '#efefef',
};
