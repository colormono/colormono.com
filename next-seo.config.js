const title = 'COLORMONO – Creative Developer';
const description =
  'Buenos Aires based multimedia artist and creative developer.';

const SEO = {
  title,
  description,
  canonical: 'https://colormono.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://colormono.com',
    title,
    description,
    images: [
      {
        url: 'https://colormono.com/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@colormono',
    site: '@colormono',
    cardType: 'summary_large_image'
  }
};

export default SEO;
