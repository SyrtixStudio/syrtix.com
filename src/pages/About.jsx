import { Link } from 'react-router-dom';
import { Users, CheckCircle, Code, Star } from 'lucide-react';
import { useLanguage } from '../i18n';

const About = () => {
  const { lang } = useLanguage();

  const copy =
    lang === 'en'
      ? {
          heroBadge: 'ABOUT US',
          heroTitlePrefix: 'We Build ',
          heroTitleHighlight: 'Digital Solutions',
          heroDescription:
            'Hi, I am Francisco Campos. I specialize in crafting modern, high-performance web applications that drive real business results through code, design, and AI.',
          founderTitlePrefix: 'The Professional ',
          founderTitleHighlight: 'Behind Syrtix',
          founderSubtitle: 'Computer Engineer',
          founderContent:
            'With a strong background in software engineering, I founded Syrtix as a personal studio dedicated to helping businesses scale. I combine advanced technical expertise in modern web technologies with an eye for clean UI/UX and process automation.\n\nMy goal is to give your brand a robust digital presence that not only looks great but converts effectively and operates securely.',
          founderDegree: 'Software Engineer',
          founderInstitution: 'Duoc UC Alumni',
          expertiseTitle: 'Technical Expertise',
          expertiseList: [
            'Full Stack Web Development (React, Node, modern frameworks)',
            'AI Automation & Chatbots (RAG, LLM integrations)',
            'Performance Optimization & Technical SEO',
            'Solid Security & Architecture Practices',
          ],
          whyTitlePrefix: 'Why Work ',
          whyTitleHighlight: 'With Me',
          whyItems: [
            'Direct communication with the lead engineer.',
            'No agency bloat or unnecessary overhead.',
            'Transparent pricing and clear expectations.',
            'Focus on scalable and maintainable solutions.',
          ],
          methodologyTitle: 'Simple Workflow',
          methodologyItems: [
            {
              title: '1. Discovery',
              desc: 'We analyze your current challenges and define the ideal solution.',
            },
            {
              title: '2. Planning',
              desc: 'We outline the scope, timeline, and exact deliverables.',
            },
            {
              title: '3. Execution',
              desc: 'I develop the product with weekly progress updates.',
            },
            {
              title: '4. Delivery',
              desc: 'We go live with a fast, modern, and polished platform.',
            },
          ],
          ctaTitle: 'Ready to build together?',
          ctaDescription:
            'Tell me about your project and let us discover how I can help you achieve your digital goals.',
          contactTeam: 'Get in Touch',
          viewPackages: 'View Packages',
        }
      : {
          heroBadge: 'SOBRE NOSOTROS',
          heroTitlePrefix: 'Construimos ',
          heroTitleHighlight: 'Soluciones Digitales',
          heroDescription:
            'Hola, soy Francisco Campos. Me especializo en crear aplicaciones web modernas y de alto rendimiento que generan resultados reales a traves del codigo, el diseno y la IA.',
          founderTitlePrefix: 'El Profesional ',
          founderTitleHighlight: 'Detras de Syrtix',
          founderSubtitle: 'Ingeniero Informático',
          founderContent:
            'Con una fuerte base en ingenieria de software, funde Syrtix como un estudio personal dedicado a ayudar a las empresas a escalar. Combino avanzada experiencia tecnica en tecnologias web modernas con un enfoque en UI/UX limpio y automatizacion de procesos.\n\nMi objetivo es darle a tu marca una presencia digital robusta que no solo se vea increible sino que convierta de manera efectiva y opere con seguridad.',
          founderDegree: 'Ingeniero en Informática',
          founderInstitution: 'Titulado en Duoc UC',
          expertiseTitle: 'Expertise Tecnico',
          expertiseList: [
            'Desarrollo Web Full Stack (React, Node, frameworks modernos)',
            'Automatizacion IA y Chatbots (RAG, integraciones LLM)',
            'Optimizacion de Rendimiento y SEO Tecnico',
            'Practicas Solidas de Seguridad y Arquitectura',
          ],
          whyTitlePrefix: 'Por Que Trabajar ',
          whyTitleHighlight: 'Conmigo',
          whyItems: [
            'Comunicacion directa con el ingeniero principal.',
            'Sin burocracia ni costos innecesarios de agencia.',
            'Precios transparentes y expectativas claras.',
            'Foco en soluciones escalables y mantenibles.',
          ],
          methodologyTitle: 'Flujo de Trabajo Simple',
          methodologyItems: [
            {
              title: '1. Descubrimiento',
              desc: 'Analizamos tus desafios actuales y definimos la solucion ideal.',
            },
            {
              title: '2. Planificacion',
              desc: 'Trazamos el alcance, cronograma y entregables exactos.',
            },
            {
              title: '3. Ejecucion',
              desc: 'Desarrollo el producto con actualizaciones semanales.',
            },
            {
              title: '4. Entrega',
              desc: 'Lanzamos una plataforma rapida, moderna y pulida.',
            },
          ],
          ctaTitle: '¿Listo para trabajar juntos?',
          ctaDescription:
            'Cuentame sobre tu proyecto y descubramos como puedo ayudarte a alcanzar tus objetivos digitales.',
          contactTeam: 'Contactar',
          viewPackages: 'Ver Paquetes',
        };

  return (
    <main className="min-h-screen bg-base">
      {/* Hero Section - KEEPS EXACT STYLING AND BACKGROUND */}
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

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {copy.heroDescription}
          </p>
        </div>
      </section>

      {/* Founder Content Section */}
      <section className="py-16 px-4 sm:px-6 bg-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  {copy.founderTitlePrefix}
                  <span className="text-primary">{copy.founderTitleHighlight}</span>
                </h2>

                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src="/img/Logo_DuocUC.svg.png" 
                    alt="Duoc UC Logo" 
                    className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="text-sm">
                    <p className="font-bold text-gray-800">{copy.founderDegree}</p>
                    <p className="text-gray-500">{copy.founderInstitution}</p>
                  </div>
                </div>

                <div className="text-gray-600 space-y-4 whitespace-pre-line leading-relaxed text-lg">
                  {copy.founderContent}
                </div>
              </div>
            
            <div className="bg-base2 border-l-4 border-primary p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Code className="text-primary" size={24} />
                {copy.expertiseTitle}
              </h3>
              <ul className="space-y-4">
                {copy.expertiseList.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me & Methodology */}
      <section className="py-16 px-4 sm:px-6 bg-base2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Why Me */}
          <div>
             <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              {copy.whyTitlePrefix}
              <span className="text-primary">{copy.whyTitleHighlight}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {copy.whyItems.map((item, idx) => (
                <div key={idx} className="flex items-center p-4 bg-base border border-gray-200">
                  <Star className="text-primary mr-4 flex-shrink-0" size={24} />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              {copy.methodologyTitle}
            </h2>
            <div className="space-y-6 relative border-l-2 border-primary/30 ml-3">
              {copy.methodologyItems.map((step, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-base2"></div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-primary text-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{copy.ctaTitle}</h2>
          <p className="text-lg sm:text-xl font-medium mb-8 max-w-2xl mx-auto">
            {copy.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contacto"
              className="px-8 py-3 bg-gray-900 text-primary font-bold hover:bg-gray-800 transition-colors shadow-lg"
            >
              {copy.contactTeam}
            </Link>
            <Link
              to="/paquetes"
              className="px-8 py-3 bg-transparent border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-primary transition-colors"
            >
              {copy.viewPackages}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

