# Tasks for add-image-splitter-tool

1. **Install JSZip**
   - Run `npm install jszip` and add to `package.json` devDependencies.

2. **Add new Slim route and template**
   - Register `/` route in `public/index.php` (the splitter will be the main page).
   - Create `src/templates/split.twig` with basic structure and placeholders for controls.

3. **Create split.js logic**
   - Write `resources/js/split.js` implementing Alpine component:
     - Data: `imagem`, `tipo`, `linhas`, `colunas`, `pecas`, `selecionadas`.
     - Methods: `onFileChange`, `generatePreview`, `toggleSelect`, `downloadZip`.
     - Use `FileReader` to load image, draw on hidden canvas, extract pieces.

4. **Update Vite config**
   - Add new entry in `vite.config.js` for `resources/js/split.js` output (e.g., `split.js`).
   - Update `split.twig` to include `<script type="module" src="/assets/split.js"></script>`.

5. **Build frontend UI**
   - In template, create drag-drop area and inputs for tipo/linhas/colunas.
   - Display preview image with overlay lines (use CSS or canvas element).
   - Show thumbnails grid with checkboxes for each piece.

6. **Implement ZIP download**
   - Use JSZip to collect selected pieces and create a `.zip` blob.
   - Trigger download via `a` element or `FileSaver` techniques.

7. **Translate interface text**
   - Ensure all labels/buttons are in Portuguese (e.g. "Selecionar arquivo", "Arraste a imagem aqui").

8. **Style adjustments**
   - Add minimal CSS to make the tool usable (e.g., dashed border for preview, grid layout).

9. **Testing**
   - Manually test with different image sizes and split configurations.
   - Verify that unselected pieces are not included in ZIP.
   - Ensure no server communication occurs (inspect network tab).

10. **Documentation**
   - Update README with instructions to use the new Split tool page.
   - Note any limitations (max image size, supported formats: JPG/PNG).

11. **Commit changes**
   - Add all new files and update package/dependencies.
   - Write commit message like "feat: add image splitter tool (frontend only)".
