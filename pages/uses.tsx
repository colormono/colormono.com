import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug } from '@helpers/mdx.helpers';
import Layout from '@components/Layout';
import Article from '@components/Article';

const Page = ({ data }) => {
  return (
    <Layout>
      <Article>
        <MDXRemote {...data} />
      </Article>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getFileBySlug('uses');
  return { props: { data: data.mdxSource } };
}

export default Page;
