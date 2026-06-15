# DEV.md

## Objective

Build the homepage (`homepage.html`) for this Jekyll project based on the design screenshots located in:

```text
design/homepage/
```

The homepage must be implemented using reusable Jekyll includes and front matter-driven content.

The goal is not to recreate each screenshot as a separate section file. Instead, identify reusable patterns and build a maintainable component system.

**Important:** Before implementation, inspect existing pages, layouts, includes, and styles to ensure the homepage follows the same design language, coding patterns, and component architecture already used throughout the site.

---

## Tech Stack

* Jekyll
* Liquid
* Tailwind CSS v4

All styling should be implemented primarily using Tailwind CSS v4 utility classes.

---

## Existing Project Conventions

Before creating any new code, analyze the existing project structure and follow the established patterns.

### Existing Pages

Review existing pages and reuse their conventions whenever possible:

* Layout structure
* Section spacing
* Typography scale
* Component patterns
* Naming conventions
* Liquid patterns
* Front matter organization

The homepage should feel like a natural part of the existing website, not a separate design system.

---

### Existing Includes

Review existing files in:

```text
_includes/
```

and any subdirectories.

Reuse existing components whenever appropriate instead of creating new ones.

Before creating a new include:

1. Search for an existing include with similar functionality.
2. Reuse it if possible.
3. Extend it if necessary.
4. Only create a new include when no suitable component exists.

---

### Existing Styling

Review the project's styling before implementing anything new.

Particularly inspect:

```text
assets/css/custom-style.css
```

and any other CSS files currently used by the project.

The homepage should match the visual language already established across the site.

---

### Styling Priority

Use styling in the following order:

1. Existing project styles and utility classes
2. Existing reusable components
3. Tailwind CSS v4 utilities
4. New custom CSS (only if absolutely necessary)

Avoid creating styles that duplicate functionality already present in:

```text
assets/css/custom-style.css
```

---

### Visual Consistency

Ensure the homepage matches existing pages in terms of:

* Colors
* Typography
* Button styles
* Border radius
* Shadows
* Section spacing
* Container widths
* Card designs
* Responsive behavior

The finished homepage should look like it was built by the same developer who created the rest of the site.

---

### Avoid Design Drift

Do not introduce:

* New design systems
* New spacing scales
* New color palettes
* New button styles
* New card styles
* New typography systems

unless absolutely required by the provided homepage design screenshots.

Prefer adapting existing project patterns whenever possible.

---

## Reference Files

### Page Implementation Reference

Use the following file as the source of truth for page structure:

```text
presale.html
```

Follow its patterns for:

* Front matter structure
* Include usage
* Page composition
* Data organization
* Section ordering

---

### Include Implementation Reference

Use the following file as the source of truth for reusable includes:

```text
_includes/
```

Follow its patterns for:

* Liquid syntax
* Include parameters
* HTML structure
* Component architecture
* Naming conventions

---

## Design Assets

Homepage screenshots are located in:

```text
design/homepage/
```

Examples:

```text
section-1.png
section-2.png
...
section-14.png
```

Analyze every screenshot and recreate the complete homepage.

---

## Required Deliverables

### Homepage

Create or update:

```text
homepage.html
```

---

### Reusable Includes

Create reusable components under:

```text
_includes/homepage/
```

Use meaningful component names based on layout and functionality.

Examples:

```text
_includes/homepage/hero.html
_includes/homepage/feature-grid.html
_includes/homepage/content-block.html
_includes/homepage/stats.html
_includes/homepage/testimonials.html
_includes/homepage/faq.html
_includes/homepage/cta.html
```

These are examples only. Create the components that best fit the actual homepage structure.

---

## Component Reuse Rules

Many sections may share the same layout structure.

Before creating a new include:

1. Check whether an existing include can be reused.
2. Extend the component with additional parameters if needed.
3. Only create a new include when the layout is genuinely unique.

---

### Good Example

One reusable component:

```text
feature-grid.html
```

used by multiple sections with different content.

---

### Bad Example

Creating:

```text
section-4.html
section-7.html
section-11.html
```

when they all use the same layout structure.

Avoid duplicate markup.

Follow DRY principles.

---

## Front Matter Driven Content

All homepage content should be stored in page front matter.

Do not hardcode:

* Headings
* Paragraphs
* Buttons
* Cards
* Statistics
* Testimonials
* FAQ items
* Feature items
* CTA content

Content should be configurable through front matter.

---

### Example

```yaml
---
layout: default

hero:
  title: Example Title
  subtitle: Example Subtitle
  image: /assets/images/home/hero.png

features:
  title: Why Choose Us

  items:
    - title: Fast
      description: Description

    - title: Reliable
      description: Description
---
```

---

### Include Usage

```liquid
{% include homepage/hero.html data=page.hero %}

{% include homepage/feature-grid.html
   title=page.features.title
   items=page.features.items %}
```

---

## Homepage Composition

The homepage should primarily assemble reusable includes.

Example:

```liquid
---
layout: default
---

{% include homepage/hero.html data=page.hero %}

{% include homepage/feature-grid.html
   title=page.features.title
   items=page.features.items %}

{% include homepage/content-block.html
   data=page.content_block %}

{% include homepage/testimonials.html
   items=page.testimonials %}

{% include homepage/cta.html
   data=page.cta %}
```

---

## Tailwind CSS v4 Requirements

### Tailwind First

Prefer utility classes over custom CSS.

Good:

```html
<div class="mx-auto max-w-7xl px-6 py-20">
```

Avoid:

```css
.homepage-section {
  max-width: 1280px;
  padding: 80px 24px;
}
```

unless absolutely necessary.

---

### Responsive Design

All sections must be mobile-first.

Use responsive Tailwind utilities.

Examples:

```html
class="grid grid-cols-1 gap-8 lg:grid-cols-2"
```

```html
class="text-3xl md:text-4xl lg:text-5xl"
```

```html
class="px-4 md:px-6 lg:px-8"
```

---

### Container Standard

Prefer:

```html
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

or follow the project's existing container convention if one already exists.

---

### Component Self-Containment

Each include should contain its own Tailwind styling.

Example:

```liquid
<section class="py-20">
  <div class="mx-auto max-w-7xl px-6">
    ...
  </div>
</section>
```

Avoid page-specific styling dependencies.

---

### Design Fidelity

Match the screenshots as closely as possible:

* Layout
* Spacing
* Typography
* Alignment
* Cards
* Borders
* Shadows
* Corner radius
* Buttons
* Responsive behavior

---

## Images

Use the homepage screenshots as visual references.

If image assets already exist in the project:

* Reuse them
* Follow existing image conventions
* Reference them through front matter whenever possible

Avoid hardcoded image paths inside reusable includes.

Example:

```yaml
hero:
  image: /assets/images/home/hero.png
```

---

## Development Workflow

For every screenshot in:

```text
design/homepage/
```

1. Analyze the layout.
2. Identify the section type.
3. Check whether an existing include can be reused.
4. Extend an existing include if appropriate.
5. Create a new include only if the layout is unique.
6. Move content into front matter.
7. Assemble the homepage using reusable includes.

---

## Architecture Requirements

The final implementation must be:

* Component-based
* DRY
* Front matter driven
* Reusable
* Maintainable
* Scalable
* Tailwind CSS v4 based
* Consistent with existing project architecture

---

## Success Criteria

A successful implementation will:

* Recreate the complete homepage from all screenshots
* Generate a complete `homepage.html`
* Create reusable components in `_includes/homepage/`
* Reuse existing includes whenever possible
* Follow existing site patterns and styling
* Leverage `assets/css/custom-style.css` where appropriate
* Use front matter for content management
* Avoid duplicated section markup
* Follow the patterns from:

```text
presale.html
_includes/
```

* Use Tailwind CSS v4 for styling
* Maintain visual consistency with the rest of the website
* Be easy to extend and maintain in the future
