import {defineCollection, z} from 'astro:content';

const seoSchema = z.object({
  title: z.string().min(4).max(120).optional(),
  description: z.string().min(15).max(220).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  pageType: z.enum(['website', 'article']).default('website'),
});

const keywords = [
  'Generative',
  'Write',
  'App',
  'Web',
  'Mobile',
  'Art',
  'Design',
  'Interactive',
  'Electronics',
  'Hardware',
  'Plotter',
];

const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(4).max(120),
    description: z.string().min(15).max(220),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    thumbnail: z.string().optional(), // size random
    tags: z.array(z.enum(['', ...keywords])).default([]),
    seo: seoSchema.optional(),
    draft: z.boolean().optional(),
  }),
});

const worksSchema = z.object({
  title: z.string().min(4).max(120),
  description: z.string().min(15).max(220),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  thumbnail: z.string().optional(), // size 1200x630
  isFeatured: z.boolean().optional(),
  seo: seoSchema.optional(),
  tags: z.array(z.enum(['', ...keywords])).default([]),
  lang: z.string().optional(), // To-do: use this instead of a different folder?
  draft: z.boolean().optional(),
});

const works = defineCollection({
  type: 'content',
  schema: worksSchema,
});

const obras = defineCollection({
  type: 'content',
  schema: worksSchema,
});

export const collections = {lab, works, obras};
