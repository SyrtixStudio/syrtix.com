import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, ChevronRight, TrendingUp, Users, Globe, ShoppingCart } from 'lucide-react';

const TITLE = '¿Por qué necesito una página web para mi negocio? | Syrtix';
const DESCRIPTION =
  'Descubre por qué tu negocio necesita una página web profesional en Chile. Ventajas, estadísticas y cómo una web puede aumentar tus ventas y visibilidad en Google.';
const CANONICAL = 'https://syrtix.com/blog/por-que-necesito-una-pagina-web';

export default function PorQueNecesitoUnaPaginaWeb() {
  return (
    <>
      <head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
      </head>

      <main className="bg-base min-h-screen">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=85"
              alt="estrategia background"
              className="w-full h-full object-cover opacity-30"
              style={{ objectPosition: 'center' }}
            />
          </div>

          <div className="relative max-w-3xl mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-primary mb-6">
              <Link to="/blog" className="hover:underline">Blog</Link>
              <ChevronRight size={14} />
              <span>Estrategia digital</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Por qué necesito una página web para{' '}
              <br />
              <span className="text-primary">mi negocio en Chile?</span>
            </h1>

            <p className="text-white/80 text-lg mb-8">{DESCRIPTION}</p>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2 font-medium text-white">
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-gray-800 font-bold">S</span>
                Syrtix
              </div>
              <span className="text-gray-500">·</span>
              <span>Marzo 2026</span>
              <span className="text-gray-500">·</span>
              <span>7 min de lectura</span>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <article className="max-w-3xl mx-auto px-4 py-12 text-gray-700">

          <p className="text-xl text-gray-600 mb-8">
            Muchos emprendedores y dueños de negocios en Chile aún se preguntan si realmente
            necesitan una página web. La respuesta en 2026 es un rotundo{' '}
            <strong>sí</strong> — y en este artículo te explicamos exactamente por qué.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: <Users size={24} />, stat: '88%', desc: 'investiga online antes de comprar' },
              { icon: <Globe size={24} />, stat: '72%', desc: 'de búsquedas locales visitan el negocio' },
              { icon: <TrendingUp size={24} />, stat: '3x', desc: 'más consultas con sitio profesional' },
              { icon: <ShoppingCart size={24} />, stat: '24/7', desc: 'disponible para tus clientes' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 text-white p-4 text-center">
                <div className="text-primary mb-2 flex justify-center">{item.icon}</div>
                <div className="text-2xl font-bold text-primary">{item.stat}</div>
                <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            1. Tus clientes te buscan en Google, no en el directorio telefónico
          </h2>
          <p className="mb-6">
            El 97% de los consumidores en Chile usa internet para encontrar negocios locales.
            Si no tienes una página web, simplemente <strong>no existes</strong> para esas personas.
            Tu competencia sí tiene sitio web y está captando a los clientes que deberían
            ser tuyos.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            2. Las redes sociales no son suficientes
          </h2>
          <p className="mb-4">
            Instagram y Facebook son excelentes para generar visibilidad, pero tienen
            limitaciones importantes:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'No puedes controlar tu contenido — las plataformas pueden cambiar el algoritmo o suspender tu cuenta.',
              'No apareces en búsquedas de Google (el tráfico más valioso).',
              'Es difícil mostrar catálogos completos, precios, formularios de contacto y credenciales.',
              'No generan la misma confianza que un sitio web profesional propio.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            3. Una página web trabaja para ti las 24 horas, los 7 días
          </h2>
          <p className="mb-6">
            Tu sitio web nunca duerme. Mientras tú descansas, tu página web puede estar
            respondiendo preguntas, mostrando tus servicios y recibiendo consultas o
            pedidos de clientes. Es como tener un vendedor trabajando tiempo completo
            sin pagar sueldos.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            4. Genera credibilidad y confianza en tu marca
          </h2>
          <p className="mb-4">
            Los estudios muestran que <strong>75% de los usuarios juzgan la credibilidad
            de una empresa por su sitio web</strong>. Un sitio profesional transmite:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Seriedad y compromiso con tu negocio.',
              'Transparencia al mostrar quiénes son, qué hacen y cómo contactarlos.',
              'Validación social con testimonios y portafolio de trabajos.',
              'Información clara de precios y servicios, reduciendo la fricción de venta.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            5. Apareces en Google Maps y búsquedas locales
          </h2>
          <p className="mb-6">
            Con una página web y un perfil de Google Business, tu negocio puede aparecer
            cuando alguien busca <em>"diseño web Santiago"</em>, <em>"agencia web Las Condes"</em>
            {' '}o cualquier servicio que ofreces en tu zona. Este tráfico es gratuito y
            de muy alta intención de compra.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            6. Compites con empresas grandes siendo una pyme
          </h2>
          <p className="mb-6">
            Una página web bien diseñada y optimizada puede poner a tu pequeño negocio
            al mismo nivel que grandes empresas en los resultados de Google. El SEO
            no discrimina por tamaño — discrimina por relevancia y calidad de contenido.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            7. Retorno de inversión comprobado
          </h2>
          <p className="mb-6">
            Una landing page que recibe 500 visitas mensuales desde Google y convierte
            el 2% en clientes potenciales = <strong>10 clientes nuevos al mes</strong>.
            Si tu servicio vale $100.000 CLP, eso es $1.000.000 mensuales generados
            por una inversión inicial de $149.000. La página web se paga sola
            en el primer mes.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            ¿Cuándo es el mejor momento para crear tu página web?
          </h2>
          <p className="mb-6">
            <strong>Ahora.</strong> Cada día sin página web es un día que tu competencia
            está captando a tus clientes potenciales. No esperes a tener "todo listo" —
            starts small, crece con el tiempo. Una landing page básica bien hecha
            es mejor que nada y puede lanzarse en 7 días.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                q: '¿Necesito una página web si ya tengo Instagram?',
                a: 'Sí. Instagram te da visibilidad, pero una página web te da credibilidad, posicionamiento en Google y un canal de ventas propio que no depende de algoritmos.',
              },
              {
                q: '¿Cuánto tiempo tarda en dar resultados?',
                a: 'Los resultados de SEO orgánico llegan entre 3 y 6 meses. Pero desde el primer día puedes usarla en tus campañas de publicidad pagada y en tu tarjeta de presentación.',
              },
              {
                q: '¿Necesito saber programar para tener una página web?',
                a: 'No. Empresas como Syrtix se encargan de todo: diseño, desarrollo, publicación y soporte post-entrega.',
              },
            ].map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded p-4 group">
                <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <ChevronRight size={16} className="text-primary group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-900 text-white p-8 rounded text-center">
            <h3 className="text-2xl font-bold mb-3">¿Listo para crear tu página web?</h3>
            <p className="text-gray-300 mb-6">
              En Syrtix lanzamos tu sitio web profesional en 7 días. Precios desde $149.000 CLP.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/paquetes"
                className="bg-primary text-gray-800 font-bold px-6 py-3 hover:bg-yellow-400 transition flex items-center justify-center gap-2"
              >
                Ver paquetes y precios <ArrowRight size={18} />
              </Link>
              <Link
                to="/contacto"
                className="border-2 border-white text-white font-bold px-6 py-3 hover:bg-white hover:text-gray-800 transition"
              >
                Quiero mi página web
              </Link>
            </div>
          </div>
        </article>

        {/* breadcrumb bottom */}
        <div className="max-w-3xl mx-auto px-4 pb-12">
          <Link to="/blog" className="text-primary hover:underline flex items-center gap-1 text-sm">
            <ChevronRight size={14} className="rotate-180" /> Volver al blog
          </Link>
        </div>
      </main>
    </>
  );
}
