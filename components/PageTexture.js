// A very faint, fixed full-viewport paper texture: a fractal-noise grain,
// a low-frequency "foxing" mottle, and a warm vignette. Meant to read as
// "aged vellum" rather than flat digital cream — subtle enough to
// disappear on a projector, present enough to add a little tooth and
// warmth up close (you'd only notice the foxing if you looked). Rendered
// once, behind all slide content.
export default function PageTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {/* fine paper grain */}
      <svg className="absolute inset-0 h-full w-full paper-grain" preserveAspectRatio="none">
        <filter id="paperGrainFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0.11
                    0 0 0 0 0.10
                    0 0 0 0 0.09
                    0 0 0 0.55 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#paperGrainFilter)" />
      </svg>

      {/* faint sepia foxing / mottling — large soft blotches, barely there */}
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        style={{ opacity: 0.04, mixBlendMode: "multiply" }}
      >
        <filter id="foxingFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.016"
            numOctaves="3"
            seed="7"
            stitchTiles="stitch"
            result="blotch"
          />
          <feColorMatrix
            in="blotch"
            type="matrix"
            values="0 0 0 0 0.42
                    0 0 0 0 0.28
                    0 0 0 0 0.10
                    0 0 0 0.65 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#foxingFilter)" />
      </svg>

      {/* warm vignette toward the edges, in place of a neutral-grey fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, transparent 42%, rgba(90,63,25,0.05) 76%, rgba(74,50,20,0.13) 100%)",
        }}
      />
    </div>
  );
}
