import { NextSeo } from 'next-seo';
// import { Container } from '@components/ui';
import { PostCard } from '@components/Post';
// To-do use MDX to write the content with embedded Skecthes
// import { getAllFilesFrontMatter } from '@helpers/mdx.helpers';

// To-do:
// - [√] Initial grid
// - [] Make grid using /sketches/*.mdx

const title = 'LAB – COLORMONO';
const description = 'experiments, experiences, examples... lab';
const url = 'https://colormono.com/notes';

export default function LabHomepage({ posts }) {
  // const filteredPosts = posts
  //   .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
  //   .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

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
      <header>
        <h1 className="text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">Exp</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          I&apos;ve been taking notes, mostly about web development and new media arts. In total, I&apos;ve written
          notes on this site. Use the search below to filter by title.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-24">
        {/* {!filteredPosts.length && 'No posts found.'}
          {filteredPosts.map((frontMatter) => (
            <Post key={frontMatter.title} {...frontMatter} />
          ))} */}
        <PostCard
          title="Randomization"
          subtitle="Like Throwing dice or Flipping a coin"
          slug="randomization"
          category="exp"
          featuredImage="/static/sketches/randomization-thumb.png"
        />
        <PostCard
          title="Tiling"
          subtitle="Like Throwing dice or Flipping a coin"
          slug="randomization"
          category="exp"
          featuredImage="/static/sketches/randomization-thumb.png"
        />
        <div className="bg-gray-100"></div>
        <div className="bg-gray-100"></div>
      </section>
    </>
  );
}

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('notes');

//   return { props: { posts } };
// }
