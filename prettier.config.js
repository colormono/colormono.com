module.exports = {
  bracketSpacing: true,
  semi: true,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  importOrder: [
    "^(next/(.*)$)|^(next$)", // Imports by "next"
    "<THIRD_PARTY_MODULES>",
    "next-seo.config",
    "^components/(.*)$",
    "^utils/(.*)$",
    "^assets/(.*)$",
    "^@fontsource/(.*)$",
    "^[./]", // Other imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require("prettier-plugin-tailwindcss")],
};
