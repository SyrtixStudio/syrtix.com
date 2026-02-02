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
import ModalPublicidad from '../components/ui/ModalPublicidad';
import PromocionContacto from '../components/home/PromocionContacto';
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';
import { useEffect, useState } from 'react';

const publicidadWeb = {
  title: 'Diseño Web',
  price: 'Desde $99.000',
  description:
    'Diseños únicos y personalizados que reflejan la identidad de tu marca y conectan con tu audiencia.',
  details:
    'Enfocado en UI/UX, prototipos e identidad visual.',
  list: [
    'Diseño UI/UX profesional',
    'Prototipado interactivo',
    'Identidad visual',
    'Responsive design',
    'Landing simple',
    'Rediseño',
    'Sección adicional + SEO básico',
  ],
  contactEmail: 'contacto@syrtix.com',
  whatsapp: '+56945432006',
  address: 'Santiago, Chile',
  delivery: 'Entrega en 7 días',
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
