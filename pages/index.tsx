import type { PageLayoutType } from '@/types/PageLayout';
import Layout from '@/layouts/Page';
import ProjectSlide from '@/components/ProjectSlide';

const Page: PageLayoutType = () => {
  return (
    <>
      <section className="w-full max-w-3xl mt-16 mb-32">
        <h1 className="text-4xl md:text-8xl tracking-tight mb-6">Hello, World.</h1>
        <p className="text-2xl leading-relaxed">
          I&apos;m Mariano Rivas, a <span className="inline-block">new-media artist</span> and{' '}
          <span className="inline-block">software developer</span>. <br className="hidden md:block" />I work at{' '}
          <a href="https://truenorth.co" target="_blank" rel="noreferrer" className="border-b dark:border-gray-800">
            TrueNorth
          </a>{' '}
          as Head of Front-end. Thanks to having creative coding skills, I can be part of the different stages of the
          creative process, from conception to execution.
        </p>
      </section>

      <section className="flex flex-col w-full">
        <h3 className="uppercase text-xl tracking-relaxed mb-8">Selected Works</h3>

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
    </>
  );
};

Page.layout = Layout;

export default Page;
