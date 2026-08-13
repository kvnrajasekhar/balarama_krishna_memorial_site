import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function StatementReplacer({ statements, className = "", interval = 3000 }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statements.length);
    }, interval);

    return () => clearInterval(timer);
  }, [statements.length, interval, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {statements.map((statement, i) => (
          <p key={i} className="font-display text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] text-[#f7f4ee]">
            {statement}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] text-[#f7f4ee]"
        >
          {statements[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
