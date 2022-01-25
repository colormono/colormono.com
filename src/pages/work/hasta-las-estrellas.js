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

      <figure>
        <img src="/static/images/hasta-las-estrellas/concept.jpg" alt="Concept" className="w-full" />
      </figure>

      <article className="prose dark:prose-invert max-w-3xl mx-auto mt-16">
        <h1>Hasta las Estrellas</h1>
        <p>
          Ilustración aumentada. Dibujo con marcador de pintura blanca al agua sobre papel negro. Corte mecánico, pegado
          a mano; la precisión es maquínica, el error humano. Pantalla LCD con animación generada algorítmicamente.
        </p>

        <figure>
          <img src="/static/images/hasta-las-estrellas/medium.jpg" alt="Hasta las Estrellas" />
          <figcaption>
            <h4>Obra Multimedia, 2019</h4>
            <p>
              Plotter de dibujo y corte con pantalla LCD
              <br />
              72x102 cm
            </p>
          </figcaption>
        </figure>

        <figure>
          <img src="/static/images/hasta-las-estrellas/pantallita.jpg" alt="Display Detail" />
          <figcaption className="text-center">
            <cite>
              &quot;Cielo, el mundo está ahí, <br />
              para compartirlo con quién quieras,
              <br /> si es tu deseo.&quot;
            </cite>
          </figcaption>
        </figure>

        <hr />

        {/* Here will be the generative section
				 <aside className="p-16 bg-gray-900">
          <div id="container" className="mx-auto"></div>
        </aside> */}

        <h2>El día que naciste</h2>
        <figure>
          <img
            src="/static/images/hasta-las-estrellas/foto-tini.jpg"
            alt="Agustina Rivas Varela"
            className="rounded-lg shadow-md"
          />
        </figure>
        <p>
          Procesamiento digital. Fotografía tomada por mi hermano Daniel el día que nació <strong>Agustina</strong>, mi
          primera hija. Reencuadre y conversión a escala de grises para el análisis de datos. El programa proyecta
          elipses que crecen desde un punto de orígen. La continuidad de las líneas se encuentra en relación con el
          brillo de los pixeles. Resultado dibujado en plotter con microfibra negra sobre hoja natural.
        </p>

        <figure>
          <img
            src="/static/images/hasta-las-estrellas/el-dia-que-naciste.jpg"
            alt="El día que naciste"
            className="w-full shadow-2xl"
          />
          <figcaption>
            <h4>Plotter drawing, 2019</h4>
            <p>
              Plotter de dibujo y procesamiento de imagen
              <br />
              29x34 cm
            </p>
          </figcaption>
        </figure>

        <hr />

        <h2>La noche que naciste</h2>
        <p>
          Así se veía el cielo cuando nació <strong>Andrea</strong>, mi compañera, mi figura complementaria, con quién
          elijo compartir este mundo, hasta las estrellas. Buenos Aires, 16 de Septiembre de 1983, 21:00hs.
        </p>

        <figure>
          <img src="/static/images/hasta-las-estrellas/la-noche-que-naciste.jpg" alt="La noche que naciste" />
          <figcaption>
            <h4>Obra Multimedia, 2019</h4>
            <p>
              Plotter de dibujo y visualización de datos
              <br />
              29x34 cm
            </p>
          </figcaption>
        </figure>

        <p>
          Visualización de datos. Imagen generada a partir de una colección de datos con las posiciones de las
          estrellas, vistas desde una fecha y lugar específico de nuestro espacio-tiempo.
        </p>
        <p>
          Posiciones obtenidas con Celestial Map, programa de código libre para visualizar datos GeoJSON. Instrucciones
          de dibujo simplificadas en programa vectorial. Dibujo realizado por plotter con marcador de pintura blanca
          sobre hoja negra.
        </p>

        <hr />

        <h2>Parte de tu Huella</h2>
        <p>
          Tintado en papel. Tinta china en la palma de la mano de <strong>Joaquín</strong>, mi segundo hijo, sello sobre
          papel. Máscara realizada con plotter de corte.
        </p>

        <figure>
          <img src="/static/images/hasta-las-estrellas/parte-de-tu-huella.jpg" alt="Parte de tu huella" />
          <figcaption>
            <h4>Tintado en papel, 2019</h4>
            <p>
              Sello con la palma de la mano
              <br />9 x 9 cm
            </p>
          </figcaption>
        </figure>

        <hr />
        <h2>Crece</h2>
        <p>
          Esperando nuestro tercer hijo, <strong>Felipe</strong>. Obra compuesta por una planta, un gotero y un
          frasquito.
        </p>

        <figure>
          <img src="/static/images/hasta-las-estrellas/crece.jpg" alt="Crece" />
          <figcaption>
            <h4>Obra Tridimensional, 2020</h4>
            <p>
              Objeto-ensamble
              <br />
              50 x 150 x 50 cm aprox.
            </p>
          </figcaption>
        </figure>
      </article>
    </Container>
  );
}
