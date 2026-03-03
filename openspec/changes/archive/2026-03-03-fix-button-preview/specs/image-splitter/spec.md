## MODIFIED Requirements

### Requirement: Initiate image splitting with action button

The "Recortar" button (previously "Gerar pré-visualização") SHALL trigger the image splitting action, displaying the cut lines overlay on the preview and generating piece thumbnails for selection. The button SHALL be positioned above the pieces selection area for improved workflow.

#### Scenario: User initiates split with correct button label
- **WHEN** user clicks the "Recortar" button
- **THEN** the overlay canvas displays dashed orange lines showing where the image will be cut

#### Scenario: Button positioned before pieces selection
- **WHEN** user views the interface after uploading an image
- **THEN** the "Recortar" button appears above the "Selecione as peças para download:" label

### Requirement: Preview image display dimensions

The preview image SHALL be displayed with a constrained maximum height to optimize screen real estate and provide quick access to the pieces grid, while remaining responsive across different device sizes.

#### Scenario: Preview size on desktop
- **WHEN** user uploads an image on a desktop viewport (>1024px)
- **THEN** the preview section has max-height of approximately 40-50vh

#### Scenario: Preview size on mobile
- **WHEN** user uploads an image on a mobile viewport (<768px)
- **THEN** the preview section remains at least 200px tall for readability

#### Scenario: Responsive preview with scrolling
- **WHEN** preview height exceeds viewport constraints
- **THEN** the preview section has overflow: auto to allow scrolling without affecting layout
