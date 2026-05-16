import { Helmet } from 'react-helmet-async';

/**
 * SEOHead — Componente reutilizable de meta tags SEO para cada página.
 *
 * Uso:
 *   <SEOHead
 *     title="Diseño Web Profesional Chile | Syrtix"
 *     description="Descripción optimizada para Google..."
 *     canonical="/servicios"
 *     ogImage="https://syrtix.com/img/img-servicios.avif"
 *     jsonLd={[{ "@context": "https://schema.org", ... }]}
 *   />
 */

const SITE_URL = 'https://syrtix.com';
const DEFAULT_IMAGE = `${SITE_URL}/img/img-servicios.avif`;
const SITE_NAME = 'Syrtix';

export default function SEOHead({
  title,
  description,
  canonical = '/',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageWidth = '1200',
  ogImageHeight = '630',
  noIndex = false,
  jsonLd = null,
  children,
}) {
  const fullUrl = `${SITE_URL}${canonical}`;
  const safeTitle = title || SITE_NAME;
  const fullTitle = safeTitle.includes('Syrtix') ? safeTitle : `${safeTitle} | ${SITE_NAME}`;

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:locale" content="es_CL" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Hreflang */}
      <link rel="alternate" hreflang="es-CL" href={fullUrl} />
      <link rel="alternate" hreflang="x-default" href={fullUrl} />

      {/* JSON-LD Structured Data */}
      {jsonLd &&
        (Array.isArray(jsonLd) ? (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        ) : (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        ))}

      {children}
    </Helmet>
  );
}
