import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';
// import Image from 'next/image';
import DefaultLayout from './DefaultLayout';
import Article from '@components/Article';

type Props = {
  children?: ReactNode;
};

export function SnippetLayout({ children, frontMatter }: Props) {
  const title = `${frontMatter.title} - Code Snippet`;
  const url = `https://colormono.com/snippets/${frontMatter.slug}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />

      <DefaultLayout>
        <Article>
          <div className="flex justify-between w-full mb-8">
            <div>
              <h1 className="text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                {frontMatter.title}
              </h1>
              <p className="text-gray-700 dark:text-gray-300">{frontMatter.description}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <img
                alt={frontMatter.title}
                height={48}
                width={48}
                src={`/logos/${frontMatter.logo}`}
                className="rounded-full"
              />
            </div>
          </div>
          {children}
        </Article>
      </DefaultLayout>
    </>
  );
}

export default SnippetLayout;
