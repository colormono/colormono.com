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

            <p>
              Obra tecnopoética. Marcador de pintura acrílica sobre papel negro. Pantalla LCD con animación aleatoria
              generada algorítmicamente. Dibujo y corte con plotter mecánico, pegado a mano; la precisión es maquínica,
              el error humano.
            </p>

            {/* Here will be the generative section */}
            <figure className="bg-black text-white">
              <p className="text-center pt-6 italic">
                &quot;Cielo, el mundo está ahí, para compartirlo con quién quieras, si es tu deseo.&quot;
              </p>
              <div className="grid grid-cols-3 md:grid-cols-5 my-8 p-4">
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
            </figure>

            <h3>Dibujo</h3>
            <p>
              El dibujo está realizado con marcadores Uni Posca de 3mm sobre papel Frabrianni negro texturado libre de
              ácido. maquínica, el error humano. La luna (de Valencia) es una secuencia de lineas superpuestas en 3
              colores (blanco, gris y celeste), está insiprada en la obra de Eduardo Sempere, artista geométrico
              español.
            </p>

            <figure>
              <img src="/static/work/hasta-las-estrellas/pantallita.jpg" alt="Display Detail" />
            </figure>

            <h3>Animación</h3>
            <p>
              La pantalla LCD es controlada por una Arduino Uno. La animación está generada algorítmicamente, para que
              cada escena sea distinta a la anterior y no se repita nunca (o las probabilidades sean sumamente bajas).
              Cada grupo está formado por 1 a 5 figuras geométricas, que pueden ser cuadrados, triángulos o círculos. El
              tamaño y la posición de estas figuras también es variable.
            </p>

            <pre>
              <code>
                {`// Hasta las estrellas
// 2020, Colormono
// para Display Lcd 128x64 Grafico Spi St7920 Glcd

#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif

#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, 13, 11,  10, 8);

// Public
int lcdWidth = 128;         // SCREEN WIDTH
int lcdHeight = 64;         // SCREEN HEIGHT
int partyMin = 1;           // MIN NUMBER OF SHAPES
int partyMax = 5;           // MAX NUMBER OF SHAPES
int padding = 3;            // SPACE BETWEEN SHAPES
int floorH = 49;            // SKYLINE (0 is TOP LEFT)
int shineDuration = 1000;   // LOOP DURATION (in milliseconds)
int timelapse = 30;         // LOOPS ITERATIONS
int oscuridad = 5;          // segundos, de oscuridad...

// Private, NOT PASS (I'm a comment, not a police)
int party = 1;
int partyWidth;
int timelapseCounter = 0;
int partySeats[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
int partyMembers[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
int memberShape[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

void u8g2_prepare(void) {
  u8g2.setFont(u8g2_font_6x10_tf);
  u8g2.setFontRefHeightExtendedText();
  u8g2.setDrawColor(1);
  u8g2.setFontPosTop();
  u8g2.setFontDirection(0);
  u8g2.setColorIndex(1);
}

void generate(void) {
  // select party
  party = random(partyMax) + partyMin;
  Serial.print("Party of ");
  Serial.println(party);
  partyWidth = -padding;

  for (int i = 0; i < party; i++) {
    // child or grown
    int memberSize;
    if (random(100) > 50) {
      // child
      memberSize = random(9, 14);
    } else {
      // grown
      memberSize = random(19, 22);
    }

    int g = floor(random(4));
    memberShape[i] = g;
    partyMembers[i] = memberSize;
    partySeats[i] = partyWidth + padding;
    partyWidth += memberSize + padding;

    Serial.print("Hold a seat of ");
    Serial.print(memberSize);
    Serial.print(" pixels ");
    Serial.println(partyWidth);
  }
  Serial.print("Total width ");
  Serial.println(partyWidth);
}

void drawParty(void) {
  // row position
  int rowX = (lcdWidth - partyWidth) / 2;
  Serial.print("Row should start at x ");
  Serial.println(rowX);

  // draw party
  for (int i = 0; i < party; i++) {
    int x = rowX + partySeats[i];
    int y = floorH - partyMembers[i];
    int d = partyMembers[i];
    int g = memberShape[i];

    switch (g) {
      case 1: u8g2.drawTriangle(x, y + d, x + d / 2, y, x + d, y + d); break;
      case 2: u8g2.drawBox(x, y, d, d); break;
      default: u8g2.drawDisc(x + d / 2, y + d / 2, d / 2);
    }
  }
}

void drawGrass() {
  u8g2.setColorIndex(1);
  u8g2.drawBox(0, floorH + 1, lcdWidth, lcdHeight - floorH - 1);
  u8g2.setColorIndex(0);
  for (int g = 0; g < lcdWidth; g++) {
    if (random(100) > 50) u8g2.drawPixel(g, floorH + 1);
    if (random(100) > 50) u8g2.drawPixel(g, floorH + 3);
  }
}

void drawStars() {
  int starsBottom = 35;
  int starsGrid = 6;
  for (int x = 0; x < lcdWidth; x += starsGrid) {
    for (int y = 0; y < starsBottom; y += starsGrid) {
      if (random(100) > 83) {
        if (y <= 20 ) {
          if (random(100) > 83) {
            drawStarA(x, y);
          } else {
            drawStarB(x, y);
          }
        }
        if (y > 20 ) u8g2.drawPixel(x, y);
      }
    }
  }
}

void drawStarA(int x, int y) {
  u8g2.drawPixel(x, y);
  u8g2.drawPixel(x + 2, y);
  u8g2.drawPixel(x + 4, y);
  u8g2.drawPixel(x + 2, y + 1);
  u8g2.drawPixel(x, y + 2);
  u8g2.drawPixel(x + 1, y + 2);
  u8g2.drawPixel(x + 2, y + 2);
  u8g2.drawPixel(x + 3, y + 2);
  u8g2.drawPixel(x + 4, y + 2);
  u8g2.drawPixel(x + 2, y + 3);
  u8g2.drawPixel(x, y + 4);
  u8g2.drawPixel(x + 2, y + 4);
  u8g2.drawPixel(x + 4, y + 4);
}

void drawStarB(int x, int y) {
  u8g2.drawPixel(x + 1, y);
  u8g2.drawPixel(x, y + 1);
  u8g2.drawPixel(x + 1, y + 1);
  u8g2.drawPixel(x + 2, y + 1);
  u8g2.drawPixel(x + 1, y + 2);
}

void drawStar(int x, int y, int s) {
  u8g2.drawLine(x, y + s / 2, x + s, y + s / 2); // horizontal
  u8g2.drawLine(x + s / 2, y, x + s / 2, y + s); // vertical
}

void setup(void) {
  Serial.begin(9600);
  u8g2.begin();
}

void loop(void) {
  if (timelapseCounter == 0) {
    generate();
  }

  u8g2.clearBuffer();
  u8g2_prepare();
  if (timelapseCounter < timelapse - oscuridad) {
    drawParty();
  }
  drawStars();
  drawGrass();
  u8g2.sendBuffer();

  timelapseCounter++;
  if (timelapseCounter >= timelapse) {
    timelapseCounter = 0;
  }

  delay(shineDuration);
}`}
              </code>
            </pre>

            <p>
              <a href="https://github.com/colormono/hasta-las-estrellas" target="_blank" rel="noreferrer">
                Código fuente en Github
              </a>
            </p>
          </Article>
        </Container>
      </Layout>
    </>
  );
};

export default Page;
