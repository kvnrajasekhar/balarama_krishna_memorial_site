import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function AnatomicalLiver({ delay = 0 }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const initial = { opacity: 0, scale: 0.95 };
  const whileInView = { opacity: 1, scale: 1 };
  const transition = { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] };

  if (prefersReducedMotion) {
    return (
      <svg
        viewBox="0 0 200 180"
        className="w-full h-auto max-w-[400px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Anatomical illustration of a liver"
      >
        <path
          d="M40 60 C40 30 70 15 100 15 C140 15 170 35 175 60 C180 90 170 120 150 140 C130 160 100 170 70 165 C45 160 35 130 35 100 C35 80 38 70 40 60 Z"
          stroke="#a3835a"
          strokeWidth="1.5"
          fill="rgba(163, 131, 90, 0.08)"
        />
        <path
          d="M50 65 C50 45 75 35 100 35 C125 35 150 50 155 70 C160 95 150 115 135 130 C120 145 95 150 75 145 C55 140 45 115 45 90 C45 75 48 68 50 65 Z"
          stroke="#a3835a"
          strokeWidth="0.8"
          fill="rgba(163, 131, 90, 0.05)"
        />
        <path
          d="M60 70 C60 55 80 50 100 50 C120 50 140 60 145 75 C148 90 140 105 125 115 C110 125 90 130 75 125 C60 120 55 100 55 85 C55 75 58 72 60 70 Z"
          stroke="#a3835a"
          strokeWidth="0.5"
          fill="rgba(163, 131, 90, 0.03)"
        />
      </svg>
    );
  }

  return (
    <motion.svg
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={transition}
      viewBox="0 0 200 180"
      className="w-full h-auto max-w-[400px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anatomical illustration of a liver"
    >
      <motion.path
        d="M40 60 C40 30 70 15 100 15 C140 15 170 35 175 60 C180 90 170 120 150 140 C130 160 100 170 70 165 C45 160 35 130 35 100 C35 80 38 70 40 60 Z"
        stroke="#a3835a"
        strokeWidth="1.5"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      />
      <motion.path
        d="M50 65 C50 45 75 35 100 35 C125 35 150 50 155 70 C160 95 150 115 135 130 C120 145 95 150 75 145 C55 140 45 115 45 90 C45 75 48 68 50 65 Z"
        stroke="#a3835a"
        strokeWidth="0.8"
        fill="rgba(163, 131, 90, 0.05)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.4 }}
      />
      <motion.path
        d="M60 70 C60 55 80 50 100 50 C120 50 140 60 145 75 C148 90 140 105 125 115 C110 125 90 130 75 125 C60 120 55 100 55 85 C55 75 58 72 60 70 Z"
        stroke="#a3835a"
        strokeWidth="0.5"
        fill="rgba(163, 131, 90, 0.03)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.6 }}
      />
    </motion.svg>
  );
}

export function AnatomicalKidney({ delay = 0, side = "left" }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const xOffset = side === "left" ? 0 : 20;

  const initial = { opacity: 0, x: xOffset, scale: 0.95 };
  const whileInView = { opacity: 1, x: 0, scale: 1 };
  const transition = { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] };

  if (prefersReducedMotion) {
    return (
      <svg
        viewBox="0 0 100 140"
        className="w-full h-auto max-w-[200px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Anatomical illustration of a ${side} kidney`}
      >
        <path
          d="M30 20 C30 10 45 5 55 10 C65 15 75 25 78 40 C82 60 80 85 70 105 C60 125 45 135 35 130 C25 125 20 100 22 75 C24 50 28 30 30 20 Z"
          stroke="#a3835a"
          strokeWidth="1.5"
          fill="rgba(163, 131, 90, 0.08)"
        />
        <ellipse
          cx="35"
          cy="25"
          rx="8"
          ry="6"
          stroke="#a3835a"
          strokeWidth="0.8"
          fill="rgba(163, 131, 90, 0.05)"
        />
      </svg>
    );
  }

  return (
    <motion.svg
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={transition}
      viewBox="0 0 100 140"
      className="w-full h-auto max-w-[200px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Anatomical illustration of a ${side} kidney`}
    >
      <motion.path
        d="M30 20 C30 10 45 5 55 10 C65 15 75 25 78 40 C82 60 80 85 70 105 C60 125 45 135 35 130 C25 125 20 100 22 75 C24 50 28 30 30 20 Z"
        stroke="#a3835a"
        strokeWidth="1.5"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      />
      <motion.ellipse
        cx="35"
        cy="25"
        rx="8"
        ry="6"
        stroke="#a3835a"
        strokeWidth="0.8"
        fill="rgba(163, 131, 90, 0.05)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.4 }}
      />
    </motion.svg>
  );
}

export function AnatomicalEye({ delay = 0 }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const initial = { opacity: 0, scale: 0.95 };
  const whileInView = { opacity: 1, scale: 1 };
  const transition = { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] };

  if (prefersReducedMotion) {
    return (
      <svg
        viewBox="0 0 160 100"
        className="w-full h-auto max-w-[320px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Anatomical illustration of an eye"
      >
        <ellipse
          cx="80"
          cy="50"
          rx="70"
          ry="35"
          stroke="#a3835a"
          strokeWidth="1.5"
          fill="rgba(163, 131, 90, 0.06)"
        />
        <circle
          cx="80"
          cy="50"
          r="22"
          stroke="#a3835a"
          strokeWidth="1.2"
          fill="rgba(163, 131, 90, 0.1)"
        />
        <circle
          cx="80"
          cy="50"
          r="10"
          fill="#24221f"
        />
        <circle
          cx="77"
          cy="47"
          r="3"
          fill="rgba(255, 255, 255, 0.6)"
        />
      </svg>
    );
  }

  return (
    <motion.svg
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={transition}
      viewBox="0 0 160 100"
      className="w-full h-auto max-w-[320px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anatomical illustration of an eye"
    >
      <motion.ellipse
        cx="80"
        cy="50"
        rx="70"
        ry="35"
        stroke="#a3835a"
        strokeWidth="1.5"
        fill="rgba(163, 131, 90, 0.06)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      />
      <motion.circle
        cx="80"
        cy="50"
        r="22"
        stroke="#a3835a"
        strokeWidth="1.2"
        fill="rgba(163, 131, 90, 0.1)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.4 }}
      />
      <motion.circle
        cx="80"
        cy="50"
        r="10"
        fill="#24221f"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.6 }}
      />
      <motion.circle
        cx="77"
        cy="47"
        r="3"
        fill="rgba(255, 255, 255, 0.6)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.8 }}
      />
    </motion.svg>
  );
}

export function AnatomicalHeart({ delay = 0, subdued = false }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const strokeColor = subdued ? "rgba(163, 131, 90, 0.4)" : "#a3835a";
  const fillColor = subdued ? "rgba(163, 131, 90, 0.03)" : "rgba(163, 131, 90, 0.08)";

  const initial = { opacity: 0, scale: 0.95 };
  const whileInView = { opacity: 1, scale: 1 };
  const transition = { duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] };

  if (prefersReducedMotion) {
    return (
      <svg
        viewBox="0 0 140 160"
        className="w-full h-auto max-w-[280px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Anatomical illustration of a heart"
      >
        <path
          d="M70 145 C70 145 20 100 20 65 C20 40 35 25 55 25 C65 25 70 35 70 35 C70 35 75 25 85 25 C105 25 120 40 120 65 C120 100 70 145 70 145 Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill={fillColor}
        />
        <path
          d="M70 130 C70 130 30 95 30 65 C30 45 42 35 55 35 C62 35 67 42 70 42 C73 42 78 35 85 35 C98 35 110 45 110 65 C110 95 70 130 70 130 Z"
          stroke={strokeColor}
          strokeWidth="0.8"
          fill={subdued ? "rgba(163, 131, 90, 0.02)" : "rgba(163, 131, 90, 0.05)"}
        />
        <path
          d="M70 115 C70 115 40 88 40 65 C40 50 48 42 55 42 C60 42 65 48 70 48 C75 48 80 42 85 42 C92 42 100 50 100 65 C100 88 70 115 70 115 Z"
          stroke={strokeColor}
          strokeWidth="0.5"
          fill={subdued ? "rgba(163, 131, 90, 0.01)" : "rgba(163, 131, 90, 0.03)"}
        />
      </svg>
    );
  }

  return (
    <motion.svg
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true }}
      transition={transition}
      viewBox="0 0 140 160"
      className="w-full h-auto max-w-[280px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anatomical illustration of a heart"
    >
      <motion.path
        d="M70 145 C70 145 20 100 20 65 C20 40 35 25 55 25 C65 25 70 35 70 35 C70 35 75 25 85 25 C105 25 120 40 120 65 C120 100 70 145 70 145 Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill={fillColor}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      />
      <motion.path
        d="M70 130 C70 130 30 95 30 65 C30 45 42 35 55 35 C62 35 67 42 70 42 C73 42 78 35 85 35 C98 35 110 45 110 65 C110 95 70 130 70 130 Z"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill={subdued ? "rgba(163, 131, 90, 0.02)" : "rgba(163, 131, 90, 0.05)"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.4 }}
      />
      <motion.path
        d="M70 115 C70 115 40 88 40 65 C40 50 48 42 55 42 C60 42 65 48 70 48 C75 48 80 42 85 42 C92 42 100 50 100 65 C100 88 70 115 70 115 Z"
        stroke={strokeColor}
        strokeWidth="0.5"
        fill={subdued ? "rgba(163, 131, 90, 0.01)" : "rgba(163, 131, 90, 0.03)"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.6 }}
      />
    </motion.svg>
  );
}

export function AnatomicalComposition({ delay = 0 }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <svg
        viewBox="0 0 300 400"
        className="w-full h-auto max-w-[400px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Anatomical composition showing organ locations"
      >
        {/* Subtle body silhouette */}
        <ellipse
          cx="150"
          cy="200"
          rx="80"
          ry="150"
          stroke="rgba(163, 131, 90, 0.2)"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.02)"
        />
        {/* Liver position */}
        <ellipse
          cx="150"
          cy="160"
          rx="30"
          ry="25"
          stroke="#a3835a"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.08)"
        />
        {/* Kidneys position */}
        <ellipse
          cx="120"
          cy="180"
          rx="12"
          ry="18"
          stroke="#a3835a"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.08)"
        />
        <ellipse
          cx="180"
          cy="180"
          rx="12"
          ry="18"
          stroke="#a3835a"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.08)"
        />
        {/* Heart position - subdued */}
        <ellipse
          cx="150"
          cy="120"
          rx="15"
          ry="18"
          stroke="rgba(163, 131, 90, 0.4)"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.03)"
        />
        {/* Eyes position */}
        <ellipse
          cx="130"
          cy="80"
          rx="8"
          ry="5"
          stroke="#a3835a"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.08)"
        />
        <ellipse
          cx="170"
          cy="80"
          rx="8"
          ry="5"
          stroke="#a3835a"
          strokeWidth="1"
          fill="rgba(163, 131, 90, 0.08)"
        />
      </svg>
    );
  }

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay }}
      viewBox="0 0 300 400"
      className="w-full h-auto max-w-[400px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Anatomical composition showing organ locations"
    >
      {/* Subtle body silhouette */}
      <motion.ellipse
        cx="150"
        cy="200"
        rx="80"
        ry="150"
        stroke="rgba(163, 131, 90, 0.2)"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.02)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
      />
      {/* Liver position */}
      <motion.ellipse
        cx="150"
        cy="160"
        rx="30"
        ry="25"
        stroke="#a3835a"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.4 }}
      />
      {/* Kidneys position */}
      <motion.ellipse
        cx="120"
        cy="180"
        rx="12"
        ry="18"
        stroke="#a3835a"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.6 }}
      />
      <motion.ellipse
        cx="180"
        cy="180"
        rx="12"
        ry="18"
        stroke="#a3835a"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.7 }}
      />
      {/* Heart position - subdued */}
      <motion.ellipse
        cx="150"
        cy="120"
        rx="15"
        ry="18"
        stroke="rgba(163, 131, 90, 0.4)"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.03)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.8 }}
      />
      {/* Eyes position */}
      <motion.ellipse
        cx="130"
        cy="80"
        rx="8"
        ry="5"
        stroke="#a3835a"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.9 }}
      />
      <motion.ellipse
        cx="170"
        cy="80"
        rx="8"
        ry="5"
        stroke="#a3835a"
        strokeWidth="1"
        fill="rgba(163, 131, 90, 0.08)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 1 }}
      />
    </motion.svg>
  );
}

export function LivesTransition({ delay = 0 }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="flex justify-center gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-[#a3835a]"
            aria-label={`Life ${i}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-8">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + i * 0.15 }}
          className="w-3 h-3 rounded-full bg-[#a3835a]"
          aria-label={`Life ${i}`}
        />
      ))}
    </div>
  );
}
