import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function LanguageSelection() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    navigate("/landing");
  };

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#171614] text-[#f7f4ee]">
      {/* Background noise texture */}
      <div className="absolute inset-0 hero-noise" aria-hidden="true" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(163,131,90,0.09),transparent_32%)]" />

      {/* Decorative corners */}
      <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l border-t border-white/10 sm:left-10 sm:top-10" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b border-r border-white/10 sm:bottom-10 sm:right-10" />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 text-center sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-[#a3835a]" />
          <span className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[#a3835a]">
            Welcome / స్వాగతం
          </span>
          <span className="h-px w-10 bg-[#a3835a]" />
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.9] tracking-[-0.025em] text-[#f7f4ee] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="py-2">Select Language</span>

        </motion.h1>
        <motion.h1
          className="font-display text-[clamp(2rem,4vw,3rem)] leading-[0.9] tracking-[-0.025em] text-[#f7f4ee] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="py-2">భాషను ఎంచుకోండి</span>
        </motion.h1>

        {/* <motion.p
          className="mx-auto max-w-xl font-sans text-sm leading-7 text-white/55 sm:text-base mb-12"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Choose your preferred language / మీరు ఇష్టపడే భాషను ఎంచుకోండి
        </motion.p> */}

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            onClick={() => handleLanguageSelect("en")}
            className="group relative inline-flex items-center justify-center gap-3 border border-[#a3835a]/70 bg-[#a3835a]/10 px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#f7f4ee] transition-all duration-300 hover:bg-[#a3835a] hover:text-[#171614] hover:scale-105"
          >
            <span className="text-lg">🇬🇧</span>
            English
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#a3835a] transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => handleLanguageSelect("te")}
            className="group relative inline-flex items-center justify-center gap-3 border border-[#a3835a]/70 bg-[#a3835a]/10 px-8 py-4 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#f7f4ee] transition-all duration-300 hover:bg-[#a3835a] hover:text-[#171614] hover:scale-105"
          >
            <span className="text-lg">🇮🇳</span>
            తెలుగు
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#a3835a] transition-all duration-300 group-hover:w-full" />
          </button>
        </motion.div>

        <motion.p
          className="mt-12 font-sans text-[9px] uppercase tracking-[0.28em] text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Can also change later / తర్వాత కూడా మార్చుకోవచ్చు.
        </motion.p>
      </div>
    </div>
  );
}