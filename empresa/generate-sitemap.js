// sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obtener el directorio actual del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivo final
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

const hostname = 'https://creavixsfc.com';
const sitemap = new SitemapStream({ hostname });

// Rutas de tu proyecto
const pages = [
  '/',
  '/Home',
  '/Contacto',
  '/Somos',
    '/Servicios',
];

// Agregamos las rutas al sitemap
pages.forEach((page) => sitemap.write({ url: page, changefreq: 'weekly', priority: 0.8 }));
sitemap.end();

// Generamos el sitemap y lo guardamos
streamToPromise(sitemap)
  .then((data) => writeFile(sitemapPath, data.toString()))
  .then(() => console.log(`Sitemap generado en ${sitemapPath}`))
  .catch((err) => console.error(err));
