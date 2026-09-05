// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import { LOCALES } from "./src/i18n/lib";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://chakram.xyz",
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Readex Pro",
      cssVariable: "--font-readex-pro",
      subsets: ["arabic", "latin"],
      weights: ["300 800"],
    },
  ],

  i18n: {
    locales: LOCALES,
    defaultLocale: "ar",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [icon()],
});
