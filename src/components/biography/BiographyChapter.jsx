import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function BiographyChapter({ chapterKey, index }) {
  const { t } = useTranslation();
  const chapter = t(`biography.chapters.${chapterKey}`, { returnObjects: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative pl-12 pb-16 last:pb-0"
    >
      {/* Chapter number */}
      <div className="absolute left-0 top-0 font-display text-6xl font-light text-[#a3835a] leading-none tracking-tight">
        {chapter.number}
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="font-display text-2xl tracking-tight text-[#24221f] leading-tight">
          {chapter.title}
        </h3>

        {chapter.year && (
          <span className="inline-block font-sans text-xs tracking-widest text-[#817a70] uppercase">
            {chapter.year}
          </span>
        )}

        <p className="font-sans text-base leading-7 text-[#5e5952] max-w-2xl">
          {chapter.content}
        </p>
      </div>
    </motion.div>
  );
}
