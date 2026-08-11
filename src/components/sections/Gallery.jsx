import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";
import { X } from "lucide-react";

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
  // { src: "/images/Nanna/ambulance-banner.jpeg", category: "finalYears", size: "large" },
];

export function Gallery() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "family", "childhood", "work", "everyday", "memories", "recognition"];

  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const getSizeClasses = (size) => {
    switch (size) {
      case "large": return "col-span-2 row-span-2";
      case "medium": return "col-span-1 row-span-2";
      case "small": return "col-span-1 row-span-1";
      default: return "col-span-1 row-span-1";
    }
  };

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 font-sans text-sm tracking-wide transition-all duration-300 ${selectedCategory === category
                ? "bg-[#a3835a] text-white"
                : "bg-[#f7f4ee] text-[#5e5952] hover:bg-[#d8d0c4]"
                }`}
            >
              {category === "all" ? "All" : t(`gallery.categories.${category}`)}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`relative overflow-hidden cursor-pointer group ${getSizeClasses(image.size)}`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt="Gallery photograph"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-xs text-white/90 uppercase tracking-wider">
                  {t(`gallery.categories.${image.category}`)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ChapterTransition
          nextChapter={t("legacy.title")}
          nextChapterId="legacy"
          targetPath="/story/legacy"
          label="Reflect on his legacy"
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
