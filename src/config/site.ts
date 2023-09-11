export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: "https://colormono.com",
  name: "COLORMONO",
  title: "COLORMONO – Creative Developer",
  description: "Buenos Aires based multimedia artist and software developer.",
  ogImage: "https://www.colormono.com/static/banner.jpg",
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
  links: {
    github: "https://github.com/colormono",
    instagram: "https://instagram.com/colormono",
    twitter: "https://twitter.com/colormono",
    docs: "https://colormono.com",
  },
};
