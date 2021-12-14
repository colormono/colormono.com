import Layout from '@/layouts/Page';
import BlogPost from '@/components/BlogPost';
import ProjectSlide from '@/components/ProjectSlide';

export default function Page() {
  return (
    <>
      <section className="w-full max-w-2xl my-8 md:mb-16">
        <h1 className="font-bold text-3xl md:text-7xl tracking-tight mb-4 text-black dark:text-white">Hello, World!</h1>
        <div className="text-gray-600 dark:text-gray-400 text-xl">
          <span className="hidden md:block">
            I'm Mariano Rivas, a <span className="inline-block">new-media artist</span> and{' '}
            <span className="inline-block">software developer</span>.{' '}
          </span>
          I work at{' '}
          <a
            href="https://truenorth.co"
            target="_blank"
            role="norel noreferral"
            className="border-b dark:border-gray-800"
          >
            TrueNorth
          </a>{' '}
          as Head of Front-end. Thanks to having a <abbr title="general technical">geeky</abbr> skill set, I can be part
          of the different stages of the creative process, from conception to execution.
        </div>
      </section>

      <section className="flex flex-col w-full my-8 md:mb-16">
        <h3 className="font-light text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
          Selected Works
        </h3>

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
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
