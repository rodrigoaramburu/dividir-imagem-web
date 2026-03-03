## Context

The pieces grid currently uses a fallback grid layout for non-horizontal splits (including vertical). When vertical split is selected with many rows and 1 column, the grid-template-columns is correctly set to 1, but the CSS might be using minmax with auto-fill, which could cause unexpected behavior. Additionally, mobile responsive CSS at max-width: 600px overrides the grid-template-columns to repeat(2, 1fr) for both grid and horizontal classes, but doesn't account for the vertical class specifically.

## Goals / Non-Goals

**Goals:**
- Ensure vertical splits display as 1 column × N rows grid layout
- Add explicit CSS for `.pieces.vertical` class
- Prevent mobile responsive CSS from overriding single-column vertical layout
- Maintain all existing functionality (aspect ratios, selection, downloads)

**Non-Goals:**
- Change horizontal or grade split behavior
- Modify JavaScript piece generation logic
- Alter piece selection or download mechanisms

## Decisions

1. **CSS Class Strategy**: Add explicit `.pieces.vertical` class in template and corresponding CSS rules. Rationale: Makes vertical layout explicit and maintainable, easier to override responsive rules.

2. **Mobile Responsiveness**: Explicitly exclude `.pieces.vertical` from the `repeat(2, 1fr)` mobile override. Keep vertical as single column on all screen sizes. Rationale: Vertical pieces should stack naturally in single column regardless of screen size.

3. **Template Update**: Update template to bind vertical class based on `tipo === 'vertical'`. The template already binds `tipo === 'horizontal'` so extending for vertical is consistent.

4. **Grid Calculation**: Keep existing `--cols` and `--rows` calculation in JavaScript. The vertical class purely affects CSS display without changing the underlying data.

## Risks / Trade-offs

- **Risk**: Very tall pieces (many rows) could exceed viewport height even with 70vh max-height. Mitigation: Already handled by existing max-height: 70vh with overflow: auto.
- **Trade-off**: Adding explicit vertical class means more CSS specificity to manage. Accepted: Code clarity is worth the additional CSS.
