## Context

The image splitter currently displays all pieces in a fixed auto-fill grid layout that doesn't reflect the original split dimensions. When splitting a 1000×800px image into 1 row × 3 columns, the pieces should be displayed as 1 row × 3 columns with each piece being approximately 333px × 800px (maintaining aspect ratio). The current implementation renders all pieces in an auto-fill grid, losing this spatial relationship.

## Goals / Non-Goals

**Goals:**
- Display pieces grid with dimensions matching the original split pattern (rows × columns)
- Calculate and maintain correct aspect ratios for each piece based on cut dimensions
- Position download button below the pieces grid
- Ensure responsive behavior on different screen sizes
- Preserve piece selection and all existing functionality

**Non-Goals:**
- Change piece selection mechanism or visual feedback
- Modify overlay canvas or preview functionality
- Alter piece download or ZIP generation logic

## Decisions

1. **Grid Dimension Calculation**: Calculate `grid-template-columns: repeat(colunas, 1fr)` and `grid-template-rows` based on linhas. Rationale: CSS Grid natively supports this pattern better than flexbox.

2. **Aspect Ratio Preservation**: Use `aspect-ratio: width/height` CSS property on `.piece` elements, where width/height are calculated from original image dimensions divided by cols/rows. Rationale: Modern CSS aspect-ratio is cleaner than padding-bottom hack, supported in all modern browsers.

3. **JavaScript Calculations**: In `generatePreview()`, extract `imageWidth`, `imageHeight`, `linhas`, `colunas` before generating pieces. Calculate piece dimensions as `pieceWidth = imageWidth / colunas` and `pieceHeight = imageHeight / linhas`. Store in each piece object for CSS class binding.

4. **Template Structure**: Use Alpine `x-bind:style` or data attributes to apply dynamic aspect-ratio per piece. Rationale: More maintainable than generating CSS classes in JavaScript.

5. **Button Placement**: Move download button after pieces container in HTML. Use CSS to ensure proper spacing and mobile responsiveness.

## Risks / Trade-offs

- **Risk**: Very wide pieces (1 col × many rows) become very tall, potentially exceeding viewport. Mitigation: Add max-height constraint to pieces grid with overflow scrolling if needed.
- **Risk**: Mobile devices with small screens may struggle with display. Mitigation: Pieces should still be responsive with min-width constraints; test thoroughly on small viewports.
- **Trade-off**: Aspect ratio approach means pieces won't fill equal screen space. Accepted: maintains spatial accuracy which is the goal.
- **Risk**: Aspect ratio CSS property not supported in very old browsers. Mitigation: Most project users are on modern browsers; fallback is uniform square grid (current behavior).
