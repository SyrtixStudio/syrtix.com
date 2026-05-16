import SEOHead from '../../components/seo/SEOHead';
import { seoData } from '../../components/seo/seoData';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  Code, 
  ShoppingBag, 
  Zap, 
  BarChart3,
  ShieldCheck,
  Search,
  Monitor,
  GraduationCap
} from 'lucide-react';

import ReelPlayer from '../../components/ui/ReelPlayer';

export default function TecnologiasWebComparativa() {
  const seo = seoData['blog/shopify-vs-woocommerce-vs-custom-code']?.es || {};

  return (
    <main className="bg-[#fdfdfd] min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        jsonLd={seo.jsonLd}
      />
      {/* Hero del artículo */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0a0a0b]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
            alt="tech battle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/80 to-transparent"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-primary mb-8">
            <Link to="/blog" className="hover:text-white transition-colors">Syrtix Educa</Link>
            <ChevronRight size={14} />
            <span className="text-white/60">Tecnologías</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Guerra de Tecnologías: <br />
            <span className="text-primary">Elegir el motor de tu éxito</span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            {seo.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">S</span>
              <span className="text-white/80">Syrtix Team</span>
            </div>
            <span>·</span>
            <span>Mayo 2026</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Zap size={14} className="text-primary" /> 12 min de lectura</span>
          </div>
        </div>
      </section>

      {/* Contenido del Artículo */}
      <article className="max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Elegir la plataforma para tu negocio digital no es solo una decisión técnica; es una decisión de negocios. Una mala elección puede significar una web lenta, difícil de escalar o con costos de mantenimiento que devoran tus ganancias.
          </p>

          {/* Syrtix Reel Module (Instagram CTA) */}
          <div className="my-16 flex flex-col lg:flex-row items-center gap-12 bg-white p-8 md:p-12 border border-gray-200 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden">
            {/* Syrtix aesthetic background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-none blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="flex-1 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-widest mb-6 uppercase">
                Síguenos en Instagram
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Aprende con nuestros <span className="text-primary">Reels Diarios</span></h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                El mundo de la tecnología web cambia todos los días. En nuestro Instagram publicamos "Masterclasses de 60 segundos" donde revelamos los secretos que las agencias tradicionales no quieren que sepas.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm md:text-base !text-black font-semibold">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" /> Tips de conversión para tiendas online
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base !text-black font-semibold">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" /> Casos de estudio de código custom
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 relative z-10">
              <ReelPlayer 
                thumbnail="/img/Screenshot_20260514-172509_Instagram.png"
                title="Syrtix en Instagram"
                description="Únete a nuestra comunidad y aprende cada día."
                instagramUrl={import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/syrtixstudio'}
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">1. Shopify: La "Vía Rápida" para E-commerce</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="text-green-600" />
              <h3 className="text-xl font-bold text-green-900 m-0">Lo que debes saber de Shopify</h3>
            </div>
            <p className="text-green-800 mb-4">
              Es una plataforma cerrada (SaaS). Ideal para quienes quieren lanzar una tienda online en tiempo récord sin preocuparse por el hosting.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-green-800 m-0 list-none p-0">
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Configuración ultra rápida</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Pasarelas de pago integradas</li>
              <li className="flex items-center gap-2 text-red-600 font-medium">⚠️ Mensualidades y comisiones por venta</li>
              <li className="flex items-center gap-2 text-red-600 font-medium">⚠️ Personalización limitada por temas</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">2. WooCommerce (WordPress): Flexibilidad con Responsabilidad</h2>
          <p className="text-gray-600 mb-8 text-lg">
            WooCommerce es un plugin de WordPress. Es la opción más popular del mundo, pero tiene una "trampa": la complejidad técnica crece con el tiempo.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Pros y Contras</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Puntos a Favor</h4>
                <ul className="text-blue-800 list-disc pl-5 space-y-1">
                  <li>Tú eres dueño de tus datos</li>
                  <li>Infinidad de plugins gratuitos</li>
                  <li>Excelente para blogs y SEO básico</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-2">Desafíos</h4>
                <ul className="text-red-800 list-disc pl-5 space-y-1">
                  <li>Actualizaciones constantes (se rompe fácil)</li>
                  <li>Vulnerable a hackeos si no se mantiene</li>
                  <li>Lentitud si usas muchos plugins</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">3. El "Santo Grial": Código Custom (React / Next.js)</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Aquí es donde jugamos en <strong>Syrtix</strong>. El código a medida no usa plantillas. Se construye desde cero para ser un misil de conversión.
          </p>

          <div className="bg-gray-900 text-white p-10 mb-12 border border-white/10 shadow-[8px_8px_0px_0px_rgba(200,170,90,0.2)]">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Code size={24} /> ¿Por qué las marcas top eligen Código Custom?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 border border-white/10 hover:bg-white/5 transition-colors">
                <Zap className="mx-auto text-primary mb-4" size={32} />
                <h4 className="font-bold mb-2 text-xl">Velocidad Extrema</h4>
                <p className="text-sm text-white/60">Carga instantánea. Google ama los sitios que vuelan (Core Web Vitals).</p>
              </div>
              <div className="p-6 border border-white/10 hover:bg-white/5 transition-colors">
                <ShieldCheck className="mx-auto text-primary mb-4" size={32} />
                <h4 className="font-bold mb-2 text-xl">Seguridad Total</h4>
                <p className="text-sm text-white/60">No hay plugins que hackear. Tu código es único y privado.</p>
              </div>
              <div className="p-6 border border-white/10 hover:bg-white/5 transition-colors">
                <Search className="mx-auto text-primary mb-4" size={32} />
                <h4 className="font-bold mb-2 text-xl">SEO Dominante</h4>
                <p className="text-sm text-white/60">Control absoluto de la arquitectura para estar en el #1 de Google.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">Tabla Comparativa Definitiva</h2>
          <div className="overflow-x-auto mb-16 border border-gray-200">
            <table className="w-full border-collapse text-left bg-white overflow-hidden">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="p-5">Característica</th>
                  <th className="p-5">Shopify</th>
                  <th className="p-5">WooCommerce</th>
                  <th className="p-5 text-primary">Custom (Syrtix)</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="p-5 font-bold bg-gray-50">Velocidad</td>
                  <td className="p-5">Buena</td>
                  <td className="p-5">Regular/Lenta</td>
                  <td className="p-5 text-primary font-bold">Excelente</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 font-bold bg-gray-50">Escalabilidad</td>
                  <td className="p-5">Media</td>
                  <td className="p-5">Media/Baja</td>
                  <td className="p-5 text-primary font-bold">Ilimitada</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 font-bold bg-gray-50">Costo Inicial</td>
                  <td className="p-5">Bajo</td>
                  <td className="p-5">Bajo/Medio</td>
                  <td className="p-5">Medio/Alto</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 font-bold bg-gray-50">Costo Mensual</td>
                  <td className="p-5">Suscripción + %</td>
                  <td className="p-5">Hosting + Mantenimiento</td>
                  <td className="p-5 text-primary font-bold">Mínimo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-16">Conclusión: ¿Cuál es para ti?</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            - Si estás <strong>empezando</strong> solo y quieres vender mañana mismo: <strong>Shopify</strong>.
            <br />
            - Si eres un <strong>creador de contenido</strong> con una tienda pequeña: <strong>WooCommerce</strong>.
            <br />
            - Si eres una <strong>empresa que busca escalar</strong>, dominar el mercado y no depender de terceros: <strong>Código Custom (React/Next.js)</strong>.
          </p>

          <div className="bg-primary/5 p-8 md:p-12 border-l-4 border-primary mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Syrtix Insight
            </h3>
            <p className="text-gray-700 italic m-0">
              "En Syrtix no vendemos herramientas, vendemos activos digitales. Un código a medida es como tener tu propio local en la mejor calle de Santiago, construido por arquitectos premium. Un Shopify es como arrendar un módulo en un mall: cómodo, pero nunca será tuyo."
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gray-900 text-white p-12 md:p-20 text-center relative overflow-hidden group border border-white/10 shadow-[8px_8px_0px_0px_rgba(200,170,90,0.2)]">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">¿Listo para construir un activo digital real?</h3>
          <p className="text-white/60 mb-10 max-w-xl mx-auto relative z-10">
            Analizamos tu negocio y te recomendamos la mejor tecnología sin compromisos. No todos necesitan un Ferrari, pero si quieres ganar la carrera, te ayudamos a construirlo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link 
              to="/contacto" 
              className="bg-primary text-secondary font-bold px-8 py-4 hover:bg-white hover:text-secondary transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] uppercase tracking-wider text-sm"
            >
              Hablar con un Experto
            </Link>
            <Link 
              to="/servicios" 
              className="bg-transparent border border-white/20 text-white font-bold px-8 py-4 hover:bg-white/10 transition-all uppercase tracking-wider text-sm"
            >
              Ver Tecnologías que Usamos
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/blog" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            <ChevronRight size={18} className="rotate-180" /> Volver a Syrtix Educa
          </Link>
        </div>
      </article>
    </main>
  );
}
