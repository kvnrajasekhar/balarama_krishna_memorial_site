import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function Closing() {
  const { t } = useTranslation();

  return (
    <section id="closing" className="bg-[#171614] px-6 py-28 sm:px-10 lg:px-16 lg:py-40 text-[#f7f4ee]">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#f7f4ee]">
            {t("closing.title")}
          </h2>
          
          <p className="font-sans text-sm tracking-widest text-[#a3835a] uppercase">
            {t("closing.subtitle")}
          </p>
          
          <div className="mt-12 p-8 border border-white/10 bg-white/[0.02]">
            <p className="font-sans text-lg leading-8 text-white/60">
              {t("closing.message")}
            </p>
          </div>
          
          <p className="font-sans text-base leading-7 text-white/40 italic">
            {t("closing.continuation")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
