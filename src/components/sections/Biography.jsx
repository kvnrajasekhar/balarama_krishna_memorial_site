import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { BiographyChapter } from "../biography/BiographyChapter";
import { ChapterNavigation } from "../biography/ChapterNavigation";

export function Biography() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

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
                <BiographyChapter chapterKey={chapterKey} index={index} onImageClick={setSelectedImage} />
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute right-6 top-6 p-2 text-white/80 transition-colors hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Biography photograph"
              className="max-h-[90vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
