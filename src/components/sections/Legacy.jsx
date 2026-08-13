import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { ValueReveal, RevealText } from "../storytelling";

export function Legacy() {
  const { t } = useTranslation();

  const values = [
    // t("legacy.values.honesty"),
    t("legacy.values.hardWork"),
    t("legacy.values.family"),
    t("legacy.values.relationships"),
    t("legacy.values.selflessness"),
  ];

  const finalMessage = t("legacy.values.finalMessage");

  return (
    <section id="legacy" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("legacy.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("legacy.title")}
          </h2>
        </motion.div>

        {/* Values Through Typography */}
        <div className="mt-32">
          <ValueReveal
            values={values}
            finalMessage={finalMessage}
            className="text-center"
          />
        </div>

        {/* Legacy Content */}
        <div className="mt-32">
          <RevealText variant="mask" delay={0.3} className="font-sans text-lg leading-10 text-[#5e5952] max-w-3xl mx-auto text-center">
            {t("legacy.content")}
          </RevealText>
        </div>
      </div>

      <ChapterTransition
        nextChapter={t("closing.title")}
        nextChapterId="closing"
        targetPath="/story/closing"
        label={t("storyRoutes.legacyNext")}
      />
    </section>
  );
}
