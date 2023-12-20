import { Pathnames } from "next-intl/navigation";

export const siteConfig = {
  url: "https://colormono.com",
  name: "COLORMONO",
  title: "COLORMONO – Creative Developer",
  description: "Buenos Aires based multimedia artist and software developer.",
  ogImage: "https://www.colormono.com/static/banner.jpg",
  links: {
    instagram: "https://instagram.com/colormono",
    github: "https://github.com/colormono",
    twitter: "https://twitter.com/colormono",
    tumblr: "https://colormono.tumblr.com",
    linkedin: "https://www.linkedin.com/in/colormono",
    memories: "https://photos.colormono.com",
  },
  mainNav: [
    {
      title: "About Me",
      href: "/about",
    },
    {
      title: "Works",
      href: "/works",
    },
    {
      title: "Lab",
      href: "/posts",
    },
  ],
};

export type SiteConfig = typeof siteConfig;

/**
 * Config for next-intl
 */
export const locales = ["en", "es"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    es: "/pfadnamen",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
