import { useParams, Navigate } from 'react-router-dom';
import { CHILE_CITIES } from '../data/cities';
import SEOHead from '../components/seo/SEOHead';
import { ArrowRight, Code, ShoppingCart, Search, Shield, Zap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/index.jsx';

export default function CityServicePage() {
  const { city: citySlugFromParam } = useParams();
  const { lang } = useLanguage();
  
  // Si no viene por parámetro (ruta fija), lo extraemos eliminando el prefijo y posibles slashes finales
  const citySlug = citySlugFromParam || window.location.pathname.replace(/^\/diseno-web-/, '').replace(/\/$/, '');
  
  const city = CHILE_CITIES.find(c => c.slug === citySlug);

  if (!city) {
    console.error('City not found for slug:', citySlug);
    return <Navigate to="/404" replace />;
  }

  const isEn = lang === 'en';
  const cityName = city.name;

  const content = {
    title: isEn 
      ? `Web Design and Software Development in ${cityName}`
      : `Diseño Web y Desarrollo de Software en ${cityName}`,
    description: isEn
      ? `Looking for professional web design in ${cityName}? At Syrtix we develop custom websites, e-commerce and software optimized to convert in ${cityName} and all of Chile.`
      : `¿Buscas diseño web profesional en ${cityName}? En Syrtix desarrollamos páginas web, e-commerce y software a medida optimizados para convertir en ${cityName} y todo Chile.`,
    heroTitle: isEn
      ? `Digital solutions for SMBs in ${cityName}`
      : `Soluciones digitales para Pymes en ${cityName}`,
    heroSubtitle: isEn
      ? `We build high-performance websites and AI-powered automation to help your business in ${cityName} grow.`
      : `Construimos sitios web de alto rendimiento y automatización con IA para potenciar el crecimiento de tu negocio en ${cityName}.`,
    cta: isEn ? 'Start your project' : 'Inicia tu proyecto',
    features: [
      {
        title: isEn ? 'High Conversion Design' : 'Diseño de Alta Conversión',
        desc: isEn ? 'Not just "pretty" sites, but digital assets designed to sell.' : 'No solo sitios "bonitos", sino activos digitales diseñados para vender.'
      },
      {
        title: isEn ? 'Custom Development' : 'Desarrollo a Medida',
        desc: isEn ? 'Software and chatbots tailored to your specific operations.' : 'Software y chatbots adaptados a tu operación específica.'
      },
      {
        title: isEn ? 'SEO Optimized' : 'Optimizado para Google',
        desc: isEn ? `Dominate searches in ${cityName} and all of Chile.` : `Domina las búsquedas en ${cityName} y todo Chile.`
      }
    ]
  };

  return (
    <main className="pt-24 min-h-screen bg-base overflow-hidden">
      <SEOHead 
        title={`${content.title} | Syrtix`}
        description={content.description}
        canonical={`/diseno-web-${citySlug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": content.title,
          "description": content.description,
          "provider": {
            "@type": "Organization",
            "name": "Syrtix",
            "url": "https://syrtix.com"
          },
          "areaServed": {
            "@type": "City",
            "name": cityName
          }
        }}
      />

      {/* Hero Section - Dark background for white text contrast */}
      <section className="relative py-20 px-4 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span>{isEn ? `Now serving ${cityName}` : `Ahora atendiendo en ${cityName}`}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            {content.heroTitle}
          </h1>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {content.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contacto" 
              className="px-8 py-4 bg-primary text-secondary font-bold rounded-xl hover:bg-white transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              {content.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="/servicios" 
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm"
            >
              {isEn ? 'Our Services' : 'Nuestros Servicios'}
            </a>
          </div>
        </div>

        {/* Background Gradients for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-0 opacity-40" />
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {i === 0 ? <ShoppingCart className="w-6 h-6" /> : i === 1 ? <Code className="w-6 h-6" /> : <Search className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-purple-500/10 border border-primary/20 text-center relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-6">
            {isEn ? `Expert developers for your project in ${cityName}` : `Desarrolladores expertos para tu proyecto en ${cityName}`}
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            {isEn 
              ? 'Request a free consultation and let\'s build the high-performance digital asset your business needs.'
              : 'Solicita una auditoría gratuita y construyamos el activo digital de alto impacto que tu negocio necesita.'
            }
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-all shadow-xl"
          >
            {isEn ? 'Get Started Now' : 'Comienza Ahora'}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </main>
  );
}
