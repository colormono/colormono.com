const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/work/:slug",
        destination: "/works/:slug",
        permanent: true,
      },
      {
        source: "/MarianoRivas.pdf",
        destination: "/rivas-resume-2020.pdf",
        permanent: true,
      },
      {
        source: "/30min",
        destination: "https://calendly.com/colormono/30min",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCjjS8Wtv6oJyEZBHUSxtZDA",
        permanent: true,
      },
      {
        source: "/cursos/inpr",
        destination:
          "https://colormono.notion.site/INPR-4e1b25ec0e304d219158553b8ca53480",
        permanent: true,
      },
      {
        source: "/carta",
        destination: "https://colormono.com/posts/meal-planner",
        permanent: true,
      },
    ]
  },
}

module.exports = withContentlayer(nextConfig)
