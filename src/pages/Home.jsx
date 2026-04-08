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
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import ModalPublicidad from '../components/ui/ModalPublicidad';
import { COMPANY } from '../constants';
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
      whatsapp: COMPANY.phone,
      address: '5151 Los Militares, Las Condes, Region Metropolitana, Chile',
    };

    if (lang === 'en') {
      return {
        ...common,
        title: 'Entrepreneur Solution',
        oldPrice: '$299.000 CLP',
        price: '$149.000 CLP',
        promoLabel: 'LAUNCH OFFER',
        offerEndsAt: '2026-03-31T23:59:59-03:00',
        description: 'Single-page website for entrepreneurs and service professionals who need fast lead capture.',
        details: '10 slots available. Launch offer valid until Mar 31, 2026.',
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
          '15-day post-launch guidance',
          'Free hosting for 1 year',
        ],
        delivery: 'Delivery in 7 days',
      };
    }

      return {
        ...common,
      title: 'Solución Emprendedor',
      oldPrice: '$299.000',
      price: '$149.000',
      promoLabel: 'OFERTA LANZAMIENTO',
      offerEndsAt: '2026-03-31T23:59:59-03:00',
      description: 'Pagina web para emprendedores y pymes de servicios que necesitan captar clientes rapido.',
      details: '10 cupos disponibles. Oferta de lanzamiento valida hasta el 31 de marzo de 2026.',
      list: [
        'Enfoque UX/U',
        'Identidad visual',
        'Diseño responsive',
        'Landing page',
        'Setup basico para Google',
        'Formulario de contacto',
        'WhatsApp integrado',
        'Ubicación en Google Maps',
        'Configuracion correo corporativo*',
        'Configuracion y publicacion del sitio',
        'Acompanamiento post-lanzamiento por 15 dias',
        'Hosting gratis por 1 año',
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
        <ServicesGrid />
        <ProcessSteps />
        <SecuritySection />
        <Contact />
      </main>
    </div>
  );
}

export default Home;

