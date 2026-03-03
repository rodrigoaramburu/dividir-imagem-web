## 1. Update Template CSS and Classes

- [x] 1.1 Add `.pieces.vertical` CSS rule to constrain grid to single column: `grid-template-columns: 1fr`
- [x] 1.2 Add explicit mobile media query rule for `.pieces.vertical` to prevent override
- [x] 1.3 Update template to bind vertical class: `:class="{ vertical: tipo === 'vertical', horizontal: tipo === 'horizontal', grid: tipo === 'grade' }"`

## 2. Build and Test

- [x] 2.1 Run npm run build to verify no syntax errors
- [x] 2.2 Test pieces display with Vertical split (1 col, multiple rows)
- [x] 2.3 Test pieces display with Vertical split on mobile viewport (<768px)
- [x] 2.4 Test pieces display with Vertical split on tablet viewport (768px-1024px)
- [x] 2.5 Verify piece aspect ratios maintain correct proportions
- [x] 2.6 Verify selection and download still work with vertical layout

## 3. Verification and Documentation

- [x] 3.1 Verify changes match all requirements in specs/image-splitter/spec.md
- [x] 3.2 Verify Grade and Horizontal splits still display correctly (no regression)
