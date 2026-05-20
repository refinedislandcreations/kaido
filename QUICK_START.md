# Quick Start Guide for Kaido Development

## Local Development

### Initial Setup

```bash
cd {project folder}
bundle install
npm install
```

### Development Workflow

```bash
# Terminal 1: Watch CSS with Tailwind
npm run dev:css

# Terminal 2: Serve Jekyll locally
bundle exec jekyll serve

# Or both at once:
npm run dev
```

Visit `http://localhost:4000` to see your changes.

## Building for Production

```bash
# Build CSS (minified)
npm run build:css

# Build Jekyll site
jekyll build

# Output goes to: _site/
```

## CMS Editing (CloudCannon)

1. Open CloudCannon dashboard
2. Edit pages and collections
3. Preview changes
4. Publish to trigger Netlify build

## File Structure Reference

- **Content Pages:** `index.html`, `presale.html`, `404.html`
- **Layouts:** `_layouts/default.html`, `_layouts/coming-soon.html`
- **Components:** `_includes/hero-section.html`, etc.
- **Styles:** `assets/css/` (Tailwind + custom)
- **Images:** `assets/images/`

## Key Configuration Files

- `_config.yml` - Site settings
- `tailwind.config.js` - Tailwind configuration
- `netlify.toml` - Netlify deployment
- `cloudcannon.config.yml` - CMS structure

## Common Tasks

### Add a New Section

1. Create component in `_includes/my-section.html`
2. Add data to page frontmatter (YAML)
3. Include in page: `{% include my-section.html section=page.my_section %}`

### Update Site Metadata

Edit `_config.yml` to change site title, description, social handles.

### Add SEO to a Page

Add frontmatter to page:

```yaml
---
title: Page Title
description: Meta description (155 chars max)
og_image: /assets/images/custom-image.png
---
```

### Deploy to Production

Push to main branch on GitHub. Netlify automatically builds and deploys.

## Form Submissions (Future Setup)

When implementing form backend:

1. Update form `action` attribute in `_includes/enquiry-section.html`
2. Configure CORS headers in `netlify.toml` if needed
3. Add server-side validation
4. Test with real data

## Lighthouse Testing

```bash
# Use Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
4. Target: Performance > 90, Accessibility > 95
```

## Useful Commands

```bash
# Clear build cache
rm -rf _site .jekyll-cache

# Check for unused CSS (estimate)
# Output CSS is auto-purged by Tailwind

# Validate HTML
# Use https://validator.w3.org/

# Check performance
# Use https://pagespeed.web.dev/
```

## Troubleshooting

| Issue                    | Solution                                |
| ------------------------ | --------------------------------------- |
| CSS changes not showing  | Clear browser cache, restart dev server |
| Images not loading       | Check paths use `relative_url` filter   |
| Build fails              | Check YAML frontmatter syntax           |
| Focus states not showing | Ensure custom-style.css is loaded       |

## Resources

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [CloudCannon Docs](https://cloudcannon.com/documentation/)
- [Netlify Docs](https://docs.netlify.com/)

---

**For full deployment details, see `DEPLOYMENT_REPORT.md`**
