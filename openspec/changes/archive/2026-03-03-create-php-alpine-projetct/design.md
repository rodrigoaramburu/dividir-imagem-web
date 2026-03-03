# Design for create-php-alpine-projetct

## Overview

A lightweight PHP starter that combines Slim framework with Twig templating and a minimal frontend using Alpine.js. Vite will handle asset bundling for the JavaScript layer, keeping the developer experience modern and fast.

## Project Structure

```
php-slim-project/
├── public/               # webroot
│   ├── index.php         # Slim bootstrap
│   └── assets/           # compiled JS/CSS from Vite
├── src/
│   ├── Controller/
│   │   └── HomeController.php
│   └── templates/
│       └── home.twig
├── package.json          # for Vite and Alpine.js
├── vite.config.js
├── composer.json         # Slim and Twig deps
├── .gitignore
└── README.md
```

### Backend

- **Slim**: Lightweight routing engine. `public/index.php` will create the app instance and define a simple `/` route handled by `HomeController`.
- **Twig**: Template engine; templates located under `src/templates`. `HomeController` passes data to `home.twig`.

### Frontend

- **Alpine.js**: Used for small interactive bits inside Twig templates.
- **Vite**: Bundles JavaScript. `package.json` will include Alpine and configure `vite.config.js` to output to `public/assets`. Development mode serves assets with hot‑reload, production builds to static files.

### Composer

Composer dependencies: `slim/slim:^4`, `slim/psr7`, `slim/twig-view` or `twig/twig`. A basic `composer.json` with autoloading for `src/`.

### Asset pipeline

The Vite setup will use a simple entrypoint (e.g., `resources/js/app.js`) importing Alpine and initializing it. Output goes to `public/assets/app.js` and is referenced from `home.twig`.

### README.md

Explain how to:
1. Run `composer install`.
2. Start PHP server (`php -S localhost:8080 -t public`).
3. Run `npm install` and `npm run dev` for frontend assets.
4. Build production assets with `npm run build`.

## Considerations

- Make sure PSR‑4 autoloading is configured.
- Keep bundle small; no heavy JS frameworks.
- Provide sample Alpine component in template.

## Validation

Local development should display a homepage with data rendered by Twig and a tiny Alpine-driven interaction (e.g., toggle text). Asset hot‑reload should work during `npm run dev`.
