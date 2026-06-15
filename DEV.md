# DEV.md

## Objective

Update the existing pages so they match the provided design screenshots much more accurately while maintaining consistency with the rest of the website.

The following pages have already been created:

```text
homepage.html
presale.html
phantom.html
oracle.html
contact.html
```

However, their current implementation does not visually match the design screenshots closely enough.

Your task is to refine and update the styling, layout, spacing, colors, typography, and visual details so each page closely matches its corresponding design sections.

**Important:** Treat `homepage.html` and `presale.html` as the canonical implementations of the site's design system. All pages should use the same container widths, spacing scale, typography hierarchy, component styling, and overall visual language while being updated to match their respective design screenshots.

---

## Homepage and Presale Consistency Requirement

Use:

```text
homepage.html
```

and

```text
presale.html
```

as the visual and structural references for the website.

The following pages:

```text
phantom.html
oracle.html
contact.html
presale.html
```

must feel like they belong to the same design system.

---

### Container Width Consistency

Inspect:

```text
homepage.html
presale.html
```

and any related includes they use.

Ensure that all sections in:

```text
phantom.html
oracle.html
contact.html
presale.html
```

use the same:

- max-width
- container structure
- horizontal padding
- content alignment
- section spacing conventions

as the homepage and presale pages.

Do not introduce different container widths unless explicitly required by the design.

---

### Visual Consistency

Match the overall styling patterns already established in:

```text
homepage.html
presale.html
```

including:

- Typography scale
- Section spacing
- Card styling
- Border radius
- Shadows
- Button styles
- Container widths
- Grid spacing
- Responsive behavior
- Gradient usage
- Background treatments

The pages should look like they were designed and built as part of the same system.

---

### Reuse Existing Homepage and Presale Patterns

Before creating new styles:

1. Inspect `homepage.html`.
2. Inspect `presale.html`.
3. Inspect all related includes.
4. Reuse existing component patterns whenever possible.
5. Extend existing patterns instead of creating new ones.

---

### Design Accuracy + Site Consistency

The goal is to satisfy both requirements:

1. Match the design screenshots as closely as possible.
2. Maintain the same visual language and layout system used in `homepage.html` and `presale.html`.

If a design screenshot leaves something ambiguous, follow the conventions already established in those pages.

---

## Design Sources

### Presale Page

Page:

```text
presale.html
```

Design screenshots:

```text
design/presale/
```

Contains multiple section screenshots.

Examples:

```text
Section 1.png
Section 2.png
Section 3.png
...
```

Each screenshot represents a section of the Presale page.

Compare the implementation against every screenshot and update the styling until it closely matches the design.

---

### Phantom Page

Page:

```text
phantom.html
```

Design screenshots:

```text
design/phantom/
```

Contains:

```text
Section 1.png
Section 2.png
Section 3.png
Section 4.png
Section 5.png
Section 6.png
Section 7.png
```

Each screenshot represents a section of the Phantom page.

---

### Oracle Page

Page:

```text
oracle.html
```

Design screenshots:

```text
design/oracle/
```

Contains:

```text
Section 1.png
Section 2.png
Section 3.png
Section 4.png
Section 5.png
Section 6.png
Section 7.png
Section 8.png
```

Each screenshot represents a section of the Oracle page.

---

### Contact Page

Page:

```text
contact.html
```

Design screenshots:

```text
design/contact/
```

Contains:

```text
Section 1.png
Section 2.png
Section 3.png
```

Each screenshot represents a section of the Contact page.

---

## Primary Goal

The objective is NOT to rebuild the pages from scratch.

The pages already exist.

Instead:

1. Compare each existing page against its corresponding design screenshots.
2. Identify visual differences.
3. Update the implementation until it closely matches the design.
4. Preserve the existing page architecture whenever possible.

Focus on visual accuracy and consistency with the homepage and presale pages.

---

## Required Improvements

### Colors (Highest Priority)

The current colors do not perfectly match the designs.

For every section:

- Compare backgrounds against the screenshot.
- Compare text colors.
- Compare button colors.
- Compare gradients.
- Compare card colors.
- Compare border colors.
- Compare accent colors.
- Compare overlay colors.
- Compare hover states.

Update the implementation so the colors match the design as closely as possible.

Do not approximate if the correct color can be inferred from the design.

---

### Spacing

Review and refine:

- Top padding
- Bottom padding
- Section spacing
- Grid gaps
- Card spacing
- Content spacing
- Button spacing
- Image spacing

Match both:

- The design screenshots
- The spacing scale used in `homepage.html`
- The spacing scale used in `presale.html`

---

### Typography

Review:

- Font sizes
- Font weights
- Line heights
- Letter spacing
- Heading hierarchy
- Text alignment

Adjust typography to better match the design.

Typography should remain consistent with:

```text
homepage.html
presale.html
```

---

### Layout

Review:

- Content alignment
- Column widths
- Image positioning
- Grid layouts
- Container spacing
- Card sizing
- Responsive stacking behavior

Match the visual structure shown in the screenshots.

---

### Borders & Shadows

Review:

- Border radius
- Border colors
- Border widths
- Card shadows
- Glow effects
- Divider styling

Update where necessary.

Follow existing homepage and presale styling patterns whenever possible.

---

### Buttons

Review:

- Colors
- Hover states
- Sizes
- Corner radius
- Typography
- Padding
- Visual weight

Buttons should closely resemble both:

- The design screenshots
- The button system already used in `homepage.html`
- The button system already used in `presale.html`

---

### Images & Visual Elements

Review:

- Image sizing
- Aspect ratios
- Positioning
- Decorative elements
- Background graphics
- Layering effects

Match the design screenshots as closely as possible.

---

## Existing Project Conventions

Before making styling changes, review:

```text
assets/css/custom-style.css
```

and inspect:

```text
_includes/
_layouts/
homepage.html
presale.html
```

Maintain consistency with the existing project where possible.

However, when there is a conflict between the current implementation and the design screenshots, prioritize matching the screenshots while still staying aligned with the homepage and presale design language.

---

## Tailwind CSS v4

Use Tailwind CSS v4 utilities whenever possible.

Preferred order:

1. Existing project styles
2. Existing reusable components
3. Existing homepage patterns
4. Existing presale patterns
5. Tailwind CSS v4 utilities
6. New custom CSS (only when necessary)

Avoid unnecessary custom CSS.

Avoid introducing a separate styling system.

---

## Section-by-Section Review

### Presale

Compare:

```text
presale.html
```

against every screenshot inside:

```text
design/presale/
```

Update every section until it visually matches the design.

---

### Phantom

Compare:

```text
phantom.html
```

against:

```text
design/phantom/Section 1.png
design/phantom/Section 2.png
design/phantom/Section 3.png
design/phantom/Section 4.png
design/phantom/Section 5.png
design/phantom/Section 6.png
design/phantom/Section 7.png
```

Update every section until it visually matches the design.

---

### Oracle

Compare:

```text
oracle.html
```

against:

```text
design/oracle/Section 1.png
design/oracle/Section 2.png
design/oracle/Section 3.png
design/oracle/Section 4.png
design/oracle/Section 5.png
design/oracle/Section 6.png
design/oracle/Section 7.png
design/oracle/Section 8.png
```

Update every section until it visually matches the design.

---

### Contact

Compare:

```text
contact.html
```

against:

```text
design/contact/Section 1.png
design/contact/Section 2.png
design/contact/Section 3.png
```

Update every section until it visually matches the design.

---

## Validation Process

For every section:

1. Open the design screenshot.
2. Compare it against the current implementation.
3. Identify visual differences.
4. Adjust styling.
5. Re-check colors.
6. Re-check spacing.
7. Re-check typography.
8. Re-check responsiveness.
9. Re-check alignment.
10. Repeat until the section closely matches the design.

Do not stop after the first implementation pass.

Iteratively refine the UI.

---

## What NOT To Do

Do NOT:

- Rewrite the entire page architecture.
- Remove reusable components unnecessarily.
- Replace existing includes without reason.
- Introduce a new design system.
- Change content unless required by the design.
- Create entirely new layouts if the current layout is already structurally correct.
- Introduce a different container system from homepage or presale.
- Use different spacing scales than homepage or presale.
- Create styling that conflicts with existing project conventions.

Focus on refinement and visual accuracy.

---

## Success Criteria

The update is successful when:

- Presale closely matches all screenshots in `design/presale/`
- Phantom closely matches all screenshots in `design/phantom/`
- Oracle closely matches all screenshots in `design/oracle/`
- Contact closely matches all screenshots in `design/contact/`
- All pages use the same width system as `homepage.html`
- All pages use the same width system as `presale.html`
- All pages use the same visual language as `homepage.html`
- All pages use the same visual language as `presale.html`
- Colors are visually accurate
- Typography is visually accurate
- Spacing is visually accurate
- Layouts are visually accurate
- Buttons, cards, borders, and shadows match the designs
- Responsive behavior remains intact
- Existing project architecture is preserved

---

## Final Validation Checklist

Before finishing:

- Compare every section against its screenshot.
- Verify container widths match homepage.html.
- Verify container widths match presale.html.
- Verify spacing patterns match homepage.html.
- Verify spacing patterns match presale.html.
- Verify typography hierarchy matches homepage.html.
- Verify typography hierarchy matches presale.html.
- Verify button styling matches homepage.html.
- Verify button styling matches presale.html.
- Verify colors closely match the design screenshots.
- Verify responsive layouts still work correctly.

The final result should feel like a near pixel-perfect implementation of the provided designs while remaining fully consistent with the design system already established in `homepage.html` and `presale.html`.
