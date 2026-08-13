import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function StoryChapter({ 
  children, 
  className = "",
  background = "bg-[#171614]",
  textColor = "text-[#f7f4ee]"
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className={`${background} ${textColor} px-6 py-28 sm:px-10 lg:px-16 lg:py-40 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export function StoryHeading({ 
  kicker, 
  title, 
  summary, 
  className = "" 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`text-center ${className}`}>
        {kicker && <span className="section-kicker">{kicker}</span>}
        {title && (
          <h2 className="mt-6 font-display text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.035em]">
            {title}
          </h2>
        )}
        {summary && (
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 opacity-60">
            {summary}
          </p>
        )}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center ${className}`}
    >
      {kicker && <span className="section-kicker">{kicker}</span>}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-6 font-display text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.035em]"
        >
          {title}
        </motion.h2>
      )}
      {summary && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 opacity-60"
        >
          {summary}
        </motion.p>
      )}
    </motion.div>
  );
}

export function NarrativeBlock({ 
  children, 
  className = "",
  delay = 0 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
