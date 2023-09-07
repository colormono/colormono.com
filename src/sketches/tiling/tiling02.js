import React, { Component } from 'react';
import p5 from 'p5';

// To-do:
// - [√] Initial sketch
// - [√] Avoid drawing outside the canvas. Fit grid, align centered
// - [] Pause/Resume button
// - [] GUI (Play, Pause, Generate, Export)

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

    this.sketch = new p5((p) => {
      p.points = [];
      p.tileWidth = 100;
      p.tileHeight = 100;
      p.tilePadding = 2;
      p.containerWidth, p.containerHeight;
      p.align = { x: 0, y: 0 };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight * 0.6).parent(this.renderRef.current);
        p.setContainerSize(p.windowWidth, p.windowHeight * 0.6);
        p.alignCenter(p.containerWidth, p.containerHeight, p.windowWidth, p.windowHeight * 0.6);
        p.background('gray');
        p.strokeWeight(0);
        p.ellipseMode(p.CORNER);
        p.frameRate(0.5); // pacefully
        p.noLoop(); // stop looping
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight * 0.6);
        p.setContainerSize(p.windowWidth, p.windowHeight * 0.6);
        p.alignCenter(p.containerWidth, p.containerHeight, p.windowWidth, p.windowHeight * 0.6);
      };

      p.setContainerSize = (w, h) => {
        p.containerWidth = p.floor(w / p.tileWidth) * p.tileWidth;
        p.containerHeight = p.floor(h / p.tileHeight) * p.tileHeight;
      };

      p.setGridSize = (w, h, cols = 4, rows = 4) => {
        p.containerWidth = p.tileWidth * rows;
        p.containerHeight = p.tileHeight * cols;
      };

      p.draw = () => {
        p.fill('white');
        p.rect(0, 0, p.width, p.height);

        p.push(); // Start a new drawing state
        p.translate(p.align.x, p.align.y);

        // Initialize
        p.points = p.subdivide(0, 0, p.containerWidth, p.containerHeight, p.tileWidth, p.tileHeight, p.tilePadding);

        p.randomlySubdivideGridPoints();
        p.randomlySubdivideGridPoints();

        console.log('Points', p.points);

        // Draw grid
        p.points.forEach((item) => {
          p.fill('black');
          p.tileFloor(item.x, item.y, item.w, item.h, item.padding);
          p.fill('white');
          p.tilePoint(item.x, item.y, item.w, item.h);
        });

        p.pop(); // Restore original state
      };

      p.alignCenter = (innerWidth, innerHeight, outerWidth, outherHeight) => {
        p.align.x = (outerWidth - innerWidth) / 2;
        p.align.y = (outherHeight - innerHeight) / 2;
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

        p.points.forEach((item) => {
          if (p.random(1) > 0.5) {
            // p.fill('blue');
            // p.tileFloor(item.x, item.y, item.w, item.h, item.padding);
            newPoints.push(...p.subdivide(item.x, item.y, item.w, item.h, item.w / 2, item.h / 2, item.padding));
          } else {
            newPoints.push(item);
          }
        });

        p.points = newPoints;
      };

      // Can a TS util be used here? how?
      p.tilePoint = (x, y, w, h, d = 3) => {
        p.ellipse(x + w / 2 - d / 2, y + h / 2 - d / 2, d, d);
      };

      p.tileFloor = (x, y, w, h, padding) => {
        p.rect(x + padding, y + padding, w - padding * 2, h - padding * 2);
      };

      // p.letterO = (x, y) => {
      //   p.ellipse(
      //     x + p.tilePadding,
      //     y + p.tilePadding,
      //     p.tileWidth - p.tilePadding * 2,
      //     p.tileHeight - p.tilePadding * 2
      //   );
      // };

      // p.letterN = (x, y) => {
      //   p.triangle(
      //     x + p.tilePadding,
      //     y + p.tilePadding,
      //     x + p.tilePadding,
      //     y + p.tileHeight - p.tilePadding * 2,
      //     x + p.tileWidth - p.tilePadding * 2,
      //     y + p.tileHeight - p.tilePadding * 2
      //   );
      // };

      // p.letterOo = (x, y) => {
      //   p.push();
      //   p.ellipse(
      //     x + p.tilePadding,
      //     y + p.tilePadding,
      //     p.tileWidth - p.tilePadding * 2,
      //     p.tileHeight - p.tilePadding * 2
      //   );
      //   p.fill('white');
      //   p.ellipseMode(p.CENTER);
      //   p.ellipse(x + p.tileWidth / 2, y + p.tileHeight / 2, p.tileWidth * 0.33, p.tileHeight * 0.33);
      //   p.pop();
      // };
    });
  }

  render() {
    return (
      <figure className="sketch">
        <div ref={this.renderRef}></div>
      </figure>
    );
  }
}

export default Sketch;
