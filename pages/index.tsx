import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Layout from '@components/Layout';
import { Cover } from '@components/Block';
import ProjectSlide from '@components/ProjectSlide';
import { Container } from '@components/ui';

const WelcomSketch = dynamic(() => import('@sketches/tiling'), {
  ssr: false,
});

const Page: NextPage = () => {
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
        {/* <WelcomSketch /> */}

        <Cover>
          <Cover.Title>Hello, World.</Cover.Title>
          <Cover.Body>
            I&apos;m Mariano Rivas, a <span className="inline-block">new-media artist</span> and{' '}
            <span className="inline-block">software developer</span>. <br className="hidden md:block" />I work at{' '}
            <a href="https://truenorth.co" target="_blank" rel="noreferrer" className="border-b dark:border-gray-600">
              TrueNorth
            </a>{' '}
            as Head of Front-end. Thanks to having creative coding skills, I can be part of the different stages of the
            creative process, from conception to execution.
          </Cover.Body>
        </Cover>

        <section className="py-8">
          <Container>
            <h3 className="uppercase text-xl tracking-relaxed mb-8">Selected Works</h3>
          </Container>

          <ProjectSlide
            title="Hasta Las Estrellas"
            subtitle="Augmented Illustration"
            description="White ink pen drawing on black paper. Mechanical cutting, handmade
            paste; machine precision, human error. LCD screen with
            algorithmically generated animations."
            date="2020"
            href="/work/hasta-las-estrellas"
            thumb="/static/images/hasta-las-estrellas/thumb.jpg"
          />

          <ProjectSlide
            title="Cultura del silencio"
            subtitle="Interactive Sculpture"
            description="School project. Cultura del silencio es un objeto standalone interactivo que reacciona al sonido producido por los espectadores. Una estructura vertical sostiene un garrote de policía en un extremo que golpea cuando el usuario se hace escuchar."
            date="2016"
            // href="/work/cultura-del-silencio"
            thumb="/static/images/cultura-del-silencio/thumb.jpg"
          />

          <ProjectSlide
            title="Sonata para un drone"
            subtitle="Sound Instalation"
            description="School project. La obra es una instalación sonora dirigida por un drone que vuela sobre unos bloques de concreto con parlantes. Al iluminar los bloques estos se activan y reproducen mensajes en código morse que se corresponden con una base de datos de ataques con drones ejecutados por Estados Unidos en medio oriente."
            date="2016"
            // href="/work/sonata-para-un-drone"
            thumb="/static/images/sonata-para-un-drone/thumb.jpg"
          />

          <ProjectSlide
            title="Música"
            subtitle="Interactive Instalation"
            description="'Locomotion' it's an experiment who let the user explore the image movement sensation. In this interactive installation the user break a clip into frames, and browse them using the body as a player control. The clips are photography studies from Eadweard Muybrige, this works are the first steps on cinema history."
            date="2015"
            // href="/work/musica"
            thumb="/static/images/musica/thumb.jpg"
          />

          <ProjectSlide
            title="Locomoción"
            subtitle="Interactive Instalation"
            description="School project. 'Locomotion' it's an experiment who let the user explore the image movement sensation. In this interactive installation the user break a clip into frames, and browse them using the body as a player control. The clips are photography studies from Eadweard Muybrige, those images are the first steps on cinema history."
            date="2014"
            // href="/work/locomocion"
            thumb="/static/images/locomocion/thumb.jpg"
          />
        </section>
      </Layout>
    </>
  );
};

export default Page;
