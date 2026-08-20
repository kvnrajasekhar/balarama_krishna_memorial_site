import { motion, useReducedMotion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export function PreFooter() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const quoteLines = t("preFooter.quote", { returnObjects: true });

  // Meaning-based timing: longer pause after the first line, normal pauses after others
  const lineDelays = prefersReducedMotion 
    ? [0, 0, 0, 0] 
    : [0.3, 0.8, 1.1, 1.5]; // Base delay + meaning-based pauses

  const easedTransition = { duration: 1.4, ease: [0.22, 1, 0.36, 1] };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dawn Reveal */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, scale: 1.05 }}
        animate={isInView ? (prefersReducedMotion ? {} : { opacity: 1, scale: 1 }) : {}}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/footer.png" />
          <img
            src="/images/footer-mobile.png"
            alt=""
            className="w-full h-full object-cover object-center overflow-hidden"
            loading="lazy"
          />
        </picture>
      </motion.div>

      {/* Subtle warm light sweep */}
      {isInView && !prefersReducedMotion && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-100/10 to-transparent" />
        </motion.div>
      )}

      {/* Gradient Overlay for readability */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={isInView ? (prefersReducedMotion ? {} : { opacity: 1 }) : {}}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/40"
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl px-6 sm:px-10 lg:px-16 text-center">
        {/* Decorative ornament */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0 }}
          animate={isInView ? (prefersReducedMotion ? {} : { opacity: 1, scaleX: 1 }) : {}}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
        </motion.div>

        {/* Quote - line by line reveal */}
        <blockquote className="font-display text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.4] text-white/95 tracking-tight mb-6">
          {quoteLines.map((line, index) => (
            <motion.p
              key={index}
              initial={prefersReducedMotion ? {} : { 
                opacity: 0, 
                y: 15, 
                filter: "blur(8px)" 
              }}
              animate={isInView ? (prefersReducedMotion ? {} : { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)" 
              }) : {}}
              transition={{
                ...easedTransition,
                delay: lineDelays[index]
              }}
              className="mb-2 last:mb-0"
            >
              {line}
            </motion.p>
          ))}
        </blockquote>

        {/* Attribution */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? (prefersReducedMotion ? {} : { opacity: 1 }) : {}}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm sm:text-base text-amber-200/80 tracking-[0.2em] uppercase"
        >
          {t("preFooter.attribution")}
        </motion.p>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? (prefersReducedMotion ? {} : { opacity: 1 }) : {}}
          transition={{ duration: 1.5, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm sm:text-base text-zinc-300/80 tracking-[0.2em] uppercase"
        >
          {t("preFooter.name")}
        </motion.p>

        {/* Bottom decorative ornament */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scaleX: 0 }}
          animate={isInView ? (prefersReducedMotion ? {} : { opacity: 1, scaleX: 1 }) : {}}
          transition={{ duration: 1.2, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mt-8"
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-200/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}