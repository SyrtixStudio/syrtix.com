import { Link } from 'react-router-dom';

const LAST_UPDATED = '31 de enero de 2026';

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-base/50 mt-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Términos y Condiciones</h1>
          <p className="text-sm text-gray-600 mt-2">
            Última actualización: {LAST_UPDATED}
          </p>
          <div className="h-0.5 w-16 bg-primary mx-auto mt-4"></div>
        </div>

        <article className="prose prose-sm sm:prose lg:prose-base max-w-none text-gray-700">
          <section>
            <h2>1. Introducción</h2>
            <p>
              Bienvenido a syrtix.com. Al utilizar este sitio web aceptas estos Términos y
              Condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos
              términos, por favor no uses nuestro sitio.
            </p>
          </section>

          <section>
            <h2>2. Identificación del titular</h2>
            <p>
              syrtix.com es una agencia de desarrollo web que opera en Chile. Para consultas o
              solicitudes formales, puedes contactarnos en{' '}
              <a href="mailto:contacto@syrtix.com" className="text-primary">
                contacto@syrtix.com
              </a>
              .
            </p>
            <p>Domicilio de contacto: Canal Sarmiento 6380, Puerto Montt, Chile.</p>
          </section>

          <section>
            <h2>3. Uso del sitio</h2>
            <p>
              El contenido del sitio se entrega con fines informativos. Está prohibido copiar,
              reproducir, distribuir o usar el contenido con fines comerciales sin autorización
              expresa del titular.
            </p>
          </section>

          <section>
            <h2>4. Propiedad intelectual</h2>
            <p>
              Todos los derechos sobre textos, imágenes, logotipos y demás materiales publicados en
              el sitio pertenecen a syrtix.com o a sus licenciantes. Queda prohibida la copia total o
              parcial sin permiso.
            </p>
          </section>

          <section>
            <h2>5. Alcance de servicios y soporte</h2>
            <p>
              Los precios publicados son referenciales y corresponden a un alcance base. El alcance
              definitivo, los entregables y los plazos se establecen exclusivamente en la propuesta
              y/o cotización formal aceptada por el cliente.
            </p>
            <p>
              En particular, los valores asociados a la sección “¿Ya tienes una web? Mejórala con
              nosotros” corresponden a un servicio de diagnóstico para evaluar la complejidad del
              proyecto, su estado actual y los riesgos asociados. Sobre la base de dicho diagnóstico
              se emitirá una cotización final con la propuesta de solución y el alcance definitivo.
            </p>
            <p>
              Salvo estipulación expresa, no se incluyen servicios de hosting, dominio, certificados
              SSL, respaldos, infraestructura, licencias de terceros ni otros costos operativos. El
              término “despliegue” o “deploy” se refiere a la publicación inicial del sitio en el
              entorno definido en la propuesta.
            </p>
            <p>
              Si el cliente no cuenta con dominio, syrtix podrá gestionarlo en su nombre. El dominio
              se registrará a nombre del cliente y los costos de registro/renovación serán asumidos
              por éste, según lo indicado en la propuesta. En caso de mora, syrtix no tendrá
              responsabilidad por la suspensión o pérdida del dominio, ya que el pago se realiza por
              el cliente mediante su cuenta en NIC.cl.
            </p>
            <p>
              Cuando se contrate hosting o infraestructura administrada, la capacidad referencial
              se estima en hasta 1.000.000 de visitas por mes bajo supuestos estándar (por ejemplo,
              recursos y contenidos de tamaño moderado, hasta 200 KB por visita). Si el tráfico o el
              uso real exceden dichos supuestos, se deberán ajustar recursos, costos y/o el plan
              contratado.
            </p>
            <p>
              El soporte post‑lanzamiento comprende, por regla general, la corrección de errores
              atribuibles al desarrollo entregado por un período limitado (habitualmente 30 a 60
              días) y ajustes menores previamente acordados. La disponibilidad 24/7, soporte
              extendido o garantías adicionales requieren un plan específico y se cotizan aparte.
            </p>
            <p>
              Cualquier modificación, mejora, integración nueva (por ejemplo, una pasarela de pago
              adicional) o cambio de alcance no contemplado en la propuesta aceptada será objeto de
              una cotización adicional o de un plan de mantenimiento/bolsa de horas. La carga de
              contenido solo se considera incluida cuando se pacta de forma expresa y limitada; la
              actualización recurrente de contenidos se considera servicio de mantenimiento.
            </p>
            <p>
              Salvo acuerdo distinto, el cliente recibe una licencia de uso del sitio y sus
              entregables. La propiedad del código fuente se transfiere únicamente mediante el pago
              de un buyout equivalente al 40% del valor total del proyecto, y la entrega del
              repositorio/documentación se realizará una vez pagado el 100% del proyecto más dicho
              buyout. syrtix conserva sus herramientas internas, componentes reutilizables y know‑how.
            </p>
            <p>
              Los servicios de mantenimiento se ofrecen desde $49.000, y su valor final dependerá de
              la complejidad y magnitud del proyecto, según lo indicado en la propuesta aceptada.
            </p>
          </section>

          <section>
            <h2>6. Cotizaciones, pagos y cancelaciones</h2>
            <p>
              Las cotizaciones, sus condiciones comerciales y su vigencia se detallarán en la
              propuesta formal correspondiente. La ejecución del servicio comenzará una vez aceptada
              la propuesta y cumplidas las condiciones acordadas entre las partes.
            </p>
            <p>
              Las condiciones de pago, entregas parciales, reajustes, suspensiones o cancelaciones
              se regirán por lo indicado en la propuesta aceptada. En caso de cancelación, se
              considerarán los trabajos efectivamente ejecutados hasta la fecha.
            </p>
            <p>
              No se contemplan reembolsos ni devoluciones, totales ni parciales, por servicios
              contratados, aun cuando exista desistimiento o término anticipado por parte del
              cliente.
            </p>
            <p>
              Los plazos de entrega pueden ajustarse cuando existan cambios de alcance, nuevas
              solicitudes, aprobación tardía de entregables o falta de insumos por parte del
              cliente. Bajo metodologías ágiles (por ejemplo, Scrum), los cambios de requerimientos
              se gestionan como nuevas solicitudes y pueden implicar extensiones de plazo y ajustes
              de costo, previo acuerdo entre las partes.
            </p>
            <p>
              syrtix podrá ofrecer beneficios por permanencia, mejoras o descuentos asociados a la
              continuidad del servicio. Estas condiciones, si aplican, se indicarán expresamente en
              la propuesta aceptada.
            </p>
          </section>

          <section>
            <h2>7. Privacidad y datos personales</h2>
            <p>
              El tratamiento de datos personales se rige por nuestra{' '}
              <Link to="/politica-privacidad" className="text-primary">
                Política de Privacidad
              </Link>
              . Al enviar formularios en este sitio, declaras que la información proporcionada es
              veraz y autorizas su uso para fines de contacto y cotización.
            </p>
          </section>

          <section>
            <h2>8. Responsabilidad</h2>
            <p>
              Hacemos esfuerzos razonables para mantener la información actualizada y correcta, pero
              no garantizamos que la información sea completa o esté libre de errores. No nos
              hacemos responsables por daños derivados del uso del sitio.
            </p>
          </section>

          <section>
            <h2>9. Enlaces a terceros</h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios externos. No controlamos su contenido y
              no asumimos responsabilidad por ellos.
            </p>
          </section>

          <section>
            <h2>10. Modificaciones</h2>
            <p>
              Podemos modificar estos Términos en cualquier momento. Las modificaciones se
              publicarán en esta página y la fecha de "Última actualización" se ajustará en
              consecuencia.
            </p>
          </section>

          <section>
            <h2>11. Ley aplicable</h2>
            <p>
              Estos Términos se rigen por la legislación chilena. Para cualquier controversia, las
              partes se someten a los tribunales competentes de Santiago, Chile.
            </p>
          </section>

          <section>
            <h2>12. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos, contáctanos en{' '}
              <Link to="/contacto" className="text-primary">
                Contacto
              </Link>
              .
            </p>
          </section>
        </article>

        <div className="mt-8 text-center">
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

export default TermsAndConditions;
