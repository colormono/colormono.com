import React, { Component } from 'react';
import p5 from 'p5';

// To-do:
// - [] Round canvas height to a module of the cell size

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
      p.cellSize = 56;
      p.cellPadding = 4;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight * 0.6).parent(this.renderRef.current);
        p.background('gray');
        p.strokeWeight(0);
        p.ellipseMode(p.CORNER);
        p.frameRate(0.5); // pacefully
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight * 0.6);
      };

      p.draw = () => {
        p.fill('white');
        p.rect(0, 0, p.width, p.height);

        // use a grid
        for (var x = 0; x < p.width; x += p.cellSize) {
          for (var y = 0; y < p.height; y += p.cellSize) {
            // flipping a coin
            if (p.random(0, 10) > 5) {
              p.fill('black');
            } else {
              p.fill('blue');
            }

            // throwing dice
            const dice = p.int(p.floor(p.random(1, 6)));
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
      };

      p.letterM = (x, y) => {
        p.rect(x + p.cellPadding, y + p.cellPadding, p.cellSize - p.cellPadding * 2, p.cellSize - p.cellPadding * 2);
      };

      p.letterO = (x, y) => {
        p.ellipse(x + p.cellPadding, y + p.cellPadding, p.cellSize - p.cellPadding * 2, p.cellSize - p.cellPadding * 2);
      };

      p.letterN = (x, y) => {
        p.triangle(
          x + p.cellPadding,
          y + p.cellPadding,
          x + p.cellPadding,
          y + p.cellSize - p.cellPadding * 2,
          x + p.cellSize - p.cellPadding * 2,
          y + p.cellSize - p.cellPadding * 2
        );
      };

      p.letterOo = (x, y) => {
        p.push();
        p.ellipse(x + p.cellPadding, y + p.cellPadding, p.cellSize - p.cellPadding * 2, p.cellSize - p.cellPadding * 2);
        p.fill('white');
        p.ellipseMode(p.CENTER);
        p.ellipse(x + p.cellSize / 2, y + p.cellSize / 2, p.cellSize * 0.33, p.cellSize * 0.33);
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
