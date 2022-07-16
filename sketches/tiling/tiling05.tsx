import React, { Component } from 'react';
import { randomPick } from '../utils';
import p5Svg from 'p5.js-svg';

// To-do:
// - [√] Initial sketch
// - [√] Add MONO shapes
// - [√] Mirrors
// - [√] Export SVG
// - [] Parametrize
// - [] Utils refactor
// - [] Random Utils (pickColor([]))
// - [] GUI (Play, Pause, Generate, Export)
// - [] TSX

type Shape = {
  shape: string;
  color: string;
};

type Tile = {
  /* Tile X position */
  x: number;
  /* Tile Y position */
  y: number;
  /* Tile Width */
  w: number;
  /* Tile height */
  h: number;
  /* Tile padding */
  padding: number;
  /* Tile shape */
  pattern: Shape;
};

class Sketch extends Component {
  constructor() {
    super();
    this.renderRef = React.createRef();
    this.state = {
      x: 100,
      y: 100,
    };
  }

  componentDidMount() {
    const p5 = require('p5');

    p5Svg(p5);

    let points = [];
    const bg = '#FAFAFA';
    const tileWidth = 150;
    const tileHeight = 150;
    const tilePadding = 2;
    const align = { x: 0, y: 0 };
    let containerWidth, containerHeight;

    this.sketch = new p5((p) => {
      p.saveButton;

      p.setup = () => {
        // create canvas
        let density = p.displayDensity();
        p.pixelDensity(density);
        p.createCanvas(p.windowWidth, p.windowHeight * 0.6, p.SVG).parent(this.renderRef.current);

        p.setContainerSize(p.windowWidth * 0.5, p.windowHeight * 0.5 * 0.6);
        // p.alignCenter(containerWidth, containerHeight, p.windowWidth, p.windowHeight * 0.6);
        // p.background('gray');
        p.strokeWeight(0);
        p.ellipseMode(p.CORNER);
        p.frameRate(0.5); // pacefully
        // p.noLoop(); // stop looping

        // p.saveButton = p.createButton('Save');
        // p.saveButton.position(10, p.windowHeight * 0.7 - 10);
        // p.saveButton.mousePressed(p.exportCanvas);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight * 0.6);
        p.setContainerSize(p.windowWidth * 0.5, p.windowHeight * 0.5 * 0.6);
        // p.alignCenter(containerWidth, containerHeight, p.windowWidth, p.windowHeight * 0.6);
      };

      p.draw = () => {
        // Since SVG is XML-based, every call of the draw function will insert elements into it, and these elements keep existing even if they are not visible. So, long-time running will result in too many child elements. We recommend calling clear() in your draw function, which will trigger internal context.__clearCanvas() to remove elements.0
        p.clear();

        // Background
        p.fill(bg);
        p.rect(0, 0, p.width, p.height);

        // Seed grid
        p.generateGrid();

        // Draw grid

        // top-left
        p.push();
        p.translate(p.width / 2 - containerWidth, p.height / 2 - containerHeight);
        p.drawGrid();
        p.pop();

        // top-right
        p.push();
        p.translate(p.width / 2 + containerWidth, p.height / 2 - containerHeight);
        p.scale(-1, 1);
        p.drawGrid();
        p.pop();

        // bottom-left
        p.push();
        p.translate(p.width / 2 - containerWidth, p.height / 2 + containerHeight);
        p.scale(1, -1);
        p.drawGrid();
        p.pop();

        // bottom-right
        p.push();
        p.translate(p.width / 2 + containerWidth, p.height / 2 + containerHeight);
        p.scale(-1, -1);
        p.drawGrid();
        p.pop();
      };

      p.exportCanvas = () => {
        p.saveCanvas('render', 'png');
      };

      p.mouseReleased = () => {
        p.downloadSvg();
      };

      p.downloadSvg = () => {
        let svgCanvas = document.getElementById('mySketch');
        if (svgCanvas) {
          let svgElement = svgCanvas.getElementsByTagName('svg')[0];
          let svg = svgElement.outerHTML;
          let file = new Blob([svg], { type: 'plain/text' });
          let a = document.createElement('a'),
            url = URL.createObjectURL(file);

          a.href = url;
          a.download = 'render.svg';
          document.body.appendChild(a);
          a.click();

          setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        }
      };

      p.generateGrid = function () {
        // Initialize
        points = p.subdivide(0, 0, containerWidth, containerHeight, tileWidth, tileHeight, tilePadding);
        p.randomlySubdivideGridPoints();
        p.randomlySubdivideGridPoints();
        p.randomlySubdivideGridPoints();
        p.randomlySubdivideGridPoints();

        // Composition
        points.forEach((item, index) => {
          // flipping a coing (pick a color)
          // const c = p.random(0, 10) > 5 ? 'black' : 'blue';

          // pick random item from an array
          const colors = ['black', 'blue', 'green'];
          const c = randomPick(colors);

          // throwing dice (pick a shape)
          const s = p.int(p.floor(p.random(1, 6)));

          // save
          item.pattern = {
            color: c,
            shape: s,
          };

          // console.log(index, item);
        });
      };

      p.drawGrid = function () {
        points.forEach((item) => {
          // debug
          // p.tileFloor(item.x, item.y, item.w, item.h, item.padding);
          // p.tilePoint(item.x, item.y, item.w, item.h);

          // get color
          p.fill(item.pattern?.color);

          // get shape
          switch (item.pattern?.shape) {
            case 1:
              p.letterM(item.x, item.y, item.w, item.h, item.padding);
              break;
            case 2:
              p.letterO(item.x, item.y, item.w, item.h, item.padding);
              break;
            case 3:
              p.letterN(item.x, item.y, item.w, item.h, item.padding);
              break;
            case 4:
              p.letterOo(item.x, item.y, item.w, item.h, item.padding);
              break;
            default:
            // silence, silencio
          }
        });
      };

      p.setContainerSize = (w, h) => {
        containerWidth = (p.floor(w / tileWidth) - 1) * tileWidth;
        containerHeight = (p.floor(h / tileHeight) - 1) * tileHeight;
      };

      p.setGridSize = (w, h, cols = 4, rows = 4) => {
        containerWidth = tileWidth * rows;
        containerHeight = tileHeight * cols;
      };

      p.alignCenter = (innerWidth, innerHeight, outerWidth, outherHeight) => {
        align.x = (outerWidth - innerWidth) / 2;
        align.y = (outherHeight - innerHeight) / 2;
      };

      p.subdivide = (x, y, containerWidth, containerHeight, tileWidth, tileHeight, padding) => {
        const newPoints = [];

        for (var j = 0; j < containerWidth; j += tileWidth) {
          for (var k = 0; k < containerHeight; k += tileHeight) {
            newPoints.push({ x: x + j, y: y + k, w: tileWidth, h: tileHeight, padding: padding });
          }
        }

        return newPoints;
      };

      p.randomlySubdivideGridPoints = () => {
        // ArrayList<GridPoint> newPoints = new ArrayList<GridPoint>();
        // const newPoints : GridPoint = [];
        const newPoints = [];

        points.forEach((item) => {
          if (p.random(1) > 0.5) {
            // p.fill('blue');
            // p.tileFloor(item.x, item.y, item.w, item.h, item.padding);
            newPoints.push(...p.subdivide(item.x, item.y, item.w, item.h, item.w / 2, item.h / 2, item.padding));
          } else {
            newPoints.push(item);
          }
        });

        points = newPoints;
      };

      // Can a TS util be used here? how?
      p.tilePoint = (x, y, w, h, d = 3) => {
        p.ellipse(x + w / 2 - d / 2, y + h / 2 - d / 2, d, d);
      };

      p.tileFloor = (x, y, w, h, padding) => {
        p.rect(x + padding, y + padding, w - padding * 2, h - padding * 2);
      };

      p.letterM = (x, y, w, h, padding) => {
        p.rect(x + padding, y + padding, w - padding * 2, h - padding * 2);
      };

      p.letterO = (x, y, w, h, padding) => {
        p.ellipse(x + padding, y + padding, w - padding * 2, h - padding * 2);
      };

      p.letterN = (x, y, w, h, padding) => {
        p.triangle(x + padding, y + padding, x + padding, y + h - padding, x + w - padding, y + h - padding);
      };

      p.letterOo = (x, y, w, h, padding) => {
        p.push();
        p.ellipse(x + padding, y + padding, w - padding * 2, h - padding * 2);
        p.fill(bg);
        p.ellipseMode(p.CENTER);
        p.ellipse(x + w / 2, y + h / 2, w * 0.33, h * 0.33);
        p.pop();
      };
    });
  }

  render() {
    return (
      <figure id="mySketch" className="sketch">
        <div ref={this.renderRef}></div>
      </figure>
    );
  }
}

export default Sketch;
