import {type ClassValue, clsx} from 'clsx';
import {type CollectionEntry} from 'astro:content';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(input?: string) {
  if (!input) return '';

  // make lower case and trim
  var slug = input.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, '-');

  return slug;
}

export function sortItemsByDateDesc(
  itemA: CollectionEntry<'lab' | 'works' | 'obras'>,
  itemB: CollectionEntry<'lab' | 'works' | 'obras'>,
) {
  return new Date(itemB.data.date).getTime() - new Date(itemA.data.date).getTime();
}

export function getAllTags(posts: CollectionEntry<'lab'>[]) {
  const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
  return tags
    .map((tag) => {
      return {
        name: tag,
        slug: slugify(tag),
      };
    })
    .filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
    });
}

export function getPostsByTag(posts: CollectionEntry<'lab'>[], tagSlug: string) {
  const filteredPosts: CollectionEntry<'lab'>[] = posts.filter((post) =>
    (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug),
  );
  return filteredPosts;
}
