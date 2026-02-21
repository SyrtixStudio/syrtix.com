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
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import ModalPublicidad from '../components/ui/ModalPublicidad';
import { useLanguage } from '../i18n/index.jsx';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';

const PROMO_MODAL_DELAY_MS = import.meta.env.DEV ? 1200 : 25000;

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
        title: 'Landing Starter',
        oldPrice: '$299.990 CLP',
        price: '$149.990 CLP',
        promoLabel: 'MEGA LIMITED OFFER',
        offerEndsAt: '2026-03-15T23:59:59-03:00',
        description: 'Single-page website designed to capture leads fast.',
        list: [
          'Professional design',
          'Visual identity',
          'Responsive design',
          'Landing page',
          'Basic Google setup',
          'Contact form',
          'WhatsApp button',
          'Google Maps integration',
          'Business email setup*',
          'Website launch configuration',
          '30-day post-launch guidance',
        ],
        delivery: 'Delivery in 7 days',
      };
    }

      return {
        ...common,
      title: 'Landing Starter',
      oldPrice: '$299.990',
      price: '$149.990',
      promoLabel: 'MEGA OFERTA LIMITADA',
      offerEndsAt: '2026-03-15T23:59:59-03:00',
      description: 'Sitio de una pagina para captar clientes de forma rapida.',
      list: [
        'Diseno profesional',
        'Identidad visual',
        'Diseño responsive',
        'Landing page',
        'Setup basico para Google',
        'Formulario de contacto',
        'WhatsApp integrado',
        'Ubicación en Google Maps',
        'Configuracion correo corporativo*',
        'Configuracion y publicacion del sitio',
        'Acompanamiento post-lanzamiento por 30 dias',
      ],
      delivery: 'Entrega en 7 días',
    };
  }, [lang]);

  useEffect(() => {
    const modalSeen = !import.meta.env.DEV && sessionStorage.getItem('promo_modal_seen') === '1';
    if (modalSeen) return;

    const timerId = setTimeout(() => {
      setShowModal(true);
    }, PROMO_MODAL_DELAY_MS);

    return () => clearTimeout(timerId);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    if (!import.meta.env.DEV) {
      sessionStorage.setItem('promo_modal_seen', '1');
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <ModalPublicidad
        open={showModal}
        onClose={handleCloseModal}
        title={publicidadWeb.title}
        oldPrice={publicidadWeb.oldPrice}
        price={publicidadWeb.price}
        promoLabel={publicidadWeb.promoLabel}
        offerEndsAt={publicidadWeb.offerEndsAt}
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
        <WhatWeDoSection />
        <PortfolioCarousel />
        <Differentiators />
        <PricingSection />
        <Testimonials />
        <CtaSection />
        <PromocionContacto data={publicidadWeb} />
        <ServicesGrid />
        <ProcessSteps />
        <SecuritySection />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
