import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '@components';
import { Container } from '@components/ui';
import { WorkCard } from '@components/Post';

const title = 'WORK – COLORMONO';
const description = 'Explorations, experiments, experiences, examples, exp... lab';
const url = 'https://colormono.com/work';

export const Page: NextPage = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />

      <Layout>
        <Container className="py-16">
          <section className="grid grid-cols-1 items-center gap-x-10 gap-y-12 md:grid-cols-2">
            {/* <WorkCard
              title="Colorful tile system"
              subtitle="2022, Pen plotter drawing serie"
              href="work/hasta-las-estrellas"
              featuredImage="/static/work/hasta-las-estrellas/thumb.jpg"
              description="White ink pen drawing on black paper. Mechanical cutting, handmade
              paste; machine precision, human error. LCD screen with
              algorithmically generated animations."
            /> */}

            <WorkCard
              title="Recreo"
              subtitle="2021, Augmented Illustration"
              href="work/hasta-las-estrellas"
              featuredImage="/static/work/hasta-las-estrellas/thumb.jpg"
              description="White ink pen drawing on black paper. Mechanical cutting, handmade
              paste; machine precision, human error. LCD screen with
              algorithmically generated animations."
            />

            <WorkCard
              title="Hasta las Estrellas"
              subtitle="2020, Augmented Illustration"
              href="work/hasta-las-estrellas"
              featuredImage="/static/work/hasta-las-estrellas/thumb.jpg"
              description="White ink pen drawing on black paper. Mechanical cutting, handmade
              paste; machine precision, human error. LCD screen with
              algorithmically generated animations."
            />

            <WorkCard
              title="Cultura del silencio"
              subtitle="2016, Interactive Sculpture"
              description="School project. Cultura del silencio es un objeto standalone interactivo que reacciona al sonido producido por los espectadores. Una estructura vertical sostiene un garrote de policía en un extremo que golpea cuando el usuario se hace escuchar."
              href="work/cultura-del-silencio"
              featuredImage="/static/work/cultura-del-silencio/thumb.jpg"
            />

            <WorkCard
              title="Sonata para un drone"
              subtitle="2016, Sound Instalation"
              description="School project. La obra es una instalación sonora dirigida por un drone que vuela sobre unos bloques de concreto con parlantes. Al iluminar los bloques estos se activan y reproducen mensajes en código morse que se corresponden con una base de datos de ataques con drones ejecutados por Estados Unidos en medio oriente."
              href="work/sonata-para-un-drone"
              featuredImage="/static/work/sonata-para-un-drone/thumb.jpg"
            />

            <WorkCard
              title="Música"
              subtitle="2015, Interactive Instalation"
              description="'Locomotion' it's an experiment who let the user explore the image movement sensation. In this interactive installation the user break a clip into frames, and browse them using the body as a player control. The clips are photography studies from Eadweard Muybrige, this works are the first steps on cinema history."
              href="work/musica"
              featuredImage="/static/work/musica/thumb.jpg"
            />

            <WorkCard
              title="Locomoción"
              subtitle="2014, Interactive Instalation"
              description="School project. 'Locomotion' it's an experiment who let the user explore the image movement sensation. In this interactive installation the user break a clip into frames, and browse them using the body as a player control. The clips are photography studies from Eadweard Muybrige, those images are the first steps on cinema history."
              href="work/locomocion"
              featuredImage="/static/work/locomocion/thumb.jpg"
            />
          </section>
        </Container>
      </Layout>
    </>
  );
};

export default Page;
