import React, { Suspense, useEffect, useMemo, useState } from 'react';

import { TrustBar } from '../components/home';
import SEOHead from '../components/seo/SEOHead';
import { seoData } from '../components/seo/seoData';
import ModalPublicidad from '../components/ui/ModalPublicidad';
import { COMPANY } from '../constants';
import { useLanguage } from '../i18n/index.jsx';
import Hero from '../sections/Hero';

// Lazy load everything below the fold to save execution time on mobile
const WhatWeDoSection = React.lazy(() => import('../components/home/WhatWeDoSection'));
const PortfolioCarousel = React.lazy(() => import('../components/home/PortfolioCarousel'));
const PricingSection = React.lazy(() => import('../components/home/PricingSection'));
const ServicesGrid = React.lazy(() => import('../components/home/ServicesGrid'));
const TrustBlock = React.lazy(() => import('../components/home/TrustBlock'));
const Contact = React.lazy(() => import('../sections/Contact'));

const PROMO_MODAL_DELAY_MS = import.meta.env.DEV ? 1200 : 25000;

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showBelowFold, setShowBelowFold] = useState(false);
  const { lang } = useLanguage();

  const publicidadWeb = useMemo(() => {
    // ... (rest of publicidadWeb logic stays same)
    const common = {
      contactEmail: 'contacto@syrtix.com',
      whatsapp: COMPANY.phone,
      address: 'Agencia 100% Digital, Santiago, Chile',
    };

    if (lang === 'en') {
      return {
        ...common,
        title: 'Cyber Day: Web Solution Start',
        oldPrice: '$299.000 CLP',
        price: '$149.000 CLP',
        promoLabel: 'CYBER DAY OFFER',
        offerEndsAt: '2026-06-03T23:59:59-04:00',
        description:
          'Single-page website for entrepreneurs and service professionals who need fast lead capture.',
        details: 'Limited slots available. Cyber Day promotion valid until Wednesday, June 3rd.',
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
          'Monthly hosting billed separately',
        ],
        delivery: 'Delivery in 7 days',
      };
    }

    return {
      ...common,
      title: 'Cyber Day: Web Solution Start',
      oldPrice: '$299.000',
      price: '$149.000',
      promoLabel: 'OFERTA CYBER DAY',
      offerEndsAt: '2026-06-03T23:59:59-04:00',
      description:
        'Página web para emprendedores y pymes de servicios que necesitan captar clientes rápido.',
      details: 'Cupos limitados. Promoción de Cyber Day válida hasta el miércoles 3 de junio.',
      list: [
        'Enfoque UX/U',
        'Identidad visual',
        'Diseño responsive',
        'Landing page',
        'Setup básico para Google',
        'Formulario de contacto',
        'WhatsApp integrado',
        'Ubicación en Google Maps',
        'Configuración correo corporativo*',
        'Configuración y publicación del sitio',
        'Acompañamiento post-lanzamiento por 15 días',
        'Hosting mensual se cotiza aparte',
      ],
      delivery: 'Entrega en 7 días',
    };
  }, [lang]);

  useEffect(() => {
    const modalSeen = !import.meta.env.DEV && sessionStorage.getItem('promo_modal_seen') === '1';
    if (!modalSeen) {
      const timerId = setTimeout(() => {
        setShowModal(true);
      }, PROMO_MODAL_DELAY_MS);
      return () => clearTimeout(timerId);
    }
  }, []);

  // Intersection Observer to defer below-the-fold content
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowBelowFold(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' } // Start loading 300px before scroll
    );

    const anchor = document.getElementById('scroll-anchor');
    if (anchor) observer.observe(anchor);

    return () => observer.disconnect();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    if (!import.meta.env.DEV) {
      sessionStorage.setItem('promo_modal_seen', '1');
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <SEOHead
        title={(seoData.home[lang] || seoData.home.es).title}
        description={(seoData.home[lang] || seoData.home.es).description}
        canonical="/"
      />
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
        {/* Bloque 2: Barra de confianza (logos tech) */}
        <TrustBar />
        
        {/* Anchor to trigger lazy loading of below-fold components */}
        <div id="scroll-anchor" className="h-px" />

        {showBelowFold && (
          <Suspense fallback={<div className="h-32 w-full flex items-center justify-center bg-base text-gray-400">...</div>}>
            <WhatWeDoSection />
            <PortfolioCarousel />
            <PricingSection />
            <ServicesGrid />
            <TrustBlock />
            <Contact />
          </Suspense>
        )}
      </main>
    </div>
  );
}

export default Home;
