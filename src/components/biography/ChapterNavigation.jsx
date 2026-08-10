import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function ChapterNavigation({ chapters }) {
  const { t } = useTranslation();
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map((_, i) => 
        document.getElementById(`chapter-${i}`)
      );
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveChapter(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [chapters]);

  const scrollToChapter = (index) => {
    const element = document.getElementById(`chapter-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-24 space-y-6">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-[#a3835a]">
          {t("biography.kicker")}
        </span>
        
        <ul className="space-y-4">
          {chapters.map((chapterKey, index) => {
            const chapter = t(`biography.chapters.${chapterKey}`, { returnObjects: true });
            return (
              <li key={chapterKey}>
                <button
                  onClick={() => scrollToChapter(index)}
                  className={`text-left transition-colors ${
                    activeChapter === index
                      ? "text-[#a3835a]"
                      : "text-[#817a70] hover:text-[#24221f]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm">{chapter.number}</span>
                    <span className="font-sans text-sm">{chapter.title}</span>
                  </div>
                  {activeChapter === index && (
                    <motion.div
                      layoutId="active-indicator"
                      className="h-px bg-[#a3835a] mt-2"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
