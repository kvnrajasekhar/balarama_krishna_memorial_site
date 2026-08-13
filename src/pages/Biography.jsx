import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SectionLabel } from "../components/ui/SectionLabel";
import { BiographyChapter } from "../components/biography/BiographyChapter";
import { ChapterNavigation } from "../components/biography/ChapterNavigation";

export function Biography() {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);

  const chapterKeys = ["01", "02", "03", "04", "05", "06", "07", "08"];


  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#24221f]">
      <Header />
      
      <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center mb-16 lg:mb-20">
            <SectionLabel>{t("biography.title")}</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.025em] text-[#24221f]">
              {t("biography.subtitle")}
            </h2>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
            <ChapterNavigation chapters={chapterKeys} />

            <div className="space-y-8">
              {chapterKeys.map((chapterKey, index) => (
                <div key={chapterKey} id={`chapter-${index}`}>
                  <BiographyChapter chapterKey={chapterKey} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#171614] z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-display text-2xl text-[#a3835a]">Continuing his story...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      

    </main>
  );
}
