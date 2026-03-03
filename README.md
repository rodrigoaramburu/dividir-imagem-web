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

2. Start the Vite dev server (hot reload):
   ```bash
   npm run dev
   ```

   Browse `http://localhost:8080` (PHP server) while Vite serves assets on another port.

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

Happy coding!