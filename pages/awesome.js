import hydrate from 'next-mdx-remote/hydrate';

import { getFileBySlug } from '@/lib/mdx';
import AwesomeLayout from '@/layouts/awesome';
import MDXComponents from '@/components/MDXComponents';

export default function Awesome({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <AwesomeLayout frontMatter={frontMatter}>{content}</AwesomeLayout>;
}

export async function getStaticProps() {
  const awesome = await getFileBySlug('awesome');

  return { props: awesome };
}
