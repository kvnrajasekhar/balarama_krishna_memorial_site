import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function MemoryImage({
  src,
  alt,
  className = "",
  size = "medium",
  onClick,
  delay = 0,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  const sizeClasses = {
    small: "aspect-[4/3]",
    medium: "aspect-[3/4]",
    large: "aspect-square",
    portrait: "aspect-[3/5]",
  };

  if (prefersReducedMotion) {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-[1rem] ${sizeClasses[size]} ${className}`}
        onClick={onClick}
        style={{ cursor: onClick ? "pointer" : "default" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-[1rem] ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <motion.img
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export function MemoryWall({ images, className = "" }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <MemoryImage
            key={index}
            src={image.src}
            alt={image.alt || "Memory"}
            size={image.size || "medium"}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {images.map((image, index) => (
        <MemoryImage
          key={index}
          src={image.src}
          alt={image.alt || "Memory"}
          size={image.size || "medium"}
          delay={index * 0.08}
        />
      ))}
    </div>
  );
}
