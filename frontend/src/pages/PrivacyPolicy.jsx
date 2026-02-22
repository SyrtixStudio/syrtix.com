import { Link } from 'react-router-dom';

import { useLanguage } from '../i18n/index.jsx';

function PrivacyPolicy() {
  const { lang } = useLanguage();

  const dateText = new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'es-CL');

  const copy =
    lang === 'en'
      ? {
          title: 'Privacy Policy',
          updated: 'Last updated',
          introTitle: 'Introduction',
          introText:
            'At syrtix.com we are committed to protecting your privacy and personal data. This Policy explains how we collect, use, and protect your information under applicable regulations.',
          controllerTitle: 'Data Controller',
          dataTitle: 'Data we collect',
          dataText:
            'We collect only what is necessary: name, email, phone, and navigation data (IP, browser, visited pages). We do not store financial or sensitive data.',
          purposeTitle: 'Purpose',
          purposeText:
            'We use your data to reply to inquiries, coordinate meetings, and improve site experience. We do not send unsolicited commercial communications.',
          thirdPartiesTitle: 'Third parties and transfers',
          thirdPartiesText:
            'We may share data with providers that help operate the site (for example, form processors). We do not sell your data. Some providers may process data outside Chile with appropriate safeguards.',
          cookiesTitle: 'Cookies',
          cookiesText:
            'We use technical and session cookies for site operation. We do not use third-party advertising cookies. You can configure your browser to reject them.',
          rightsTitle: 'Your rights',
          rightsText:
            'You have rights of access, rectification, deletion, objection, and portability. To exercise them, contact us at',
          footerText:
            'By using our site you accept this Policy. Review this page regularly for updates.',
          back: 'Back to home',
        }
      : {
          title: 'Politica de Privacidad',
          updated: 'Ultima actualizacion',
          introTitle: 'Introduccion',
          introText:
            'En syrtix.com nos comprometemos a proteger tu privacidad y tus datos personales. Esta politica describe como recopilamos, usamos y protegemos tu informacion conforme a la normativa aplicable.',
          controllerTitle: 'Responsable del tratamiento',
          dataTitle: 'Datos que recopilamos',
          dataText:
            'Recopilamos unicamente lo necesario: nombre, correo, telefono y datos de navegacion (IP, navegador, paginas visitadas). No almacenamos informacion financiera ni datos sensibles.',
          purposeTitle: 'Finalidad',
          purposeText:
            'Usamos tus datos para responder consultas, coordinar visitas y mejorar la experiencia en el sitio. No enviamos comunicaciones comerciales no solicitadas.',
          thirdPartiesTitle: 'Terceros y transferencias',
          thirdPartiesText:
            'Podemos compartir datos con proveedores que nos ayudan a operar el sitio (por ejemplo para procesar formularios). No vendemos tus datos. Algunos proveedores pueden procesar datos fuera de Chile con las garantias adecuadas.',
          cookiesTitle: 'Cookies',
          cookiesText:
            'Utilizamos cookies tecnicas y de sesion para el funcionamiento del sitio. No usamos cookies de terceros para publicidad. Puedes configurar tu navegador para rechazarlas.',
          rightsTitle: 'Tus derechos',
          rightsText:
            'Tienes derecho de acceso, rectificacion, supresion, oposicion y portabilidad. Para ejercerlos, contactaños en',
          footerText:
            'Al usar nuestro sitio aceptas esta politica. Revisa esta pagina periodicamente para ver actualizaciones.',
          back: 'Volver al inicio',
        };

  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{copy.title}</h1>
          <p className="text-xs text-gray-600 mt-2">
            {copy.updated}: {dateText}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-base rounded-none border border-gray-200 p-4 md:p-6 text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.introTitle}</h2>
            <p className="text-sm leading-relaxed">{copy.introText}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.controllerTitle}</h2>
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
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.dataTitle}</h2>
            <p className="text-sm leading-relaxed">{copy.dataText}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.purposeTitle}</h2>
            <p className="text-sm leading-relaxed">{copy.purposeText}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.thirdPartiesTitle}</h2>
            <p className="text-sm leading-relaxed">{copy.thirdPartiesText}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.cookiesTitle}</h2>
            <p className="text-sm leading-relaxed">{copy.cookiesText}</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.rightsTitle}</h2>
            <p className="text-sm leading-relaxed">
              {copy.rightsText}{' '}
              <a href="mailto:contacto@syrtix.com" className="text-primary">
                contacto@syrtix.com
              </a>
              .
            </p>
          </section>

          <section className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-600 italic">{copy.footerText}</p>
          </section>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block px-4 py-2 border border-gray-200 text-sm rounded-none hover:bg-base/50"
          >
            {copy.back}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
