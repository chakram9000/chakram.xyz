// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { LOCALES } from "./src/i18n/lib";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Scheherazade New",
      cssVariable: "--font-schehrazade",
    },
  ],

  i18n: {
    locales: LOCALES,
    defaultLocale: "ar",
    routing: {
      fallbackType: "rewrite",
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [icon()],
});
