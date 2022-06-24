import React, { Component } from 'react';
import p5 from 'p5';

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
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight * 0.66).parent(this.renderRef.current);
        p.background('#000000');
        p.strokeWeight(0);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        // draw a circle in the middle of the canvas
        p.fill('gray');
        p.ellipse(p.width / 2, p.height / 2, 400, 400);

        // draw a rect in the middle of the canvas
        p.fill('white');
        p.rect(p.width / 2, p.height / 2, 200, 200);

        if (p.mouseIsPressed) {
          p.stroke(225);
        } else {
          p.stroke(0, 0, 0);
        }
        p.line(p.mouseX, p.mouseY, p.mouseX, p.mouseY);
        p.line(p.mouseX, p.mouseY, p.mouseX, p.mouseY);
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
