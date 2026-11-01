import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

export type LanguagePreference = "system" | "en" | "ru";

const STORAGE_KEY = "orbit-language";

function readPreference(): LanguagePreference {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "system" || saved === "en" || saved === "ru") return saved;
  } catch {
    // Storage can be blocked (private mode), fall through to the default
  }
  return "system";
}

// Turns the user's choice into a language i18n can actually use
function resolveLanguage(pref: LanguagePreference): "en" | "ru" {
  if (pref !== "system") return pref;
  return navigator.language.startsWith("ru") ? "ru" : "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: resolveLanguage(readPreference()),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Single entry point for switching: saves the choice, not the resolved language
export function setLanguagePreference(pref: LanguagePreference) {
  try {
    localStorage.setItem(STORAGE_KEY, pref);
  } catch {
    // Ignore: the language still works for the current session
  }
  i18n.changeLanguage(resolveLanguage(pref));
}

export { readPreference as getLanguagePreference };
export default i18n;
