import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { X } from "lucide-react";
import { MemoryImage, RevealText } from "../storytelling";

const galleryImages = [
  { src: "/images/Nanna/nanna-1.png", category: "family", size: "large" },
  { src: "/images/Nanna/3brothers.jpeg", category: "family", size: "medium" },
  { src: "/images/Nanna/nanna-2.jpg", category: "childhood", size: "small" },
  { src: "/images/Nanna/nanna-3.JPG", category: "work", size: "medium" },
  { src: "/images/Nanna/nanna-4.jpeg", category: "family", size: "small" },
  { src: "/images/Nanna/nanna-5.jpg", category: "everyday", size: "small" },
  { src: "/images/Nanna/nanna-6.jpeg", category: "work", size: "medium" },
  { src: "/images/Nanna/nanna-7.jpg", category: "family", size: "large" },
  { src: "/images/Nanna/nanna-9.jpeg", category: "everyday", size: "small" },
  { src: "/images/Nanna/nanna-e3.jpg", category: "memories", size: "medium" },
  { src: "/images/Nanna/nanna-e4.jpg", category: "memories", size: "small" },
  { src: "/images/Nanna/nanna-image.jpg", category: "finalYears", size: "medium" },
  { src: "/images/Nanna/school-he-studied.jpeg", category: "childhood", size: "medium" },
  { src: "/images/Nanna/bhaskar-anna-marriage.jpeg", category: "family", size: "medium" },
  { src: "/images/Nanna/bhaskar-anna-marriage2.jpeg", category: "family", size: "medium" },
];

export function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="bg-[#eee8de] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionLabel>{t("gallery.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("gallery.title")}
          </h2>
        </motion.div>

        {/* Memories Emerging - Editorial Memory Wall */}
        <div className="mt-20">
          <RevealText variant="mask" delay={0.3} className="font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-none tracking-[-0.03em] text-[#5e5952] mb-12 text-center">
            {t("gallery.surfaceTitle")}
          </RevealText>
        </div>

        {/* Editorial Memory Wall - Varying sizes and whitespace */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <MemoryImage
                key={image.src}
                src={image.src}
                alt={`Memory - ${image.category}`}
                size={image.size}
                onClick={() => setSelectedImage(image)}
                delay={index * 0.08}
              />
            ))}
          </div>
        </div>

        <ChapterTransition
          nextChapter={t("legacy.title")}
          nextChapterId="legacy"
          targetPath="/story/legacy"
          label={t("storyRoutes.galleryNext")}
        />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors"
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
              src={selectedImage.src}
              alt="Gallery photograph"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
