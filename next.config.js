const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images: {
    domains: [
      'i.scdn.co', // Spotify Album Art
      'pbs.twimg.com', // Twitter Profile Picture
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    config.resolve.fallback = { fs: false };

    return config;
  },
});
