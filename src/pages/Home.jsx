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
import Contact from '../sections/Contact';
import Hero from '../sections/Hero';

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />

      <main className="bg-base">
        <Differentiators />
        <ServicesGrid />
        <PortfolioCarousel />
        <Testimonials />
        <ProcessSteps />
        <PricingSection />
        <CtaSection />
        <SecuritySection />
        <Contact />
      </main>
    </div>
  );
}

export default Home;
