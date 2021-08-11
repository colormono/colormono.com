import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Container } from '@/components/ui';

export default function About() {
  return (
    <Container>
      <NextSeo
        title="Hasta las Estrellas – Mariano Rivas"
        canonical="https://colormono/work/hasta-las-estrellas"
        openGraph={{
          url: 'https://colormono/work/hasta-las-estrellas',
          title: 'Hasta las Estrellas – Mariano Rivas',
        }}
      />
      <div className="text-black dark:text-white">
        <section className="md:grid grid-cols-2">
          <article className="my-8 md:m-16 md:max-w-lg">
            <h1 className="text-4xl lg:text-5xl leading-tight mb-8">Hasta las Estrellas</h1>

            <p>
              Ilustración aumentada. Dibujo con marcador de pintura blanca al agua sobre papel negro. Corte mecánico,
              pegado a mano; la precisión es maquínica, el error humano. Pantalla LCD con animación generada
              algorítmicamente.
            </p>

            <figure className="mt-12 mb-16 flex items-center">
              <img
                src="/static/images/hasta-las-estrellas/pantallita.jpg"
                alt="Display Detail"
                className="w-56 shadow-2xl border-2 boder-black"
              />
              <div className="italic text-sm px-8">
                "Cielo, el mundo está ahí, <br />
                para compartirlo con quién quieras, si es tu deseo."
              </div>
            </figure>

            <div className="text-sm">
              <h4 className="dark:text-white">Obra Multimedia, 2019</h4>
              <p>
                Plotter de dibujo y corte con pantalla LCD
                <br />
                72x102 cm
              </p>
            </div>
          </article>

          <figure className="justify-self-end">
            <img
              src="/static/images/hasta-las-estrellas/medium.jpg"
              alt="Hasta las Estrellas"
              className="w-auto max-h-screen"
            />
          </figure>
        </section>

        {/* Here will be the generative section
				 <aside className="p-16 bg-gray-900">
          <div id="container" className="mx-auto"></div>
        </aside> */}

        <section className="container p-8 md:p-0 md:mx-auto md:my-24 md:grid grid-cols-2">
          <figure className="flex-grow">
            <img
              src="/static/images/hasta-las-estrellas/el-dia-que-naciste.jpg"
              alt="El día que naciste"
              className="w-full shadow-2xl"
            />
          </figure>

          <article className="my-8 md:m-16 md:max-w-md">
            <figure className="md:pt-8">
              <img
                src="/static/images/hasta-las-estrellas/foto-tini.jpg"
                alt="Agustina Rivas Varela"
                className="w-1/2 rounded-lg shadow-md"
              />
            </figure>

            <h2 className="text-3xl leading-tight my-6 dark:text-white">
              El día que naciste <small className="block text-gray-600">Agustina</small>
            </h2>
            <p>
              Procesamiento digital. Fotografía tomada por mi hermano Daniel el día que nació Agustina, mi primera hija.
              Reencuadre y conversión a escala de grises para el análisis de datos. El programa proyecta elipses que
              crecen desde un punto de orígen. La continuidad de las líneas se encuentra en relación con el brillo de
              los pixeles. Resultado dibujado en plotter con microfibra negra sobre hoja natural.
            </p>

            <div className="text-sm mt-8">
              <h4 className="dark:text-white">Obra Multimedia, 2019</h4>
              <p>
                Plotter de dibujo y procesamiento de imagen
                <br />
                29x34 cm
              </p>
            </div>
          </article>
        </section>

        <section className="bg-black text-gray-400 p-8">
          <div
            className="container md:p-0 md:mx-auto md:my-24 md:grid grid-cols-2 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: 'url(/static/images/hasta-las-estrellas/concept2.jpg)',
            }}
          >
            <figure className="flex-grow md:order-last">
              <img
                src="/static/images/hasta-las-estrellas/la-noche-que-naciste.jpg"
                alt="La noche que naciste"
                className="w-full"
              />
            </figure>

            <article className="my-8 md:m-16 md:max-w-md">
              <h2 className="text-3xl leading-tight mb-6 text-white">
                La noche que naciste <small className="block text-gray-600">Andrea</small>
              </h2>
              <p>
                Buenos Aires, 16 de Septiembre de 1983, 21:00hs. Así se veía el cielo cuando nació Andrea, mi compañera,
                mi figura complementaria, con quién elijo compartir este mundo, hasta las estrellas.
              </p>
              <p>
                Visualización de datos. Imagen generada a partir de una colección de datos con las posiciones de las
                estrellas, vistas desde una fecha y lugar específico de nuestro espacio-tiempo.
              </p>
              <p>
                Posiciones obtenidas con Celestial Map, programa de código libre para visualizar datos GeoJSON.
                Instrucciones de dibujo simplificadas en programa vectorial. Dibujo realizado por plotter con marcador
                de pintura blanca sobre hoja negra.
              </p>

              <div className="description mt-8">
                <h4 className="font-semibold text-white">Obra Multimedia, 2019</h4>
                <p>
                  Plotter de dibujo y visualización de datos
                  <br />
                  29x34 cm
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="container p-8 md:p-0 md:mx-auto md:my-24 md:grid grid-cols-3">
          <article className="max-w-sm mb-16">
            <figure>
              <img
                src="/static/images/hasta-las-estrellas/parte-de-tu-huella.jpg"
                alt="Parte de tu huella"
                className="w-2/3 border border-black shadow-2xl"
              />
            </figure>
            <h2 className="text-3xl leading-tight my-6 dark:text-white">
              Parte de tu Huella <small className="block text-gray-600">Joaquín</small>
            </h2>
            <p>
              Tintado en papel. Tinta china en la palma de la mano de Joaquín, mi segundo hijo, sello sobre papel.
              Máscara realizada con plotter de corte.
            </p>
            <div className="description mt-8">
              <h4 className="dark:text-white">Tintado en papel, 2019</h4>
              <p>
                Sello con la palma de la mano
                <br />9 x 9 cm
              </p>
            </div>
          </article>

          <figure className="flex-grow self-end md:mx-8">
            <img src="/static/images/hasta-las-estrellas/crece.jpg" alt="Crece" className="w-full shadow-2xl" />
          </figure>

          <article className="self-end max-w-sm">
            <h2 className="text-3xl leading-tight my-6 dark:text-white">
              Crece <small className="block text-gray-600">Felipe</small>
            </h2>
            <p>Esperando nuestro tercer hijo. Obra compuesta por una planta, un gotero y un frasquito.</p>
            <div className="description mt-8">
              <h4 className="dark:text-white">Obra Tridimensional, 2020</h4>
              <p>
                Objeto-ensamble
                <br />
                50 x 150 x 50 cm aprox.
              </p>
            </div>
          </article>
        </section>

        <figure>
          <img src="/static/images/hasta-las-estrellas/concept.jpg" alt="Concept" className="w-full" />
        </figure>

        <figure>
          <img src="/static/images/hasta-las-estrellas/medium.jpg" alt="Hasta Las Estrellas" className="w-full" />
        </figure>
        {/* 
        <section id="credits" className="p-16">
          <article className="mx-auto max-w-2xl">
            <h2 className="text-2xl">CREDITS</h2>
            <p>
              Esperando nuestro tercer hijo. Obra compuesta por una planta, un
              gotero y un frasquito.
            </p>
          </article>
        </section> */}
      </div>
    </Container>
  );
}
