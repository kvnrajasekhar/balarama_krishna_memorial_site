import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "hisLife", to: "/story/biography" },
    { key: "finalJourney", to: "/story/final-journey" },
    { key: "giftOfLife", to: "/story/gift-of-life" },
    { key: "recognition", to: "/story/recognition" },
    { key: "memories", to: "/story/gallery" },
  ];

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#f7f4ee]/95 backdrop-blur-sm border-b border-[#d8d0c4]/50 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-lg sm:text-xl tracking-tight text-[#24221f] hover:text-[#a3835a] transition-colors">
            KANAGALA BALARAMA KRISHNA
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className={`font-sans text-xs tracking-wide transition-colors ${isActive(item.to)
                    ? "text-[#a3835a]"
                    : "text-[#5e5952] hover:text-[#a3835a]"
                  }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>

          <button
            className="md:hidden p-2 text-[#24221f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#f7f4ee] border-b border-[#d8d0c4]"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.to}
                  className={`block font-sans text-sm transition-colors py-2 ${isActive(item.to)
                      ? "text-[#a3835a]"
                      : "text-[#5e5952] hover:text-[#a3835a]"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#d8d0c4]/50">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
