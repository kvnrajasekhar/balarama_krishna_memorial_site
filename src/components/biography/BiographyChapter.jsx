import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function BiographyChapter({ chapterKey, index, onImageClick }) {
  const { t } = useTranslation();
  const chapter = t(`biography.chapters.${chapterKey}`, { returnObjects: true });

  const compactPortraitClasses = "mx-auto block h-auto w-full max-w-[220px] sm:max-w-[240px] md:max-w-[280px]";
  const isCompactPortrait = (src) =>
    ["/images/Nanna/after-10th.jpeg", "/images/Nanna/starting-work.jpeg", "/images/Nanna/with-wife.jpeg"].includes(src);

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

        {chapter.image && (
          <div className="mt-6">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => onImageClick(chapter.image)}
              className="group block w-full overflow-hidden rounded-2xl border border-[#e7e0d7] bg-[#f7f4ee] shadow-[0_12px_35px_rgba(36,34,31,0.06)] text-left"
            >
              <img
                src={chapter.image}
                alt={chapter.imageAlt || chapter.title}
                className={`${isCompactPortrait(chapter.image) ? compactPortraitClasses : "block h-auto w-full"} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
              />
            </motion.button>
          </div>
        )}

        {chapter.caption && (
          <p className="font-sans text-sm leading-6 text-[#817a70] italic max-w-2xl">
            {chapter.caption}
          </p>
        )}

        {chapter.images && (
          <div className="mt-6 columns-1 gap-5 sm:columns-2 [column-fill:_balance]">
            {chapter.images.map((img, idx) => (
              <div key={idx} className="mb-5 break-inside-avoid">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  onClick={() => onImageClick(img.src)}
                  className="group block w-full overflow-hidden rounded-2xl border border-[#e7e0d7] bg-[#f7f4ee] shadow-[0_12px_35px_rgba(36,34,31,0.06)] text-left"
                >
                  <img
                    src={img.src}
                    alt={img.alt || chapter.title}
                    className={`${isCompactPortrait(img.src) ? compactPortraitClasses : "block h-auto w-full"} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                  />
                </motion.button>
                {img.caption && (
                  <p className="mt-3 font-sans text-sm leading-6 text-[#817a70] italic max-w-2xl">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
