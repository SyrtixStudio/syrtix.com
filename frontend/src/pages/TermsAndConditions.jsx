import { Link } from 'react-router-dom';

import { useLanguage } from '../i18n/index.jsx';

const LAST_UPDATED_ES = '31 de enero de 2026';
const LAST_UPDATED_EN = 'January 31, 2026';

const TermsAndConditions = () => {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          title: 'Terms and Conditions',
          updated: 'Last updated',
          lastUpdatedValue: LAST_UPDATED_EN,
          sections: [
            {
              title: '1. Introduction',
              text: [
                'Welcome to syrtix.com. By using this website, you accept these Terms and Conditions in full. If you disagree with any part, please do not use the site.',
              ],
            },
            {
              title: '2. Owner identification',
              text: [
                'syrtix.com is a web development agency operating in Chile. For formal inquiries, contact us at contacto@syrtix.com.',
                'Contact address: Canal Sarmiento 6380, Puerto Montt, Chile.',
              ],
            },
            {
              title: '3. Use of the site',
              text: [
                'The website content is provided for informational purposes. Copying, reproducing, distributing, or commercial use without written authorization is prohibited.',
              ],
            },
            {
              title: '4. Intellectual property',
              text: [
                'All rights over texts, images, logos, and other materials belong to syrtix.com or its licensors. Partial or total copy without permission is forbidden.',
              ],
            },
            {
              title: '5. Scope of services and support',
              text: [
                'Published prices are reference values for a base scope. Final scope, deliverables, and timelines are defined only in the formal accepted proposal.',
                'Values associated with website improvement services correspond to a diagnostic stage to evaluate complexity and risk. After that, a final quote is issued.',
                'Unless expressly agreed, hosting, domain, SSL certificates, backups, infrastructure, third-party licenses, and operational costs are not included.',
                'Post-launch support generally includes bug fixes attributable to delivered development for a limited period. Extended support requires a specific plan.',
                'Any new integration, feature, or scope change not included in the accepted proposal will be quoted separately.',
                'Maintenance services start from $49\.000 CLP and final value depends on project complexity and magnitude.',
              ],
            },
            {
              title: '6. Quotes, payments, and cancellations',
              text: [
                'Commercial terms and validity are detailed in each formal proposal. Execution starts once the proposal is accepted and agreed conditions are met.',
                'No total or partial refunds are contemplated for contracted services, even in case of early termination by the client.',
                'Delivery timelines may be adjusted due to scope changes, additional requests, delayed approvals, or missing client inputs.',
              ],
            },
            {
              title: '7. Privacy and personal data',
              text: [
                'Personal data processing is governed by our Privacy Policy. By submitting forms, you declare information is truthful and authorize its use for contact and quoting purposes.',
              ],
            },
            {
              title: '8. Liability',
              text: [
                'We make reasonable efforts to keep information accurate and up to date, but do not guarantee it is complete or error-free. We are not liable for damages resulting from site use.',
              ],
            },
            {
              title: '9. Third-party links',
              text: [
                'This site may contain links to external sites. We do not control their content and assume no responsibility for them.',
              ],
            },
            {
              title: '10. Modifications',
              text: [
                'We may update these Terms at any time. Changes will be published on this page and the update date will be adjusted.',
              ],
            },
            {
              title: '11. Applicable law',
              text: [
                'These Terms are governed by Chilean law. Any dispute is subject to competent courts of Santiago, Chile.',
              ],
            },
            {
              title: '12. Contact',
              text: ['If you have questions about these Terms, contact us through our Contact page.'],
            },
          ],
          privacyLink: 'Privacy Policy',
          contactLink: 'Contact',
          back: 'Back to home',
        }
      : {
          title: 'Terminos y Condiciones',
          updated: 'Ultima actualizacion',
          lastUpdatedValue: LAST_UPDATED_ES,
          sections: [
            {
              title: '1. Introduccion',
              text: [
                'Bienvenido a syrtix.com. Al utilizar este sitio web aceptas estos terminos y condiciones en su totalidad. Si no estas de acuerdo con alguna parte, por favor no uses nuestro sitio.',
              ],
            },
            {
              title: '2. Identificacion del titular',
              text: [
                'syrtix.com es una agencia de desarrollo web que opera en Chile. Para consultas formales, puedes contactarnos en contacto@syrtix.com.',
                'Domicilio de contacto: Canal Sarmiento 6380, Puerto Montt, Chile.',
              ],
            },
            {
              title: '3. Uso del sitio',
              text: [
                'El contenido del sitio se entrega con fines informativos. Esta prohibido copiar, reproducir, distribuir o usar el contenido con fines comerciales sin autorizacion escrita.',
              ],
            },
            {
              title: '4. Propiedad intelectual',
              text: [
                'Todos los derechos sobre textos, imagenes, logotipos y materiales publicados pertenecen a syrtix.com o sus licenciantes.',
              ],
            },
            {
              title: '5. Alcance de servicios y soporte',
              text: [
                'Los precios publicados son referenciales y corresponden a un alcance base. El alcance definitivo, entregables y plazos se establecen en la propuesta formal aceptada.',
                'Los valores de servicios de mejora web corresponden a una etapa de diagnostico para evaluar complejidad y riesgos. Luego se emite una cotizacion final.',
                'Salvo estipulacion expresa, no se incluyen hosting, dominio, certificados SSL, respaldos, infraestructura, licencias de terceros ni costos operativos.',
                'El soporte post-lanzamiento contempla correccion de errores atribuibles al desarrollo por un periodo limitado. Soporte extendido requiere plan especifico.',
                'Cualquier nueva integracion, funcionalidad o cambio de alcance no contemplado se cotiza aparte.',
                'Los servicios de mantenimiento se ofrecen desde $49\.000 y su valor final depende de la complejidad y magnitud del proyecto.',
              ],
            },
            {
              title: '6. Cotizaciones, pagos y cancelaciones',
              text: [
                'Las condiciones comerciales y vigencia se detallan en cada propuesta formal. La ejecucion comienza una vez aceptada la propuesta y cumplidas las condiciones acordadas.',
                'No se contemplan reembolsos ni devoluciones, totales ni parciales, por servicios contratados, incluso ante termino anticipado por parte del cliente.',
                'Los plazos pueden ajustarse por cambios de alcance, nuevas solicitudes, aprobaciones tardias o falta de insumos del cliente.',
              ],
            },
            {
              title: '7. Privacidad y datos personales',
              text: [
                'El tratamiento de datos personales se rige por nuestra Politica de Privacidad. Al enviar formularios, declaras que la informacion es veraz y autorizas su uso para contacto y cotizacion.',
              ],
            },
            {
              title: '8. Responsabilidad',
              text: [
                'Hacemos esfuerzos razonables para mantener la informacion actualizada y correcta, pero no garantizamos que sea completa o libre de errores.',
              ],
            },
            {
              title: '9. Enlaces a terceros',
              text: ['Este sitio puede contener enlaces a sitios externos. No controlamos su contenido y no asumimos responsabilidad por ellos.'],
            },
            {
              title: '10. Modificaciones',
              text: ['Podemos modificar estos terminos en cualquier momento. Las modificaciones se publicaran en esta pagina.'],
            },
            {
              title: '11. Ley aplicable',
              text: ['Estos terminos se rigen por la legislacion chilena. Cualquier controversia se somete a tribunales competentes de Santiago, Chile.'],
            },
            {
              title: '12. Contacto',
              text: ['Si tienes preguntas sobre estos terminos, contactaños desde nuestra pagina de Contacto.'],
            },
          ],
          privacyLink: 'Politica de Privacidad',
          contactLink: 'Contacto',
          back: 'Volver al inicio',
        };

  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{copy.title}</h1>
          <p className="text-sm text-gray-600 mt-2">
            {copy.updated}: {copy.lastUpdatedValue}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <article className="prose prose-sm sm:prose lg:prose-base max-w-none text-gray-700">
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.title.startsWith('7.') && (
                <p>
                  <Link to="/politica-privacidad" className="text-primary">
                    {copy.privacyLink}
                  </Link>
                </p>
              )}
              {section.title.startsWith('12.') && (
                <p>
                  <Link to="/contacto" className="text-primary">
                    {copy.contactLink}
                  </Link>
                </p>
              )}
            </section>
          ))}
        </article>

        <div className="mt-8 text-center">
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

export default TermsAndConditions;

