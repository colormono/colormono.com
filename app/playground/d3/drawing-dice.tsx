import { useEffect, useRef } from "react"
import * as d3 from "d3"

import { polygon } from "./utils"

const Drawing = ({ dataset }) => {
  const data = dataset
  const ref = useRef()

  useEffect(() => {
    // select DOM element to place the draw
    const svg = d3.select(ref.current)
    // const width = ref.current.getBoundingClientRect().width
    // const height = ref.current.getBoundingClientRect().height
    const width = 640
    const height = 480

    // clean everything
    svg.selectAll("*").remove()

    // background
    svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#666")

    const groupBgs = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "rgba(156, 163, 175, 1)")
      .attr("stroke-width", 0.2)

    const groupShapes = svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "rgba(156, 163, 175, 1)")
      .attr("stroke-width", 1)

    const groupShapesAlt = svg
      .append("g")
      .attr("fill", "black")
      .attr("stroke", "rgba(156, 163, 175, 1)")
      .attr("stroke-width", 1)

    const cols = 10
    const rows = 5

    const cellSize = {
      width: 100,
      height: 100,
    }
    cellSize.width = width / cols
    cellSize.height = height / rows

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        groupBgs
          .append("rect")
          .attr("x", cellSize.width * x)
          .attr("y", cellSize.height * y)
          .attr("width", cellSize.width)
          .attr("height", cellSize.height)

        let path = polygon((3 + (Math.floor(Math.random() * 100) % 8)) | 0)
          .scale(cellSize.width / 3)
          .rotate(Math.random() * 360)()

        if ((x % 2 === 0 && y % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          groupShapesAlt
            .append("path")
            .attr("d", path)
            .attr(
              "transform",
              `translate(${cellSize.width * x + cellSize.width / 2},${
                cellSize.height * y + cellSize.height / 2
              })`
            )
        } else {
          groupShapes
            .append("path")
            .attr("d", path)
            .attr(
              "transform",
              `translate(${cellSize.width * x + cellSize.width / 2},${
                cellSize.height * y + cellSize.height / 2
              })`
            )
        }
      }
    }
  }, [data])

  return <svg viewBox="0 0 640 480" ref={ref} />
}

export default Drawing
