import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { HeroPortrait } from "./HeroPortrait";
import { ScrollCue } from "./ScrollCue";

export function Hero() {
  const { t } = useTranslation();

  return (
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
              {t("hero.kicker")}
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
            <span>{t("hero.birthDate")}</span>
            <span className="text-[#a3835a]">—</span>
            <span className="text-white/30">{t("hero.deathDatePlaceholder")}</span>
          </motion.div>

          <motion.p
            className="mx-auto mt-7 max-w-xl font-sans text-sm leading-7 text-white/55 sm:text-base lg:mx-0"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            {t("hero.tagline")}
          </motion.p>
        </div>

        <div className="order-1 lg:order-2">
          <HeroPortrait 
            src="/images/nanna-image.png" 
            alt="Kanagala Balarama Krishna" 
          />
        </div>
      </div>

      <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l border-t border-white/10 sm:left-10 sm:top-10" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b border-r border-white/10 sm:bottom-10 sm:right-10" />

      <ScrollCue />
    </section>
  );
}
