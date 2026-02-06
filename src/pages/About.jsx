import { Link } from 'react-router-dom';

import {
  Target,
  Rocket,
  Shield,
  Users,
  Code,
  Heart,
  Zap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

const team = [
  {
    name: 'Francisco Campos',
    role: 'CEO & Fundador',
    description: 'Más de 10 años de experiencia en desarrollo de software y estrategia digital.',
    image: null,
  },
  {
    name: 'María González',
    role: 'Directora de Diseño',
    description: 'Especialista en UX/UI con enfoque en diseños que convierten.',
    image: null,
  },
  {
    name: 'Andrés Silva',
    role: 'Lead Developer',
    description: 'Experto en React, Node.js y arquitecturas escalables.',
    image: null,
  },
  {
    name: 'Valentina Rojas',
    role: 'Project Manager',
    description: 'Garantiza que cada proyecto se entregue a tiempo y supere expectativas.',
    image: null,
  },
];

const values = [
  {
    icon: <Zap size={28} />,
    title: 'Innovación',
    description:
      'Utilizamos las últimas tecnologías y metodologías para crear soluciones de vanguardia.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Pasión',
    description:
      'Amamos lo que hacemos y eso se refleja en cada línea de código y cada píxel de diseño.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Compromiso',
    description: 'Tu éxito es nuestro éxito. Nos involucramos 100% en cada proyecto.',
  },
  {
    icon: <Users size={28} />,
    title: 'Colaboración',
    description: 'Trabajamos contigo como un equipo, no solo como proveedores.',
  },
];

function About() {
  return (
    <main className="min-h-screen bg-base">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/img-nosotros.webp"
            alt="Fondo nosotros syrtix"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Users size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">Conoce al equipo</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Somos <span className="text-primary">syrtix</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Un equipo apasionado por crear experiencias digitales excepcionales que impulsan el
            crecimiento de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-base border-2 border-gray-200 hover:border-primary p-8 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary p-3 mr-4">
                  <Target size={28} className="text-gray-900" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
              </div>
              <p className="text-gray-600">
                Democratizar el acceso a sitios web profesionales mediante tecnología de vanguardia
                y precios accesibles, permitiendo que cada negocio tenga una presencia digital que
                genere resultados reales.
              </p>
            </div>

            <div className="bg-base border-2 border-gray-200 hover:border-primary p-8 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-secondary p-3 mr-4">
                  <Rocket size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nuestra Visión</h2>
              </div>
              <p className="text-gray-600">
                Ser la agencia de desarrollo web de referencia en Latinoamérica, reconocida por
                combinar excelencia técnica, diseño innovador y un servicio al cliente que supera
                expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nuestros <span className="text-primary">valores</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada línea de código
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-base p-6 border border-gray-200 hover:border-primary text-center transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-gray-900 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nuestro <span className="text-primary">equipo</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
              Profesionales apasionados comprometidos con tu éxito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-base border border-gray-200 hover:border-primary overflow-hidden transition-all duration-300 group"
              >
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-white/80">Proyectos entregados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-white/80">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-white/80">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/80">Soporte disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                ¿Por qué trabajar con <span className="text-primary">nosotros</span>?
              </h2>

              <div className="space-y-4">
                {[
                  'Equipo multidisciplinario con experiencia comprobada',
                  'Tecnología de punta con IA integrada',
                  'Precios transparentes sin sorpresas',
                  'Soporte técnico incluido en todos los planes',
                  'Garantía de satisfacción en cada proyecto',
                  'Comunicación constante durante todo el proceso',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-base p-8 border border-gray-200">
              <div className="text-center">
                <Code size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Tecnología + Creatividad = Resultados
                </h3>
                <p className="text-gray-600 mb-6">
                  Combinamos las últimas tecnologías con diseño centrado en el usuario para crear
                  sitios web que no solo se ven bien, sino que generan conversiones reales para tu
                  negocio.
                </p>
                <Link
                  to="/servicios"
                  className="inline-flex items-center text-secondary font-bold hover:text-primary transition-all duration-300"
                >
                  Ver nuestros servicios
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo trabajamos contigo? */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              ¿Cómo <span className="text-primary">trabajamos contigo?</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-base text-gray-700 mb-6">
              En syrtix utilizamos la metodología ágil Scrum, lo que significa que el cliente es
              parte activa del proceso. Tendrás reuniones semanales con nuestro equipo, donde podrás
              ver avances, proponer cambios importantes y asegurarte de que el proyecto siempre esté
              alineado a tus objetivos de negocio.
            </p>
            <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
              <li>
                <span className="font-bold text-primary">Primera reunión:</span> Analizamos tus
                problemas y “dolores” actuales. Nuestro equipo de TI estudia tu caso para proponerte
                la mejor solución posible.
              </li>
              <li>
                <span className="font-bold text-primary">Acta de constitución:</span> Una vez
                definida la solución, creamos un documento detallado donde se especifica claramente
                qué se hará y qué no se hará en el proyecto. Esto incluye alcance, objetivos,
                restricciones y criterios de éxito.
              </li>
              <li>
                <span className="font-bold text-primary">Cronograma y carta Gantt:</span> Te
                entregamos un plan de trabajo claro y ordenado, con fechas y entregables definidos.
              </li>
              <li>
                <span className="font-bold text-primary">Mockups y prototipos:</span> Antes de
                desarrollar, diseñamos los mockups para que visualices el producto final y puedas
                dar tu feedback.
              </li>
              <li>
                <span className="font-bold text-primary">Reuniones semanales:</span> Máximo una
                hora, para revisar avances, resolver dudas y evaluar posibles cambios (siempre que
                sean viables).
              </li>
              <li>
                <span className="font-bold text-primary">Enfoque en calidad:</span> Pedimos la mayor
                cantidad de información posible para entender tu negocio y asegurar que el producto
                final sea moderno, elegante, rápido y estable.
              </li>
              <li>
                <span className="font-bold text-primary">Seguridad y confianza:</span> Todos
                nuestros sitios incluyen certificado SSL (HTTPS) y buenas prácticas de seguridad
                para proteger los datos de tus usuarios y tu negocio.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Especialización técnica y confianza */}
      <section className="py-8 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Especialización técnica y confianza
          </h3>
          <p className="text-base text-gray-700 mb-2">
            Nuestro equipo está formado por profesionales con sólida formación en ingeniería de
            software, bases de datos, machine learning, seguridad informática y gestión de
            proyectos. Nos aseguramos de que cada solución sea robusta, escalable y fácil de
            mantener, aplicando las mejores prácticas aprendidas en nuestra formación universitaria
            y experiencia real.
          </p>
          <p className="text-base text-gray-700">
            Aplicamos lo aprendido en áreas como machine learning, seguridad, arquitectura de
            software y gestión ágil de proyectos para ofrecerte soluciones de alto nivel. Nuestro
            equipo está en constante actualización, integrando nuevas tecnologías y metodologías
            para que tu proyecto siempre esté a la vanguardia.
          </p>
        </div>
      </section>

      {/* Metodología de trabajo */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Nuestra <span className="text-primary">metodología</span> de trabajo
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">
              Trabajamos con metodología ágil Scrum, asegurando transparencia, flexibilidad y
              resultados alineados a tus objetivos.
            </p>
          </div>

          <ol className="relative border-l-4 border-primary pl-8 space-y-12">
            <li className="group">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                1
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Primera reunión: Descubrimiento
                </h3>
                <p className="text-gray-700 text-sm">
                  Conversamos sobre tus problemas y "dolores" actuales. Nuestro equipo de TI analiza
                  tu caso para proponerte la mejor solución posible.
                </p>
              </div>
            </li>
            <li className="group">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                2
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Acta de constitución</h3>
                <p className="text-gray-700 text-sm">
                  Redactamos un documento detallado donde se especifica qué se hará y qué no se hará
                  en el proyecto (alcance, objetivos, restricciones, criterios de éxito, etc.).
                </p>
              </div>
            </li>
            <li className="group">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                3
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cronograma y carta Gantt</h3>
                <p className="text-gray-700 text-sm">
                  Te entregamos un plan de trabajo claro y ordenado, con fechas y entregables
                  definidos para cada etapa.
                </p>
              </div>
            </li>
            <li className="group">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                4
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mockups y prototipos</h3>
                <p className="text-gray-700 text-sm">
                  Diseñamos los mockups del producto para que visualices el resultado final y puedas
                  dar tu feedback antes de desarrollar.
                </p>
              </div>
            </li>
            <li className="group">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                5
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reuniones semanales</h3>
                <p className="text-gray-700 text-sm">
                  Cada semana tendrás una reunión (máx. 1 hora) para revisar avances, resolver dudas
                  y proponer cambios importantes si es viable.
                </p>
              </div>
            </li>
            <li className="group">
              <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                6
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Desarrollo y entrega</h3>
                <p className="text-gray-700 text-sm">
                  Desarrollamos tu proyecto con foco en rendimiento, estabilidad y diseño moderno.
                  Pedimos la mayor información posible para asegurar el mejor resultado.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos
            digitales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center"
            >
              Contactar al equipo
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/paquetes"
              className="border-2 border-secondary text-secondary font-bold px-8 py-4 hover:bg-secondary hover:text-white transition duration-300"
            >
              Ver paquetes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
