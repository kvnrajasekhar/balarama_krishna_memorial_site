import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { HeroPortrait } from "./HeroPortrait";
import "./hero.css";

/* Minimal inline icons — kept dependency-free rather than pulling in an
   icon library for two glyphs. Swap for lucide-react equivalents
   (Calendar, ArrowDown) if your project already depends on it. */
function CalendarIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
            <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
            <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
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
 * Hero Section — entrance into Kanagala Balarama Krishna's life story.
 *
 * INTEGRATION NOTE: I only received the HeroPortrait subcomponent, not your
 * full app, design_plan.md, or any existing scroll/section controller. This
 * section is self-contained: it drives its own exit transition with
 * useScroll()/useTransform() as the user scrolls it out of view. If your
 * project already has a centralized scroll controller (GSAP ScrollTrigger,
 * a custom snap system, etc.), swap the `useScroll` block below for hooks
 * into that controller instead — the visual output (fade/rise/contract)
 * should stay the same, just driven by your existing progress value rather
 * than this local one.
 */
export default function HeroSection({
    portraitSrc = "/images/nanna-image.png",
    portraitAlt = "Portrait of Kanagala Balarama Krishna",
}) {
    const sectionRef = useRef(null);
    const prefersReducedMotion = useReducedMotion();
    const { t } = useTranslation();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Exit transition as the hero scrolls away — text fades/rises first,
    // portrait follows a beat later.
    const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.45], [0, -36]);
    const portraitOpacity = useTransform(scrollYProgress, [0.1, 0.6], [1, 0]);
    const portraitY = useTransform(scrollYProgress, [0, 0.6], [0, -64]);

    const easedEntrance = { duration: 1, ease: [0.22, 1, 0.36, 1] };

    return (
        <section
            ref={sectionRef}
            id="hero"
            aria-label="Introduction to Kanagala Balarama Krishna's life story"
            className="hero-section relative flex h-auto min-h-[100svh] w-full flex-col overflow-hidden lg:h-[100svh] lg:min-h-[680px]"
        >
            <div aria-hidden="true" className="hero-grain" />
            <div aria-hidden="true" className="hero-vignette" />

            <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-6 pt-20 sm:px-10 lg:grid lg:grid-cols-[minmax(0,44%)_minmax(0,56%)] lg:items-center lg:gap-8 lg:px-16 lg:pt-16">
                {/* ---------- Left: editorial text zone ---------- */}
                <motion.div
                    style={prefersReducedMotion ? undefined : { opacity: textOpacity, y: textY }}
                    className="hero-font-sans order-2 flex flex-col items-center pb-12 text-center lg:order-1 lg:items-start lg:pb-0 lg:text-left"
                >
                    <div className="hero-thread lg:pl-6">
                        <motion.p
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...easedEntrance, delay: 0.1 }}
                            className="text-[11px] uppercase tracking-[0.32em] text-[var(--hero-bronze)]"
                        >
                            {t("hero.kicker")}
                        </motion.p>

                        <motion.h1
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...easedEntrance, delay: 0.22 }}
                            aria-label="Kanagala Balarama Krishna"
                            className="hero-font-display mt-3 text-[var(--hero-ink)]"
                            style={{
                                fontWeight: 500,
                                lineHeight: 0.98,
                                letterSpacing: "-0.01em",
                                fontSize: "clamp(2.6rem, 4.6vw + 1.2rem, 5.75rem)",
                            }}
                        >
                            {t("hero.name").split(" ").map((namePart) => (
                                <span aria-hidden="true" className="block" key={namePart}>{namePart}</span>
                            ))}
                        </motion.h1>

                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ...easedEntrance, delay: 0.34 }}
                            className="hero-divider mt-5 justify-center lg:justify-start"
                        >
                            <span aria-hidden="true" className="hero-divider-mark" />
                        </motion.div>

                        <motion.p
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...easedEntrance, delay: 0.42 }}
                            className="mt-5 max-w-sm text-sm uppercase tracking-[0.14em] text-[var(--hero-ink-soft)] sm:text-base"
                        >
                            {t("hero.tagline")}
                        </motion.p>

                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...easedEntrance, delay: 0.54 }}
                            className="mt-7 flex items-center gap-3 text-xs tracking-[0.08em] text-[var(--hero-ink-soft)]"
                        >
                            <CalendarIcon aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--hero-bronze)]" />
                            <span aria-hidden="true" className="h-8 w-px bg-[var(--hero-line)]" />
                            <span>
                                <p className="hero-font-display text-sm text-[var(--hero-ink)]">{t("hero.birthDate")}</p>
                                <p className="mt-1 uppercase tracking-[0.22em]">Bhattiprolu &middot; Guntur</p>
                            </span>
                        </motion.div>

                        {/* ---------- Scroll cue ---------- */}
                        <motion.div
                            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...easedEntrance, delay: 0.7 }}
                            className="mt-10 flex flex-col items-center gap-3 lg:items-start"
                        >
                            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--hero-bronze)]">
                                {t("hero.storyLabel")}
                            </span>
                            <span aria-hidden="true" className="hero-scroll-line" />
                            <span className="hero-scroll-ring" aria-hidden="true">
                                <ArrowDownIcon className="hero-scroll-arrow h-4 w-4 text-[var(--hero-bronze)]" />
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--hero-ink-soft)]">
                                {t("hero.scrollToExplore")}
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ---------- Right: free-standing portrait ---------- */}
                <motion.div
                    style={prefersReducedMotion ? undefined : { opacity: portraitOpacity, y: portraitY }}
                    className="order-1 lg:order-2"
                >
                    <HeroPortrait src={portraitSrc} alt={portraitAlt} />
                </motion.div>
            </div>
        </section>
    );
}