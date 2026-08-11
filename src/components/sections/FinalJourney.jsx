import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function FinalJourney() {
  const { t } = useTranslation();
  const sections = ["day1", "accident", "news", "ggh", "privateHospital", "day2", "returnGGH", "night"];

  return (
    <section id="final-journey" className="bg-[#171614] px-6 py-28 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("finalJourney.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#f7f4ee]">
            {t("finalJourney.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-white/60">
            {t("finalJourney.summary")}
          </p>
        </motion.div>

        <div className="mt-16 space-y-6 border-l border-white/10 pl-6 sm:pl-8 lg:pl-12">
          {sections.map((key, index) => {
            const section = t(`finalJourney.sections.${key}`, { returnObjects: true });
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
              >
                <div className="absolute -left-[1.02rem] top-8 h-5 w-5 rounded-full border border-[#a3835a] bg-[#171614]" />
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl text-[#f7f4ee]">
                  {section.title}
                </h3>
                <p className="mt-4 max-w-3xl font-sans text-base leading-8 text-white/70">
                  {section.content}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ChapterTransition
        nextChapter={t("giftOfLife.title")}
        nextChapterId="gift-of-life"
        targetPath="/story/gift-of-life"
        label="Discover his gift of life"
      />
    </section>
  );
}
