import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { SectionLabel } from "../ui/SectionLabel";
import { ChapterTransition } from "../transitions/ChapterTransition";

const certificatePlaceholders = [
  { title: "Jeevandan Certificate", subtitle: "Official appreciation certificate" },
  { title: "LVPEI Certificate", subtitle: "Eye donation recognition" },
];

const newspaperClippings = [
  { title: "Eenadu", src: "/images/Nanna/eenadu-paper-cutting.jpeg" },
  { title: "Sakshi", src: "/images/Nanna/sakshi-paper-cutting.jpeg" },
  { title: "News App", src: "/images/Nanna/news-app-1.jpeg" },
];

export function Recognition() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const sections = ["jeevandan", "jeevandanList", "lvpei", "legacy"];

  return (
    <section id="recognition" className="bg-[#f7f4ee] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-16 space-y-6 border-l border-[#d8d0c4] pl-6 sm:pl-8 lg:pl-12">
          {sections.map((key, index) => {
            const section = t(`recognition.sections.${key}`, { returnObjects: true });
            return (
              <motion.article
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative rounded-[1.75rem] border border-[#d8d0c4] bg-[#fcfaf6] p-8 shadow-[0_16px_60px_rgba(36,34,31,0.05)]"
              >
                <div className="absolute -left-[1.02rem] top-8 h-5 w-5 rounded-full border border-[#a3835a] bg-[#f7f4ee]" />
                <h3 className="font-display text-2xl text-[#24221f]">
                  {section.title}
                </h3>
                <p className="mt-4 max-w-3xl font-sans text-base leading-8 text-[#5e5952]">
                  {section.content}
                </p>
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
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-[#d8d0c4] bg-[#f7f4ee] p-8"
          >
            <h3 className="font-display text-2xl text-[#24221f]">
              {t("recognition.newspaperClippings.title")}
            </h3>
            <p className="mt-4 font-sans text-base leading-8 text-[#5e5952]">
              {t("recognition.newspaperClippings.description")}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {newspaperClippings.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group overflow-hidden rounded-[1.25rem] border border-[#d8d0c4] bg-[#fcfaf6] p-3 text-left"
                >
                  <div className="flex h-64 items-center justify-center overflow-hidden rounded-[1rem] bg-[#f3eee7]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-4 text-sm font-medium text-[#5e5952]">{item.title}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-[2rem] border border-[#d8d0c4] bg-[#171614] p-8 text-[#f7f4ee]"
          >
            <h3 className="font-display text-2xl text-[#f7f4ee]">Official certificates</h3>
            <p className="mt-4 font-sans text-base leading-8 text-white/70">
              Placeholder frames for the two certificates to be added once the final photos are shared.
            </p>
            <div className="mt-8 grid gap-4">
              {certificatePlaceholders.map((item) => (
                <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex min-h-[180px] items-center justify-center rounded-[1rem] border border-dashed border-white/20 bg-white/[0.03] text-center">
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#a3835a]">Photo pending</p>
                      <p className="mt-3 font-display text-xl">{item.title}</p>
                      <p className="mt-2 text-sm text-white/60">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-2 text-white/80 transition-colors hover:text-white"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[90vh] max-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ChapterTransition
        nextChapter={t("gallery.title")}
        nextChapterId="gallery"
        targetPath="/story/gallery"
        label="View photo gallery"
      />
    </section>
  );
}
