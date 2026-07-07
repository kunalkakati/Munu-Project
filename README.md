# Namita's Little Bakehouse — Website

A streamlined 3-page Next.js site (Home, Cakes, About) built to drive WhatsApp
orders for a home bakery in Guwahati, Assam.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Requires internet access on first build —
the site loads two Google Fonts (Fraunces + Work Sans).

## Before you launch — 3 things to update

1. **WhatsApp number** — open `lib/config.ts` and replace `WHATSAPP_NUMBER`
   with Namita's real number in international format (e.g. a number
   `98765 43210` becomes `"919876543210"`).
2. **Prices** — open `lib/cakes.ts` and update the sizes/prices for each
   cake to match what Namita actually charges. The current numbers are
   placeholders.
3. **Real photos** — every cake image on the site is currently a simple flat
   illustration (see `components/CakeIllustration.tsx`), used as a stand-in
   since no product photography was provided. Once you have good photos of
   the bento cake, classic cakes, jar cakes, and theme cakes, swap them in:
   - Drop image files into the `public/` folder.
   - Replace the `<CakeIllustration variant="..." />` usage in
     `components/CakeCard.tsx`, `app/page.tsx`, and `app/about/page.tsx`
     with Next.js `<Image>` components pointing at your photos.

## Design notes

- **Palette**: warm cream base, a brick-red accent (`#A13D2D`) and muted gold
  (`#A6822C`) — drawn from the red-and-gold of an Assamese gamosa rather than
  a generic bakery orange/cream look.
- **Signature element**: `components/GamosaBorder.tsx` is a small SVG motif
  inspired by the woven temple/diamond pattern on a gamosa's border. It's
  used as a section divider on the homepage and About page, and in the
  footer, tying the brand back to its Assam roots.
- **Typography**: Fraunces (display serif, warm and slightly quirky) for
  headings, Work Sans for body text.
- The floating WhatsApp button (bottom-right) is present on every page via
  the root layout, so ordering is always one tap away.

## Deploying

The easiest path is [Vercel](https://vercel.com) (made by the creators of
Next.js): push this project to a GitHub repo, import it on Vercel, and it
will build and deploy automatically — no server setup needed.
