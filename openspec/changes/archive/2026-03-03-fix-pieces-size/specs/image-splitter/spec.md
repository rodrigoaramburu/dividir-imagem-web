## MODIFIED Requirements

### Requirement: Display pieces in grid matching original split dimensions

The pieces SHALL be displayed in a grid that matches the original image split dimensions (rows × columns). For example, if an image is split into 2 rows and 3 columns, the pieces shall be displayed in exactly 2 rows and 3 columns.

#### Scenario: Pieces grid matches 1×3 split
- **WHEN** user uploads an image and selects "Grade" with 1 row and 3 columns split
- **THEN** pieces are displayed in 1 row with 3 equally-sized columns

#### Scenario: Pieces grid matches 3×1 split
- **WHEN** user uploads an image and selects "Grade" with 3 rows and 1 column split
- **THEN** pieces are displayed in 3 rows with 1 column

#### Scenario: Pieces grid matches 2×2 split
- **WHEN** user uploads an image and selects "Grade" with 2 rows and 2 columns split
- **THEN** pieces are displayed in 2 rows with 2 columns each

### Requirement: Pieces maintain proportional dimensions based on cut size

Each piece SHALL maintain the correct aspect ratio based on its cut dimensions. A piece from a horizontal cut (1 row, many columns) shall be wider than it is tall. A piece from a vertical cut (many rows, 1 column) shall be taller than it is wide.

#### Scenario: Horizontal cut pieces are wider
- **WHEN** user uploads an image and selects 1 row and 3 columns split
- **THEN** each piece displays with aspect-ratio approximately 3:1 (three times wider than tall)

#### Scenario: Vertical cut pieces are taller
- **WHEN** user uploads an image and selects 3 rows and 1 column split
- **THEN** each piece displays with aspect-ratio approximately 1:3 (three times taller than wide)

#### Scenario: Grid cut pieces maintain balance
- **WHEN** user uploads an image and selects 2 rows and 2 columns split
- **THEN** each piece displays with square-like aspect-ratio (1:1)

### Requirement: Download button positioning

The "Baixar Selecionados" button SHALL be positioned below the pieces grid and remain visible and accessible after piece selection.

#### Scenario: Download button appears below pieces
- **WHEN** user selects one or more pieces
- **THEN** the "Baixar Selecionados" button is displayed below the pieces grid
- **AND** the button is fully visible without scrolling (with reasonable viewport)

#### Scenario: Download button responsive on mobile
- **WHEN** user views the interface on mobile viewport (<768px)
- **THEN** the download button remains below the pieces grid and spans full width or appropriate width
- **AND** button is easily tappable (min 44px height)
