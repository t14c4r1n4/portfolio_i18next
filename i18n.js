import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./public/locales/en.json";
import es from "./public/locales/es.json";
import de from "./public/locales/de.json";

i18n
    // Load translations using http backend
    .use(Backend)
    // Detect user language
    .use(LanguageDetector)
    // Pass the i18n instance to react-i18next
    .use(initReactI18next)
    // Init i18next
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ["p", "span", "br", "i"],
        resources: {
            de: { translation: de },
            en: { translation: en },
            es: { translation: es }
        }
    });

export default i18n;
