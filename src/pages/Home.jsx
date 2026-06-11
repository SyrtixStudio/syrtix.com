import React, { Suspense, useEffect, useState } from 'react';

import { TrustBar } from '../components/home';
import SEOHead from '../components/seo/SEOHead';
import { seoData } from '../components/seo/seoData';
import { useLanguage } from '../i18n/index.jsx';
import Hero from '../sections/Hero';

// Lazy load everything below the fold to save execution time on mobile
const WhatWeDoSection = React.lazy(() => import('../components/home/WhatWeDoSection'));
const PortfolioCarousel = React.lazy(() => import('../components/home/PortfolioCarousel'));
const PricingSection = React.lazy(() => import('../components/home/PricingSection'));
const ServicesGrid = React.lazy(() => import('../components/home/ServicesGrid'));
const TrustBlock = React.lazy(() => import('../components/home/TrustBlock'));
const Contact = React.lazy(() => import('../sections/Contact'));

function Home() {
  const [showBelowFold, setShowBelowFold] = useState(false);
  const { lang } = useLanguage();

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

  return (
    <div className="w-full overflow-hidden">
      <SEOHead
        title={(seoData.home[lang] || seoData.home.es).title}
        description={(seoData.home[lang] || seoData.home.es).description}
        canonical="/"
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
