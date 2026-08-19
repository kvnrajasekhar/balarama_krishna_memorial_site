import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import HeroSection from "../components/hero/HeroSection";
import { WelcomeStory } from "./WelcomeStory";
import { ChapterTransition } from "../components/transitions/ChapterTransition";

export function Landing() {
   const t = useTranslation().t;
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (!maxScroll || maxScroll <= 1) {
        return;
      }

      const scrollPercent = window.scrollY / maxScroll;
      if (scrollPercent > 0.96 && !showTransition) {
        setShowTransition(true);
        setTimeout(() => {
          navigate("/welcome");
        }, 700);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, showTransition]);

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#24221f]">
      <Header />

      <HeroSection />
      <ChapterTransition
        nextChapter={t("welcome.kicker")}
        nextChapterId="welcome"
        targetPath="/welcome"
        label={t("welcome.kicker")}
      />
      <AnimatePresence>
        {showTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171614]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="font-display text-2xl text-[#a3835a]">Entering his life story...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
