import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Container } from '@/components/ui';
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
    <Container>
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
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Open Notes</h1>

        {!filteredBlogPosts.length && 'No posts found.'}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('notes');

  return { props: { posts } };
}
