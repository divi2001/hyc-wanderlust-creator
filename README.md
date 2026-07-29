# HYC Travels

Marketing site for **HYC Travels** — tailor-made travel packages to 12 destinations, with a
package customizer, destination catalogue, and enquiry flow.

**Live**: https://hyc-wanderlust-creator.vercel.app/

## Tech stack

- Vite
- React 18
- shadcn/ui (Radix primitives)
- Tailwind CSS
- React Router

## Getting started

Requires Node.js & npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
# 1. Clone the repository.
git clone <YOUR_GIT_URL>

# 2. Enter the project directory.
cd hyc-wanderlust-creator

# 3. Install dependencies.
npm i

# 4. Start the dev server with auto-reloading.
npm run dev
```

The dev server runs on http://localhost:8080.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
public/            Static assets served at the site root (favicons, manifest, OG image)
src/assets/        Imported image assets (logo, hero)
src/components/
  layout/          Header, Footer
  sections/        Hero, Destinations, Features, Vision & Mission, Package Customizer
  ui/              shadcn/ui components
src/pages/         Route components (Index, NotFound)
```

## Branding assets

Brand colours are navy `#2e2483` and red `#e3000e`, taken from the logo at
`src/assets/hyc-logo.png`.

Every icon and share image in `public/` is derived from that one logo file:

| File | Used for |
| --- | --- |
| `favicon.ico` | Browser tab (16/32/48px) |
| `favicon-16x16.png`, `favicon-32x32.png` | Modern browser tab icons |
| `apple-touch-icon.png` | iOS home screen (180px) |
| `icon-192.png`, `icon-512.png` | PWA / Android launcher |
| `icon-maskable-512.png` | Android adaptive (maskable) icon |
| `og-image.png` | WhatsApp / Facebook / LinkedIn / X previews (1200×630) |
| `og-image-square.png` | Consumers that crop previews to 1:1 |

To regenerate them after a logo change, re-run the icon generation step against
`src/assets/hyc-logo.png` and keep the same filenames — `index.html` and
`site.webmanifest` reference them by path.

## Deployment

Deployed on Vercel; pushes to `main` deploy automatically.

If the social preview image looks stale after a deploy, the platform has cached it —
re-scrape via the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
or [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). WhatsApp caches
previews per URL for roughly a week.

Update the absolute URLs in `index.html` (`og:url`, `og:image`, `canonical`) if the site
moves to a custom domain.
