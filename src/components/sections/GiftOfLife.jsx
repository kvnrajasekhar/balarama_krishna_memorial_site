import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { TimeMarker, RevealText, NarrativeBlock } from "../storytelling";

export function GiftOfLife() {
  const { t } = useTranslation();

  return (
    <section
      id="gift-of-life"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(163,131,90,0.08),transparent_40%),_#f7f4ee] px-6 py-28 text-[#24221f] sm:px-10 lg:px-16 lg:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a3835a]/40 to-transparent" />

      <div className="mx-auto max-w-5xl">
        {/* Opening Transition - Loss to Hope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("giftOfLife.kicker")}</SectionLabel>
        </motion.div>

        {/* Powerful Typographic Transition */}
        <div className="mt-20 min-h-[40vh] flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,7vw,8rem)] leading-[0.85] tracking-[-0.07em] text-[#24221f]"
          >
            {t("giftOfLife.openingEnded")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.85] tracking-[-0.06em] text-[#a3835a]"
          >
            {t("giftOfLife.openingContinued")}
          </motion.p>
        </div>

        {/* Title and Summary */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto max-w-3xl text-center mt-32"
        >
          <h2 className="font-display text-[clamp(1.8rem,3vw,3rem)] leading-none tracking-[-0.04em] text-[#24221f]">
            {t("giftOfLife.title")}
          </h2>
          <p className="mx-auto mt-6 font-sans text-lg leading-9 text-[#5e5952]">
            {t("giftOfLife.summary")}
          </p>
        </motion.div>

        {/* 5 AUGUST 2025 - Decision */}
        <div className="mt-48">
          <TimeMarker date="5 AUGUST 2025" delay={0.2} />
          
          <div className="mt-16">
            <RevealText variant="mask" delay={0.4} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
              A DECISION BORN FROM LOVE
            </RevealText>
          </div>

          <NarrativeBlock delay={0.6} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.decision.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        {/* A MOMENT OF HOPE */}
        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            A MOMENT OF HOPE
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.hope.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        {/* 7 AUGUST 2025 - Final Morning */}
        <div className="mt-48">
          <TimeMarker date="7 AUGUST 2025" delay={0.2} />
          
          <div className="mt-16">
            <RevealText variant="mask" delay={0.4} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
              THE FINAL MORNING
            </RevealText>
          </div>

          <NarrativeBlock delay={0.6} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.finalMorning.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        {/* THE FINAL GOODBYE */}
        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            THE FINAL GOODBYE
            <br />
            <span className="text-[#a3835a]">Words, tears, and grace</span>
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.goodbye.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        {/* BEYOND OUR FAMILY */}
        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            BEYOND OUR FAMILY
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.press.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        {/* 3:33 PM - The Final Moment */}
        <div className="mt-48">
          <TimeMarker time="3:33 PM" label="The official time of death" delay={0.2} />
          
          <div className="mt-16">
            <RevealText variant="mask" delay={0.4} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
              THE FINAL MOMENT
            </RevealText>
          </div>

          <NarrativeBlock delay={0.6} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.finalMoment.content")}
            </RevealText>
          </NarrativeBlock>
        </div>

        {/* A TRIBUTE */}
        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            A TRIBUTE FROM GGH, GUNTUR
          </RevealText>

          <NarrativeBlock delay={0.5} className="max-w-3xl">
            <RevealText variant="line" delay={0.2} className="font-sans text-lg leading-9 text-[#4d4a46]">
              {t("giftOfLife.sections.tribute.content")}
            </RevealText>
          </NarrativeBlock>
        </div>
      </div>

      <ChapterTransition
        nextChapter={t("organDonation.title")}
        nextChapterId="organ-donation"
        targetPath="/story/organ-donation"
        label={t("giftOfLife.continue")}
      />
    </section>
  );
}
