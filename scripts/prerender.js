#!/usr/bin/env node
/**
 * prerender.js — Pre-renders all public routes at build time.
 *
 * How it works:
 * 1. Spins up a local static server from the `dist/` folder.
 * 2. Opens each route with Puppeteer (headless Chrome).
 * 3. Waits for the SPA to hydrate and render fully.
 * 4. Captures the rendered HTML (including react-helmet-async <head> tags).
 * 5. Saves the HTML as static files in dist/ (e.g., dist/servicios/index.html).
 *
 * Result: Google receives fully-rendered HTML with meta tags, JSON-LD schemas,
 * and visible content on the FIRST request — no JavaScript execution needed.
 *
 * Usage: node scripts/prerender.js
 */

import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import puppeteer from 'puppeteer';

// ─── Configuration ───────────────────────────────────
const DIST_DIR = join(process.cwd(), 'dist');
const PORT = 4173;
const TIMEOUT_MS = 15000;

/**
 * All public routes that should be pre-rendered.
 * Add new routes here when creating new pages.
 */
const CITY_SLUGS = [
  'santiago', 'concepcion', 'valparaiso', 'vina-del-mar', 'antofagasta',
  'arica', 'iquique', 'calama', 'copiapo', 'la-serena', 'coquimbo',
  'quillota', 'los-andes', 'san-antonio', 'rancagua', 'machali',
  'talca', 'curico', 'chillan', 'los-angeles', 'temuco', 'pucon',
  'valdivia', 'osorno', 'puerto-montt', 'puerto-varas', 'coyhaique',
  'punta-arenas'
];

const ROUTES = [
  '/',
  '/servicios',
  '/paquetes',
  '/nosotros',
  '/contacto',
  '/blog',
  '/blog/cuanto-cuesta-una-pagina-web-en-chile',
  '/blog/por-que-necesito-una-pagina-web',
  '/blog/shopify-vs-woocommerce-vs-custom-code',
  '/politica-privacidad',
  '/terminos-condiciones',
  '/aviso-legal',
  ...CITY_SLUGS.map(slug => `/diseno-web-${slug}`)
];

// ─── MIME types for static server ────────────────────
const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
};

// ─── Static file server ──────────────────────────────
function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback: serve index.html for routes without file extensions
      if (!existsSync(filePath) || !extname(filePath)) {
        filePath = join(DIST_DIR, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        // Fallback to index.html for SPA routing
        const content = readFileSync(join(DIST_DIR, 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });

    server.listen(PORT, () => {
      console.log(`📡 Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

// ─── Pre-render a single route ───────────────────────
async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `http://localhost:${PORT}${route}`;

  try {
    console.log(`  ⏳ Rendering ${route}...`);

    await page.goto(url, { waitUntil: 'networkidle0', timeout: TIMEOUT_MS });

    // Wait for React to hydrate and react-helmet-async to inject <head> tags
    await page.waitForFunction(
      () => {
        const title = document.title;
        const hasContent = document.querySelector('main, article, section, .min-h-screen');
        return title && title !== 'Syrtix — Ingeniería Web de Alto Impacto' && hasContent;
      },
      { timeout: TIMEOUT_MS }
    ).catch(() => {
      // Fallback: wait a fixed time for home page or pages with default title
      return new Promise((r) => setTimeout(r, 5000));
    });

    // Extra wait for animations/lazy content
    await new Promise((r) => setTimeout(r, 1500));

    // Get the fully rendered HTML
    let html = await page.content();

    // Clean up: remove Vite dev-specific artifacts and scripts that re-render
    // Keep the static HTML but add a marker for pre-rendered content
    html = html.replace(
      '</head>',
      '  <meta name="prerender-status" content="pre-rendered">\n  </head>'
    );

    // Determine output path
    const outputDir =
      route === '/' ? DIST_DIR : join(DIST_DIR, ...route.split('/').filter(Boolean));

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    const outputFile = join(outputDir, 'index.html');
    writeFileSync(outputFile, html, 'utf-8');

    const sizeKB = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1);
    console.log(`  ✅ ${route} → ${outputFile.replace(DIST_DIR, 'dist')} (${sizeKB} KB)`);
  } catch (error) {
    console.error(`  ❌ Failed to render ${route}: ${error.message}`);
  } finally {
    await page.close();
  }
}

// ─── Main execution ──────────────────────────────────
async function main() {
  console.log('\n🚀 Starting pre-render process...\n');
  console.log(`📁 Output: ${DIST_DIR}`);
  console.log(`📄 Routes: ${ROUTES.length}\n`);

  // Verify dist exists
  if (!existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory not found. Run "pnpm build" first.');
    process.exit(1);
  }

  const server = await startStaticServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  try {
    for (const route of ROUTES) {
      await prerenderRoute(browser, route);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n✨ Pre-rendering complete!\n');
  console.log('📌 Next steps:');
  console.log('   1. Deploy the dist/ folder to your hosting provider');
  console.log('   2. Test with Google Rich Results Test: https://search.google.com/test/rich-results');
  console.log('   3. Submit updated sitemap in Google Search Console\n');
}

main().catch((error) => {
  console.error('\n❌ SEO Pre-render failed:', error.message);
  console.log('⚠️ The build will continue, but static HTML files for city pages may not be generated.');
  console.log('💡 Tip: Run "pnpm run build" locally and upload the "dist" folder if SEO is critical.');
  process.exit(0); // Don't kill the build in CI
});
