## 1. Update Template Pieces Grid Structure

- [x] 1.1 Update `.pieces` container CSS to use `grid-template-columns: repeat(var(--cols), 1fr)` and `grid-template-rows: repeat(var(--rows), auto)`
- [x] 1.2 Add CSS custom properties (--cols, --rows) binding to `.pieces` container using Alpine x-bind:style
- [x] 1.3 Update `.piece` CSS to use `aspect-ratio` property for maintaining proportional dimensions
- [x] 1.4 Reorder HTML: move download button after pieces container

## 2. Update JavaScript Piece Generation Logic

- [x] 2.1 Modify `generatePreview()` to extract and store `imageWidth`, `imageHeight`, `linhas`, `colunas` values
- [x] 2.2 Calculate piece dimensions: `pieceWidth = imageWidth / colunas`, `pieceHeight = imageHeight / linhas`
- [x] 2.3 Calculate aspect ratio for each piece: `aspectRatio = pieceWidth / pieceHeight`
- [x] 2.4 Store aspect ratio in piece object alongside URL and name
- [x] 2.5 Bind piece aspect ratio to individual piece styles using x-bind:style

## 3. Style Updates for Responsive Behavior

- [x] 3.1 Add max-height to `.pieces` container to prevent excessive vertical scrolling (e.g., max-height: 70vh)
- [x] 3.2 Ensure pieces remain responsive on mobile with min-width: 60px or similar
- [x] 3.3 Adjust `.piece` padding/border sizing to maintain aspect ratio accuracy
- [x] 3.4 Update button styling to ensure "Baixar Selecionados" is properly spaced below pieces

## 4. Build and Test

- [x] 4.1 Run npm run build to verify no syntax errors
- [x] 4.2 Test pieces grid layout with 1 row × 3 columns split
- [x] 4.3 Test pieces grid layout with 3 rows × 1 column split
- [x] 4.4 Test pieces grid layout with 2 rows × 2 columns split
- [x] 4.5 Test download button positioning and visibility
- [x] 4.6 Test aspect ratio maintenance on different image sizes
- [x] 4.7 Test responsive behavior on mobile viewport (<768px)
- [x] 4.8 Test responsive behavior on tablet viewport (768px-1024px)

## 5. Verification and Documentation

- [x] 5.1 Verify changes match all requirements in specs/image-splitter/spec.md
- [x] 5.2 Verify selection functionality works correctly with new grid layout
- [x] 5.3 Verify download functionality still works properly
- [x] 5.4 Commit changes with descriptive message
