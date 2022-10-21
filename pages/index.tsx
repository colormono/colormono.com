import type { NextPage } from 'next';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import MDXComponents from '@components/MDXComponents';
import Layout from '@components/Layout';
import { Cover } from '@components/Block';
import ProjectSlide from '@components/ProjectSlide';
import { Container } from '@components/ui';

const heroContent = {
  en: {
    title: 'Hello, World.',
    content: `I&apos;m **Mariano Rivas**, new-media artist and software developer. I work at [TrueNorth](https://truenorth.co) as Front-end Engineer. Thanks to having creative coding skills, I can be part of the different stages of the creative process, from conception to execution.`,
    // ...
  },
  es: {
    title: 'Hola, Mundo.',
    content: `Soy **Mariano Rivas**, artista multimedial y desarrollador de software. Trabajo en [TrueNorth](https://truenorth.co) como Front-end Engineer. Gracias a manejar distintas herramientas de programación creativa, puedo participar de las diferentes etapas del proceso, de la idea a la implementación.`,
    // ...
  },
};

const components = {
  ...MDXComponents,
  a: ({ href, title, children }) => (
    <a href={href} target="_blank" rel="noreferrer" className="underline underline-offset-2 cursor-pointer">
      {children}
    </a>
  ),
};

const Page: NextPage = ({ heroTitle, heroBody }: { heroTitle: string; heroBody: any }) => {
  return (
    <>
      <NextSeo
        description="I'm Mariano Rivas, a new-media artist and software developer. I work at TrueNorth as Head of Front-end. Thanks to having creative coding skills, I can be part of the different stages of the creative process, from conception to execution."
        canonical="https://colormono.com"
      />

      <SocialProfileJsonLd
        type="Person"
        name="Mariano Rivas"
        url="http://colormono.com"
        sameAs={[
          'http://instagram.com/colormono',
          'http://www.linkedin.com/in/colormono',
          'https://twitter.com/colormono',
        ]}
      />

      <Layout>
        <Cover>
          <Cover.Title>{heroTitle}</Cover.Title>
          <Cover.Body>
            <MDXRemote {...heroBody} components={components} />
          </Cover.Body>
        </Cover>

        <section className="py-8">
          <Container>
            <h3 className="uppercase text-xl tracking-relaxed mb-8">Selected Projects</h3>
          </Container>

          <div className="xl:px-10 mx-auto max-w-[1920px] ">
            <ProjectSlide
              title="Hasta Las Estrellas"
              subtitle="Augmented Illustration"
              description="White ink pen drawing on black paper. Mechanical cutting, handmade
            paste; machine precision, human error. LCD screen with
            algorithmically generated animations."
              date="2020"
              href="/work/hasta-las-estrellas"
              thumb="/static/work/hasta-las-estrellas/thumb.jpg"
            />

            <ProjectSlide
              title="Recreo"
              subtitle="Interactive Sculpture"
              description="School project. Cultura del silencio es un objeto standalone interactivo que reacciona al sonido producido por los espectadores. Una estructura vertical sostiene un garrote de policía en un extremo que golpea cuando el usuario se hace escuchar."
              date="2016"
              // href="/work/cultura-del-silencio"
              thumb="/static/work/cultura-del-silencio/thumb.jpg"
            />

            <ProjectSlide
              title="Locomoción"
              subtitle="Interactive Instalation"
              description="School project. 'Locomotion' it's an experiment who let the user explore the image movement sensation. In this interactive installation the user break a clip into frames, and browse them using the body as a player control. The clips are photography studies from Eadweard Muybrige, those images are the first steps on cinema history."
              date="2014"
              // href="/work/locomocion"
              thumb="/static/work/locomocion/thumb.jpg"
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps(context) {
  // MDX text - can be from a local file, database, anywhere
  // const source = 'Some **mdx** text, with a component';
  const { title, content } = heroContent[context.locale];
  const mdxContent = await serialize(content);

  return { props: { heroTitle: title, heroBody: mdxContent } };
}

export default Page;
