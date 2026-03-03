## Why

Currently, the pieces grid displays all pieces in a uniform column-based layout regardless of how the image was split, losing the visual relationship between pieces and their original positions in the image. Additionally, pieces don't maintain proportional dimensions based on the cut dimensions, making it harder for users to understand the cut pattern visually. The download button needs repositioning for better layout flow.

## What Changes

- Pieces grid layout SHALL match the original image split dimensions (e.g., if split is 1 row × 3 columns, pieces display in 1 row × 3 columns)
- Pieces SHALL maintain proportional dimensions based on their cut size (wider pieces for horizontal cuts, taller pieces for vertical cuts)
- Download button ("Baixar Selecionados") SHALL be positioned below the pieces grid
- Grid display SHALL be responsive and scale appropriately on different screen sizes

## Capabilities

### New Capabilities
<!-- None - this is a UI layout refinement, not a new capability -->

### Modified Capabilities

- `image-splitter`: Updated pieces grid layout to reflect original split pattern and proportions

## Impact

- **Files Modified**: `src/templates/split.twig`, `resources/js/split.js`
- **User-Facing**: Visual reorganization of pieces grid to better represent cut pattern
- **APIs**: None
- **Dependencies**: None
