import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { X } from "lucide-react";
import { RevealText } from "../storytelling";

const galleryImages = [
  { src: "/images/Nanna/nanna-1.png", category: "family" },
  { src: "/images/Nanna/3brothers.jpeg", category: "family" },
  { src: "/images/Nanna/nanna-2.jpg", category: "childhood" },
  { src: "/images/Nanna/nanna-3.JPG", category: "work" },
  { src: "/images/Nanna/nanna-4.jpeg", category: "family" },
  { src: "/images/Nanna/nanna-5.jpg", category: "everyday" },
  { src: "/images/Nanna/nanna-6.jpeg", category: "work" },
  { src: "/images/Nanna/nanna-7.jpg", category: "family" },
  { src: "/images/Nanna/nanna-9.jpeg", category: "everyday" },
  { src: "/images/Nanna/nanna-e3.jpg", category: "memories" },
  { src: "/images/Nanna/nanna-e4.jpg", category: "memories" },
  { src: "/images/Nanna/nanna-image.jpg", category: "finalYears" },
  { src: "/images/Nanna/school-he-studied.jpeg", category: "childhood" },
  { src: "/images/Nanna/bhaskar-anna-marriage.jpeg", category: "family" },
  { src: "/images/Nanna/bhaskar-anna-marriage2.jpeg", category: "family" },
];

/**
 * MasonryPhoto — a single wall photo.
 *
 * Deliberately has NO fixed height and no row-span logic: the image keeps its
 * natural aspect ratio (`h-auto`) and simply fills the width of its CSS
 * column. That's what makes overlap impossible — every item's height is
 * exactly as tall as its own content, so nothing can spill into a neighbor
 * or into whatever follows the grid.
 */
function MasonryPhoto({ src, category, onClick, delay = 0 }) {
  const { t } = useTranslation();

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(delay, 0.6) }}
      className="group relative mb-6 block w-full overflow-hidden rounded-2xl border border-[#d8d0c4] bg-[#f7f4ee] shadow-[0_12px_40px_rgba(36,34,31,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a3835a]"
    >
      <img
        src={src}
        alt={t(`gallery.categories.${category}`, category)}
        loading="lazy"
        className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#24221f]/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-4 left-4 translate-y-2 font-sans text-[10px] uppercase tracking-[0.28em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {t(`gallery.categories.${category}`, category)}
      </span>
    </motion.button>
  );
}

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
          className="mb-16 text-center"
        >
          <SectionLabel>{t("gallery.kicker")}</SectionLabel>

          <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
            {t("gallery.title")}
          </h2>
        </motion.div>

        <div className="mt-20">
          <RevealText
            variant="mask"
            delay={0.3}
            className="mb-12 text-center font-display text-[clamp(1.5rem,2.5vw,2rem)] leading-none tracking-[-0.03em] text-[#5e5952]"
          >
            {t("gallery.surfaceTitle")}
          </RevealText>
        </div>

        {/* True masonry wall: CSS columns + natural image height.
            No fixed row height, no row-span math — so nothing can overlap,
            and the wall's real rendered height is always accurate, which is
            what keeps the ChapterTransition below from riding up into it. */}
        <div className="mt-16 columns-2 gap-6 md:columns-3 lg:columns-4 [column-fill:_balance]">
          {galleryImages.map((image, index) => (
            <div key={image.src} className="break-inside-avoid">
              <MasonryPhoto
                src={image.src}
                category={image.category}
                onClick={() => setSelectedImage(image)}
                delay={index * 0.05}
              />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ChapterTransition
            nextChapter={t("legacy.title")}
            nextChapterId="legacy"
            targetPath="/story/legacy"
            label={t("storyRoutes.galleryNext")}
          />
        </div>
      </div>

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
              src={selectedImage.src}
              alt="Gallery photograph"
              className="max-h-[90vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}