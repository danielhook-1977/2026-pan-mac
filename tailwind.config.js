/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          // Warmed / deepened toward aged vellum rather than flat digital
          // cream — a modest shift from the previous #F5EFE0, not a
          // replacement.
          DEFAULT: "#F2E7CE",
          light: "#F5EEDC",
          dark: "#EFE1BE",
        },
        ink: {
          DEFAULT: "#1C1B18",
          muted: "#4A463D",
        },
        gold: {
          DEFAULT: "#8A6D1E",
          soft: "#B69A4A",
          dim: "#C9B37E",
          // Gold-leaf gradient stops (also mirrored in the `goldLeaf` SVG
          // gradient in components/motifs/GildedDefs.js) — light highlight
          // through to an antique-gold shadow.
          highlight: "#E8C765",
          shadow: "#6B5314",
        },
        // Rubrication red — the deck's one new accent, historically the
        // colour manuscripts used for section marks and emphasis. Used
        // sparingly: the progress ribbon, a drop-cap tendril's berry dot,
        // figure-plate corner ornaments, the quote-glyph accent. Never for
        // body or headline text.
        rubric: {
          DEFAULT: "#7A2E27",
          light: "#9B3A30",
          dark: "#521C17",
        },
        // Muted accent family used sparingly by chart ribbons / motifs —
        // tonal, editorial variants that stay harmonious with the
        // cream/ink/gold palette rather than a bright rainbow.
        accent: {
          sage: "#6B7A5E",
          terracotta: "#AD5C42",
          slate: "#5B6B73",
          teal: "#4F7A72",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
};
