## Why

The current interface has the preview section and button placement that doesn't optimize workflow flow. Users need to split images more intuitively with button labels that clearly indicate the action ("Recortar" = Cut is more direct than "Gerar pré-visualização"). The large preview image also takes up excessive vertical space, making it harder to see the pieces grid on same viewport.

## What Changes

- Rename the "Gerar pré-visualização" button to "Recortar" (Cut) to better communicate the action
- Move the "Recortar" button above the "Selecione as peças para download:" label for better visual hierarchy and workflow
- Reduce the image preview size to improve vertical space usage and better integrate with the pieces grid display

## Capabilities

### New Capabilities
<!-- None - this is a UI refinement, not a new capability -->

### Modified Capabilities

- `image-splitter`: Updated UI with improved button labeling and layout flow

## Impact

- **Files Modified**: `src/templates/split.twig`, `resources/js/split.js`
- **User-Facing**: Button label change and layout reordering
- **APIs**: None
- **Dependencies**: None
