export type Technology =
  | "react"
  | "astro"
  | "express"
  | "hono"
  | "postgresql"
  | "tailwindcss"
  | "github"
  | "python"
  | "qt"
  | "ejs"
  | "prisma"
  | "c"
  | "raylib"
  | "js";

export const TECH_ICONS: Record<Technology, string> = Object.freeze({
  react: "simple-icons:react",
  astro: "simple-icons:astro",
  express: "simple-icons:express",
  hono: "simple-icons:hono",
  postgresql: "simple-icons:postgresql",
  tailwindcss: "simple-icons:tailwindcss",
  github: "simple-icons:github",
  python: "simple-icons:python",
  qt: "simple-icons:qt",
  ejs: "simple-icons:ejs",
  prisma: "simple-icons:prisma",
  c: "simple-icons:c",
  raylib: "simple-icons:raylib",
  js: "simple-icons:javascript",
});
