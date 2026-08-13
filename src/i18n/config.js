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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getSavedLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
