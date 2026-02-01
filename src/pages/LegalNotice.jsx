import { Link } from 'react-router-dom';

const LAST_UPDATED = '31 de enero de 2026';

const LegalNotice = () => {
  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Aviso Legal</h1>
          <p className="text-xs text-gray-600 mt-2">
            Última actualización: {LAST_UPDATED}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-base rounded-none border border-gray-200 p-4 md:p-6 text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">1. Información de la Empresa</h2>
            <p className="text-sm leading-relaxed">
              syrtix.com es una agencia de desarrollo web que opera en Chile. Para consultas,
              contáctenos en{' '}
              <a href="mailto:contacto@syrtix.com" className="text-primary">
                contacto@syrtix.com
              </a>
              .
            </p>
            <p className="text-sm leading-relaxed">
              Domicilio de contacto: Canal Sarmiento 6380, Puerto Montt, Chile.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">2. Propósito del Sitio Web</h2>
            <p className="text-sm leading-relaxed">
              Este sitio web proporciona información sobre nuestros servicios de desarrollo web,
              paquetes disponibles y formas de contactar a nuestro equipo. La información
              proporcionada en el sitio es con fines informativos generales y no constituye
              asesoramiento profesional.
            </p>
            <p className="text-sm leading-relaxed">
              El tratamiento de datos personales se rige por nuestra{' '}
              <Link to="/politica-privacidad" className="text-primary">
                Política de Privacidad
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">3. Propiedad Intelectual</h2>
            <p className="text-sm leading-relaxed">
              Todo el contenido de este sitio web, incluidos textos, imágenes, logos y elementos de
              diseño, está protegido por las leyes de propiedad intelectual. No puede reproducir,
              distribuir o utilizar el contenido del sitio con fines comerciales sin consentimiento
              previo por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">4. Enlaces Externos</h2>
            <p className="text-sm leading-relaxed">
              El sitio puede incluir enlaces a sitios web de terceros. No controlamos esos sitios y
              no somos responsables de su contenido o prácticas de privacidad. Los enlaces se
              proporcionan solo por conveniencia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">5. Responsabilidad</h2>
            <p className="text-sm leading-relaxed">
              syrtix.com hace esfuerzos razonables para garantizar la precisión de la información en
              este sitio, pero no garantizamos que sea completa o libre de errores. Declinamos toda
              responsabilidad por cualquier daño resultante del uso del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">6. Ley Aplicable</h2>
            <p className="text-sm leading-relaxed">
              Estos términos se rigen por las leyes de Chile. Cualquier disputa estará sujeta a la
              jurisdicción de los tribunales competentes en Santiago, Chile.
            </p>
          </section>

          <section className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-600 italic">
              Si tiene preguntas sobre este Aviso Legal, contáctenos en
              <a href="mailto:contacto@syrtix.com" className="text-primary">
                {' '}
                contacto@syrtix.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block px-4 py-2 border border-gray-200 text-sm rounded-none hover:bg-base/50"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LegalNotice;
