import { useLanguage } from '../../i18n/index.jsx';

const techLogos = [
  {
    name: 'React',
    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Node.js',
    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'PostgreSQL',
    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Docker',
    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'TypeScript',
    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'Google Cloud',
    svg: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  },
];

function TrustBar() {
  const { lang } = useLanguage();

  const label = lang === 'en' ? 'Technologies we work with' : 'Tecnologías con las que trabajamos';

  return (
    <section className="bg-base2 border-b border-gray-200 py-6">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        <p className="text-center text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
          {label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {techLogos.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={tech.svg}
                alt={tech.name}
                className="h-7 w-7 object-contain"
                loading="lazy"
              />
              <span className="text-xs font-semibold text-gray-500 hidden sm:inline">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
