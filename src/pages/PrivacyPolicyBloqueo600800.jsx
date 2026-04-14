import { Link } from 'react-router-dom';

const LAST_UPDATED = '28 de febrero de 2026';

const sections = [
  {
    title: '1. Responsable del tratamiento',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-2">
          Responsable: <strong>Syrtix</strong> (
          <a href="https://syrtix.com" className="text-primary">
            Syrtix.com
          </a>
          )
        </p>
        <p className="text-sm leading-relaxed">
          Contacto:{' '}
          <a href="mailto:contacto@syrtix.com" className="text-primary">
            contacto@syrtix.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: '2. Datos que recopilamos',
    bullets: [
      'Datos tecnicos minimos para operacion, seguridad y soporte (por ejemplo, version de app, version del sistema operativo y logs de errores no sensibles).',
      'Estado de suscripcion para habilitar funciones premium (activa, vencida o en periodo de prueba), segun informacion de Google Play Billing.',
      'Historial local de llamadas bloqueadas, almacenado en el dispositivo, cifrado (AES), con opcion de exportacion por el usuario.',
    ],
  },
  {
    title: '3. Datos que NO recopilamos',
    bullets: [
      'No grabamos llamadas.',
      'No accedemos a SMS.',
      'No accedemos a contactos.',
      'No recopilamos contenido de comunicaciones.',
      'No procesamos directamente datos completos de tarjetas o medios de pago.',
    ],
  },
  {
    title: '4. Finalidades del tratamiento',
    bullets: [
      'Bloquear llamadas entrantes por prefijos 600, 800 y 809.',
      'Mostrar y gestionar historial local de llamadas bloqueadas.',
      'Permitir exportacion de historial cuando el usuario lo solicite.',
      'Permitir eliminacion total de datos locales mediante "Eliminar mis datos".',
      'Gestionar la suscripcion y verificar acceso a funciones pagadas.',
      'Detectar fallas tecnicas y proteger la seguridad basica del servicio.',
    ],
  },
  {
    title: '5. Base legal (consentimiento/ejecucion del servicio/interes legitimo)',
    bullets: [
      'Ejecucion del servicio: para operar funciones principales de bloqueo e historial.',
      'Consentimiento: para acciones opcionales del usuario (por ejemplo, exportar informacion o contactar soporte).',
      'Interes legitimo: para continuidad operativa, seguridad y prevencion de abuso tecnico.',
    ],
  },
  {
    title: '6. Suscripciones y pagos (Google Play)',
    paragraphs: [
      'La app ofrece suscripcion mensual de CLP 990, gestionada por Google Play Billing, con prueba gratuita segun elegibilidad/configuracion vigente en Google Play.',
      'El cobro, renovacion, cancelacion y datos de facturacion son procesados por Google. Syrtix no accede a datos completos de tarjeta.',
    ],
  },
  {
    title: '7. Conservacion de datos',
    bullets: [
      'El historial local se conserva hasta que el usuario lo elimine, exporte o desinstale la app.',
      'Los datos tecnicos minimos se conservan por el tiempo necesario para soporte, seguridad y cumplimiento legal, si corresponde.',
      'El estado de suscripcion se conserva durante la vigencia del servicio y plazos legales aplicables, si corresponde.',
    ],
  },
  {
    title: '8. Seguridad de la informacion',
    paragraphs: [
      'Aplicamos medidas razonables de seguridad. El historial local se almacena cifrado con AES en el dispositivo. Ademas, se aplican medidas de minimizacion de datos y controles de acceso.',
    ],
  },
  {
    title: '9. Comparticion con terceros (si aplica)',
    bullets: [
      'Google Play: para compras, renovaciones y estado de suscripcion.',
      'Proveedores tecnicos: infraestructura, soporte o monitoreo, solo si corresponde y bajo obligaciones de confidencialidad.',
      'No vendemos datos personales a terceros.',
    ],
  },
  {
    title: '10. Transferencias internacionales (si aplica)',
    paragraphs: [
      'Algunos proveedores tecnologicos pueden operar fuera de Chile. Cuando corresponda, se aplican salvaguardas contractuales y tecnicas razonables para dichas transferencias.',
    ],
  },
  {
    title: '11. Derechos del usuario (acceso, rectificacion, eliminacion, oposicion)',
    paragraphs: [
      'El usuario puede solicitar acceso, rectificacion, eliminacion u oposicion respecto de datos personales tratados directamente por Syrtix, escribiendo a contacto@syrtix.com.',
      'Para datos locales en el dispositivo, la app permite revision, exportacion y eliminacion total mediante "Eliminar mis datos".',
    ],
  },
  {
    title: '12. Menores de edad',
    paragraphs: [
      'La app esta dirigida a personas de 13 años o mas y no esta orientada a menores de 13 años. Si se detecta informacion de menores de 13, se adoptaran medidas razonables para eliminarla, si corresponde.',
    ],
  },
  {
    title: '13. Cambios a esta politica',
    paragraphs: [
      'Podemos actualizar esta politica por cambios legales, tecnicos o funcionales. La version vigente se publicara en esta URL con la nueva fecha de "Ultima actualizacion".',
    ],
  },
  {
    title: '14. Contacto',
    content: (
      <>
        <p className="text-sm leading-relaxed mb-2">
          Correo:{' '}
          <a href="mailto:contacto@syrtix.com" className="text-primary">
            contacto@syrtix.com
          </a>
        </p>
        <p className="text-sm leading-relaxed">
          Web:{' '}
          <a href="https://syrtix.com" className="text-primary">
            https://Syrtix.com
          </a>
        </p>
      </>
    ),
  },
];

function PrivacyPolicyBloqueo600800() {
  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Politica de Privacidad - Bloqueo 600 y 800
          </h1>
          <p className="text-xs text-gray-600 mt-2">
            Ultima actualizacion: {LAST_UPDATED}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="bg-base rounded-none border border-gray-200 p-4 md:p-6 text-gray-700 space-y-6">
          <section>
            <p className="text-sm leading-relaxed">
              Esta Politica de Privacidad describe como la app <strong>Bloqueo 600 y 800</strong>,
              desarrollada por <strong>Syrtix</strong>, trata informacion para su funcionamiento en
              Chile y LatAm. Se redacta en lenguaje general, alineada con politicas de Google Play
              y buenas practicas de privacidad.
            </p>
          </section>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-gray-800 mb-2">{section.title}</h2>

              {section.content || null}

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed mb-2">
                  {paragraph.includes('contacto@syrtix.com') ? (
                    <>
                      {paragraph.replace('contacto@syrtix.com', '')}
                      <a href="mailto:contacto@syrtix.com" className="text-primary">
                        contacto@syrtix.com
                      </a>
                      .
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}

              {section.bullets?.length ? (
                <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="border-t border-gray-200 pt-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Resumen corto para Play Console</h2>
            <p className="text-sm leading-relaxed">Bloqueo 600 y 800 bloquea llamadas por prefijos 600, 800 y 809.</p>
            <p className="text-sm leading-relaxed">No grabamos llamadas ni accedemos a SMS o contactos.</p>
            <p className="text-sm leading-relaxed">El historial de llamadas bloqueadas se guarda localmente y cifrado (AES).</p>
            <p className="text-sm leading-relaxed">El usuario puede exportar su historial y eliminar todos sus datos locales.</p>
            <p className="text-sm leading-relaxed">La suscripcion (CLP 990/mes) se procesa con Google Play Billing.</p>
            <p className="text-sm leading-relaxed">Para privacidad y soporte: contacto@syrtix.com.</p>
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

export default PrivacyPolicyBloqueo600800;
