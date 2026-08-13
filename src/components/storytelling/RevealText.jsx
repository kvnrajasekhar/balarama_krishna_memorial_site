import { motion, useInView, useScroll, useTransform } from "motion/react";
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

const variants = {
  line: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },
  mask: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },
  word: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.1,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },
  scale: {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    },
    item: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },
};

export function RevealText({
  children,
  variant = "line",
  className = "",
  delay = 0,
  viewportMargin = "-100px",
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef(null);
  
  // Mobile-friendly viewport settings
  const isInView = useInView(ref, {
    once: true,
    margin: isMobile ? "-50px" : viewportMargin, // Smaller margin for mobile
    amount: isMobile ? 0.05 : 0.1, // Even smaller threshold for mobile
  });

  const selectedVariant = variants[variant] || variants.line;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Mobile-optimized variant
  const optimizedVariant = isMobile ? {
    container: {
      hidden: { opacity: 1 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.08, // Faster staggering on mobile
          delayChildren: 0.1, // Faster start on mobile
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 }, // Smaller movement on mobile
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5, // Faster animation on mobile
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  } : selectedVariant;

  const splitChildren = (content) => {
    if (typeof content !== "string") return content;

    if (variant === "word") {
      return content.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-1">
          {word}
        </span>
      ));
    }

    return content.split("\n").map((line, i) => (
      <div key={i} className="block">
        {line}
      </div>
    ));
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={optimizedVariant.container}
      className={className}
      style={{ delay }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={optimizedVariant.item}
            className="block"
          >
            {splitChildren(child)}
          </motion.div>
        ))
      ) : (
        <motion.div variants={optimizedVariant.item} className="block">
          {splitChildren(children)}
        </motion.div>
      )}
    </motion.div>
  );
}

export function ScrollProgressReveal({ children, className = "" }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mobile-friendly scroll progress values
  const opacity = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.2, 0.8, 1] : [0, 0.3, 0.7, 1], 
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress, 
    isMobile ? [0, 0.2, 0.8, 1] : [0, 0.3, 0.7, 1], 
    isMobile ? [20, 0, 0, -20] : [40, 0, 0, -40]
  );

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
