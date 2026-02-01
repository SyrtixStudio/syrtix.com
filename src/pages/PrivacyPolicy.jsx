import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          <p className="text-xs text-gray-600 mt-2">
            Última actualización: {new Date().toLocaleDateString('es-CL')}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-base rounded-none border border-gray-200 p-4 md:p-6 text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Introducción</h2>
            <p className="text-sm leading-relaxed">
              En syrtix.com nos comprometemos a proteger tu privacidad y tus datos personales. Esta
              Política describe cómo recopilamos, usamos y protegemos tu información conforme a la
              normativa aplicable en Chile.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Responsable del Tratamiento</h2>
            <p className="text-sm leading-relaxed">
              <strong>syrtix.com</strong>
              <br />
              Correo:{' '}
              <a href="mailto:contacto@syrtix.com" className="text-primary">
                contacto@syrtix.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Datos que recopilamos</h2>
            <p className="text-sm leading-relaxed">
              Recopilamos únicamente lo necesario: nombre, correo, teléfono y datos de navegación
              (IP, navegador, páginas visitadas). No almacenamos información financiera ni datos
              sensibles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Finalidad</h2>
            <p className="text-sm leading-relaxed">
              Usamos tus datos para responder consultas, coordinar visitas y mejorar la experiencia
              en el sitio. No enviamos comunicaciones comerciales no solicitadas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Terceros y Transferencias</h2>
            <p className="text-sm leading-relaxed">
              Podemos compartir datos con proveedores que nos ayudan a operar el sitio (por ejemplo
              para procesar formularios). No vendemos tus datos. Algunos proveedores pueden procesar
              datos fuera de Chile con las garantías adecuadas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Cookies</h2>
            <p className="text-sm leading-relaxed">
              Utilizamos cookies técnicas y de sesión para el funcionamiento del sitio. No usamos
              cookies de terceros para publicidad. Puedes configurar tu navegador para rechazarlas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Tus derechos</h2>
            <p className="text-sm leading-relaxed">
              Tienes derecho de acceso, rectificación, supresión, oposición y portabilidad. Para
              ejercerlos, contáctanos en{' '}
              <a href="mailto:contacto@syrtix.com" className="text-primary">
                contacto@syrtix.com
              </a>
              .
            </p>
          </section>

          <section className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-600 italic">
              Al usar nuestro sitio aceptas esta Política. Revisa esta página periódicamente para
              ver actualizaciones.
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
}

export default PrivacyPolicy;
