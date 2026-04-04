import { 
  Zap, 
  Monitor, 
  Search, 
  Target, 
  Code, 
  Users,
  Shield,
  BarChart
} from 'lucide-react';

export const auditsData = {
  es: [
    {
      id: 'performance',
      title: 'Auditoría de Performance (Velocidad & Carga)',
      icon: <Zap className="text-amber-500" />,
      description: 'Optimizamos cada milisegundo de tu sitio para que tus usuarios no tengan que esperar.',
      what: [
        'Análisis de Core Web Vitals (LCP, FID, CLS)',
        'Optimización de carga de imágenes (WebP, Lazy Loading)',
        'Revisión de tiempo de respuesta del servidor (TTFB)',
        'Minificación de archivos CSS y JavaScript',
        'Configuración avanzada de Caché y CDNs',
        'Detección de scripts de terceros pesados'
      ],
      result: 'Un sitio con puntuación 90+ en Lighthouse, carga instantánea y mejor posicionamiento en Google.'
    },
    {
      id: 'uxui',
      title: 'Auditoría UX/UI (Experiencia de Usuario)',
      icon: <Monitor className="text-blue-500" />,
      description: 'Evaluamos cómo navegan tus clientes para eliminar cualquier barrera visual o lógica.',
      what: [
        'Análisis de flujo de navegación y jerarquía visual',
        'Evaluación de usabilidad en dispositivos móviles',
        'Consistencia en el diseño y sistemas de diseño',
        'Claridad en los llamados a la acción (CTAs)',
        'Pruebas de legibilidad y contraste',
        'Análisis de mapas de calor (Heurísticas de Nielsen)'
      ],
      result: 'Una interfaz intuitiva que reduce la frustración del usuario y aumenta el tiempo de sesión.'
    },
    {
      id: 'seo',
      title: 'Auditoría SEO (Posicionamiento Técnico)',
      icon: <Search className="text-green-500" />,
      description: 'Hacemos que tu web sea "legible" y atractiva para los algoritmos de búsqueda.',
      what: [
        'Revisión de indexación y archivo robots.txt',
        'Arquitectura de encabezados (H1-H6) y etiquetas Alt',
        'Análisis de Sitemap XML y enlaces rotos',
        'Optimización de Meta-descripciones y Títulos',
        'Evaluación de canibalización de palabras clave',
        'Revisión técnica de marcado de esquema (Schema.org)'
      ],
      result: 'Aparición en los primeros resultados de Google y aumento de tráfico orgánico de calidad.'
    },
    {
      id: 'cro',
      title: 'Auditoría de Conversión (CRO)',
      icon: <Target className="text-red-500" />,
      description: 'Transformamos tus visitas en leads reales y clientes de pago.',
      what: [
        'Análisis de embudos de conversión (Funnels)',
        'Evaluación de formularios y puntos de fricción',
        'Pruebas sociales y gatillos psicológicos',
        'Optimización de Landing Pages específicas',
        'Análisis de tasa de rebote por página',
        'Estrategia de Copywriting para la acción'
      ],
      result: 'Aumento directo en tu retorno de inversión (ROI) sin necesidad de gastar más en anuncios.'
    },
    {
      id: 'code',
      title: 'Auditoría de Código & Escalabilidad (Salud Técnica)',
      icon: <Code className="text-purple-500" />,
      description: 'Evaluamos los cimientos de tu software para asegurar su futuro.',
      what: [
        'Revisión de calidad y limpieza de código',
        'Análisis de dependencias y versiones de librerías',
        'Evaluación de deuda técnica acumulada',
        'Pruebas de seguridad (Vulnerabilidades OWASP)',
        'Escalabilidad de la base de datos y arquitectura',
        'Revisión de estándares de desarrollo modernos'
      ],
      result: 'Un sistema robusto, fácil de mantener y preparado para crecer sin fallos críticos.'
    },
    {
      id: 'accessibility',
      title: 'Auditoría de Accesibilidad (WCAG)',
      icon: <Users className="text-teal-500" />,
      description: 'Aseguramos que tu sitio sea accesible para todas las personas, sin excepciones.',
      what: [
        'Cumplimiento con estándares WCAG 2.1 (Niveles A, AA)',
        'Navegación completa por teclado',
        'Etiquetado ARIA para lectores de pantalla',
        'Contraste de color y legibilidad de texto',
        'Gestión de foco y jerarquía semántica',
        'Capacitación básica en edición accesible'
      ],
      result: 'Inclusividad total, cumplimiento legal y una imagen de marca socialmente responsable.'
    }
  ],
  en: [
    {
      id: 'performance',
      title: 'Performance Audit (Speed & Load)',
      icon: <Zap className="text-amber-500" />,
      description: 'We optimize every millisecond of your site so your users don\'t have to wait.',
      what: [
        'Core Web Vitals analysis (LCP, FID, CLS)',
        'Image load optimization (WebP, Lazy Loading)',
        'Server response time review (TTFB)',
        'CSS and JavaScript file minification',
        'Advanced Cache and CDN configuration',
        'Detection of heavy third-party scripts'
      ],
      result: 'A site with 90+ Lighthouse score, instant load times, and better Google rankings.'
    },
    {
      id: 'uxui',
      title: 'UX/UI Audit (User Experience)',
      icon: <Monitor className="text-blue-500" />,
      description: 'We evaluate how your customers navigate to remove any visual or logic barriers.',
      what: [
        'Navigation flow and visual hierarchy analysis',
        'Mobile device usability evaluation',
        'Consistency in design and design systems',
        'Clarity in calls to action (CTAs)',
        'Readability and contrast testing',
        'Heatmap analysis (Nielsen Heuristics)'
      ],
      result: 'An intuitive interface that reduces user frustration and increases session time.'
    },
    {
      id: 'seo',
      title: 'SEO Audit (Technical Positioning)',
      icon: <Search className="text-green-500" />,
      description: 'We make your web "legible" and attractive to search algorithms.',
      what: [
        'Indexing review and robots.txt file',
        'Header architecture (H1-H6) and Alt tags',
        'XML Sitemap and broken link analysis',
        'Meta-description and Title optimization',
        'Keyword cannibalization evaluation',
        'Technical Schema markup review (Schema.org)'
      ],
      result: 'Appear in top Google results and increase quality organic traffic.'
    },
    {
      id: 'cro',
      title: 'Conversion Audit (CRO)',
      icon: <Target className="text-red-500" />,
      description: 'We transform your visits into real leads and paying customers.',
      what: [
        'Conversion funnel analysis (Funnels)',
        'Form evaluation and friction points',
        'Social proof and psychological triggers',
        'Specific Landing Page optimization',
        'Bounce rate analysis per page',
        'Copywriting action strategy'
      ],
      result: 'Direct increase in your return on investment (ROI) without spending more on ads.'
    },
    {
      id: 'code',
      title: 'Code & Scalability Audit (Technical Health)',
      icon: <Code className="text-purple-500" />,
      description: 'We evaluate your software foundations to ensure its future.',
      what: [
        'Code quality and cleanliness review',
        'Dependency and library version analysis',
        'Accumulated technical debt evaluation',
        'Security testing (OWASP Vulnerabilities)',
        'Database and architecture scalability',
        'Modern development standards review'
      ],
      result: 'A robust system, easy to maintain and prepared to grow without critical failures.'
    },
    {
      id: 'accessibility',
      title: 'Accessibility Audit (WCAG)',
      icon: <Users className="text-teal-500" />,
      description: 'We ensure your site is accessible to everyone, without exceptions.',
      what: [
        'WCAG 2.1 compliance (Levels A, AA)',
        'Full keyboard navigation',
        'ARIA labeling for screen readers',
        'Color contrast and text readability',
        'Focus management and semantic hierarchy',
        'Basic accessible editing training'
      ],
      result: 'Total inclusiveness, legal compliance, and a socially responsible brand image.'
    }
  ]
};
