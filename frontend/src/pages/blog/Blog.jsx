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
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-primary text-sm mb-4">
              <BookOpen size={16} />
              <span>Blog Syrtix</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Recursos sobre{' '}
              <span className="text-primary">desarrollo web en Chile</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto">
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
