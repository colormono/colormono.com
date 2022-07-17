import hydrate from 'next-mdx-remote/hydrate';
import { getFileBySlug } from '@helpers/mdx.helpers';
import MDXComponents from '@components/MDXComponents';
import { Layout } from '@components';
import Article from '@components/Article';
import { Container } from '@components/ui';

const Page = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Layout>
      <Container>
        <Article frontMatter={frontMatter}>{content}</Article>;
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getFileBySlug('awesome');

  return { props: data };
}

export default Page;
