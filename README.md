# Taskorbit static portfolio site

A one-page, framework-free marketing site for the fictional project-management SaaS product **Taskorbit**. It is intentionally built with plain HTML, CSS, and browser-native JavaScript—there is no build step, package manager, or development server required.

## Files

- `index.html` — semantic page structure, metadata, inline SVG icons, and JSON-LD
- `styles.css` — responsive dark SaaS visual system and motion rules
- `script.js` — annual billing toggle, scroll reveal behavior, sticky-nav state, and current year
- `hero-board.svg` — the hand-authored, high-priority SVG product model used in the hero

## Deploy to Vercel

1. Create a new GitHub repository and upload the contents of this `taskorbit` folder to its root.
2. In Vercel, select **Add New → Project** and import that GitHub repository.
3. Select the **Other** framework preset.
4. Leave **Build Command** empty.
5. Set the **Output Directory** to the repository root (`.`), then deploy.

Vercel will serve `index.html` directly.

## Before publishing

- Replace `https://taskorbit.example.com/` in the canonical URL, `og:url`, and JSON-LD with the deployed production URL.
- The `og:image` is the only photographic asset and points to one Unsplash team photograph. Replace it with a licensed final social image if this portfolio piece is commercialized.
- Email and social destinations use portfolio-safe placeholder targets and can be replaced with real ones later.

## Interaction and accessibility notes

- The pricing switch updates each monthly-equivalent annual price to 80% of its monthly value and announces the updated price through a polite live region.
- FAQ items use native `<details>` / `<summary>` controls, including full keyboard support without JavaScript.
- Visible focus styles, a skip link, responsive tap targets, semantic headings, and `prefers-reduced-motion` support are included.
