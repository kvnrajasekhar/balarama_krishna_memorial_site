import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function TimeMarker({ 
  time, 
  date, 
  label, 
  className = "",
  delay = 0 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
    amount: 0.5,
  });

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {date && <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">{date}</p>}
        {time && <p className="font-display text-[clamp(3rem,6vw,6rem)] leading-none tracking-[-0.05em] text-[#f7f4ee]">{time}</p>}
        {label && <p className="mt-2 font-sans text-xs uppercase tracking-[0.22em] text-white/40">{label}</p>}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {date && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.15 }}
          className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]"
        >
          {date}
        </motion.p>
      )}
      {time && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: delay + 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3rem,6vw,6rem)] leading-none tracking-[-0.05em] text-[#f7f4ee]"
        >
          {time}
        </motion.p>
      )}
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
          className="mt-2 font-sans text-xs uppercase tracking-[0.22em] text-white/40"
        >
          {label}
        </motion.p>
      )}
    </motion.div>
  );
}

export function LargeNumber({ 
  number, 
  label, 
  className = "",
  delay = 0,
  color = "#f7f4ee"
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.6,
  });

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        <p className="font-display text-[clamp(4rem,10vw,10rem)] leading-none tracking-[-0.06em]" style={{ color }}>
          {number}
        </p>
        {label && <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">{label}</p>}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1.1, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(4rem,10vw,10rem)] leading-none tracking-[-0.06em]"
        style={{ color }}
      >
        {number}
      </motion.p>
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.35 }}
          className="mt-4 font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]"
        >
          {label}
        </motion.p>
      )}
    </motion.div>
  );
}
