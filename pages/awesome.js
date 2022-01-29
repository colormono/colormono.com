import hydrate from 'next-mdx-remote/hydrate';
import { getFileBySlug } from '@/utils/mdx';
import Layout from '@/layouts/awesome';
import MDXComponents from '@/components/MDXComponents';

export default function Page({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <Layout frontMatter={frontMatter}>{content}</Layout>;
}

export async function getStaticProps() {
  const awesome = await getFileBySlug('awesome');

  return { props: awesome };
}
