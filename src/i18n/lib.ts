import { ARABIC_MESSAGES, type UIMessages } from "./ar";
import { ENGLISH_MESSAGES } from "./en";

export const LOCALES = ["ar", "en"];
export type Locale = (typeof LOCALES)[number];

export function getTranslations(locale: Locale): UIMessages {
  switch (locale) {
    case "ar":
      return ARABIC_MESSAGES;
    case "en":
      return ENGLISH_MESSAGES;
  }

  throw Error(`Passed an invalid locale: ${locale}`);
}

export function localeRepresentation(locale: Locale): string {
  if (locale === "ar") return "ع";

  return locale.toUpperCase();
}
