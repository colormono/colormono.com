export type SiteConfig = typeof siteConfig

export const siteConfig = {
  url: "https://colormono.com",
  name: "COLORMONO",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  ogImage: "https://colormono.com/og.jpg",
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
}
