// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'COLORMONO';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const siteConfig = {
  url: 'https://colormono.com',
  name: 'COLORMONO',
  title: 'COLORMONO – Creative Developer',
  description: 'Buenos Aires based multimedia artist and software developer.',
  ogImage: 'https://www.colormono.com/static/banner.jpg',
  links: {
    instagram: 'https://instagram.com/colormono',
    github: 'https://github.com/colormono',
    twitter: 'https://twitter.com/colormono',
    tumblr: 'https://colormono.tumblr.com',
    linkedin: 'https://www.linkedin.com/in/colormono',
    memories: 'https://photos.colormono.com',
  },
};

export type SiteConfig = typeof siteConfig;
