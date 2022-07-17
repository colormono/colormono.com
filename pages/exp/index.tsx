import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { PostCard } from '@components/Post';
import { Layout } from '@components';
import { Container } from '@components/ui';
// To-do use MDX to write the content with embedded Skecthes
// import { getAllFilesFrontMatter } from '@helpers/mdx.helpers';

// To-do:
// - [√] Initial grid
// - [] Make grid using /sketches/*.mdx

const title = 'LAB – COLORMONO';
const description = 'Explorations, experiments, experiences, examples, exp... lab';
const url = 'https://colormono.com/notes';

export const Page: NextPage = ({ posts }) => {
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

      <Layout>
        <Container>
          <header className="pt-10 pb-20">
            <h1 className="text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">EXP</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Explorations, experiments, experiences, examples, exp... Lab, Play.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-20">
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
              slug="tiling"
              category="exp"
              featuredImage="/static/sketches/tiling-thumb.png"
            />
            <div className="bg-neutral-100 dark:bg-neutral-800"></div>
            <div className="bg-neutral-100 dark:bg-neutral-800"></div>
          </section>
        </Container>
      </Layout>
    </>
  );
};

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('notes');

//   return { props: { posts } };
// }

export default Page;
