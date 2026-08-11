import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function GiftOfLife() {
  const { t } = useTranslation();
  const sections = ["decision", "hope", "finalMorning", "goodbye", "press", "finalMoment", "tribute"];

  return (
    <section id="gift-of-life" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("giftOfLife.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("giftOfLife.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-[#5e5952]">
            {t("giftOfLife.summary")}
          </p>
        </motion.div>

        <div className="mt-16 space-y-6 border-l border-[#d8d0c4] pl-6 sm:pl-8 lg:pl-12">
          {sections.map((key, index) => {
            const section = t(`giftOfLife.sections.${key}`, { returnObjects: true });
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative rounded-[1.75rem] border border-[#d8d0c4] bg-[#fcfaf6] p-8 shadow-[0_18px_70px_rgba(36,34,31,0.06)]"
              >
                <div className="absolute -left-[1.02rem] top-8 h-5 w-5 rounded-full border border-[#a3835a] bg-[#f7f4ee]" />
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </p>
                <h3 className="mt-4 font-display text-2xl text-[#24221f]">
                  {section.title}
                </h3>
                <p className="mt-4 max-w-3xl font-sans text-base leading-8 text-[#5e5952]">
                  {section.content}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ChapterTransition
        nextChapter={t("organDonation.title")}
        nextChapterId="organ-donation"
        targetPath="/story/organ-donation"
        label="Learn about organ donation"
      />
    </section>
  );
}
