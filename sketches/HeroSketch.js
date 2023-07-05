import React, { useEffect, useRef } from "react"

/**
 * Pick random item from an array
 * @param arr array of any type
 * @returns item at random index
 */
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const sketch = (p) => {
  const parentElement = document.getElementById("mySketch")
  const parent = parentElement.getBoundingClientRect()
  let points = []
  const bg = "#F1F3F6"
  const tileWidth = 80
  const tileHeight = 80
  const tilePadding = 2
  const align = { x: 0, y: 0 }
  let containerWidth, containerHeight
  let timer = 0

  p.setup = () => {
    // create canvas
    let density = p.displayDensity()
    p.pixelDensity(density)
    p.createCanvas(parent.width, parent.width * 0.4)
    p.setContainerSize(parent.width * 0.5, parent.width * 0.2)
    p.frameRate(30)
    // p.setContainerSize(p.windowWidth * 0.5, p.windowHeight * 0.5 * 0.6);
    // p.alignCenter(containerWidth, containerHeight, p.windowWidth, p.windowHeight * 0.6);
    p.strokeWeight(0)
    p.ellipseMode(p.CORNER)
  }

  /*
  p.windowResized = () => {
    const parent = parentElement.getBoundingClientRect();
    p.resizeCanvas(parent.width, parent.width * 0.4);
    p.setContainerSize(parent.width * 0.5, parent.width * 0.2);
    // p.alignCenter(containerWidth, containerHeight, p.windowWidth, p.windowHeight * 0.6);
  };
  */

  p.draw = () => {
    // Since SVG is XML-based, every call of the draw function will insert elements into it, and these elements keep existing even if they are not visible. So, long-time running will result in too many child elements. We recommend calling clear() in your draw function, which will trigger internal context.__clearCanvas() to remove elements.0
    if (timer === 0) {
      p.clear()

      // Background
      p.fill(bg)
      p.rect(0, 0, p.width, p.height)

      // Seed grid
      p.generateGrid()

      // Draw grid

      // top-left
      p.push()
      p.translate(p.width / 2 - containerWidth, p.height / 2 - containerHeight)
      p.drawGrid()
      p.pop()

      // top-right
      p.push()
      p.translate(p.width / 2 + containerWidth, p.height / 2 - containerHeight)
      p.scale(-1, 1)
      p.drawGrid()
      p.pop()

      // bottom-left
      p.push()
      p.translate(p.width / 2 - containerWidth, p.height / 2 + containerHeight)
      p.scale(1, -1)
      p.drawGrid()
      p.pop()

      // bottom-right
      p.push()
      p.translate(p.width / 2 + containerWidth, p.height / 2 + containerHeight)
      p.scale(-1, -1)
      p.drawGrid()
      p.pop()
    }

    // increase timer
    if (timer === 60) {
      timer = 0
    } else {
      timer += 1
    }
  }

  p.generateGrid = function () {
    // Initialize
    points = p.subdivide(
      0,
      0,
      containerWidth,
      containerHeight,
      tileWidth,
      tileHeight,
      tilePadding
    )
    p.randomlySubdivideGridPoints()
    p.randomlySubdivideGridPoints()
    // p.randomlySubdivideGridPoints()
    // p.randomlySubdivideGridPoints();

    // Composition
    points.forEach((item, index) => {
      // flipping a coing (pick a color)
      // const c = p.random(0, 10) > 5 ? 'black' : 'blue';

      // pick random item from an array
      const colors = [
        "#000000",
        "#002BFF",
        "#00188F",
        "#64CEB1",
        "#329F82",
        "#DC7FA3",
        "#C93B79",
      ]

      const c = randomPick(colors)

      // throwing dice (pick a shape)
      const s = p.int(p.floor(p.random(1, 6)))

      // save
      item.pattern = {
        color: c,
        shape: s,
      }

      // console.log(index, item);
    })
  }

  p.drawGrid = function () {
    points.forEach((item) => {
      // debug
      // p.tileFloor(item.x, item.y, item.w, item.h, item.padding);
      // p.tilePoint(item.x, item.y, item.w, item.h);

      // get color
      p.fill(item.pattern?.color)

      // get shape
      switch (item.pattern?.shape) {
        case 1:
          p.letterM(item.x, item.y, item.w, item.h, item.padding)
          break
        case 2:
          p.letterO(item.x, item.y, item.w, item.h, item.padding)
          break
        case 3:
          p.letterN(item.x, item.y, item.w, item.h, item.padding)
          break
        case 4:
          p.letterOo(item.x, item.y, item.w, item.h, item.padding)
          break
        default:
        // silence, silencio
      }
    })
  }

  p.setContainerSize = (w, h) => {
    containerWidth = (p.floor(w / tileWidth) - 1) * tileWidth
    containerHeight = (p.floor(h / tileHeight) - 1) * tileHeight
  }

  p.setGridSize = (w, h, cols = 4, rows = 4) => {
    containerWidth = tileWidth * rows
    containerHeight = tileHeight * cols
  }

  p.alignCenter = (innerWidth, innerHeight, outerWidth, outherHeight) => {
    align.x = (outerWidth - innerWidth) / 2
    align.y = (outherHeight - innerHeight) / 2
  }

  p.subdivide = (
    x,
    y,
    containerWidth,
    containerHeight,
    tileWidth,
    tileHeight,
    padding
  ) => {
    const newPoints = []

    for (var j = 0; j < containerWidth; j += tileWidth) {
      for (var k = 0; k < containerHeight; k += tileHeight) {
        newPoints.push({
          x: x + j,
          y: y + k,
          w: tileWidth,
          h: tileHeight,
          padding: padding,
        })
      }
    }

    return newPoints
  }

  p.randomlySubdivideGridPoints = () => {
    // ArrayList<GridPoint> newPoints = new ArrayList<GridPoint>();
    // const newPoints : GridPoint = [];
    const newPoints = []

    points.forEach((item) => {
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
            item.padding
          )
        )
      } else {
        newPoints.push(item)
      }
    })

    points = newPoints
  }

  // Can a TS util be used here? how?
  p.tilePoint = (x, y, w, h, d = 3) => {
    p.ellipse(x + w / 2 - d / 2, y + h / 2 - d / 2, d, d)
  }

  p.tileFloor = (x, y, w, h, padding) => {
    p.rect(x + padding, y + padding, w - padding * 2, h - padding * 2)
  }

  p.letterM = (x, y, w, h, padding) => {
    p.rect(x + padding, y + padding, w - padding * 2, h - padding * 2)
  }

  p.letterO = (x, y, w, h, padding) => {
    p.ellipse(x + padding, y + padding, w - padding * 2, h - padding * 2)
  }

  p.letterN = (x, y, w, h, padding) => {
    p.triangle(
      x + padding,
      y + padding,
      x + padding,
      y + h - padding,
      x + w - padding,
      y + h - padding
    )
  }

  p.letterOo = (x, y, w, h, padding) => {
    p.push()
    p.ellipse(x + padding, y + padding, w - padding * 2, h - padding * 2)
    p.fill(bg)
    p.ellipseMode(p.CENTER)
    p.ellipse(x + w / 2, y + h / 2, w * 0.33, h * 0.33)
    p.pop()
  }
}

function Sketch({ theme }) {
  const sketchRef = useRef()

  useEffect(() => {
    if (sketchRef.current.childElementCount === 0) {
      const p5 = require("p5")
      new p5(sketch, sketchRef.current)
    }
  }, [])

  return (
    <section className="relative">
      <figure id="mySketch" className="sketch" ref={sketchRef} />
      <div className="absolute bottom-0 right-0 bg-muted px-4 py-2 text-sm text-muted-foreground">
        Generative Drawing. Colormono, 2023.
      </div>
    </section>
  )
}

export default Sketch
