import React, { Component } from "react";
import p5 from "p5";

// To-do:
// - [√] Initial sketch
// - [√] Avoid drawing outside the canvas. Fit grid, align centered
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
      p.cellSize = 90;
      p.cellPadding = 10;
      p.containerWidth, p.containerHeight;
      p.align = { x: 0, y: 0 };
      p.bg = "#000000";

      p.setup = () => {
        p.createCanvas(600, 600).parent(this.renderRef.current);
        p.setContainerSize(600, 600);
        p.alignCenter(p.containerWidth, p.containerHeight, 600, 600);
        p.background(p.bg);
        p.strokeWeight(0);
        p.ellipseMode(p.CORNER);
        p.frameRate(0.5); // pacefully
        // p.noLoop(); // stop looping
      };

      p.windowResized = () => {
        p.resizeCanvas(600, 600);
        p.setContainerSize(600, 600);
        p.alignCenter(p.containerWidth, p.containerHeight, 600, 600);
      };

      p.setContainerSize = (w, h) => {
        p.containerWidth = p.floor(w / p.cellSize) * p.cellSize;
        p.containerHeight = p.floor(h / p.cellSize) * p.cellSize;
      };

      p.setGridSize = (w, h, cols = 4, rows = 4) => {
        p.containerWidth = p.cellSize * rows;
        p.containerHeight = p.cellSize * cols;
      };

      p.draw = () => {
        p.background(p.bg);

        p.push(); // Start a new drawing state
        p.translate(p.align.x, p.align.y);

        // Start a grid
        for (var x = 0; x < p.containerWidth; x += p.cellSize) {
          for (var y = 0; y < p.containerHeight; y += p.cellSize) {
            // flipping a coin (pick a color)
            if (p.random(1, 10) > 5) {
              p.fill("white");
            } else {
              p.fill("blue");
            }

            // throwing dice (pick a shape)
            const dice = p.int(p.floor(p.random(1, 7)));
            switch (dice) {
              case 1:
                p.letterM(x, y);
                break;
              case 2:
                p.letterO(x, y);
                break;
              case 3:
                p.letterN(x, y);
                break;
              case 4:
                p.letterOo(x, y);
                break;
              default:
              // silence, silencio
            }
          }
        }

        p.pop(); // Restore original state
      };

      p.alignCenter = (innerWidth, innerHeight, outerWidth, outherHeight) => {
        p.align.x = (outerWidth - innerWidth) / 2;
        p.align.y = (outherHeight - innerHeight) / 2;
      };

      p.letterM = (x, y) => {
        p.rect(
          x + p.cellPadding,
          y + p.cellPadding,
          p.cellSize - p.cellPadding * 2,
          p.cellSize - p.cellPadding * 2,
        );
      };

      p.letterO = (x, y) => {
        p.ellipse(
          x + p.cellPadding,
          y + p.cellPadding,
          p.cellSize - p.cellPadding * 2,
          p.cellSize - p.cellPadding * 2,
        );
      };

      p.letterN = (x, y) => {
        p.triangle(
          x + p.cellPadding,
          y + p.cellPadding,
          x + p.cellPadding,
          y + p.cellSize - p.cellPadding * 2,
          x + p.cellSize - p.cellPadding * 2,
          y + p.cellSize - p.cellPadding * 2,
        );
      };

      p.letterOo = (x, y) => {
        p.push();
        p.ellipse(
          x + p.cellPadding,
          y + p.cellPadding,
          p.cellSize - p.cellPadding * 2,
          p.cellSize - p.cellPadding * 2,
        );
        p.fill(p.bg);
        p.ellipseMode(p.CENTER);
        p.ellipse(
          x + p.cellSize / 2,
          y + p.cellSize / 2,
          p.cellSize * 0.33,
          p.cellSize * 0.33,
        );
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
