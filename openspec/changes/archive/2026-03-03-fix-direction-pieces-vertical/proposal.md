## Why

When users select the "Vertical" split type, pieces are displayed horizontally instead of vertically. This breaks the spatial correspondence between the pieces layout and the original image cut pattern. For vertical cuts, pieces should be displayed in a single column with appropriate heights, not spread across multiple rows horizontally.

## What Changes

- Pieces SHALL display in a single column (1 column × N rows) when "Vertical" split type is selected
- Each piece SHALL maintain its correct aspect ratio and proportions when displayed vertically
- Mobile responsive CSS SHALL properly constrain vertical layout to single column, not override to grid
- CSS class binding SHALL correctly apply vertical layout styles

## Capabilities

### New Capabilities
<!-- None - this is a layout refinement for existing functionality -->

### Modified Capabilities

- `image-splitter`: Fixed vertical piece display to show in single column layout

## Impact

- **Files Modified**: `src/templates/split.twig`
- **User-Facing**: Vertical split pieces now display correctly in 1 column
- **APIs**: None
- **Dependencies**: None
