import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function Recognition() {
  const { t } = useTranslation();

  return (
    <section id="recognition" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>{t("recognition.kicker")}</SectionLabel>
          
          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("recognition.title")}
          </h2>
          
          <div className="mt-12 p-8 border border-[#d8d0c4] bg-[#fcfaf6]">
            <p className="font-sans text-lg leading-8 text-[#5e5952]">
              {t("recognition.content")}
            </p>
          </div>
        </motion.div>
      </div>

      <ChapterTransition 
        nextChapter={t("gallery.title")}
        nextChapterId="gallery"
        label="View photo gallery"
      />
    </section>
  );
}
