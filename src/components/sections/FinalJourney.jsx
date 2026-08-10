import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function FinalJourney() {
  const { t } = useTranslation();

  return (
    <section id="final-journey" className="bg-[#171614] px-6 py-28 sm:px-10 lg:px-16 lg:py-40 text-[#f7f4ee]">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>{t("finalJourney.kicker")}</SectionLabel>
          
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#f7f4ee]">
            {t("finalJourney.title")}
          </h2>
          
          <div className="mt-12 p-8 border border-white/10 bg-white/[0.02]">
            <p className="font-sans text-lg leading-8 text-white/60">
              {t("finalJourney.content")}
            </p>
          </div>
        </motion.div>
      </div>

      <ChapterTransition 
        nextChapter={t("giftOfLife.title")}
        nextChapterId="gift-of-life"
        label="Discover his gift of life"
      />
    </section>
  );
}
