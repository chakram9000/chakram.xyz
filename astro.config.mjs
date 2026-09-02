// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { LOCALES } from "./src/i18n/lib";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: LOCALES,
    defaultLocale: "ar",
    routing: {
      fallbackType: "rewrite",
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
