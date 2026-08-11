import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function Welcome() {
  const { t } = useTranslation();

  return (
    <section id="welcome" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>{t("welcome.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("welcome.title")}
          </h2>

          <div className="mt-8 space-y-6">
            <p className="mx-auto max-w-2xl font-sans text-lg leading-8 text-[#5e5952]">
              {t("welcome.content")}
            </p>

            <p className="mx-auto max-w-2xl font-sans text-base leading-7 text-[#817a70]">
              {t("welcome.purpose")}
            </p>
          </div>
        </motion.div>
      </div>

      <ChapterTransition
        nextChapter={t("whoWasHe.title")}
        nextChapterId="who-was-he"
        targetPath="/story/who-was-he"
        label="Discover who he was"
      />
    </section>
  );
}
