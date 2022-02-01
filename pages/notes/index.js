import { useState } from 'react';
import { NextSeo } from 'next-seo';
// import { Container } from '@/components/ui';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/utils/mdx';

const url = 'https://colormono.com/notes';
const title = 'Open Notes – COLORMONO';
const description = 'Thoughts on the software industry, programming, tech, art, and my personal life.';

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Open Notes</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {!filteredBlogPosts.length && 'No posts found.'}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('notes');

  return { props: { posts } };
}
