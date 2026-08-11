import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function WhoWasHe() {
  const { t } = useTranslation();

  return (
    <section id="who-was-he" className="bg-[#eee8de] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("whoWasHe.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("whoWasHe.title")}
          </h2>

          <p className="mt-8 mx-auto max-w-2xl font-sans text-lg leading-8 text-[#5e5952]">
            {t("whoWasHe.content")}
          </p>
        </motion.div>
      </div>

      <ChapterTransition
        nextChapter={t("biography.title")}
        nextChapterId="biography"
        targetPath="/story/biography"
        label="Read his life story"
      />
    </section>
  );
}
