## Functional Requirements

**REQ1**: All CSS from split.twig `<style>` block shall be copied to `resources/css/split.css` without modification.

**REQ2**: The CSS file shall be imported in `resources/js/split.js` via `import '../css/split.css'`.

**REQ3**: The `<style>` tag and all inline CSS shall be removed from `src/templates/split.twig`.

**REQ4**: Vite build output shall include the CSS integrated into the bundle.

## Non-Functional Requirements

**NFR1**: File size: Split.twig template shall be reduced from 314 lines to 84 lines (75% reduction).

**NFR2**: Performance: CSS shall load with the same or better performance as before (Vite handles bundling).

**NFR3**: Maintainability: CSS file should be readable with organized sections.

## Scenarios

### Scenario A: CSS File Creation and Organization (Happy Path)

**Given** split.twig contains 230 lines of CSS in a `<style>` block

**When** we extract all CSS to `resources/css/split.css`

**Then** 
- New file contains all CSS exactly as it appeared in the style tag
- CSS is organized in sections (Root variables, Base styles, Layout, Components, Responsive)
- File is readable and properly formatted

**And** `npm run build` completes without errors

**And** generated split.js bundle includes the CSS

---

### Scenario B: Template Updated with CSS Import (Happy Path)

**Given** CSS has been extracted to `resources/css/split.css`

**When** we modify `resources/js/split.js` to import the CSS file

**Then** 
- split.js contains `import '../css/split.css'` at the top of the file
- All Alpine component functionality remains unchanged
- Template still functions identically in the browser

---

### Scenario C: Template HTML Cleaned (Happy Path)

**Given** the `<style>` block exists in split.twig

**When** we remove the entire `<style>` element (lines 8-237)

**Then**
- Template file is simplified
- No CSS is left in the HTML
- Number of lines reduces from 314 to 84

---

### Scenario D: Visual Appearance Unchanged (Verification)

**Given** CSS has been moved to external file and split.js imports it

**When** we build the project with `npm run build` and load the page in browser

**Then**
- All colors remain: teal (#0d7377), orange (#ff8c42)
- All layout and responsive design work (grid, flex, media queries)
- Roboto font renders correctly
- No visual regression from inline to external CSS
- Upload area, controls, preview, pieces, and buttons display identically

---

### Scenario E: Build Output Verification (Technical)

**Given** the project is built with the new CSS file

**When** we run `npm run build`

**Then**
- Build completes successfully with no errors or warnings
- Output includes `public/assets/split.js` with embedded CSS
- No separate CSS file needed in public/assets/ (CSS is bundled)
- Browser DevTools shows CSS is loaded and applied to elements
