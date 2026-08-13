import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { BiographyChapter } from "../biography/BiographyChapter";
import { ChapterNavigation } from "../biography/ChapterNavigation";

export function Biography() {
  const { t } = useTranslation();

  const chapterKeys = ["01", "02", "03", "04", "05", "06", "07", "08"];

  return (
    <section id="biography" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <SectionLabel>{t("biography.kicker")}</SectionLabel>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("biography.title")}
          </h2>
        </motion.div>

        {/* Biography content */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          {/* Desktop navigation */}
          <ChapterNavigation chapters={chapterKeys} />

          {/* Chapters */}
          <div className="space-y-8">
            {chapterKeys.map((chapterKey, index) => (
              <div key={chapterKey} id={`chapter-${index}`}>
                <BiographyChapter chapterKey={chapterKey} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ChapterTransition
        nextChapter={t("finalJourney.title")}
        nextChapterId="final-journey"
        targetPath="/story/final-journey"
        label={t("storyRoutes.biographyNext")}
      />
    </section>
  );
}
