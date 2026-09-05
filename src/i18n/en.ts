import type { UIMessages } from "./ar";

const header = {
  "header.github": "GitHub",
  "header.blogs": "Blogs",
};

const hero = {
  "home.title": "Home",
  "home.hero.name": "C. Mohammed Akram",
  "home.hero.hello": "Welcome",
  "home.hero.p1":
    "I'm C. Mohammed Akram, a Fullstack web developer, Computer Science student specializing in AI in Algeria.",
  "home.hero.p2":
    "I've been coding since 2019, with experience in various languages and technologies. Most of my professional experience is in building website frontends, though I also build APIs and Fullstack applications.",
  "home.hero.p3":
    "I usually use: JavaScript, TypeScript, Astro, React, Express, PostgreSQL, Python and previously Next.js. I'm also interested in low-level languages, like C.",
  "home.hero.p4":
    "I care about shipping speed, product performance, and understanding the tools I use instead of blind copy-pasting.",
  "home.hero.img_label": "(This is not my desk)",
  "home.hero.contact.email": "Contact me via email",
};

const projects = {
  "projects.title": "Some of my projects",
  "projects.professional": "Professional project",
  "projects.khizanah.title": "Khizanah",
  "projects.khizanah.desc":
    "An easy interface for downloading videos and playlists from YouTube, for Windows and Linux.",
  "projects.minidrive.title": "Minidrive",
  "projects.minidrive.desc":
    "A stripped-down Google Drive clone; users can create an account, save and organize files and folders, and share folders via a public link.",
  "projects.cellular.title": "Cellular Automata Simulator",
  "projects.cellular.desc":
    "A program simulating a cellular automata grid, with different cells having different 'physical' properties, like gravity and flammability. Written in C99.",
  "projects.foroq.title": "Foroq Agency Website",
  "projects.foroq.desc":
    "Landing and contact page for the Foroq tech agency, featuring all of the agency's services, a blog system, and email signup for the latest updates.",
  "project.more": "You can browse the rest of my projects",
  "project.more-link": "on my GitHub page.",
};

const footer = {
  "footer.built-with": "This site was built with Astro.",
  "footer.wip":
    "This site is still under construction! Please check back every now and then.",
};

export const ENGLISH_MESSAGES: UIMessages = {
  ...header,
  ...hero,
  ...projects,
  ...footer,
};
