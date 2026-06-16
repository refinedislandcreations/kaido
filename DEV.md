# Design Parity & Layout Consistency Audit

## Objective

Perform a complete implementation audit and ensure the HTML pages match their design references with pixel-perfect accuracy.

### Pages

| Implementation  | Design Reference   |
| --------------- | ------------------ |
| `homepage.html` | `design/homepage/` |
| `phantom.html`  | `design/phantom/`  |
| `oracle.html`   | `design/oracle/`   |

---

## Required Actions

### 1. Full Design Comparison

For each page, compare the implementation against the design reference and identify all differences including:

* Layout structure
* Section hierarchy
* Positioning
* Alignment
* Typography
* Font sizes
* Font weights
* Line heights
* Colors
* Backgrounds
* Borders
* Shadows
* Buttons
* Cards
* Images
* Icons
* Spacing
* Padding
* Margins
* Responsive behavior
* Missing elements
* Extra elements

Do not assume parity. Verify every section individually.

---

### 2. Container Width Audit (Critical)

Inspect every section and verify that container widths are consistent across all pages.

Check:

* Hero sections
* Feature sections
* Content sections
* CTA sections
* Footer sections
* Navigation containers

Requirements:

* All sections must follow the same container system unless explicitly different in the design.
* Left and right content boundaries must align consistently.
* No section should be wider or narrower than intended.
* Max-width values must match the design reference.
* Horizontal padding must be consistent.

If inconsistencies exist:

1. Identify the section.
2. Report the current width.
3. Report the expected width.
4. Explain the discrepancy.
5. Fix the implementation.

---

### 3. Responsive Verification

Validate all layouts at:

* Desktop
* Tablet
* Mobile

Ensure:

* No overflow issues.
* No broken layouts.
* Consistent spacing.
* Proper scaling of typography.
* Correct stacking behavior.
* Design parity across breakpoints.

---

### 4. Implementation Fixes

Do not only report issues.

Apply all required fixes directly to the implementation.

Requirements:

* Preserve existing functionality.
* Reuse existing styles where possible.
* Remove duplicated styling patterns.
* Standardize container widths and spacing tokens.
* Ensure visual consistency across all pages.

---

### 5. Final Validation Pass

After fixes are complete:

1. Re-audit all three pages.
2. Verify design parity.
3. Verify width consistency.
4. Verify responsive behavior.
5. Verify no regressions were introduced.

---

## Expected Output

For each page provide:

### Matching Items

List components that already match the design.

### Issues Found

List all discrepancies.

### Fixes Applied

Describe every change made.

### Width Consistency Report

Document all container width corrections.

### Responsive Report

Document all responsive fixes.

### Final Confidence Score

Provide a score from 0–100% representing design parity with the reference.

---

## Success Criteria

The task is complete only when:

* `homepage.html` visually matches `design/homepage/`
* `phantom.html` visually matches `design/phantom/`
* `oracle.html` visually matches `design/oracle/`
* Container widths are consistent across all sections and pages
* Desktop, tablet, and mobile layouts are verified
* No known visual discrepancies remain
* Design parity confidence is ≥ 95%
