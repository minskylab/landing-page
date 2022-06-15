import { createI18nApi } from "i18nifty/ssr";
import { declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

//List the languages you with to support
export const languages = ["en", "es"] as const;
//If the user's browser language doesn't match any 
//of the languages above specify the language to fallback to:  
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const {
  useTranslation,
  resolveLocalizedString,
  useLang,
  $lang,
  useResolveLocalizedString,
  withLang
} = createI18nApi<
  | typeof import("components/ui/Header/index").i18n
>()(
  { languages, fallbackLanguage },
  {
    "en": {
      "MinskyLandingHeader": {
        "contact button text": "contact",
      }
    },
    /* spell-checker: disable */
    "es": {
      "MinskyLandingHeader": {
        "contact button text": "contacto",
      }
    }
    /* spell-checker: enable */
  }
);