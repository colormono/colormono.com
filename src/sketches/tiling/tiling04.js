import React, { Component } from "react";
import p5 from "p5";

// To-do:
// - [√] Initial sketch
// - [√] Add MONO shapes
// - [] Mirror
// - [] Parametrize
// - [] Utils refactor
// - [] Random Utils (pickColor([]))
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
    const p5 = require("p5");

    this.sketch = new p5((p) => {
      p.points = [];
      p.tileWidth = 100;
      p.tileHeight = 100;
      p.tilePadding = 2;
      p.containerWidth, p.containerHeight;
      p.align = { x: 0, y: 0 };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight * 0.6).parent(
          this.renderRef.current,
        );
        p.setContainerSize(p.windowWidth * 0.5, p.windowHeight * 0.5 * 0.6);
        p.alignCenter(
          p.containerWidth,
          p.containerHeight,
          p.windowWidth,
          p.windowHeight * 0.6,
        );
        p.background("gray");
        p.strokeWeight(0);
        p.ellipseMode(p.CORNER);
        p.frameRate(0.5); // pacefully
        // p.noLoop(); // stop looping
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight * 0.6);
        p.setContainerSize(p.windowWidth * 0.5, p.windowHeight * 0.5 * 0.6);
        p.alignCenter(
          p.containerWidth,
          p.containerHeight,
          p.windowWidth,
          p.windowHeight * 0.6,
        );
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
        p.fill("white");
        p.rect(0, 0, p.width, p.height);

        p.push(); // Start a new drawing state
        p.translate(p.align.x, p.align.y);

        // Initialize
        p.points = p.subdivide(
          0,
          0,
          p.containerWidth,
          p.containerHeight,
          p.tileWidth,
          p.tileHeight,
          p.tilePadding,
        );

        p.randomlySubdivideGridPoints();
        p.randomlySubdivideGridPoints();
        p.randomlySubdivideGridPoints();

        // Draw grid
        p.points.forEach((item) => {
          // debug
          // p.tileFloor(item.x, item.y, item.w, item.h, item.padding);
          // p.tilePoint(item.x, item.y, item.w, item.h);

          // Random shape
          // flipping a coin (pick a color)
          if (p.random(0, 10) > 5) {
            p.fill("black");
          } else {
            p.fill("blue");
          }

          // throwing dice (pick a shape)
          const dice = p.int(p.floor(p.random(1, 6)));
          switch (dice) {
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

        p.pop(); // Restore original state
      };

      p.alignCenter = (innerWidth, innerHeight, outerWidth, outherHeight) => {
        p.align.x = (outerWidth - innerWidth) / 2;
        p.align.y = (outherHeight - innerHeight) / 2;
      };

      p.subdivide = (
        x,
        y,
        containerWidth,
        containerHeight,
        tileWidth,
        tileHeight,
        padding,
      ) => {
        const newPoints = [];

        for (var j = 0; j < containerWidth; j += tileWidth) {
          for (var k = 0; k < containerHeight; k += tileHeight) {
            newPoints.push({
              x: x + j,
              y: y + k,
              w: tileWidth,
              h: tileHeight,
              padding: padding,
            });
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
            newPoints.push(
              ...p.subdivide(
                item.x,
                item.y,
                item.w,
                item.h,
                item.w / 2,
                item.h / 2,
                item.padding,
              ),
            );
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

      p.letterM = (x, y, w, h, padding) => {
        p.rect(x + padding, y + padding, w - padding * 2, h - padding * 2);
      };

      p.letterO = (x, y, w, h, padding) => {
        p.ellipse(x + padding, y + padding, w - padding * 2, h - padding * 2);
      };

      p.letterN = (x, y, w, h, padding) => {
        p.triangle(
          x + padding,
          y + padding,
          x + padding,
          y + h - padding * 2,
          x + w - padding * 2,
          y + h - padding * 2,
        );
      };

      p.letterOo = (x, y, w, h, padding) => {
        p.push();
        p.ellipse(x + padding, y + padding, w - padding * 2, h - padding * 2);
        p.fill("white");
        p.ellipseMode(p.CENTER);
        p.ellipse(x + w / 2, y + h / 2, w * 0.33, h * 0.33);
        p.pop();
      };
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
