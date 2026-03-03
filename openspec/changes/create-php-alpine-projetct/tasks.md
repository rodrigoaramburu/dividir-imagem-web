# Tasks for create-php-alpine-projetct

1. **Initialize repository structure**
   - Create `public/`, `src/`, `src/Controller/`, `src/templates/`, and `resources/js/` directories.
   - Add `.gitignore` ignoring `vendor/`, `node_modules/`, `public/assets/`, `.env`.

2. **Setup Composer backend**
   - Create `composer.json` with dependencies: `slim/slim:^4`, `slim/psr7`, `slim/twig-view` (or `twig/twig`).
   - Configure PSR-4 autoloading for `App\` namespace pointing to `src/`.
   - Run `composer install` to generate `vendor/`.

3. **Create Slim bootstrap and controller**
   - Write `public/index.php` to instantiate Slim app, add Twig middleware, and define route `/`.
   - Implement `HomeController.php` with an `index` method that renders `home.twig`.

4. **Add Twig template**
   - Create `home.twig` with basic HTML structure and a placeholder for Alpine component.
   - Include `<script type="module" src="/assets/app.js"></script>` in template.

5. **Setup Vite and Alpine.js**
   - Initialize `package.json` (`npm init -y`) and install `vite`, `alpinejs` as dev dependencies.
   - Configure `vite.config.js` to use `resources/js/app.js` entry and output to `public/assets`.
   - Write `resources/js/app.js` importing Alpine and starting it (`import Alpine from 'alpinejs'; window.Alpine = Alpine; Alpine.start();`).

6. **Frontend dev workflow**
   - Add npm scripts: `dev` (vite) and `build`.
   - Document how to run `npm run dev` for live reload and `npm run build` for production.

7. **Create README.md**
   - Document installation steps for PHP (composer) and JS (npm), running dev servers, and building assets.

8. **Add minimal Alpine interaction**
   - In `home.twig`, add an Alpine `x-data` toggle section or similar to verify JS is working.

9. **Test everything locally**
   - Start PHP built-in server and Vite dev server; verify homepage renders and Alpine component responds.
   - Run production build and serve without dev server to ensure assets load.

10. **Commit scaffold**
   - Write a clear commit message summarizing the new project setup.

11. **Next steps documentation**
   - Suggest adding routes, middleware, or converting to a more complex project.

