# PHP Slim Starter with Alpine.js and Vite

This repository provides a minimal PHP application using Slim framework, Twig templates, and a lightweight frontend built with Alpine.js bundled by Vite.

## Setup

### Backend

1. Install PHP dependencies:
   ```bash
   composer install
   ```

2. Start the PHP built-in server:
   ```bash
   php -S localhost:8080 -t public
   ```

### Frontend

1. Install Node dependencies:
   ```bash
   npm install
   ```
   (this now includes `jszip` used by the image splitter)

2. Start the Vite dev server (hot reload):
   ```bash
   npm run dev
   ```

   The splitter is the main page and will be available at `http://localhost:8080`.

3. For production, build assets:
   ```bash
   npm run build
   ```
   The compiled files are placed in `public/assets` and will be served by PHP.

## Project Structure

- `public/` – web root and Slim bootstrap
- `src/` – PHP source code and Twig templates
- `resources/js/` – frontend entrypoint for Alpine.js
- `vite.config.js` – configuration for asset bundling

## Development Notes

- The homepage demonstrates a simple Alpine toggle component.
- Add routes in `public/index.php` and controllers under `src/Controller`.
- Extend Twig templates in `src/templates`.

## SEO & Deployment

To keep the site discoverable and performant:

- The main template (`src/templates/split.twig`) already includes metadata, Open Graph, Twitter Cards, and schema.org markup.
- Static files `public/robots.txt` and `public/sitemap.xml` control crawler behavior; update the sitemap when adding new pages.
- Use the `npm run build` process to generate minified, hashed assets via Vite (see `vite.config.js`).
- Configure your web server (Apache, Nginx, etc.) to add long-term `Cache-Control` headers for `/assets/*` since files are fingerprinted.
- Run `npm run audit` (added by this change) to execute Lighthouse and check performance/SEO scores.

Happy coding!