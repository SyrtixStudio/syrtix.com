import SEOHead from '../../components/seo/SEOHead';
import { seoData } from '../../components/seo/seoData';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Code, 
  ShoppingBag, 
  Zap, 
  BarChart3, 
  GraduationCap,
  Layers,
  ChevronRight
} from 'lucide-react';

const educaModules = [
  {
    id: 'fundamentals',
    title: 'Fundamentos Digitales',
    icon: <Zap className="text-primary" />,
    description: 'Aprende las bases para que tu negocio tenga éxito en la era digital.',
    color: 'bg-primary/5',
    tag: 'Módulo 1'
  },
  {
    id: 'tech-battle',
    title: 'Guerra de Tecnologías',
    icon: <Layers className="text-secondary" />,
    description: 'Shopify, WordPress o Código Custom. Descubre cuál es para ti.',
    color: 'bg-secondary/5',
    tag: 'Módulo 2'
  },
  {
    id: 'conversion',
    title: 'Growth & Conversión',
    icon: <BarChart3 className="text-green-500" />,
    description: 'Cómo transformar visitas en clientes reales y escalar tus ventas.',
    color: 'bg-green-50',
    tag: 'Módulo 3'
  }
];

const posts = [
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-chile',
    title: '¿Cuánto cuesta una página web en Chile? Guía de precios 2026',
    description:
      'Descubre los precios reales de páginas web en Chile según tipo de sitio, funcionalidades y quién lo hace. Tablas comparativas y recomendaciones.',
    category: 'Precios y costos',
    module: 'fundamentals',
    readTime: '8 min',
    date: 'Marzo 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  {
    slug: 'por-que-necesito-una-pagina-web',
    title: '¿Por qué necesito una página web para mi negocio?',
    description:
      'Si aún te preguntas si vale la pena invertir en una página web, aquí tienes 7 razones sólidas respaldadas por datos del mercado chileno.',
    category: 'Estrategia digital',
    module: 'fundamentals',
    readTime: '7 min',
    date: 'Marzo 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    slug: 'shopify-vs-woocommerce-vs-custom-code',
    title: 'Shopify vs WooCommerce vs Custom Code: ¿Cuál elegir?',
    description:
      'Analizamos las plataformas más populares frente al desarrollo a medida. Descubre cuál es la mejor inversión para escalar tu negocio.',
    category: 'Tecnología',
    module: 'tech-battle',
    readTime: '12 min',
    date: 'Mayo 2026',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
  },
];

export default function Blog() {
  const seo = seoData.blog.es;

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        jsonLd={seo.jsonLd}
      />
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0a0a0b]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-secondary/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <GraduationCap size={16} className="text-primary" />
            <span className="text-white/70 text-xs font-medium tracking-wider uppercase">Centro de Aprendizaje</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Syrtix <span className="text-primary">Educa</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
            No solo construimos tecnología, educamos a los líderes del mañana para dominar el entorno digital con decisiones inteligentes.
          </p>

          {/* Quick Search/Filter Placeholder */}
          <div className="max-w-md mx-auto relative group">
            <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-md">
              <input 
                type="text" 
                placeholder="¿Qué quieres aprender hoy?" 
                className="bg-transparent border-none text-white px-4 py-3 w-full focus:ring-0 placeholder:text-white/30"
              />
              <button className="bg-primary text-secondary px-6 py-2.5 rounded-lg font-bold hover:bg-white transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educaModules.map((module) => (
            <div 
              key={module.id}
              className="bg-white p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full ${module.color} opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="relative z-10">
                <div className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">
                  {module.tag}
                </div>
                <div className="mb-6 p-3 inline-block bg-gray-50 rounded-2xl group-hover:bg-primary/10 transition-colors duration-500">
                  {module.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{module.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {module.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                  Explorar módulo <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Artículos Destacados</h2>
            <p className="text-gray-500 max-w-xl">
              Explora nuestras guías detalladas diseñadas para ayudarte a navegar el complejo mundo del desarrollo web y marketing digital.
            </p>
          </div>
          <div className="flex gap-4">
            {['Todos', 'Estrategia', 'Tecnología', 'Precios'].map((filter) => (
              <button 
                key={filter}
                className="px-5 py-2 text-sm font-medium rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-all"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col md:flex-row bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur text-gray-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm group/btn"
                >
                  <span className="border-b-2 border-primary/30 group-hover/btn:border-primary transition-all">Leer más</span>
                  <ArrowRight size={18} className="text-primary group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[100px] rounded-full -mr-48 -mt-48"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Quieres recibir contenido educativo exclusivo?
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Únete a nuestra lista de correo y recibe estrategias directas a tu bandeja de entrada. Sin spam, solo valor técnico y estratégico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl w-full sm:w-80 focus:ring-primary focus:border-primary placeholder:text-white/40"
            />
            <button className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold hover:bg-white transition-all transform hover:-translate-y-1">
              Suscribirme Gratis
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

