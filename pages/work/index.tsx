import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { WorkCard } from '@components/Post';
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
          <section className="grid grid-cols-1 items-center gap-x-10 gap-y-12 md:grid-cols-2">
            {/* {!filteredPosts.length && 'No posts found.'}
          {filteredPosts.map((frontMatter) => (
            <Post key={frontMatter.title} {...frontMatter} />
          ))} */}

            <WorkCard
              title="Hasta las Estrellas"
              subtitle="Like Throwing dice or Flipping a coin"
              slug="randomization"
              category="exp"
              featuredImage="/static/work/hasta-las-estrellas/thumb.jpg"
            />
            <WorkCard
              title="Cultura del Silencio"
              subtitle="Like Throwing dice or Flipping a coin"
              slug="randomization"
              category="exp"
              featuredImage="/static/work/cultura-del-silencio/thumb.jpg"
            />
            <WorkCard
              title="Locomocion"
              subtitle="Like Throwing dice or Flipping a coin"
              slug="tiling"
              category="exp"
              featuredImage="/static/work/locomocion/thumb.jpg"
            />
            <WorkCard
              title="Locomocion"
              subtitle="Like Throwing dice or Flipping a coin"
              slug="tiling"
              category="exp"
              featuredImage="/static/work/musica/thumb.jpg"
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
