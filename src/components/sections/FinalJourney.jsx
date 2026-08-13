import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { TimeMarker, LargeNumber, RevealText, NarrativeBlock } from "../storytelling";

export function FinalJourney() {
  const { t } = useTranslation();

  return (
    <section id="final-journey" className="bg-[#171614] px-6 py-28 text-[#f7f4ee] sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("finalJourney.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.035em] text-[#f7f4ee]">
            {t("finalJourney.title")}
          </h2>
        </motion.div>

        <div className="mt-32">
          <TimeMarker date={t("finalJourney.timeline.day1Date")} delay={0.2} />

          <div className="mt-16 mb-32">
            <RevealText variant="mask" delay={0.4} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee]">
              {t("finalJourney.headings.normalMorning")}
            </RevealText>
          </div>

          <div className="space-y-24">
            <NarrativeBlock delay={0.6} className="max-w-3xl">
              <TimeMarker time={t("finalJourney.timeline.day1Time")} label={t("finalJourney.timeline.day1Label")} delay={0} className="mb-8" />
              <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
                {t("finalJourney.sections.day1.content")}
              </RevealText>
            </NarrativeBlock>
          </div>
        </div>

        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee] mb-16">
            {t("finalJourney.headings.journeyHome")}
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
              {t("finalJourney.sections.accident.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        <div className="mt-48 min-h-[40vh] flex items-center justify-center">
          <RevealText variant="mask" delay={0.4} className="font-display text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.03em] text-white/50 text-center max-w-2xl">
            {t("finalJourney.headings.travelingHome")}
            <br /><br />
            {t("finalJourney.headings.moveLeft")}
            <br /><br />
            {t("finalJourney.headings.andThen")}
            <br /><br />
            <span className="text-[#f7f4ee]">{t("finalJourney.headings.everythingChanged")}</span>
          </RevealText>
        </div>

        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee] mb-16">
            {t("finalJourney.headings.newsReachedUs")}
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
              {t("finalJourney.sections.news.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee] mb-16">
            {t("finalJourney.headings.atGgh")}
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
              {t("finalJourney.sections.ggh.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        <div className="mt-48 min-h-[50vh] flex flex-col items-center justify-center">
          <LargeNumber number="95%" label={t("finalJourney.metrics.chanceOfSurvival")} delay={0.3} color="#f7f4ee" />

          <div className="mt-16">
            <RevealText variant="mask" delay={0.6} className="font-sans text-lg leading-9 text-white/60 max-w-2xl text-center">
              {t("finalJourney.sections.privateHospital.content")}
            </RevealText>
          </div>

          <div className="mt-24">
            <LargeNumber number="5%" label={t("finalJourney.metrics.weHeldOnToThis")} delay={0.9} color="rgba(247, 244, 238, 0.4)" />
          </div>
        </div>

        <div className="mt-48">
          <TimeMarker date={t("finalJourney.timeline.day2Date")} delay={0.2} />

          <div className="mt-16">
            <RevealText variant="mask" delay={0.4} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee] mb-16">
              {t("finalJourney.headings.morningWeNeverWanted")}
            </RevealText>
          </div>

          <NarrativeBlock delay={0.6} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
              {t("finalJourney.sections.day2.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee] mb-16">
            {t("finalJourney.headings.returningToGgh")}
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
              {t("finalJourney.sections.returnGGH.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#f7f4ee] mb-16">
            {t("finalJourney.headings.theNight")}
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-white/70">
              {t("finalJourney.sections.night.content")}
            </RevealText>
          </NarrativeBlock>
        </div>
      </div>

      <ChapterTransition
        nextChapter={t("giftOfLife.title")}
        nextChapterId="gift-of-life"
        targetPath="/story/gift-of-life"
        label={t("finalJourney.continue")}
      />
    </section>
  );
}
