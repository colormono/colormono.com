const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans Thai Looped"', ...fontFamily.sans],
        serif: ['"Playfair Display"', ...fontFamily.serif],
      },
      colors: {
        gray: colors.slate,
        indigo: {
          500: '#2118D4',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: 400,
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: 400,
              letterSpacing: '-0.025em',
            },
            h3: {
              fontWeight: 400,
              letterSpacing: '-0.025em',
            },
            h4: {
              fontWeight: 400,
              letterSpacing: '-0.025em',
            },
          },
        },
      },
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
