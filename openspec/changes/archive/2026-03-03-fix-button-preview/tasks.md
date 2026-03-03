## 1. Update Template Button and Layout

- [x] 1.1 Rename "Gerar pré-visualização" button text to "Recortar" in split.twig
- [x] 1.2 Reorder HTML elements so the "Recortar" button appears above "Selecione as peças para download:" label
- [x] 1.3 Add CSS max-height constraint to `.preview-section` (40-50vh for desktop, min 200px for mobile)
- [x] 1.4 Add overflow: auto to preview section for responsive scrolling

## 2. Update JavaScript Logic

- [x] 2.1 Verify Alpine component @click event handler correctly targets generatePreview() for the renamed button
- [x] 2.2 Ensure no JavaScript changes needed (button text change is CSS-only, logic same)

## 3. Build and Test

- [x] 3.1 Run npm run build to verify no syntax errors
- [x] 3.2 Test preview functionality on desktop viewport (>1024px)
- [x] 3.3 Test preview functionality on tablet viewport (768px-1024px)
- [x] 3.4 Test preview functionality on mobile viewport (<768px)
- [x] 3.5 Verify overlay displays correctly with constrained preview height
- [x] 3.6 Verify button click generates pieces and displays them below

## 4. Documentation and Cleanup

- [x] 4.1 Verify changes match the requirements in specs/image-splitter/spec.md
- [x] 4.2 Commit changes with descriptive message
