import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";
import { useTranslation } from "react-i18next";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

export function ValueReveal({ 
  values, 
  className = "",
  finalMessage 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  
  // Mobile-friendly viewport settings
  const isInView = useInView(containerRef, {
    once: true,
    margin: isMobile ? "-20px" : "-50px", // Even smaller margin for mobile
    amount: isMobile ? 0.05 : 0.1, // Even smaller threshold for mobile
  });
const {t} = useTranslation();
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={className}>
        {values.map((value, index) => (
          <p
            key={index}
            className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[-0.05em] text-[#a3835a] mb-12"
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
            duration: isMobile ? 0.6 : 0.9, // Faster animation on mobile
            delay: isMobile ? 0.1 + (index * 0.15) : 0.3 + (index * 0.25), // Faster delays on mobile
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[-0.05em] text-[#a3835a] mb-16"
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
            duration: isMobile ? 0.6 : 0.9, // Faster animation on mobile
            delay: isMobile ? 0.1 + (values.length * 0.15) : 0.3 + (values.length * 0.25), // Faster delays on mobile
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-[1.1] tracking-[-0.03em] text-[#24221f]"
        >
          {finalMessage}
        </motion.p>
      )}
    </div>
  );
}
