import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "../content/en/translations.json";
import teTranslations from "../content/te/translations.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  te: {
    translation: teTranslations,
  },
};

// Get saved language from localStorage or default to English
const getSavedLanguage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("language") || "en";
  }
  return "en";
};

const savedLanguage = getSavedLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof document !== "undefined") {
  document.documentElement.lang = savedLanguage;
}

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
});

export default i18n;
