import { useEffect, useMemo, useState } from 'react';

import {
  Differentiators,
  ServicesGrid,
  PortfolioCarousel,
  Testimonials,
  ProcessSteps,
  PricingSection,
  SecuritySection,
  CtaSection,
} from '../components/home';
import PromocionContacto from '../components/home/PromocionContacto';
import ModalPublicidad from '../components/ui/ModalPublicidad';
import { useLanguage } from '../i18n/index.jsx';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const { lang } = useLanguage();

  const publicidadWeb = useMemo(() => {
    const common = {
      contactEmail: 'contacto@syrtix.com',
      whatsapp: '+56945432006',
      address: '5151 Los Militares, Las Condes, Region Metropolitana, Chile',
    };

    if (lang === 'en') {
      return {
        ...common,
        title: 'Website for small and medium businesses',
        price: 'From $99.990',
        description: 'Modern and scalable technology.',
        list: [
          'Personal design',
          'Visual identity',
          'Responsive design',
          'Landing page',
          'Initial SEO setup',
          'Contact form',
          'Social media links',
          'Integrated WhatsApp button',
          'Integrated Google Maps location',
          'Reviews section',
          'Corporate email included',
          'Free SSL certificate',
          'Free hosting for 1 year',
          'Technical support',
        ],
        delivery: 'Delivery in 7 days',
      };
    }

    return {
      ...common,
      title: 'Página web para pyme - empresa',
      price: 'Desde $99.990',
      description: 'Tecnología moderna y escalable.',
      list: [
        'Diseño personalizado',
        'Identidad visual',
        'Diseño responsive',
        'Landing page',
        'SEO esencial',
        'Formulario de contacto',
        'Redes sociales integradas',
        'WhatsApp integrado',
        'Ubicación en Google Maps',
        'Apartado de reseñas',
        'Correo corporativo',
        'SSL gratuito',
        'Hosting 1 año gratis',
        'Soporte técnico',
      ],
      delivery: 'Entrega en 7 días',
    };
  }, [lang]);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <ModalPublicidad
        open={showModal}
        onClose={() => setShowModal(false)}
        title={publicidadWeb.title}
        price={publicidadWeb.price}
        description={publicidadWeb.description}
        details={publicidadWeb.details}
        list={publicidadWeb.list}
        contactEmail={publicidadWeb.contactEmail}
        whatsapp={publicidadWeb.whatsapp}
        address={publicidadWeb.address}
        delivery={publicidadWeb.delivery}
      />
      <Hero />
      <main className="bg-base">
        <Differentiators />
        <PricingSection />
        <PromocionContacto data={publicidadWeb} />
        <PortfolioCarousel />
        <Testimonials />
        <ServicesGrid />
        <ProcessSteps />
        <SecuritySection />
        <CtaSection />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
