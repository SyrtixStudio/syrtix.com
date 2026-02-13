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

import { useLanguage } from '../i18n/index.jsx';

function About() {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'Meet the team',
          heroTitlePrefix: 'We are ',
          heroTitleHighlight: 'syrtix',
          heroDescription:
            'A team passionate about building exceptional digital experiences that drive our clients growth.',
          missionTitle: 'Our Mission',
          missionText:
            'Democratize access to professional websites through cutting-edge technology and accessible pricing, so every business can have a digital presence that delivers results.',
          visionTitle: 'Our Vision',
          visionText:
            'Be the leading web development agency in Latin America, recognized for technical excellence, innovative design, and outstanding client service.',
          valuesTitlePrefix: 'Our ',
          valuesTitleHighlight: 'values',
          valuesSubtitle: 'Principles that guide every decision and every line of code',
          teamTitlePrefix: 'Our ',
          teamTitleHighlight: 'team',
          teamSubtitle: 'Passionate professionals committed to your success',
          stats: [
            { value: '50+', label: 'Projects delivered' },
            { value: '100%', label: 'Satisfied clients' },
            { value: '5+', label: 'Years of experience' },
            { value: '24/7', label: 'Support available' },
          ],
          whyTitlePrefix: 'Why work with ',
          whyTitleHighlight: 'us',
          whyItems: [
            'Multidisciplinary team with proven experience',
            'AI-integrated modern technology',
            'Transparent pricing with no surprises',
            'Technical support included in all plans',
            'Satisfaction guarantee for every project',
            'Constant communication during the whole process',
          ],
          formulaTitle: 'Technology + Creativity = Results',
          formulaText:
            'We combine the latest technologies with user-centered design to build websites that not only look great, but also drive real conversions for your business.',
          viewServices: 'View our services',
          howTitlePrefix: 'How do we ',
          howTitleHighlight: 'work with you',
          methodologyText:
            'At syrtix we use Scrum methodology, which means you are an active part of the process with weekly checkpoints and full transparency.',
          methodologyItems: [
            'First meeting: we analyze your current challenges and define the best solution.',
            'Project charter: we document scope, goals, constraints, and success criteria.',
            'Timeline and planning: clear milestones and deliverables for each stage.',
            'Mockups and prototypes: you validate before development starts.',
            'Weekly meetings: progress review, questions, and viable changes.',
            'Quality focus: we collect context deeply to deliver modern, fast, and stable products.',
            'Security and trust: SSL and security best practices included by default.',
          ],
          expertiseTitle: 'Technical expertise and trust',
          expertiseText1:
            'Our team has strong background in software engineering, databases, machine learning, cybersecurity, and project management.',
          expertiseText2:
            'We stay updated continuously to integrate modern technologies and methodologies into every project.',
          processTitlePrefix: 'Our work ',
          processTitleHighlight: 'methodology',
          processTitleSuffix: '',
          processSubtitle:
            'We work with Scrum to ensure transparency, flexibility, and outcomes aligned with your goals.',
          process: [
            { title: 'Discovery meeting', desc: 'We identify your pain points and define the best solution.' },
            { title: 'Project charter', desc: 'We document what is included, excluded, and success criteria.' },
            { title: 'Timeline and plan', desc: 'You receive a clear schedule with milestones and dates.' },
            { title: 'Mockups and prototypes', desc: 'You review and approve the product vision before coding.' },
            { title: 'Weekly check-ins', desc: 'We review progress, clear blockers, and align decisions.' },
            { title: 'Development and delivery', desc: 'We build with focus on speed, stability, and quality.' },
          ],
          ctaTitle: 'Ready to work together?',
          ctaDescription:
            'Tell us about your project and discover how we can help you achieve your digital goals.',
          contactTeam: 'Contact the team',
          viewPackages: 'View packages',
          values: [
            {
              icon: <Zap size={28} />,
              title: 'Innovation',
              description: 'We use modern technologies and methodologies to create cutting-edge solutions.',
            },
            {
              icon: <Heart size={28} />,
              title: 'Passion',
              description: 'We love what we do and it shows in every line of code and every design detail.',
            },
            {
              icon: <Shield size={28} />,
              title: 'Commitment',
              description: 'Your success is our success. We are 100% involved in every project.',
            },
            {
              icon: <Users size={28} />,
              title: 'Collaboration',
              description: 'We work with you as one team, not just as providers.',
            },
          ],
          team: [
            {
              name: 'Francisco Campos',
              role: 'CEO & Founder',
              description: '10+ years of experience in software development and digital strategy.',
            },
            {
              name: 'Maria Gonzalez',
              role: 'Design Director',
              description: 'UX/UI specialist focused on conversion-driven design.',
            },
            {
              name: 'Andres Silva',
              role: 'Lead Developer',
              description: 'Expert in React, Node.js, and scalable architectures.',
            },
            {
              name: 'Valentina Rojas',
              role: 'Project Manager',
              description: 'Ensures each project is delivered on time and exceeds expectations.',
            },
          ],
        }
      : {
          heroBadge: 'Conoce al equipo',
          heroTitlePrefix: 'Somos ',
          heroTitleHighlight: 'syrtix',
          heroDescription:
            'Un equipo apasionado por crear experiencias digitales excepcionales que impulsan el crecimiento de nuestros clientes.',
          missionTitle: 'Nuestra Mision',
          missionText:
            'Democratizar el acceso a sitios web profesionales mediante tecnologia de vanguardia y precios accesibles, permitiendo que cada negocio tenga una presencia digital que genere resultados reales.',
          visionTitle: 'Nuestra Vision',
          visionText:
            'Ser la agencia de desarrollo web de referencia en Latinoamerica, reconocida por combinar excelencia tecnica, Diseño innovador y un servicio al cliente que supera expectativas.',
          valuesTitlePrefix: 'Nuestros ',
          valuesTitleHighlight: 'valores',
          valuesSubtitle: 'Los principios que guian cada decision y cada linea de codigo',
          teamTitlePrefix: 'Nuestro ',
          teamTitleHighlight: 'equipo',
          teamSubtitle: 'Profesionales apasionados comprometidos con tu exito',
          stats: [
            { value: '50+', label: 'Proyectos entregados' },
            { value: '100%', label: 'Clientes satisfechos' },
            { value: '5+', label: 'años de experiencia' },
            { value: '24/7', label: 'Soporte disponible' },
          ],
          whyTitlePrefix: 'Por que trabajar con ',
          whyTitleHighlight: 'nosotros',
          whyItems: [
            'Equipo multidisciplinario con experiencia comprobada',
            'Tecnologia de punta con IA integrada',
            'Precios transparentes sin sorpresas',
            'Soporte tecnico incluido en todos los planes',
            'Garantia de satisfaccion en cada proyecto',
            'Comunicacion constante durante todo el proceso',
          ],
          formulaTitle: 'Tecnologia + Creatividad = Resultados',
          formulaText:
            'Combinamos las ultimas tecnologias con Diseño centrado en el usuario para crear sitios web que no solo se ven bien, sino que generan conversiones reales para tu negocio.',
          viewServices: 'Ver nuestros servicios',
          howTitlePrefix: 'Como ',
          howTitleHighlight: 'trabajamos contigo',
          methodologyText:
            'En syrtix utilizamos la metodologia agil Scrum. Tendras reuniones semanales con nuestro equipo para revisar avances y proponer cambios viables.',
          methodologyItems: [
            'Primera reunion: analizamos tus problemas actuales y definimos la mejor solucion.',
            'Acta de constitucion: documentamos alcance, objetivos, restricciones y criterios de exito.',
            'Cronograma y plan: fechas y entregables claros por etapa.',
            'Mockups y prototipos: visualizas el producto final antes del desarrollo.',
            'Reuniones semanales: revisamos avances, dudas y cambios viables.',
            'Enfoque en calidad: producto moderno, elegante, rapido y estable.',
            'Seguridad y confianza: SSL y buenas practicas de seguridad por defecto.',
          ],
          expertiseTitle: 'Especializacion tecnica y confianza',
          expertiseText1:
            'Nuestro equipo esta formado por profesionales con formacion en ingenieria de software, bases de datos, machine learning, seguridad informatica y gestion de proyectos.',
          expertiseText2:
            'Estamos en constante actualizacion para integrar nuevas tecnologias y metodologias en cada proyecto.',
          processTitlePrefix: 'Nuestra ',
          processTitleHighlight: 'metodologia',
          processTitleSuffix: ' de trabajo',
          processSubtitle:
            'Trabajamos con metodologia agil Scrum, asegurando transparencia, flexibilidad y resultados alineados a tus objetivos.',
          process: [
            { title: 'Primera reunion', desc: 'Analizamos tus dolores y proponemos la mejor solucion.' },
            { title: 'Acta de constitucion', desc: 'Definimos alcance, objetivos y criterios de exito.' },
            { title: 'Cronograma y plan', desc: 'Te entregamos fechas y entregables claros por etapa.' },
            { title: 'Mockups y prototipos', desc: 'Visualizas el resultado y das feedback antes de desarrollar.' },
            { title: 'Reuniones semanales', desc: 'Revisamos avances, resolvemos dudas y ajustamos decisiones.' },
            { title: 'Desarrollo y entrega', desc: 'Construimos con foco en rendimiento, estabilidad y Diseño.' },
          ],
          ctaTitle: 'Listo para trabajar juntos?',
          ctaDescription:
            'Cuentaños sobre tu proyecto y descubre como podemos ayudarte a alcanzar tus objetivos digitales.',
          contactTeam: 'Contactar al equipo',
          viewPackages: 'Ver paquetes',
          values: [
            {
              icon: <Zap size={28} />,
              title: 'Innovacion',
              description: 'Utilizamos las ultimas tecnologias y metodologias para crear soluciones modernas.',
            },
            {
              icon: <Heart size={28} />,
              title: 'Pasion',
              description: 'Amamos lo que hacemos y se refleja en cada linea de codigo y cada pixel.',
            },
            {
              icon: <Shield size={28} />,
              title: 'Compromiso',
              description: 'Tu exito es nuestro exito. Nos involucramos 100% en cada proyecto.',
            },
            {
              icon: <Users size={28} />,
              title: 'Colaboracion',
              description: 'Trabajamos contigo como un equipo, no solo como proveedores.',
            },
          ],
          team: [
            {
              name: 'Francisco Campos',
              role: 'CEO & Fundador',
              description: 'Mas de 10 años de experiencia en desarrollo de software y estrategia digital.',
            },
            {
              name: 'Maria Gonzalez',
              role: 'Directora de Diseño',
              description: 'Especialista en UX/UI con enfoque en Diseños que convierten.',
            },
            {
              name: 'Andres Silva',
              role: 'Lead Developer',
              description: 'Experto en React, Node.js y arquitecturas escalables.',
            },
            {
              name: 'Valentina Rojas',
              role: 'Project Manager',
              description: 'Garantiza que cada proyecto se entregue a tiempo y supere expectativas.',
            },
          ],
        };

  return (
    <main className="min-h-screen bg-base">
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 via-secondary to-gray-900 mt-20 lg:mt-28">
        <div className="absolute inset-0">
          <img
            src="/img/img-nosotros.webp"
            alt="about background"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center bg-primary/20 border border-primary/40 px-4 py-2 mb-6">
            <Users size={16} className="text-primary mr-2" />
            <span className="text-primary text-xs sm:text-sm font-medium">{copy.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.heroTitlePrefix}
            <span className="text-primary">{copy.heroTitleHighlight}</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">{copy.heroDescription}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-base border-2 border-gray-200 hover:border-primary p-8 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-primary p-3 mr-4">
                  <Target size={28} className="text-gray-900" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{copy.missionTitle}</h2>
              </div>
              <p className="text-gray-600">{copy.missionText}</p>
            </div>

            <div className="bg-base border-2 border-gray-200 hover:border-primary p-8 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-secondary p-3 mr-4">
                  <Rocket size={28} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{copy.visionTitle}</h2>
              </div>
              <p className="text-gray-600">{copy.visionText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.valuesTitlePrefix}
              <span className="text-primary">{copy.valuesTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.valuesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.values.map((value, idx) => (
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

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.teamTitlePrefix}
              <span className="text-primary">{copy.teamTitleHighlight}</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.teamSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {copy.team.map((member, idx) => (
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

      <section className="py-16 px-4 sm:px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {copy.stats.map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {copy.whyTitlePrefix}
                <span className="text-primary">{copy.whyTitleHighlight}</span>?
              </h2>

              <div className="space-y-4">
                {copy.whyItems.map((item, idx) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">{copy.formulaTitle}</h3>
                <p className="text-gray-600 mb-6">{copy.formulaText}</p>
                <Link
                  to="/servicios"
                  className="inline-flex items-center text-secondary font-bold hover:text-primary transition-all duration-300"
                >
                  {copy.viewServices}
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.howTitlePrefix}
              <span className="text-primary">{copy.howTitleHighlight}</span>?
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-base text-gray-700 mb-6">{copy.methodologyText}</p>
            <ul className="text-left text-gray-700 space-y-2 max-w-2xl mx-auto">
              {copy.methodologyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{copy.expertiseTitle}</h3>
          <p className="text-base text-gray-700 mb-2">{copy.expertiseText1}</p>
          <p className="text-base text-gray-700">{copy.expertiseText2}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {copy.processTitlePrefix}
              <span className="text-primary">{copy.processTitleHighlight}</span>
              {copy.processTitleSuffix}
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-4"></div>
            <p className="text-sm sm:text-gray-600 text-gray-600 max-w-2xl mx-auto">{copy.processSubtitle}</p>
          </div>

          <ol className="relative border-l-4 border-primary pl-8 space-y-12">
            {copy.process.map((item, index) => (
              <li key={item.title} className="group">
                <div className="absolute -left-5 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-gray-900 font-bold text-lg border-4 border-white shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm group-hover:border-primary transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{copy.ctaTitle}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{copy.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="bg-primary text-gray-900 font-bold px-8 py-4 hover:bg-amber-500 transition duration-300 flex items-center justify-center"
            >
              {copy.contactTeam}
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/paquetes"
              className="border-2 border-secondary text-secondary font-bold px-8 py-4 hover:bg-secondary hover:text-white transition duration-300"
            >
              {copy.viewPackages}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
