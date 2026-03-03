## Context

The split.twig template currently includes all CSS inline within `<style>` tags (lines 8-237). This inline CSS block contains:
- Root color variables (--primary, --accent, --bg, etc.)
- Base element styles (body, *, html)
- Component styles (.container, .dropzone, .controls, .pieces, etc.)
- Media queries for responsive design

The template is 314 lines total with 230 lines being CSS. Extracting CSS will reduce template size by 75% and improve code clarity.

## Goals / Non-Goals

**Goals:**
- Extract all CSS from `<style>` block to `resources/css/split.css`
- Remove `<style>` block from split.twig
- Link external CSS from split.twig template
- Ensure Vite imports and bundles the CSS correctly
- Maintain identical visual appearance and behavior
- Document CSS organization in extracted file

**Non-Goals:**
- CSS minification or optimization (handled by Vite build)
- CSS refactoring or reorganization (structural only)
- Change CSS variables or properties
- Modify any CSS behavior

## Decisions

1. **File Location**: Place CSS in `resources/css/split.css` (parallel to `resources/js/`). Rationale: Mirrors JavaScript structure, keeps related assets together.

2. **Import Method**: Import CSS in split.js as `import '../css/split.css'` rather than linking in HTML. Rationale: Vite will inject the link dynamically during build, ensuring CSS loads with the module, avoiding FOUC (Flash of Unstyled Content).

3. **CSS Organization**: Keep all styles in single file as currently organized. Rationale: File is manageable, components are already organized logically.

4. **Build Integration**: Vite will automatically process CSS imports and inject them into the document. No configuration changes needed.

## Risks / Trade-offs

- **Risk**: CSS import in JavaScript might not load if JavaScript fails. Mitigation: CSS is critical for rendering, JavaScript should be reliable; fallback is to link CSS in HTML.
- **Trade-off**: CSS no longer scoped to template document. Accepted: Global CSS is standard practice; no specificity issues expected.
