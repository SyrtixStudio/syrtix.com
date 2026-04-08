import { useState, useEffect, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AOS from 'aos';

import 'aos/dist/aos.css';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Loader from './components/ui/Loader';
import WhatsAppButton from './components/ui/WhatsAppButton';
import AIChatbot from './components/AIChatbot';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
    });

    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
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
              <Route path="/blog/cuanto-cuesta-una-pagina-web-en-chile" element={<CuantoCuestaPaginaWeb />} />
              <Route path="/blog/por-que-necesito-una-pagina-web" element={<PorQueNecesitoUnaPaginaWeb />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        <WhatsAppButton />
        <AIChatbot />
      </Router>
    </>
  );
}

export default App;
