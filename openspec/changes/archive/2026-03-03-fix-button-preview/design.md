## Context

The image splitter interface in `split.twig` currently displays the "Gerar pré-visualização" button within the actions section, and the preview image takes up significant vertical space. User feedback indicates that the button label should better reflect the action being taken ("Recortar" = Cut), and the layout should be optimized for better screen real estate usage.

## Goals / Non-Goals

**Goals:**
- Rename the preview button from "Gerar pré-visualização" to "Recortar" for clearer intent
- Reorder layout elements so the "Recortar" button appears above the pieces label ("Selecione as peças para download:")
- Reduce preview image size to minimize vertical scrolling and improve accessibility to the pieces grid
- Maintain responsive behavior and visual hierarchy

**Non-Goals:**
- Change the overlay functionality or preview canvas
- Modify piece generation logic or selection behavior
- Restructure major layout sections

## Decisions

1. **Button Label**: Change text from "Gerar pré-visualização" to "Recortar". Rationale: "Recortar" (cut) is a more direct, action-oriented term that users understand instantly.

2. **Button Placement**: Move button above the "Selecione as peças para download:" section. Implementation: Reorder HTML elements in template so button is rendered before the pieces label.

3. **Preview Image Sizing**: Reduce preview section max-height to approximately 40-50vh (viewport height). Rationale: Balances visibility of the overlay with quick access to pieces grid. Alternative considered: Fixed pixel height (rejected as less responsive across device sizes).

4. **CSS Approach**: Add `max-height` and `overflow: auto` to `.preview-section`, maintain aspect ratio of image content. Alternative: Absolute pixel dimensions (rejected in favor of responsive units).

## Risks / Trade-offs

- **Risk**: Users on small screens might find the preview too cramped. Mitigation: Ensure preview remains at least 200px tall on smallest devices; test on mobile/tablet.
- **Trade-off**: Reducing preview size means less detail visibility when examining overlay. Mitigation: Users can still select "Gerar preview" behavior before cutting - they have the full-size canvas in their browser DevTools if needed.
- **Risk**: Button repositioning might confuse users familiar with old layout. Mitigation: This is a UX improvement; the new positioning is more logical (generate pieces → select pieces).
