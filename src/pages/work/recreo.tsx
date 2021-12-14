import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Layout from '@/layouts/Page';

export default function Page() {
  return (
    <>
      <NextSeo
        title="Recreo – Mariano Rivas"
        canonical="https://colormono/work/hasta-las-estrellas"
        openGraph={{
          url: 'https://colormono/work/hasta-las-estrellas',
          title: 'Recreo – Mariano Rivas',
        }}
      />
      <article>
        <section>
          <h1>Recreo</h1>
          <p>
            Proyecto de Graduación Licenciatura en Artes Multimediales. Director de Proyecto: Dr. Esteban Calcagno Fecha
            de presentación: 2020
          </p>

          <blockquote>
            <p>
              “Creo firmemente que los buenos resultados en el camino de las ideas gráficas surgen cuando el diseñador
              se apasiona y se sumerge profundamente en el asunto. Cuando no puede dejar de pensar en ello, cuando sueña
              con el problema y agota toda la información disponible sobre el tema. Prueba innumerables variantes y,
              justo antes del colapso mental, recibe la explosión aparentemente mágica de la idea salvadora que,
              finalmente, no resulta más que el producto de su cultura visual y una dosis de pensamiento práctico
              profesional (métodos y recetas) en un cóctel que se mezcla solo.” 1
            </p>
            <p>Rocambole</p>
          </blockquote>

          <h3>Introducción</h3>
          <p>
            Arranco citando parte del Discurso del Método, pero no el célebre texto de René Descartes (aunque tampoco lo
            descarto) sino el de Rocambole porque creo que esta cita puede ser extrapolada a la producción de todas las
            artes en general y el arte multimedial en particular. Además, porque siempre me atrajo el arte de Rocam-
            bole, “Luzbelito” fue mi primer disco de “Los Redondos”. Ese tam- bién lo conservo, me lo regaló mi madrina
            cuando cumplí 12.
          </p>
          <p>
            Las páginas a continuación pretenden ser la memoria de mi proyecto de graduación, “Recreo”. Imágenes y
            textos del proceso de producción. Megabytes producidos junto a la máquina, escrib- iendo, procesando,
            ejecutando, iterando. Fragmentos acerca de un modo de hacer, donde se deja aparecer las características que
            son propias de cada hacer: la precisión sistemática de la máqui- na y el gesto expresivo del artista humano.
          </p>
          <p>
            Mariano N. Rivas
            <br />
            Buenos Aires, 2020
          </p>

          <p>
            <img
              src="/static/images/recreo/manera-zajec.png"
              alt="Display Detail"
              className="w-56 shadow-2xl border-2 boder-black"
            />
          </p>
          <p>“A la manera de E. Zajec, Il Cubo, 1971” Recreo, 2018</p>

          <h1>Recreo</h1>
          <p>
            Recreo es un conjunto de piezas desarrolladas durante fragmentos de tiempo libre junto a la máquina. Una
            colec- ción de imágenes generadas mediante diversos algoritmos y materializadas con un plotter de dibujo y
            corte; una serie de objetos construidos con componentes electrónicos y líneas de código. Productos de
            momentos, proyectando y programando; compilando, fallando y volviendo a compilar; imprimiendo; dibujando;
            cortando y pegando (papel y código); soldando y escuchando música.
          </p>
          <p>
            Se parte de la premisa de que el producto de una colaboración es mayor que la suma de los productos
            individuales. Arte generativo. Colaboración entre humano y sistemas autónomos digitales, tan es- tables como
            caóticos, ambos. Colaboración no como tema o fin, sino como estrategia operativa in- tegral para cuestionar
            el papel del artista y la estéti ca en la actualidad. Este modo de producción no es un concepto nuevo,
            retoma técnicas introducidas por pioneros del arte computacional de fines de los 60’ como Vera Molnár, Georg
            Nees y Manfred Mohr; y las combina con prácticas de artistas educadores como Golan Levin y Daniel Shiffman.
          </p>
          <p>
            Es una exposición sobre Un modo de hacer, donde se deja aparecer las características que son propias de cada
            hacer: la precisión sistemática de la máqui- na y el gesto expresivo del artista humano. Son obras
            realizadas en colaboración con la máqui- na, parte de las desiciones fueron escritas/ejecuta- das por mí,
            otras no. El resultado es una terminación detallada, por momentos obsesiva y por momentos distraída, que
            puede verse reflejada en cada una de las piezas
          </p>
        </section>
      </article>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
