import hydrate from 'next-mdx-remote/hydrate';
import { getFileBySlug } from '@helpers/mdx.helpers';
import Layout from '@components/Layout';
import MDXComponents from '@components/MDXComponents';
import Article from '@components/Article';

const Page = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Layout>
      <Article frontMatter={frontMatter}>{content}</Article>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getFileBySlug('uses');

  return { props: data };
}

export default Page;
