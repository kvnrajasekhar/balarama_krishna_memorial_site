import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => changeLanguage("en")}
        className={`px-3 py-1 text-xs font-medium transition-colors ${
          i18n.language === "en"
            ? "text-[#a3835a]"
            : "text-[#817a70] hover:text-[#24221f]"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-[#d8d0c4]">|</span>
      <button
        onClick={() => changeLanguage("te")}
        className={`px-3 py-1 text-xs font-medium transition-colors ${
          i18n.language === "te"
            ? "text-[#a3835a]"
            : "text-[#817a70] hover:text-[#24221f]"
        }`}
        aria-label="Switch to Telugu"
      >
        తెలుగు
      </button>
    </div>
  );
}
