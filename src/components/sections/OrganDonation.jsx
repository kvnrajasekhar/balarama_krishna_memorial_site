import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { RevealText } from "../storytelling";



/**
 * Image paths — update the extensions below if your actual files aren't .png
 * (e.g. some are .jpg or .svg). Everything else about sizing/framing is handled
 * automatically so mismatched source photos still read as one cohesive set.
 */
const ORGAN_IMAGES = {
  liver: "/images/organs/liver.png",
  kidneyLeft: "/images/organs/left-kidney.png",
  kidneyRight: "/images/organs/right-kidney.png",
  eyeLeft: "/images/organs/left-eye.jpg",
  eyeRight: "/images/organs/right-eye.jpg",
  heart: "/images/organs/heart.png",
};

/**
 * OrganImage — wraps a raw organ photo so mismatched source images (different
 * backgrounds, crops, resolutions) all read as one consistent, editorial set:
 * fixed square footprint, contain-fit so nothing stretches or crops oddly,
 * a soft radial feather so hard photo edges melt into the page instead of
 * looking like a pasted cutout, and a light unifying color grade tied to the
 * page's warm palette.
 */
function OrganImage({ src, alt, size = "md", muted = false, className = "" }) {
  const sizeClasses = {
    lg: "h-48 w-48 sm:h-60 sm:w-60 md:h-72 md:w-72",
    md: "h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{
        WebkitMaskImage:
          "radial-gradient(circle at center, black 56%, rgba(0,0,0,0.55) 68%, transparent 82%)",
        maskImage:
          "radial-gradient(circle at center, black 56%, rgba(0,0,0,0.55) 68%, transparent 82%)",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-contain"
        style={{
          filter: muted
            ? "grayscale(50%) sepia(10%) contrast(0.95) brightness(0.95) drop-shadow(0 16px 28px rgba(36,34,31,0.14))"
            : "grayscale(10%) sepia(8%) contrast(1.03) saturate(0.92) drop-shadow(0 16px 28px rgba(36,34,31,0.14))",
        }}
      />
    </div>
  );
}

/** OrganPair — two related images (left/right kidney, left/right eye) that
 * settle into a single balanced composition, per the "show the pair, don't
 * just print the number 2" direction. */
function OrganPair({ leftSrc, rightSrc, leftAlt, rightAlt }) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <OrganImage src={leftSrc} alt={leftAlt} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <OrganImage src={rightSrc} alt={rightAlt} />
      </motion.div>
    </div>
  );
}

export function OrganDonation() {
  const { t } = useTranslation();

  const organs = [
    {
      key: "liver",
      no: "01",
      title: "LIVER",
      description: t("organDonation.organs.liver.description"),
      visual: <OrganImage src={ORGAN_IMAGES.liver} alt="Illustration of a donated liver" size="lg" />,
    },
    {
      key: "kidneys",
      no: "02",
      title: "TWO KIDNEYS",
      description: t("organDonation.organs.kidneys.description"),
      visual: (
        <OrganPair
          leftSrc={ORGAN_IMAGES.kidneyLeft}
          rightSrc={ORGAN_IMAGES.kidneyRight}
          leftAlt="Left kidney"
          rightAlt="Right kidney"
        />
      ),
    },
    {
      key: "eyes",
      no: "03",
      title: "TWO EYES",
      description: t("organDonation.organs.eyes.description"),
      visual: (
        <OrganPair
          leftSrc={ORGAN_IMAGES.eyeLeft}
          rightSrc={ORGAN_IMAGES.eyeRight}
          leftAlt="Left eye"
          rightAlt="Right eye"
        />
      ),
    },
    {
      key: "heart",
      no: "04",
      title: "HEART",
      description: t("organDonation.organs.heart.description"),
      visual: <OrganImage src={ORGAN_IMAGES.heart} alt="Illustration of a heart" size="lg" muted />,
    },
  ];

  return (
    <section
      id="organ-donation"
      className="relative overflow-hidden bg-[#f3efe9] px-6 py-28 text-[#24221f] sm:px-10 lg:px-16 lg:py-40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,131,90,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("organDonation.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.8rem,5vw,5rem)] leading-none tracking-[-0.04em] text-[#24221f]">
            {t("organDonation.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-8 text-[#5e5952]">
            {t("organDonation.intro")}
          </p>
        </motion.div>

        <div className="mt-20 text-center">
          <RevealText
            variant="mask"
            delay={0.3}
            className="font-display text-[clamp(2.3rem,4vw,4rem)] leading-none tracking-[-0.04em] text-[#24221f]"
          >
            {t("organDonation.headings.giftContinues")}
          </RevealText>
        </div>

        <div className="mt-20 space-y-24">
          {organs.map((organ, index) => (
            <motion.article
              key={organ.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="grid gap-10 border-t border-[#d8d0c4] pt-10 md:grid-cols-[minmax(260px,420px)_1fr] md:items-center"
            >
              <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[2rem] border border-[#d8d0c4] bg-[radial-gradient(circle_at_top,_rgba(163,131,90,0.12),transparent_42%),_#f7f4ee] p-8 shadow-[0_20px_70px_rgba(36,34,31,0.04)]">
                <div className="absolute left-6 top-6 font-display text-[clamp(4rem,8vw,7rem)] leading-none tracking-[-0.08em] text-[#a3835a]/12">
                  {organ.no}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  {organ.visual}
                </motion.div>
              </div>

              <div className="max-w-xl">
                <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#a3835a]">
                  {organ.no}
                </p>
                <h3 className="mt-4 font-display text-[clamp(2.2rem,3.5vw,4rem)] leading-[0.95] tracking-[-0.05em] text-[#24221f]">
                  {organ.title}
                </h3>
                <p className="mt-5 font-sans text-base leading-8 text-[#4d4a46]">
                  {organ.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-28 border-t border-[#d8d0c4] pt-16 text-center"
        >
          <RevealText
            variant="mask"
            delay={0.2}
            className="font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f]"
          >
            {t("organDonation.summary")}
          </RevealText>

          <RevealText
            variant="mask"
            delay={0.35}
            className="mx-auto mt-8 max-w-2xl font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-none tracking-[-0.04em] text-[#24221f]"
          >
            {t("organDonation.closing")}
          </RevealText>
        </motion.div>
      </div>

      <ChapterTransition
        nextChapter={t("recognition.title")}
        nextChapterId="recognition"
        targetPath="/story/recognition"
        label={t("storyRoutes.organDonationNext")}
      />
    </section>
  );
}