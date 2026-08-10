import { useState } from "react";
import { motion } from "motion/react";

const father = {
  name: "Kanagala Balarama Krishna",
  birthDate: "24 December 1960",
  tagline: "A life of truth, family, hard work, and human relationships.",
  image: "/images/nanna-image.png",
};

function HeroPortrait({ src, alt }) {
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

function ScrollCue() {
  return (
    <motion.a
      href="#welcome"
      className="group absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.7 }}
      aria-label="Scroll to welcome"
    >
      <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-white/40 transition-colors group-hover:text-white/70">
        Explore his story
      </span>
      <motion.span
        className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 pt-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="h-1.5 w-px bg-[#a3835a]" />
      </motion.span>
    </motion.a>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#24221f]">
      <section className="relative flex min-h-screen overflow-hidden bg-[#171614] text-[#f7f4ee]">
        <div className="absolute inset-0 hero-noise" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(163,131,90,0.09),transparent_32%)]" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 items-center px-6 pb-20 pt-10 sm:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-16 lg:pb-0 lg:pt-0">
          <div className="order-2 flex flex-col justify-center text-center lg:order-1 lg:pr-10 lg:text-left">
            <motion.div
              className="mb-7 flex items-center justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="h-px w-10 bg-[#a3835a]" />
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[#a3835a]">
                A life remembered
              </span>
            </motion.div>

            <motion.h1
              className="font-display text-[clamp(3.2rem,6.2vw,6.8rem)] leading-[0.88] tracking-[-0.035em] text-[#f7f4ee]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Kanagala
              <br />
              <span className="text-[#d8d0c4]">Balarama Krishna</span>
            </motion.h1>

            <motion.div
              className="mt-8 flex items-center justify-center gap-4 font-sans text-xs tracking-[0.2em] text-white/50 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <span>{father.birthDate}</span>
              <span className="text-[#a3835a]">—</span>
              <span className="text-white/30">His story continues</span>
            </motion.div>

            <motion.p
              className="mx-auto mt-7 max-w-xl font-sans text-sm leading-7 text-white/55 sm:text-base lg:mx-0"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
            >
              {father.tagline}
            </motion.p>
          </div>

          <div className="order-1 lg:order-2">
            <HeroPortrait src={father.image} alt={father.name} />
          </div>
        </div>

        <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l border-t border-white/10 sm:left-10 sm:top-10" />
        <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b border-r border-white/10 sm:bottom-10 sm:right-10" />

        <ScrollCue />
      </section>

      <section id="welcome" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-kicker">The story begins</span>
          <h2 className="mt-5 font-display text-[clamp(2.7rem,5vw,5rem)] leading-none tracking-[-0.025em]">
            A life remembered through the people, moments, and values he left behind.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-8 text-[#5e5952]">
            The biography, family welcome, life timeline, final journey, gift of life,
            recognitions, and photographs will be built chapter by chapter.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;