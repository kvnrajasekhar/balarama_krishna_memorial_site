import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";

export function ValueReveal({ 
  values, 
  className = "",
  finalMessage 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });
const {t} = useTranslation();
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={className}>
        {values.map((value, index) => (
          <p
            key={index}
            className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[-0.05em] text-[#24221f] mb-12"
          >
            {value}
          </p>
        ))}
        {finalMessage && (
          <p className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-[1.1] tracking-[-0.03em] text-[#a3835a]">
            {finalMessage}
          </p>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>

      {values.map((value, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.9, 
            delay: 0.3 + (index * 0.25),
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[-0.05em] text-[#24221f] mb-16"
        >
          {value}
        </motion.p>
      ))}

      {finalMessage && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.9, 
            delay: 0.3 + (values.length * 0.25),
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-[1.1] tracking-[-0.03em] text-[#a3835a]"
        >
          {finalMessage}
        </motion.p>
      )}
    </div>
  );
}
