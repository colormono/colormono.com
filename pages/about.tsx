import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '@components';
import { Tag, Container } from '@components/ui';
import Article from '@components/Article';
import dynamic from 'next/dynamic';

const WelcomSketch = dynamic(() => import('@sketches/tiling'), {
  ssr: false,
});

const Page: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About Me – Mariano Rivas"
        canonical="https://colormono/about"
        openGraph={{
          url: 'https://colormono/about',
          title: 'About Me – Mariano Rivas',
        }}
      />

      <Layout>
        <Container className="py-12 md:py-24 xl:py-36">
          <Article>
            {/* <WelcomSketch /> */}

            <h1>Mariano Rivas</h1>
            <h3>New media artist and software developer</h3>
            {/* <p>
            Mi práctica abarca desde esculturas mecánicas a instalaciones
            interactivas de cuerpo completo. Utiliza el código como una
            herramienta de expresión artística y disfruta de trabajar en la
            intersección del arte y la tecnología. Ha trabajado con artistas
            emergentes, estudios boutiques, grandes marcas y publicidad, creando
            experiencias de todos los tamaños. Participó de exposiciones en el
            Centro Cultural Konex (FAUNA) y Malba (ArtFutura).
          </p> */}

            <p>
              I focus my practice in code, electronics and non-digital objects for creating interactive projects often
              framed as generative art. From educational to sociological approaches, my interest lies in the
              human-machine collaboration. With my works, I have participated in different festivals such ArtFutura,
              FAUNA, and Jóvenes en primer plano, among others. Currently I am researching about emergence in generative
              art.
            </p>
            {/* <p>
              By having a generalist technical skill set, I&apos;m able to participate in a variety of projects in
              different stages of the creative process, from conception to execution.
            </p> */}

            {/* <p>Download Full CV</p> */}

            <h4 className="text-gray-500">Interests</h4>
            <p className="flex flex-wrap gap-3 mt-4">
              {/* <Tag href="https://es.wikipedia.org/wiki/Tekn%C3%A9">Tekné</Tag> */}
              <Tag href="https://en.wikipedia.org/wiki/Techne">Techne</Tag>
              <Tag href="https://www.artnome.com/news/2018/8/8/why-love-generative-art">Generative Art</Tag>
              <Tag href="https://www.nngroup.com/articles/design-systems-101/">Design Systems</Tag>
              <Tag href="https://d3js.org/">Data viz</Tag>
              <Tag href="https://www.youtube.com/watch?v=a7movncpOQc&t=12s">JavaScript</Tag>
              <Tag href="https://nextjs.org/">Next.js</Tag>
              <Tag href="https://threejs.org/">Three.js</Tag>
              {/* <Tag href="https://reactnative.dev">React Native</Tag> */}
              <Tag href="https://processing.org/">Processing</Tag>
              <Tag href="https://www.arduino.cc/">Arduino</Tag>
              <Tag href="https://openframeworks.cc/">openFrameworks</Tag>
            </p>

            {/* <h3>Skills</h3>
          <ul>
            <li>Creative thinking, Inductive reasoning.</li>
            <li>Agile team player, collaborationist and good listener.</li>
            <li>
              Software engineering best practices, up-to-date with JavaScript.
            </li>
            <li>Functional, objet-oriented, maintainable and reusable code.</li>
            <li>Project design, planning and execution. </li>
          </ul> */}

            {/* <h3>Education</h3>
          <ul>
            <li>
              <span>2024</span>{' '}
              <strong>
                <small>(M.A.)</small> Maestría en Tecnología y Estética de las
                Artes Electrónicas, UNTREF, Argentina
              </strong>
            </li>
            <li>
              <span>2020</span>{' '}
              <strong>
                (B.F.A.) Licenciatura en Artes Multimediales, Universidad
                Nacional de las Artes, Argentina.
              </strong>
            </li>
            <li>
              <span>2016</span> Sistemas Generativos: el arte de perder el
              control, Leonardo Solaas, Espacio Plá
            </li>
            <li>
              <span /> Introducción al proceso de producción con impresión 3D,
              Mariano Giraud, Espacio Plá
            </li>
            <li>
              <span /> Construcción de Brazo Robótico, Leandro Barbeito, Neti
              Makersapce
            </li>
            <li>
              <span /> Proyectos &amp; Desarrollo Profesional, Lucía
              Warck-Meister, Fundación Cazadores de Arte
            </li>
            <li>
              <span /> Me colgás el proye?, Lucas DM, Centro Cultural Matienzo
            </li>
            <li>
              <span>2014</span>{' '}
              <strong>
                (B.A.) Técnico en Artes Multimediales, Universidad Nacional de
                las Artes, Argentina
              </strong>
            </li>
            <li>
              <span>2013</span> Captura de Movimiento para las Artes Escénicas,
              Diego Alberti, CCEBA
            </li>
            <li>
              <span>2009</span> Diseño de Imagen y Sonido, Universidad de
              Palermo, Argentina <em>(Incompleta)</em>
            </li>
            <li>
              <span>2007</span> Diseño Gráfico, Universidad de Buenos Aires,
              Argentina <em>(Incompleta)</em>
            </li>
            <li>
              <span>2004</span> Ingeniería Informática, Universidad de Buenos
              Aires, Argentina <em>(Incompleta)</em>
            </li>
          </ul> */}

            {/* <h3>Premios &amp; Becas</h3>
          <ul>
            <li>
              <span>2015</span> ArtFutura, Mención del Jurado. Categoría:
              Videoarte. Obra: Música.
            </li>
          </ul> */}

            {/* <h3>Exhibiciones Individuales</h3>
          <ul>
            <li>
              <span>2017</span> Cazadores de Arte, Buenos Aires, Argentina
            </li>
          </ul> */}

            {/* <h3>Exhibiciones Grupales</h3>
          <ul>
            <li>
              <span>2015</span> FAUNA, Centro Cultural Konex, Capital Federal,
              Argentina
            </li>
            <li>
              <span>2015</span> ArtFutura, MALBA, Capital Federal, Argentina
            </li>
            <li>
              <span>2014</span> Festival Jóvenes en primer plano, Capital
              Federal, Argentina
            </li>
          </ul> */}

            {/* 
          <h3>Colecciones</h3>
          <ul>
            <li>
              <span>Año</span> Lugar, Ciudad, País
            </li>
          </ul>
          */}
          </Article>
        </Container>
      </Layout>
    </>
  );
};

export default Page;
