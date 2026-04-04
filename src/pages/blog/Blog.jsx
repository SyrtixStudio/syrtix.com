import { Link } from 'react-router-dom';

import { ArrowRight, BookOpen, Clock } from 'lucide-react';

const posts = [
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-chile',
    title: '¿Cuánto cuesta una página web en Chile? Guía de precios 2026',
    description:
      'Descubre los precios reales de páginas web en Chile según tipo de sitio, funcionalidades y quién lo hace. Tablas comparativas y recomendaciones.',
    category: 'Precios y costos',
    readTime: '8 min',
    date: 'Marzo 2026',
  },
  {
    slug: 'por-que-necesito-una-pagina-web',
    title: '¿Por qué necesito una página web para mi negocio?',
    description:
      'Si aún te preguntas si vale la pena invertir en una página web, aquí tienes 7 razones sólidas respaldadas por datos del mercado chileno.',
    category: 'Estrategia digital',
    readTime: '7 min',
    date: 'Marzo 2026',
  },
];

export default function Blog() {
  return (
    <>
      <head>
        <title>Blog de desarrollo web en Chile | Syrtix</title>
        <meta
          name="description"
          content="Artículos sobre desarrollo web, precios, SEO y estrategia digital para negocios en Chile. Guías prácticas del equipo de Syrtix."
        />
        <link rel="canonical" href="https://syrtix.com/blog" />
        <meta name="robots" content="index, follow" />
      </head>

      <main className="bg-base min-h-screen">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=85"
              alt="blog background"
              className="w-full h-full object-cover opacity-30"
              style={{ objectPosition: 'center' }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
              <BookOpen size={16} className="text-primary mr-2" />
              <span className="text-primary text-xs sm:text-sm font-medium">Blog Syrtix</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Recursos sobre{' '}
              <br />
              <span className="text-primary">desarrollo web en Chile</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Guías prácticas, precios reales y estrategias para que tu negocio crezca
              en internet.
            </p>
          </div>
        </section>

        {/* Listado de artículos */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 hover:border-primary transition-colors duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-primary/10 text-primary font-semibold px-2 py-1">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{post.description}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Leer artículo <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
