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

// export const Page: NextPage = ({ posts }) => {
export const Page: NextPage = () => {
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
          <header className="pt-10 pb-20 text-center">
            <p className="text-2xl md:text-3xl tracking-tight text-neutral-300 dark:text-neutral-700">
              ..., lab, experiments, explorations, experiences, examples, ...
            </p>
          </header>

          <section className="pb-20 grid grid-cols-1 items-center gap-x-16 gap-y-24 md:grid-cols-2 xl:grid-cols-3">
            {/* {!filteredPosts.length && 'No posts found.'}
          {filteredPosts.map((frontMatter) => (
            <Post key={frontMatter.title} {...frontMatter} />
          ))} */}
            <PostCard
              title="Randomization"
              subtitle="Like Throwing dice or Flipping a coin"
              slug="randomization"
              category="exp"
              featuredImage="/static/lab/randomization-thumb.png"
              featuredImageW={2560}
              featuredImageH={804}
            />
            <PostCard
              title="Tiling"
              subtitle="Recursive irregular grid"
              slug="tiling"
              category="exp"
              featuredImage="/static/lab/tiling/thumb.png"
              featuredImageW={640}
              featuredImageH={1280}
            />
            <PostCard
              title="Invisible touch"
              subtitle="Video mapping app using a LeapMotion sensor"
              slug="#" // "https://vimeo.com/134560602"
              category="openFrameworks, sensor, leapmotion, hardware"
              featuredImage="/static/lab/leaptouch.png"
              featuredImageW={424}
              featuredImageH={501}
            />
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
