import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: viewportMargin,
    amount: 0.3,
  });

  const selectedVariant = variants[variant] || variants.line;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

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
      variants={selectedVariant.container}
      className={className}
      style={{ delay }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div
            key={i}
            variants={selectedVariant.item}
            className="block"
          >
            {splitChildren(child)}
          </motion.div>
        ))
      ) : (
        <motion.div variants={selectedVariant.item} className="block">
          {splitChildren(children)}
        </motion.div>
      )}
    </motion.div>
  );
}

export function ScrollProgressReveal({ children, className = "" }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40]);

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
