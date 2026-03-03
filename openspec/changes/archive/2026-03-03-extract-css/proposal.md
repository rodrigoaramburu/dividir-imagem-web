## Why

The current split.twig template contains over 300 lines of inline CSS within `<style>` tags, making the template difficult to read and maintain. CSS should be separated from HTML for better code organization, cache efficiency, and reusability. Extracting CSS to a separate file improves maintainability and follows web development best practices.

## What Changes

- Extract all CSS from `<style>` block in split.twig to a new `resources/css/split.css` file
- Update split.twig to link the external CSS file using `<link>` tag
- Build configuration (Vite) SHALL properly process and bundle the CSS file
- No CSS behavior changes - purely structural refactoring

## Capabilities

### New Capabilities
<!-- None - this is a structural refactoring, not a new capability -->

### Modified Capabilities

- `image-splitter`: Refactored CSS to external file for better code organization

## Impact

- **Files Created**: `resources/css/split.css`
- **Files Modified**: `src/templates/split.twig`
- **Build**: Vite configuration may need adjustment to import CSS
- **User-Facing**: No changes to appearance or functionality
- **APIs**: None
- **Dependencies**: None (standard CSS, no new dependencies)
