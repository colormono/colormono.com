import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '@helpers/mdx.helpers';
import NotesLayout from '@layouts/notes';
import MDXComponents from '@components/MDXComponents';

export default function Note({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <NotesLayout frontMatter={frontMatter}>{content}</NotesLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles('notes');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('notes', params.slug);

  return { props: post };
}
