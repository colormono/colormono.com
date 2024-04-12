module.exports = {
  arrowParens: 'always',
  bracketSpacing: false,
  bracketSameLine: false,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '**/*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};
