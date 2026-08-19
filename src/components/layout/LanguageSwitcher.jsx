import { useTranslation } from "react-i18next";

export function LanguageSwitcher({ dark = false }) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-xs font-medium transition-colors ${i18n.language === "en"
            ? "text-[#d8aa5e]"
            : dark
              ? "text-white/75 hover:text-white"
              : "text-[#817a70] hover:text-[#24221f]"
          }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={dark ? "text-white/35" : "text-[#d8d0c4]"}>|</span>
      <button
        onClick={() => changeLanguage("te")}
        className={`px-3 py-1 text-xs font-medium transition-colors ${i18n.language === "te"
            ? "text-[#d8aa5e]"
            : dark
              ? "text-white/75 hover:text-white"
              : "text-[#817a70] hover:text-[#24221f]"
          }`}
        aria-label="Switch to Telugu"
      >
        తెలుగు
      </button>
    </div>
  );
}
