import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function UsesLayout({ children }) {
  return (
    <Container>
      <NextSeo
        title="Awesome – COLORMONO"
        description={`Manually curated collection of Art resources, tools and shiny things.`}
        canonical="https://colormono.com/awesome"
        openGraph={{
          url: 'https://colormono.com/awesome',
          title: 'Awesome – COLORMONO',
          description: `Manually curated collection of Art resources, tools and shiny things.`
        }}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Awesome
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Manually curated collection of Art resources, tools and shiny things.
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
