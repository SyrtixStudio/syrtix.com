import { Link } from 'react-router-dom';

import { useLanguage } from '../i18n/index.jsx';

const LAST_UPDATED_ES = '31 de enero de 2026';
const LAST_UPDATED_EN = 'January 31, 2026';

const LegalNotice = () => {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          title: 'Legal Notice',
          updated: 'Last updated',
          lastUpdatedValue: LAST_UPDATED_EN,
          sections: [
            {
              title: '1. Company information',
              paragraphs: [
                'Syrtix.com is a web development agency operating in Chile. For inquiries, contact us at contacto@Syrtix.com.',
                'Contact address: Canal Sarmiento 6380, Puerto Montt, Chile.',
              ],
            },
            {
              title: '2. Website purpose',
              paragraphs: [
                'This website provides information about our web development services, available packages, and contact channels.',
                'Information on this site is for general informational purposes and does not constitute professional advice.',
                'Personal data processing is governed by our Privacy Policy.',
              ],
            },
            {
              title: '3. Intellectual property',
              paragraphs: [
                'All content on this website, including texts, images, logos, and design elements, is protected by intellectual property laws.',
                'You may not reproduce, distribute, or use site content for commercial purposes without prior written consent.',
              ],
            },
            {
              title: '4. External links',
              paragraphs: [
                'The site may include links to third-party websites. We do not control those sites and are not responsible for their content or privacy practices.',
              ],
            },
            {
              title: '5. Liability',
              paragraphs: [
                'Syrtix.com makes reasonable efforts to ensure information accuracy, but does not guarantee completeness or absence of errors.',
                'We disclaim liability for damages resulting from website use.',
              ],
            },
            {
              title: '6. Applicable law',
              paragraphs: [
                'These terms are governed by Chilean law. Any dispute is subject to competent courts in Santiago, Chile.',
              ],
            },
          ],
          privacyLink: 'Privacy Policy',
          footer: 'If you have questions about this Legal Notice, contact us at',
          back: 'Back to home',
        }
      : {
          title: 'Aviso Legal',
          updated: 'Ultima actualizacion',
          lastUpdatedValue: LAST_UPDATED_ES,
          sections: [
            {
              title: '1. Informacion de la empresa',
              paragraphs: [
                'Syrtix.com es una agencia de desarrollo web que opera en Chile. Para consultas, contactenos en contacto@Syrtix.com.',
                'Domicilio de contacto: Canal Sarmiento 6380, Puerto Montt, Chile.',
              ],
            },
            {
              title: '2. Proposito del sitio web',
              paragraphs: [
                'Este sitio web proporciona informacion sobre nuestros servicios de desarrollo web, paquetes disponibles y formas de contacto.',
                'La informacion proporcionada en el sitio es de caracter general y no constituye asesoramiento profesional.',
                'El tratamiento de datos personales se rige por nuestra Politica de Privacidad.',
              ],
            },
            {
              title: '3. Propiedad intelectual',
              paragraphs: [
                'Todo el contenido de este sitio web, incluidos textos, imagenes, logos y elementos de Diseño, esta protegido por leyes de propiedad intelectual.',
                'No puede reproducir, distribuir o utilizar el contenido del sitio con fines comerciales sin consentimiento escrito previo.',
              ],
            },
            {
              title: '4. Enlaces externos',
              paragraphs: [
                'El sitio puede incluir enlaces a sitios web de terceros. No controlamos esos sitios ni sus practicas de privacidad.',
              ],
            },
            {
              title: '5. Responsabilidad',
              paragraphs: [
                'Syrtix.com hace esfuerzos razonables para garantizar la precision de la informacion en este sitio, pero no garantiza que sea completa o libre de errores.',
                'Declinamos responsabilidad por daños resultantes del uso del sitio web.',
              ],
            },
            {
              title: '6. Ley aplicable',
              paragraphs: [
                'Estos terminos se rigen por las leyes de Chile. Cualquier disputa estara sujeta a la jurisdiccion de los tribunales competentes de Santiago, Chile.',
              ],
            },
          ],
          privacyLink: 'Politica de Privacidad',
          footer: 'Si tienes preguntas sobre este Aviso Legal, contactaños en',
          back: 'Volver al inicio',
        };

  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{copy.title}</h1>
          <p className="text-xs text-gray-600 mt-2">
            {copy.updated}: {copy.lastUpdatedValue}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-base rounded-none border border-gray-200 p-4 md:p-6 text-gray-700 space-y-6">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed mb-2">
                  {paragraph.includes('Privacy Policy') || paragraph.includes('Politica de Privacidad') ? (
                    <>
                      {paragraph.replace('Privacy Policy', '').replace('Politica de Privacidad', '')}
                      <Link to="/politica-privacidad" className="text-primary">
                        {copy.privacyLink}
                      </Link>
                      .
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </section>
          ))}

          <section className="border-t border-gray-200 pt-4">
            <p className="text-xs text-gray-600 italic">
              {copy.footer}{' '}
              <a href="mailto:contacto@syrtix.com" className="text-primary">
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
            {copy.back}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LegalNotice;
