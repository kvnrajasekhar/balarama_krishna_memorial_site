import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function ScrollCue({ targetId = "welcome" }) {
    const { t } = useTranslation();
  return (
    <motion.a
      href={`#${targetId}`}
      className="group absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-10"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7, duration: 0.7 }}
      aria-label="Scroll to welcome"
    >
      <span className="font-sans text-[9px] uppercase tracking-[0.32em] text-white/40 transition-colors group-hover:text-white/70">
        {t("hero.scrollCue")}
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
