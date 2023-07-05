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
        source: "/projects",
        destination: "/works",
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
    ]
  },
}

module.exports = withContentlayer(nextConfig)
