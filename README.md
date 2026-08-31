# HYC Travels

Marketing site for **HYC Travels** — tailor-made travel packages to 12 destinations, with a
package customizer, destination catalogue, and enquiry flow.

**Live**: https://hyctravels.com/

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
| Deep navy | `#002658` | Y monogram and its aircraft cutout, `theme-color` |
| Navy | `#002354` | "HYC Travels" wordmark, "Travel Beyond Borders" tagline |
| Steel | `#4e677f` | Cruise ship |
| Sky blue | `#10a0e8` | Wave |

The logo artwork already contains the tagline, so don't repeat it as adjacent text.

It is also landscape (roughly 1.39:1), so size it by height and let the width
follow. Square containers strand it in dead space — the frames in
`FeaturesSection.jsx` are deliberately landscape for that reason.

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

To regenerate them after a logo change, drop the new artwork in at
`src/assets/hyc-logo.png` and run:

```bash
python scripts/generate-icons.py
```

That overwrites all nine files in place — `index.html` and `site.webmanifest`
reference them by path, so the filenames must not change. The script needs
Pillow (`pip install Pillow`); it crops the emblem for the square icons and
uses the full logo for `og-image.png`.

## Deployment

Deployed on **Cloudflare Workers (Static Assets)** as the Worker `hyc-wanderlust-creator`;
pushes to `main` deploy automatically. Build command `npm run build`, output directory `dist`,
deploy command `npx wrangler deploy --assets=dist`.

Deployment settings live in `wrangler.jsonc` — the Worker name, the `compatibility_date`, and
the assets config. Keep them there rather than relying on CI to supply them; without a `name`
key Wrangler reports the Worker as `undefined` and CI has to override it.

There is no `main` entry point, so this is an assets-only Worker: no Worker script is uploaded
and no runtime code executes on requests.

**Wrangler 4.x requires Node.js >= 22**, so the build environment must be on Node 22 or newer
even though Vite itself is happy on 20. Do not pin `NODE_VERSION` below 22.

DNS, CDN, SSL and hosting are all in one Cloudflare account, so there is no proxy in
front of a separate origin and no SSL mode to keep in sync.

### Domain

`hyctravels.com` is canonical. `www.hyctravels.com` 301-redirects to it via a Cloudflare
Redirect Rule, and `http://` is upgraded by *Always Use HTTPS*. The registrar is GoDaddy
but DNS is authoritative in Cloudflare — **edit DNS in Cloudflare, not GoDaddy**.

The domain also carries GoDaddy email (MX `smtp.secureserver.net` / `mailstore1.secureserver.net`,
plus SPF and a `p=quarantine` DMARC record). Those records live in the Cloudflare zone and must
stay **DNS-only (grey cloud)** — proxying them breaks mail.

### Routing

The app uses `BrowserRouter`, so unmatched paths must fall back to `index.html` for the
client-side router to handle them. Workers Assets returns a hard 404 by default, so this is set
explicitly in `wrangler.jsonc`:

```jsonc
"assets": { "not_found_handling": "single-page-application" }
```

Remove that and every deep link 404s and the in-app `NotFound` page becomes unreachable. (This
is a Workers setting; it is unrelated to the presence or absence of a `404.html` file, which is
how Cloudflare Pages decides the same thing.)

### After a deploy

If the social preview image looks stale, the platform has cached it — re-scrape via the
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/). WhatsApp caches previews
per URL for roughly a week.

If the site ever moves domain again, update the absolute URLs in `index.html`
(`canonical`, `og:url`, `og:image`, `og:image:secure_url`, `twitter:image`), the `<loc>` in
`public/sitemap.xml`, and the `Sitemap:` line in `public/robots.txt`.
