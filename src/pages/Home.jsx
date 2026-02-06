import { useEffect, useState } from 'react';

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
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';

const publicidadWeb = {
  title: 'Página web para pyme - empresa',
  price: 'Desde $99.000',
  description:
    'Tecnología moderna y escalable.',

  list: [
    'Diseño UI/UX profesional',
    'Identidad visual',
    'Responsive design',
    'Landing page',
    'SEO inicial',
    'Formulario de contacto',
    'Acceso a tus redes sociales',
    'Botón de WhatsApp integrado',
    'Ubicación en Google Maps integrada',
    "Entrega en 7 días",
  ],
  contactEmail: 'contacto@syrtix.com',
  whatsapp: '+56945432006',
  address: 'Santiago, Chile',
};

function Home() {
  const [showModal, setShowModal] = useState(false);

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
        <ServicesGrid />
        <PortfolioCarousel />
        <Testimonials />
        <ProcessSteps />
        <PricingSection />
        <PromocionContacto data={publicidadWeb} />
        <CtaSection />
        <SecuritySection />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
