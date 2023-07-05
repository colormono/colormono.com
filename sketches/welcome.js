import React, { Component } from "react"
import p5 from "p5"

class Sketch extends Component {
  constructor() {
    super()
    this.renderRef = React.createRef()
    this.state = {
      x: 100,
      y: 100,
    }
  }

  componentDidMount() {
    const p5 = require("p5")

    this.sketch = new p5((p) => {
      p.setup = () => {
        p.createCanvas(640, 480).parent(this.renderRef.current)
        p.background("#000000")
        p.strokeWeight(0)
      }

      p.draw = () => {
        p.background("#000000")

        // draw a circle in the middle of the canvas
        p.fill("gray")
        p.ellipse(p.width / 2, p.height / 2, 400, 400)

        // draw a rect in the middle of the canvas
        p.fill("white")
        p.rect(p.width / 2, p.height / 2, 200, 200)

        if (p.mouseIsPressed) {
          p.fill("red")
        } else {
          p.fill("blue")
        }
        p.ellipse(p.mouseX, p.mouseY, 100, 100)
      }
    })
  }

  render() {
    return <div ref={this.renderRef}></div>
  }
}

export default Sketch
