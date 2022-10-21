import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@helpers/mdx.helpers';
import NotesLayout from '@layouts/notes';

export default function Note({ mdxSource, frontMatter }) {
  return (
    <NotesLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </NotesLayout>
  );
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
