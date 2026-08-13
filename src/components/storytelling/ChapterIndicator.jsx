import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../ui/usePrefersReducedMotion";

export function ChapterIndicator({ 
  chapterNumber, 
  title, 
  className = "" 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
          CHAPTER {chapterNumber}
        </span>
        <div className="h-px flex-1 bg-[#d8d0c4]" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">
        CHAPTER {chapterNumber}
      </span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="h-px flex-1 bg-[#d8d0c4] origin-left"
      />
    </motion.div>
  );
}

export function ChapterNavigation({ 
  currentChapter, 
  totalChapters,
  className = "" 
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`flex items-center justify-center gap-2 ${className}`}>
        {Array.from({ length: totalChapters }).map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full ${
              index === currentChapter - 1 ? "bg-[#a3835a]" : "bg-[#d8d0c4]"
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center justify-center gap-2 ${className}`}
    >
      {Array.from({ length: totalChapters }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={`h-1 w-8 rounded-full origin-left ${
            index === currentChapter - 1 ? "bg-[#a3835a]" : "bg-[#d8d0c4]"
          }`}
        />
      ))}
    </motion.div>
  );
}
