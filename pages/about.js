import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '@/components/Container';
import { Tag } from '@/components/ui';

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Mariano Rivas"
        canonical="https://colormono/about"
        openGraph={{
          url: 'https://colormono/about',
          title: 'About Me – Mariano Rivas'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Mariano Rivas
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>New media artist and software developer, Buenos Aires, 1983.</p>
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
            I focus my practice in code, electronics and non-digital objects for
            creating interactive projects often framed as generative art. From
            educational to sociological approaches, my interest lies in the
            human-machine collaboration. With my works, I have participated in
            different festivals such ArtFutura, FAUNA, and Jóvenes en primer
            plano, among others. Currently I am working on a research project
            about emergence in generative art.
            {/* with a grant from Myself, haha.*/}
          </p>
          <p>
            By having a generalist technical skill set, I'm able to participate
            in a variety of projects in different stages of the creative
            process, from conception to execution.
          </p>

          {/* <p>Download Full CV</p> */}

          <div className="font-bold mt-8 mb-4 block">Skill set</div>
          <div className="flex flex-wrap gap-2">
            <Tag>JavaScript</Tag>
            <Tag>React</Tag>
            <Tag>NextJS</Tag>
            <Tag>ThreeJS</Tag>
            <Tag>NodeJS</Tag>
            <Tag>GraphQL</Tag>
            <Tag>Design Systems</Tag>
            <Tag>Dataviz</Tag>
            <Tag>openFrameworks</Tag>
            <Tag>Processing</Tag>
            <Tag>Arduino</Tag>
          </div>

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
        </div>
      </div>
    </Container>
  );
}
