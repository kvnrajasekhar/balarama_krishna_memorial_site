import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

export function OrganDonation() {
  const { t } = useTranslation();
  const organs = ["liver", "kidneys", "eyes", "heart"];

  return (
    <section id="organ-donation" className="bg-[#eee8de] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("organDonation.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("organDonation.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-7 text-[#5e5952]">
            {t("organDonation.intro")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {organs.map((organKey, index) => {
            const organ = t(`organDonation.organs.${organKey}`, { returnObjects: true });
            return (
              <motion.article
                key={organKey}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[2rem] border border-[#d8d0c4] bg-[#fcfaf6] p-8"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
                  {organ.lives}
                </p>
                <h3 className="mt-4 font-display text-2xl text-[#24221f]">
                  {organ.title}
                </h3>
                <p className="mt-4 font-sans text-base leading-8 text-[#5e5952]">
                  {organ.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 rounded-[2rem] border border-[#d8d0c4] bg-[#f7f4ee] p-8 text-center"
        >
          <p className="font-sans text-base leading-8 text-[#5e5952]">
            {t("organDonation.summary")}
          </p>
          <p className="mt-4 font-display text-2xl text-[#24221f]">
            {t("organDonation.closing")}
          </p>
        </motion.div>
      </div>

      <ChapterTransition
        nextChapter={t("recognition.title")}
        nextChapterId="recognition"
        targetPath="/story/recognition"
        label="View official recognition"
      />
    </section>
  );
}
