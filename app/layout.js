// Fonts: Fraunces (serif display, incl. italic) + IBM Plex Mono (label/mono).
//
// These are self-hosted via the @fontsource packages rather than fetched
// live from next/font/google. Functionally identical (same font families,
// same weights, italic included) but self-hosting means the build never
// depends on reaching fonts.googleapis.com at build time — a good property
// for a CI/offline-friendly build and for a laptop that might be on a
// venue's flaky wifi before a talk.
//
// Using the "full" variable-axis build (rather than the wght-only build)
// so the illuminated-manuscript pass can push Fraunces's own optical-size
// (opsz) and SOFT axes on the drop caps — no blackletter/script font, just
// the existing display face leaning into its own bigger, slightly warmer
// display character at large sizes. ~85KB heavier than the wght-only
// build; still a single self-hosted asset, no new package.
import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";

export const metadata = {
  title: "Turning the Page (Without Losing the Plot)",
  description:
    "A talk for Pan Macmillan by Daniel Hook, CEO of Digital Science — how to use AI without losing yourself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif">{children}</body>
    </html>
  );
}
