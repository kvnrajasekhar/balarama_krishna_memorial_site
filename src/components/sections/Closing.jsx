import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { IntimateLetter } from "../storytelling";

export function Closing() {
  const { t } = useTranslation();

  return (
    <section id="closing" className="bg-[#171614] px-6 py-28 sm:px-10 lg:px-16 lg:py-40 text-[#f7f4ee]">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#f7f4ee]">
            {t("closing.title")}
          </h2>
          
          <p className="mt-4 font-sans text-sm tracking-widest text-[#a3835a] uppercase">
            {t("closing.subtitle")}
          </p>
        </motion.div>

        {/* Intimate Letter - Family Message */}
        <IntimateLetter 
          signature="With love, His family"
          className="px-8 sm:px-12 lg:px-16"
        >
          {t("closing.message")}
        </IntimateLetter>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-base leading-7 text-white/40 italic">
            {t("closing.continuation")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
