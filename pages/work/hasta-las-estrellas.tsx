import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '@components';
import { Container } from '@components/ui';
import Article from '@components/Article';

const Page: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Hasta las Estrellas – Mariano Rivas"
        canonical="https://colormono/work/hasta-las-estrellas"
        openGraph={{
          url: 'https://colormono/work/hasta-las-estrellas',
          title: 'Hasta las Estrellas – Mariano Rivas',
        }}
      />

      <Layout>
        {/* <figure className="fixed z-10 top-10 left-0 right-0">
          <div className="relative">
            <div className="w-full h-full absolute top-0 lef-0 right-0 bg-gradient-to-b from-transparent to-black">
              asd
            </div>
            <div className="opacity-100">
              <img src="/static/work/hasta-las-estrellas/concept.jpg" alt="Concept" className="w-full" />
            </div>
          </div>
        </figure> */}

        <Container className="z-40 pt-16">
          <Article>
            <h1>Hasta las Estrellas</h1>
            <p>
              Ilustración aumentada. Dibujo con marcador de pintura blanca al agua sobre papel negro. Corte mecánico,
              pegado a mano; la precisión es maquínica, el error humano. Pantalla LCD con animación generada
              algorítmicamente.
            </p>

            <figure>
              <img src="/static/work/hasta-las-estrellas/medium.jpg" alt="Hasta las Estrellas" />
              <figcaption>
                <strong>Hasta las Estrellas</strong>
                <br />
                72x102cm, 2019
                <br />
                Multimedia Art. Drawing and cutting plotter, Arduino controlled LCD screen
              </figcaption>
            </figure>

            {/* Here will be the generative section */}
            <figure>
              <img src="/static/work/hasta-las-estrellas/pantallita.jpg" alt="Display Detail" />
              <div className="grid grid-cols-3 md:grid-cols-5 my-8">
                <img src="/static/work/hasta-las-estrellas/gen/01.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/02.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/04.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/05.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/06.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/07.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/08.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/09.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/10.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/11.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/12.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/13.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/14.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/15.jpg" alt="Generative screen" />
                <img src="/static/work/hasta-las-estrellas/gen/03.jpg" alt="Generative screen" />
              </div>
              <figcaption className="text-center">
                <cite>
                  &quot;Cielo, el mundo está ahí, <br />
                  para compartirlo con quién quieras,
                  <br /> si es tu deseo.&quot;
                </cite>
              </figcaption>
            </figure>
          </Article>
        </Container>
      </Layout>
    </>
  );
};

export default Page;
