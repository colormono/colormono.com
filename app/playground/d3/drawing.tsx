// @ts-nocheck
import { useEffect, useRef } from "react"
import * as d3 from "d3"

import { polygon } from "./utils"

const Drawing = ({ dataset }) => {
  const data = dataset
  const ref = useRef()

  useEffect(() => {
    // select DOM element to place the draw
    const svg = d3.select(ref.current)

    // clean everything
    svg.selectAll("*").remove()

    // background
    svg
      .append("rect")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", "#EEE")

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

    const cellSize = 68

    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        groupBgs
          .append("rect")
          .attr("x", cellSize * x)
          .attr("y", cellSize * y)
          .attr("width", cellSize)
          .attr("height", cellSize)

        let path = polygon((3 + (Math.floor(Math.random() * 100) % 8)) | 0)
          .scale(cellSize / 3)
          .rotate(Math.random() * 360)()

        if ((x % 2 === 0 && y % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
          groupShapesAlt
            .append("path")
            .attr("d", path)
            .attr(
              "transform",
              `translate(${cellSize * x + cellSize / 2},${
                cellSize * y + cellSize / 2
              })`
            )
        } else {
          groupShapes
            .append("path")
            .attr("d", path)
            .attr(
              "transform",
              `translate(${cellSize * x + cellSize / 2},${
                cellSize * y + cellSize / 2
              })`
            )
        }
      }
    }
  }, [data])

  // useInterval(() => {
  //   const newDataset = generateDataset()
  //   setDataset(newDataset)
  // }, 5000)

  return <svg viewBox="0 0 640 480" ref={ref} />
}

export default Drawing
