export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: "https://colormono.com",
  name: "COLORMONO",
  title: "COLORMONO – Creative Developer",
  description: "Buenos Aires based multimedia artist and software developer.",
  ogImage: "https://www.colormono.com/static/banner.jpg",
  mainNav: [
    {
      title: "Works",
      href: "/works",
    },
    {
      title: "Lab",
      href: "/posts",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/colormono",
    instagram: "https://instagram.com/colormono",
    twitter: "https://twitter.com/colormono",
    docs: "https://colormono.com",
  },
};
