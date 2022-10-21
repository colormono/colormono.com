import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug } from '@helpers/mdx.helpers';
import { Layout } from '@components';
import Article from '@components/Article';
import { Container } from '@components/ui';

const Page = ({ mdxSource }) => {
  return (
    <Layout>
      <Container>
        <Article>
          <MDXRemote {...mdxSource} />
        </Article>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getFileBySlug('awesome');
  return { props: data };
}

export default Page;
