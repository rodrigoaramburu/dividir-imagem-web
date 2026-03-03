## 1. Create CSS file

- [x] 1.1 Create new file `resources/css/split.css`
- [x] 1.2 Extract all CSS from lines 9-255 of `src/templates/split.twig` (all content inside `<style>` tags)
- [x] 1.3 Paste CSS into new split.css file with proper formatting and indentation
- [x] 1.4 Verify no encoding issues or line break problems

## 2. Import CSS in JavaScript

- [x] 2.1 Open `resources/js/split.js`
- [x] 2.2 Add `import '../css/split.css';` at the very top of the file (before any other imports)
- [x] 2.3 Verify import syntax is correct

## 3. Remove style block from template

- [x] 3.1 Open `src/templates/split.twig`
- [x] 3.2 Locate the `<style>` opening tag (line 8)
- [x] 3.3 Locate the `</style>` closing tag (line 256)
- [x] 3.4 Delete the entire `<style>...</style>` block including both tags
- [x] 3.5 Keep the Google Fonts `<link>` tag on line 7

## 4. Verify template structure

- [x] 4.1 Verify template starts with `<!DOCTYPE html>`
- [x] 4.2 Verify `<head>` contains charset, viewport, title, and Google Fonts link
- [x] 4.3 Verify `<body>` contains the complete Alpine component structure
- [x] 4.4 Verify no unclosed tags or missing closing elements
- [x] 4.5 Verify proper HTML indentation and formatting

## 5. Build project

- [x] 5.1 Run `npm run build` to compile the project
- [x] 5.2 Verify build completes successfully with no errors or warnings
- [x] 5.3 Verify output files are created in `public/assets/`
- [x] 5.4 Confirm split.js and related assets are bundled correctly

## 6. Test visual appearance

- [x] 6.1 Load application in browser
- [x] 6.2 Verify teal (#0d7377) primary color is applied to heading and buttons
- [x] 6.3 Verify orange (#ff8c42) accent color is applied to accent buttons
- [x] 6.4 Verify Roboto font is applied to all text
- [x] 6.5 Verify hover effects work on buttons and pieces
- [x] 6.6 Verify layout spacing and alignment match original design

## 7. Test functionality

- [x] 7.1 Test image upload via drag and drop
- [x] 7.2 Test image upload via file selection
- [x] 7.3 Test split type buttons (Grade, Vertical, Horizontal) work correctly
- [x] 7.4 Test Linhas input conditional visibility (hidden in Horizontal mode)
- [x] 7.5 Test Colunas input conditional visibility (hidden in Vertical mode)
- [x] 7.6 Test overlay canvas grid updates when changing inputs
- [x] 7.7 Test Recortar button generates pieces correctly
- [x] 7.8 Test piece selection (click to toggle select/deselect)
- [x] 7.9 Test piece layout matches split dimensions (rows × columns)
- [x] 7.10 Test download button creates ZIP with selected pieces

## 8. Test responsive design

- [x] 8.1 Test desktop view (>600px) with proper grid layout
- [x] 8.2 Test mobile view (<600px) with 2-column grid for Grade/Horizontal splits
- [x] 8.3 Test mobile view maintains vertical layout for Vertical splits
- [x] 8.4 Test all controls are accessible on mobile
- [x] 8.5 Test no CSS warnings or errors in browser console
