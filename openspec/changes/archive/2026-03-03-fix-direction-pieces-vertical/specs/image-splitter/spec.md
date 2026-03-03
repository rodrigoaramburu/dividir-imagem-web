## MODIFIED Requirements

### Requirement: Display vertical pieces in single column layout

When "Vertical" split type is selected, pieces SHALL be displayed in a single column layout (1 column × N rows) that matches the original vertical split pattern.

#### Scenario: Vertical pieces display in single column
- **WHEN** user selects "Vertical" split type and sets linhas > 1, colunas = 1
- **THEN** pieces are displayed in a single column layout
- **AND** each piece is displayed with its correct proportional height

#### Scenario: Vertical pieces maintain aspect ratio
- **WHEN** user splits an image vertically into 3 rows
- **THEN** each piece displays as a tall rectangle (1:3 aspect ratio approximately)
- **AND** pieces stack vertically in single column below each other

### Requirement: Mobile responsiveness preserves vertical layout

The vertical pieces layout SHALL remain a single column on mobile viewports and SHALL NOT be overridden to display multiple columns.

#### Scenario: Vertical pieces on mobile viewport
- **WHEN** user views vertical pieces grid on mobile viewport (<768px)
- **THEN** pieces continue displaying in single column
- **AND** each piece maintains its proportional height
- **AND** vertical layout is NOT overridden to 2-column layout

#### Scenario: Vertical pieces on tablet viewport
- **WHEN** user views vertical pieces grid on tablet viewport (768px-1024px)
- **THEN** pieces continue displaying in single column
- **AND** layout remains consistent with desktop display
