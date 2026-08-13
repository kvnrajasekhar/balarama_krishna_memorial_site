import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function IntimateLetter({ 
  children, 
  signature,
  className = "" 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.2,
  });

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={`max-w-3xl mx-auto ${className}`}>
        <div className="font-sans text-lg leading-10 text-[#5e5952]">
          {children}
        </div>
        {signature && (
          <div className="mt-16 text-right">
            <p className="font-sans text-base text-[#a3835a] italic">
              {signature}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref} className={`max-w-3xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-sans text-lg leading-10 text-[#5e5952]"
      >
        {Array.isArray(children) ? (
          children.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.9, 
                delay: 0.3 + (index * 0.2),
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="mb-8"
            >
              {paragraph}
            </motion.p>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.p>
        )}
      </motion.div>

      {signature && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-right"
        >
          <p className="font-sans text-base text-[#a3835a] italic">
            {signature}
          </p>
        </motion.div>
      )}
    </div>
  );
}
