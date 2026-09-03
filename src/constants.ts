export type Technology =
  | "react"
  | "astro"
  | "express"
  | "hono"
  | "postgresql"
  | "tailwindcss"
  | "github"
  | "python"
  | "qt";

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
});
