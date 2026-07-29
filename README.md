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
src/data/          Tour catalogue and company details — the single source of truth
  packages.js        International + domestic tours, bilingual
  site.js            Phone, email, Instagram, specials, rate notes
src/contexts/
  LanguageContext.jsx  English / Marathi toggle
src/components/
  layout/          Header, Footer
  sections/        Hero, Vision & Mission, International, Domestic,
                   Package Customizer, Features, Contact
  ui/              shadcn/ui components
src/pages/         Route components (Index, NotFound)
```

## Managing tour content

**All pricing and itinerary content lives in `src/data/packages.js`.** No prices are
hardcoded in components — the hero counts, the customizer dropdown and the package
cards all derive from that file, so a rate change is a one-line edit.

Bilingual fields are `{ en, mr }` objects. Where the client supplied only English,
just omit `mr` — `pick()` in `LanguageContext` falls back to English automatically,
so a partially translated record still renders completely. Never machine-translate
place names or prices into Marathi; leave them English until the client supplies copy.

To add a domestic tour, append to `domesticPackages`:

```js
{
  id: 19,
  route: { en: "Rajasthan Full Circuit" },
  days: 14,
  transport: TRAIN,          // shared constants defined above the array
  meals: BD_VEG,
  stay: HOTEL_3,
  highlights: { en: ["…"] },
  price: 0,
}
```

`DOMESTIC_TOTAL` (currently 30) is what the client says they operate. The domestic
section shows "Showing N of 30" and a "call us for tours not listed" note whenever
the array is shorter, so the gap is stated honestly rather than hidden.

### Outstanding content

- **Domestic tours 19–30 are missing.** The WhatsApp export was truncated part-way
  through entry 19 (Rajasthan Full Circuit — highlights and price never arrived).
  Entries 1–18 are complete and verbatim.
- **Marathi for domestic tours 4–18.** The client sent Marathi for entries 1–3 only.
  International is fully bilingual.
- **No postal address.** The previous placeholder ("123 Business Hub, Andheri East")
  was removed rather than shown as fact. Add to `contact` in `src/data/site.js` when known.
- **No testimonials.** The three previous ones were placeholder text referencing
  Switzerland and Paris — destinations HYC does not sell — so they were replaced with
  a link to the real Instagram account.

## Branding assets

Brand colours are sampled from the logo at `src/assets/hyc-logo.png`:

| Colour | Hex | Used for |
| --- | --- | --- |
| Deep navy | `#002d5d` | Y outline, "HYC Travels" wordmark, `theme-color` |
| Teal | `#006d88` | "Travel Beyond Borders...!!" tagline |
| Sky | `#7fcce2` | Inner Y outline |
| Silver | `#dae0e3` | Y body / road fill |

The logo artwork already contains the tagline, so don't repeat it as adjacent text.

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
