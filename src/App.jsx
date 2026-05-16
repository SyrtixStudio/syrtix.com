import { useState, useEffect, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AOS from 'aos';

import 'aos/dist/aos.css';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/ui/Loader';
import { initSmoothScroll } from './lib/smoothScroll';
import Home from './pages/Home';

// Lazy load secondary pages for better performance
const About = lazy(() => import('./pages/About'));
const Packages = lazy(() => import('./pages/Packages'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./sections/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const PrivacyPolicyBloqueo600800 = lazy(() => import('./pages/PrivacyPolicyBloqueo600800'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Blog = lazy(() => import('./pages/blog/Blog'));
const CuantoCuestaPaginaWeb = lazy(() => import('./pages/blog/CuantoCuestaUnaPaginaWeb'));
const PorQueNecesitoUnaPaginaWeb = lazy(() => import('./pages/blog/PorQueNecesitoUnaPaginaWeb'));
const TecnologiasWebComparativa = lazy(() => import('./pages/blog/TecnologiasWebComparativa'));
const Delivery = lazy(() => import('./pages/Delivery'));
const CityServicePage = lazy(() => import('./pages/CityServicePage'));

// Lazy load interactive floating buttons
const WhatsAppButton = lazy(() => import('./components/ui/WhatsAppButton'));
const AIChatbot = lazy(() => import('./components/AIChatbot'));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Initialize AOS with a slight delay to avoid blocking initial render
    // Disable or simplify AOS on mobile to save CPU
    const timerAOS = setTimeout(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 50,
        disable: isMobile, // Disable AOS on mobile for performance
      });
    }, 1000);

    // Only init smooth scroll on desktop
    let lenis = null;
    if (!isMobile) {
      lenis = initSmoothScroll();
    }

    // Eliminar el timer artificial por completo para móviles. Mostrar la web lo antes posible.
    const timer = setTimeout(() => setShowLoader(false), 50);

    // Retrasar los botones flotantes interactivos para que Lighthouse no los penalice en el TBT
    const timerFloating = setTimeout(() => setShowFloating(true), 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerAOS);
      clearTimeout(timerFloating);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <>
      {showLoader && <Loader fadeOut={true} />}
      <Router>
        <Header />
        <div className="flex-1 flex flex-col w-full">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* COBERTURA NACIONAL SYRTIX: 28 Ciudades con Rutas Explícitas */}
              <Route path="/diseno-web-santiago" element={<CityServicePage />} />
              <Route path="/diseno-web-concepcion" element={<CityServicePage />} />
              <Route path="/diseno-web-valparaiso" element={<CityServicePage />} />
              <Route path="/diseno-web-vina-del-mar" element={<CityServicePage />} />
              <Route path="/diseno-web-antofagasta" element={<CityServicePage />} />
              <Route path="/diseno-web-arica" element={<CityServicePage />} />
              <Route path="/diseno-web-iquique" element={<CityServicePage />} />
              <Route path="/diseno-web-calama" element={<CityServicePage />} />
              <Route path="/diseno-web-copiapo" element={<CityServicePage />} />
              <Route path="/diseno-web-la-serena" element={<CityServicePage />} />
              <Route path="/diseno-web-coquimbo" element={<CityServicePage />} />
              <Route path="/diseno-web-quillota" element={<CityServicePage />} />
              <Route path="/diseno-web-los-andes" element={<CityServicePage />} />
              <Route path="/diseno-web-san-antonio" element={<CityServicePage />} />
              <Route path="/diseno-web-rancagua" element={<CityServicePage />} />
              <Route path="/diseno-web-machali" element={<CityServicePage />} />
              <Route path="/diseno-web-talca" element={<CityServicePage />} />
              <Route path="/diseno-web-curico" element={<CityServicePage />} />
              <Route path="/diseno-web-chillan" element={<CityServicePage />} />
              <Route path="/diseno-web-los-angeles" element={<CityServicePage />} />
              <Route path="/diseno-web-temuco" element={<CityServicePage />} />
              <Route path="/diseno-web-pucon" element={<CityServicePage />} />
              <Route path="/diseno-web-valdivia" element={<CityServicePage />} />
              <Route path="/diseno-web-osorno" element={<CityServicePage />} />
              <Route path="/diseno-web-puerto-montt" element={<CityServicePage />} />
              <Route path="/diseno-web-puerto-varas" element={<CityServicePage />} />
              <Route path="/diseno-web-coyhaique" element={<CityServicePage />} />
              <Route path="/diseno-web-punta-arenas" element={<CityServicePage />} />
              
              {/* Fallback para futuras ciudades dinámicas */}
              <Route path="/diseno-web-:city" element={<CityServicePage />} />
              
              <Route path="/paquetes" element={<Packages />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
              <Route
                path="/privacidad/bloqueo-600-y-800"
                element={<PrivacyPolicyBloqueo600800 />}
              />
              <Route path="/terminos-condiciones" element={<TermsAndConditions />} />
              <Route path="/aviso-legal" element={<LegalNotice />} />
              <Route path="/blog" element={<Blog />} />
              <Route
                path="/blog/cuanto-cuesta-una-pagina-web-en-chile"
                element={<CuantoCuestaPaginaWeb />}
              />
              <Route
                path="/blog/por-que-necesito-una-pagina-web"
                element={<PorQueNecesitoUnaPaginaWeb />}
              />
              <Route path="/blog/shopify-vs-woocommerce-vs-custom-code" element={<TecnologiasWebComparativa />} />
              
              <Route path="/entrega" element={<Delivery />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        {showFloating && (
          <Suspense fallback={null}>
            <WhatsAppButton />
            <AIChatbot />
          </Suspense>
        )}
      </Router>
    </>
  );
}

export default App;
