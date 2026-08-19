import { useState, useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Free-standing portrait for the Hero. No frame, no card, no circular crop —
 * the transparent PNG sits directly in the atmosphere. Depth comes from a
 * radiating warm light and a large, visible sepia "echo" of the same
 * portrait offset up and to the right, the way it appears in the reference —
 * not from decorative rings or glow rings.
 */
export function HeroPortrait({ src, alt, showEcho = true }) {
  const [imageReady, setImageReady] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  // A handful of fine dust motes, positioned once per mount — deliberately
  // few, CSS-driven, no per-frame JS.
  const motes = useMemo(
    () =>
      Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        left: 4 + ((i * 11) % 92),
        top: 8 + ((i * 17) % 78),
        size: 2 + (i % 3),
        duration: 10 + (i % 4) * 3,
        delay: i * 1.2,
        driftX: i % 2 === 0 ? 10 : -8,
      })),
    []
  );

  // A few larger, softly blurred bokeh circles for the warm glow drifting
  // through the atmosphere — few enough to stay cheap (transform/opacity).
  const bokeh = useMemo(
    () => [
      { left: 70, top: 20, size: 10, delay: 0 },
      { left: 88, top: 55, size: 6, delay: 2.5 },
      { left: 60, top: 68, size: 5, delay: 5 },
    ],
    []
  );

  return (
    <div className="relative mx-auto flex h-[58vh] min-h-[420px] w-full max-w-[620px] items-end justify-center overflow-visible sm:h-[68vh] lg:h-[82vh] lg:max-w-none">
      {/* Radiating warm light behind the figure */}
      <div
        aria-hidden="true"
        className="hero-rays absolute left-[58%] top-[27%] h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="hero-light absolute left-[58%] top-[27%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full"
      />

      {/* Large sepia "echo" of the same photograph, offset up and to the
          right — this is the visible depth layer, not a faint duplicate.
          Same untouched PNG, no facial alteration: only CSS filter/opacity. */}
      {showEcho && imageReady && (
        <img
          aria-hidden="true"
          src={src}
          alt=""
          className="hero-echo pointer-events-none absolute h-full w-full object-contain object-bottom"
        />
      )}

      {/* Bokeh — few, large, blurred, cheap */}
      {!prefersReducedMotion &&
        bokeh.map((b, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="hero-bokeh absolute rounded-full"
            style={{
              left: `${b.left}%`,
              top: `${b.top}%`,
              width: b.size * 4,
              height: b.size * 4,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}

      {/* Fine dust motes, confined to the portrait's atmosphere */}
      {!prefersReducedMotion &&
        motes.map((m) => (
          <span
            key={m.id}
            aria-hidden="true"
            className="hero-mote absolute"
            style={{
              left: `${m.left}%`,
              top: `${m.top}%`,
              width: m.size,
              height: m.size,
              animationDuration: `${m.duration}s`,
              animationDelay: `${m.delay}s`,
              "--drift-x": `${m.driftX}px`,
              "--drift-y": "-70px",
            }}
          />
        ))}

      {/* The real, untouched photograph */}
      <motion.div
        className="relative z-10 h-full w-full"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {imageReady ? (
          <img
            src={src}
            alt={alt}
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-contain object-bottom drop-shadow-[0_30px_40px_rgba(34,29,22,0.22)]"
            onError={() => setImageReady(false)}
          />
        ) : (
          <div className="absolute inset-x-[10%] bottom-0 top-[8%] flex flex-col items-center justify-center border border-dashed border-[var(--hero-line)] bg-black/[0.015] px-8 text-center">
            <span className="hero-font-sans mb-3 text-[10px] uppercase tracking-[0.28em] text-[var(--hero-bronze)]">
              Hero portrait
            </span>
            <p className="hero-font-sans max-w-xs text-sm leading-6 text-[var(--hero-ink-soft)]">
              Add the transparent PNG at
              <span className="mx-1 text-[var(--hero-ink)]">public/images/father.png</span>
              to place the portrait here.
            </p>
          </div>
        )}
      </motion.div>

      {/* Bottom fade so the free-standing figure resolves into the page */}
      <div aria-hidden="true" className="hero-portrait-fade" />
    </div>
  );
}