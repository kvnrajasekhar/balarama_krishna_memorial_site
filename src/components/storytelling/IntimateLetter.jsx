import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

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

export function IntimateLetter({ 
  children, 
  signature,
  className = "" 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef(null);
  
  // Mobile-friendly viewport settings
  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "-50px" : "-100px", // Smaller margin for mobile
    amount: isMobile ? 0.05 : 0.2, // Much smaller threshold for mobile
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
        transition={{ duration: isMobile ? 0.6 : 1 }} // Faster on mobile
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
                duration: isMobile ? 0.6 : 0.9, // Faster on mobile
                delay: isMobile ? 0.1 + (index * 0.1) : 0.3 + (index * 0.2), // Faster delays on mobile
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
            transition={{ 
              duration: isMobile ? 0.6 : 0.9, // Faster on mobile
              delay: isMobile ? 0.1 : 0.3, // Faster delay on mobile
              ease: [0.22, 1, 0.36, 1] 
            }}
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
          transition={{ 
            duration: isMobile ? 0.6 : 0.8, // Faster on mobile
            delay: isMobile ? 0.3 : 0.8, // Faster delay on mobile
            ease: [0.22, 1, 0.36, 1] 
          }}
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
