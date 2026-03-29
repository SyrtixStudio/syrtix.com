import { Link } from 'react-router-dom';

import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const TITLE = '¿Cuánto cuesta una página web en Chile? Guía de precios 2026';
const DESCRIPTION =
  'Descubre cuánto cuesta una página web en Chile en 2026. Comparamos precios por tipo de sitio, factores que influyen en el valor y cómo elegir la mejor opción para tu negocio.';
const CANONICAL = 'https://syrtix.com/blog/cuanto-cuesta-una-pagina-web-en-chile';

export default function CuantoCuestaUnaPaginaWeb() {
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
        {/* Hero del artículo */}
        <section className="bg-gray-900 text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-primary mb-4">
              <Link to="/blog" className="hover:underline">Blog</Link>
              <ChevronRight size={14} />
              <span>Precios y costos</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              ¿Cuánto cuesta una página web en Chile?{' '}
              <span className="text-primary">Guía de precios 2026</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">{DESCRIPTION}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Syrtix · Marzo 2026</span>
              <span>·</span>
              <span>8 min de lectura</span>
            </div>
          </div>
        </section>

        {/* Contenido */}
        <article className="max-w-3xl mx-auto px-4 py-12 prose prose-lg text-gray-700">

          <p className="text-xl text-gray-600 mb-8">
            Una de las preguntas más frecuentes que recibimos en Syrtix es: <strong>"¿cuánto cuesta
            hacer una página web en Chile?"</strong> La respuesta depende de varios factores, pero
            en esta guía te explicamos todo lo que necesitas saber para tomar una buena decisión.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
            Resumen de precios según tipo de sitio web
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-3 text-left">Tipo de sitio</th>
                  <th className="p-3 text-left">Precio aproximado (CLP)</th>
                  <th className="p-3 text-left">Ideal para</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Landing page básica', '$80.000 – $200.000', 'Emprendedores, campañas'],
                  ['Sitio web empresa (5–10 páginas)', '$200.000 – $600.000', 'Pymes y empresas'],
                  ['E-commerce / tienda online', '$400.000 – $1.500.000+', 'Venta de productos'],
                  ['Aplicación web a medida', '$1.000.000 – $5.000.000+', 'Proyectos complejos'],
                  ['Mantenimiento mensual', '$30.000 – $150.000/mes', 'Todos los sitios'],
                ].map(([tipo, precio, ideal], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 border border-gray-200 font-medium">{tipo}</td>
                    <td className="p-3 border border-gray-200 text-primary font-semibold">{precio}</td>
                    <td className="p-3 border border-gray-200 text-gray-500">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
            ¿Qué factores afectan el precio de una página web?
          </h2>
          <p className="mb-4">El costo de una página web en Chile varía principalmente por:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Número de páginas y secciones: más páginas significa más tiempo de diseño y desarrollo.',
              'Funcionalidades especiales: formularios, pasarelas de pago, reservas en línea, chat, etc.',
              'Diseño personalizado vs. plantilla: un diseño único cuesta más que una plantilla adaptada.',
              'Quién lo hace: agencias establecidas cobran más que freelancers, pero ofrecen más garantía.',
              'Dominio y hosting: agregan $20.000–$80.000 anuales según el servicio elegido.',
              'SEO y posicionamiento: optimizar el sitio para Google tiene un costo adicional.',
              'Mantenimiento: actualizar contenido, plugins, seguridad y rendimiento.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
            ¿Cuánto cobra Syrtix por una página web?
          </h2>
          <p className="mb-4">
            En <strong>Syrtix</strong> ofrecemos paquetes claros y sin sorpresas pensados para
            el mercado chileno:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              {
                nombre: 'Solución Emprendedor',
                precio: 'Desde $149.000',
                desc: 'Landing page profesional, entrega en 7 días, hosting gratis 1 año.',
              },
              {
                nombre: 'Solución Empresa',
                precio: 'Desde $350.000',
                desc: 'Sitio web completo con múltiples secciones, formularios y SEO básico.',
              },
              {
                nombre: 'Solución E-commerce',
                precio: 'Desde $650.000',
                desc: 'Tienda online completa con carrito, Webpay y panel de administración.',
              },
            ].map((pack, i) => (
              <div key={i} className="border border-gray-200 p-5 rounded bg-white shadow-sm">
                <h3 className="font-bold text-gray-900 mb-1">{pack.nombre}</h3>
                <div className="text-primary font-semibold text-lg mb-2">{pack.precio}</div>
                <p className="text-sm text-gray-500">{pack.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
            ¿Vale la pena invertir en una página web profesional?
          </h2>
          <p className="mb-4">
            Absolutamente sí. Una página web profesional es la herramienta de ventas más rentable
            que puede tener un negocio en Chile hoy. Según estudios de mercado:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              '88% de los consumidores investiga en internet antes de comprar un servicio.',
              'Los negocios con sitio web profesional generan hasta 3 veces más consultas que los que solo tienen redes sociales.',
              'Una landing page bien diseñada puede recuperar su inversión en el primer mes.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
            ¿Cómo elegir a quién contratar?
          </h2>
          <p className="mb-6">
            Antes de contratar, considera estos puntos clave:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Pide ver su portafolio y proyectos anteriores.',
              'Confirma que incluye hosting, dominio y correo corporativo.',
              'Asegúrate de que el sitio sea responsive (se vea bien en móvil).',
              'Pregunta si incluyen soporte post-entrega.',
              'Desconfía de precios extremadamente bajos — generalmente usan plantillas sin personalización.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-primary mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Conclusión</h2>
          <p className="mb-6">
            El precio de una página web en Chile en 2026 varía entre{' '}
            <strong>$80.000 y más de $1.500.000 CLP</strong> dependiendo de lo que necesites.
            Lo más importante es no elegir solo por precio: una web barata que no convierte
            visitantes en clientes es inversión perdida.
          </p>
          <p className="mb-8">
            En Syrtix nos especializamos en páginas web que convierten. Si quieres saber
            exactamente cuánto costaría tu proyecto, te damos una <strong>cotización gratis</strong>.
          </p>

          {/* CTA */}
          <div className="bg-gray-900 text-white p-8 rounded text-center">
            <h3 className="text-2xl font-bold mb-3">¿Quieres saber el precio exacto para tu proyecto?</h3>
            <p className="text-gray-300 mb-6">Cotización gratis, sin compromiso. Respondemos en menos de 24 horas.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/paquetes"
                className="bg-primary text-gray-900 font-bold px-6 py-3 hover:bg-yellow-400 transition flex items-center justify-center gap-2"
              >
                Ver paquetes y precios <ArrowRight size={18} />
              </Link>
              <Link
                to="/contacto"
                className="border-2 border-white text-white font-bold px-6 py-3 hover:bg-white hover:text-gray-900 transition"
              >
                Cotizar mi proyecto
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
