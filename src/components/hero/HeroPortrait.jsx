import { useState } from "react";
import { motion } from "motion/react";

export function HeroPortrait({ src, alt }) {
  const [imageReady, setImageReady] = useState(true);

  return (
    <div className="relative mx-auto flex h-[62vh] min-h-[470px] w-full max-w-[560px] items-end justify-center sm:h-[68vh] lg:h-[76vh]">
      {/* Soft halo */}
      <motion.div
        aria-hidden="true"
        className="hero-halo absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        initial={{ opacity: 0, scale: 0.82 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Editorial rings */}
      <motion.div
        aria-hidden="true"
        className="hero-ring hero-ring-one"
        initial={{ opacity: 0, rotate: -18, scale: 0.82 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden="true"
        className="hero-ring hero-ring-two"
        initial={{ opacity: 0, rotate: 12, scale: 0.9 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Decorative points */}
      <motion.span
        aria-hidden="true"
        className="hero-star left-[12%] top-[25%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        ✦
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="hero-star right-[11%] top-[35%] text-xs"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        ✦
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="hero-dot left-[21%] top-[48%]"
        animate={{ y: [0, -7, 0], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden="true"
        className="hero-dot right-[20%] top-[18%]"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.75, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Father's untouched PNG goes here */}
      <motion.div
        className="relative z-10 h-full w-full"
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {imageReady ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.35)]"
            onError={() => setImageReady(false)}
          />
        ) : (
          <div className="absolute inset-x-[12%] bottom-0 top-[10%] flex flex-col items-center justify-center border border-dashed border-white/15 bg-white/[0.02] px-8 text-center">
            <span className="mb-3 font-sans text-[10px] uppercase tracking-[0.28em] text-[#a3835a]">
              Hero portrait
            </span>
            <p className="max-w-xs font-sans text-sm leading-6 text-white/45">
              Add the transparent PNG at
              <span className="mx-1 text-white/70">public/images/father.png</span>
              to place the authentic portrait here.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
