# Turning the Page (Without Losing the Plot)

A self-contained Next.js slide-deck web app for Daniel Hook's (CEO, Digital
Science) 40-minute conference talk for Pan Macmillan — "How to use AI
without losing yourself."

Visual style deliberately echoes the speaker's earlier deck, "Speakable and
Unspeakable in AI": warm cream/parchment background, Fraunces serif display
type with italic accent words, IBM Plex Mono for labels, olive-gold accent
colour.

## What this is

- Next.js 16 (App Router), plain JS/JSX (no TypeScript), Tailwind CSS.
- All 46 slides live as data in `data/slides.js` and are rendered by 8
  reusable layout components in `components/layouts/`.
- Charts (the two capability/usage bar charts, the citation-premium chart,
  and the portfolio alluvial/Sankey chart) are hand-built SVG/HTML — no
  charting library — styled in the deck's own palette.
- Fonts (Fraunces + IBM Plex Mono) are self-hosted via the `@fontsource`
  packages rather than fetched live from Google Fonts at build time. This
  is the same visual result as `next/font/google` but removes any
  dependency on reaching Google's font CDN during `npm run build` —
  helpful for CI, offline builds, or a laptop on flaky venue wifi before a
  talk.

### Presenting controls

- **Arrow keys / Spacebar** — next / previous slide.
- **Click anywhere on a slide** (outside the nav buttons/menu/notes
  drawer) — advances to the next slide.
- **Bottom-right circular buttons** — prev / next.
- **Bottom-left counter** — `01 / 46` style position indicator.
- **Thin gold bar along the bottom edge** — overall deck progress.
- **Top-right "Menu"** — opens an overlay listing every slide's number and
  title; click any entry to jump straight there. Press `Escape` or `M` to
  close.
- **`N`** — toggles a presenter notes drawer (dark panel, slides up from
  the bottom) showing the current slide's speaking notes. Off by default —
  meant for a laptop confidence monitor during rehearsal, not for the
  projected view.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To verify a production build locally:

```bash
npm run build
npm run start
```

## Slide 9 — portfolio chart is the real source graphic

Slide 9 ("Sixteen years. Nineteen companies. One family tree.") renders
the presenter's actual original portfolio chart, sourced directly from his
Adobe Illustrator file (`DS Development.ai`). It was converted losslessly
to `/public/portfolio-sankey.svg` (all text converted to vector paths, so
it renders identically everywhere with no font dependency), with a
high-res PNG fallback at `/public/portfolio-sankey.png`.

`components/charts/PortfolioSankey.js` presents it as a book "figure
plate" — a mounted illustration with a printed caption — rather than
redrawing or relabelling it, since the chart's own colour key (customer
segment: B2C/Researcher, Institution, Publisher, Equipment Supplier,
Corporate, Funder) and era bands along the bottom (B2C Era → Publisher Era
→ Institutional Era → G&F Era → Corporate Era → B2C Era) are meaningful
details in their own right and shouldn't be paraphrased.

If the source `.ai`/data ever changes, re-export a new SVG/PNG into
`/public` with the same filenames and no other code needs to change.

## Deploying: push to GitHub, then deploy on Vercel

This app has no server-side secrets or environment variables, so deployment
is just "push to GitHub, import into Vercel."

### 1. Push this project to a new GitHub repository

From inside the `turning-the-page-deck` folder:

```bash
git init
git add .
git commit -m "Initial commit: Turning the Page deck"
```

Then, on GitHub:

1. Go to https://github.com/new and create a new repository (e.g.
   `turning-the-page-deck`). Leave it empty — don't initialize with a
   README, .gitignore, or license, since this project already has those.
2. Copy the remote URL GitHub gives you, then run:

```bash
git branch -M main
git remote add origin <YOUR_NEW_REPO_URL>
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to https://vercel.com and sign in (GitHub login is easiest).
2. Click **Add New… → Project**.
3. Under **Import Git Repository**, find and select the repo you just
   pushed (you may need to click "Adjust GitHub App Permissions" the first
   time to grant Vercel access to it).
4. Vercel will auto-detect this as a Next.js project — the default build
   settings (`npm run build`, output directory auto-detected) work as-is.
   No environment variables are required.
5. Click **Deploy**. After the build finishes (about a minute), Vercel
   gives you a live URL (`https://your-project-name.vercel.app`).
6. Optional: in the project's **Settings → Domains**, add a custom domain
   if you have one you'd like to point at the deck.

Every subsequent `git push` to `main` will trigger a new deployment
automatically.

## Project structure

```
turning-the-page-deck/
├── app/
│   ├── layout.js        # Root layout, font imports
│   ├── page.js           # Renders <Deck />
│   └── globals.css       # Tailwind + base styles, CSS font variables
├── components/
│   ├── Deck.js            # Main client component: state, keyboard/click
│   │                       nav, menu, notes drawer, progress bar
│   ├── Slide.js            # Maps a slide's `layout` field to a component
│   ├── Kicker.js            # Small monospace eyebrow label
│   ├── Emphasis.js           # Parses *word* markup into italic gold spans
│   ├── NavControls.js         # Prev/next circular buttons + counter
│   ├── ProgressBar.js          # Bottom-edge gold progress bar
│   ├── MenuOverlay.js           # Full-screen slide list / jump menu
│   ├── NotesDrawer.js            # Presenter notes drawer (toggle: N)
│   ├── slideTitle.js              # Derives display titles for the menu
│   ├── layouts/
│   │   ├── TitleSlide.js
│   │   ├── SectionSlide.js
│   │   ├── StatementSlide.js
│   │   ├── QuoteSlide.js
│   │   ├── StatSlide.js
│   │   ├── ListSlide.js
│   │   ├── ChartSlide.js
│   │   └── ClosingSlide.js
│   └── charts/
│       ├── GroupedBarChart.js    # Week 1 vs Week 12 capability/usage
│       ├── SingleBarChart.js      # Citation premium chart
│       └── PortfolioSankey.js      # renders the real source graphic, see note above
├── data/
│   └── slides.js           # All 46 slides as structured data
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── jsconfig.json            # "@/..." import alias
```
