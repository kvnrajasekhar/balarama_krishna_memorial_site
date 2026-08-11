import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/hero/Hero";

export function Landing() {
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (!maxScroll || maxScroll <= 1) {
        return;
      }

      const scrollPercent = window.scrollY / maxScroll;
      if (scrollPercent > 0.85 && !showTransition) {
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

      <Hero />

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
