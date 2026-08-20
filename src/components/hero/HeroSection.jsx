import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import "./hero.css";

/* Minimal inline icons — dependency-free. Swap for lucide-react
   (Calendar, ArrowDown, ArrowRight) if your project already depends on it. */
function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
    </svg>
  );
}
function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4.5 12h14.2M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 5v13.2M6.5 13l5.5 5.5 5.5-5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Hero Section — entrance into the life story.
 *
 * v3: the portrait, flowers, and background atmosphere are now baked into
 * three pre-composed images (public/images/hero-mobile.png, hero-tab.png,
 * hero-desktop.png), swapped responsively via <picture>. This component
 * only lays the translated text on top, with a vignette for legibility.
 *
 * ASSUMPTIONS (no visibility into the actual PNGs or your i18n setup):
 * - react-i18next's useTranslation()/t() — swap the import if you use a
 *   different i18n library; the t("key") call sites stay the same.
 * - Breakpoints: mobile <768px, tablet 768–1023px, desktop ≥1024px —
 *   matching whatever aspect ratios you designed the three images at.
 *   Adjust the two `media` values on the <source> tags if your images
 *   were designed for different breakpoints.
 * - Mobile composition is stacked (text toward the bottom of the frame);
 *   desktop/tablet composition is side-by-side (text on the left). If
 *   your actual images place things differently, the text column's
 *   position classes below are the only thing you need to move.
 */
export default function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.45], [0, -32]);

  const easedEntrance = { duration: 1, ease: [0.22, 1, 0.36, 1] };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label={t("hero.name")}
      className="hero-section relative flex min-h-screen w-full flex-col overflow-hidden"
    >
      {/* Responsive pre-composed background — one request, browser picks
          the matching source. fetchpriority="high" since this is almost
          certainly the LCP element. */}
      <picture>
        <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.png" />
        <source media="(min-width: 768px)" srcSet="/images/hero-tab.png" />
        <img
          src="/images/hero-mobile.png"
          alt={t("hero.portraitAlt")}
          className="hero-bg-img"
          fetchpriority="high"
          decoding="async"
        />
      </picture>
      <div aria-hidden="true" className="hero-vignette-img" />

      {/* ---------- Text column ---------- */}
      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: textOpacity, y: textY }}
        className="hero-font-sans relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-6 pb-14 pt-24 sm:px-10 sm:pb-16 md:justify-center md:pb-0 md:pt-16 lg:px-16"
      >
        <div className="mx-auto max-w-md text-center md:mx-0 md:max-w-lg md:text-left">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easedEntrance, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.32em] text-[var(--hero-accent)]"
          >
            {t("hero.kicker")}
          </motion.p>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easedEntrance, delay: 0.22 }}
            className="hero-font-display mt-3 text-[var(--hero-text)]"
            style={{
              fontWeight: 500,
              lineHeight: 1.04,
              letterSpacing: "-0.005em",
              fontSize: "clamp(2.3rem, 3.6vw + 1.1rem, 4.75rem)",
            }}
          >
            {t("hero.name")}
          </motion.h1>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...easedEntrance, delay: 0.34 }}
            className="hero-divider mt-4 justify-center md:justify-start"
          >
            <span aria-hidden="true" className="hero-divider-mark" />
          </motion.div>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easedEntrance, delay: 0.42 }}
            className="mt-5 text-sm leading-relaxed text-[var(--hero-text-soft)] sm:text-base"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easedEntrance, delay: 0.52 }}
            className="mt-6 flex items-center justify-center gap-3 text-xs tracking-[0.06em] text-[var(--hero-text-soft)] md:justify-start"
          >
            <CalendarIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--hero-accent)]" />
            <span aria-hidden="true" className="h-8 w-px bg-[var(--hero-line)]" />
            <span>
              <p className="hero-font-display text-sm text-[var(--hero-text)]">{t("hero.birthDate")}</p>
              <p className="mt-1 uppercase tracking-[0.18em]">{t("hero.birthPlace")}</p>
            </span>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...easedEntrance, delay: 0.64 }}
            className="mt-8 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-start"
          >
            <a href="/welcome" className="hero-cta hero-font-sans text-sm">
              {t("hero.beginStory")}
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>

            {/* Compact scroll cue, kept light so it doesn't compete with the CTA */}
            <a
              href="#life-journey"
              className="hero-font-sans flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[var(--hero-text-soft)]"
            >
              <span>{t("hero.storyLabel")}</span>
              <span className="hero-scroll-ring" aria-hidden="true">
                <ArrowDownIcon className="hero-scroll-arrow h-3.5 w-3.5 text-[var(--hero-accent)]" />
              </span>
              <span className="sr-only">{t("hero.scrollToExplore")}</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}