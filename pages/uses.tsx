import hydrate from 'next-mdx-remote/hydrate';
import { getFileBySlug } from '@/utils/mdx';
import Layout from '@/layouts/Page';
import MDXComponents from '@/components/MDXComponents';
import Article from '@/components/Article';

const Page = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <Article frontMatter={frontMatter}>{content}</Article>;
};

export async function getStaticProps() {
  const data = await getFileBySlug('uses');

  return { props: data };
}

Page.layout = Layout;

export default Page;
