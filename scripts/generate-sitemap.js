// Generate A Dynamic Sitemap In Next.js Website
// @see: https://www.coffeeclass.io/articles/generate-dynamic-sitemap
const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");

  const pages = await globby([
    "content/**/*.mdx",
    "src/pages/**/*{.js,.tsx,.mdx}",
    "!src/pages/_*{.js,.tsx}",
    "!src/pages/api",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace("data", "")
                  .replace(".js", "")
                  .replace(".tsx", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;

                return `
                        <url>
                            <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formattedSitemap = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formattedSitemap);
}

generateSitemap();
