import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import {SITE_TITLE, SITE_DESCRIPTION} from '@/config';
import type {AstroConfig} from 'astro';
// import { sortItemsByDateDesc } from "@utils";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
  // const works = await getCollection("works").sort(sortItemsByDateDesc);
  const works = await getCollection('works');

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || 'https://colormono.com',
    items: works.map((item) => ({
      ...item.data,
      title: item.data.title,
      pubDate: item.data.date,
      description: item.data.description,
      link: `/works/${item.slug}/`,
      content: sanitizeHtml(parser.render(item.body)),
    })),
  });
}
