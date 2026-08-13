import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { ArchiveDocument, DocumentLightbox, RevealText, NarrativeBlock } from "../storytelling";

export function Recognition() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const sections = ["jeevandan", "jeevandanList", "lvpei", "legacy"];

  const newspaperClippings = [
    { title: "Eenadu", src: "/images/Nanna/eenadu-paper-cutting.jpeg" },
    { title: "Sakshi", src: "/images/Nanna/sakshi-paper-cutting.jpeg" },
    { title: "News App", src: "/images/Nanna/news-app-1.jpeg" },
  ];

  return (
    <section id="recognition" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <SectionLabel>{t("recognition.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("recognition.title")}
          </h2>
        </motion.div>

        {/* Personal Archive Opening */}
        <div className="mt-32">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            {t("recognition.headings.giftRecognized")}
          </RevealText>
        </div>

        {/* Archive Documents - Documentary Style */}
        <div className="mt-32 space-y-32">
          {sections.map((key, index) => {
            const section = t(`recognition.sections.${key}`, { returnObjects: true });
            return (
              <div key={key}>
                <RevealText variant="mask" delay={0.3} className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a] mb-8">
                  {t("recognition.archive", { number: String(index + 1).padStart(2, "0") })}
                </RevealText>

                <NarrativeBlock delay={0.5} className="max-w-3xl">
                  <RevealText variant="line" delay={0.2} className="font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.1] text-[#24221f] mb-6">
                    {section.title}
                  </RevealText>
                  <RevealText variant="line" delay={0.3} className="font-sans text-lg leading-9 text-[#5e5952]">
                    {section.content}
                  </RevealText>
                  {section.link && (
                    <a
                      href={section.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex text-sm font-medium text-[#a3835a] underline-offset-4 hover:underline"
                    >
                      {section.linkText}
                    </a>
                  )}
                </NarrativeBlock>
              </div>
            );
          })}
        </div>

        {/* Newspaper Clippings - Documentary Evidence */}
        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            {t("recognition.headings.pressCoverage")}
          </RevealText>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newspaperClippings.map((item, index) => (
              <ArchiveDocument
                key={item.title}
                title={item.title}
                imageSrc={item.src}
                imageAlt={item.title}
                archiveNumber={`PRESS 0${index + 1}`}
                onImageClick={() => setSelectedImage(item)}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>

        {/* Official Certificates - Archive Style */}
        <div className="mt-48">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.04em] text-[#24221f] mb-16">
            {t("recognition.headings.officialCertificates")}
          </RevealText>

          <div className="grid gap-8 sm:grid-cols-2">
            <ArchiveDocument
              title="Jeevandan Certificate"
              subtitle="Official appreciation certificate"
              archiveNumber={t("recognition.archive", { number: "01" })}
              imageSrc="/images/Nanna/jeevandhan-certificate.jpeg"
              imageAlt="Jeevandan certificate of appreciation"
              onImageClick={() =>
                setSelectedImage({
                  title: "Jeevandan Certificate",
                  src: "/images/Nanna/jeevandhan-certificate.jpeg",
                })
              }
            />
            <ArchiveDocument
              title="LVPEI Certificate"
              subtitle="Eye donation recognition"
              archiveNumber={t("recognition.archive", { number: "02" })}
              imageSrc="/images/Nanna/lvpei-certificate.jpeg"
              imageAlt="LVPEI eye donation recognition certificate"
              onImageClick={() =>
                setSelectedImage({
                  title: "LVPEI Certificate",
                  src: "../../public/images/Nanna/lvpei-certificate.jpeg",
                })
              }
            />
          </div>
        </div>
      </div>

      <DocumentLightbox
        isOpen={selectedImage !== null}
        imageSrc={selectedImage?.src}
        imageAlt={selectedImage?.title}
        onClose={() => setSelectedImage(null)}
      />

      <ChapterTransition
        nextChapter={t("gallery.title")}
        nextChapterId="gallery"
        targetPath="/story/gallery"
        label={t("storyRoutes.recognitionNext")}
      />
    </section>
  );
}
