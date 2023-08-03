// @ts-nocheck
import * as d3 from "d3"

export function download(url: string, filename: string) {
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", filename)
      document.body.appendChild(link)
      link.click()
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch request
      console.error("Error fetching data:", error)
    })
}

export function saveSvg(data: Node) {
  if (data) {
    const serializer = new XMLSerializer()
    let source = serializer.serializeToString(data)

    //add name spaces
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
      source = source.replace(
        /^<svg/,
        '<svg xmlns="http://www.w3.org/2000/svg"'
      )
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
      source = source.replace(
        /^<svg/,
        '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
      )
    }

    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source

    //convert svg source to URI data scheme.
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source)

    return url
  }
}

export function polygon(sides) {
  var length = sides,
    s = 1,
    phase = 0
  const radial = d3
    .lineRadial()
    .curve(d3.curveLinearClosed)
    .angle((_, i) => (i / length) * 2 * Math.PI + phase)
    .radius(() => s)
  const poly = function () {
    return radial(Array.from({ length }))
  }
  poly.context = function (_) {
    return arguments.length ? (radial.context(_), poly) : radial.context()
  }
  poly.n = function (_) {
    return arguments.length ? ((length = +_), poly) : length
  }
  poly.rotate = function (_) {
    return arguments.length ? ((phase = +_), poly) : phase
  }
  poly.scale = function (_) {
    return arguments.length ? ((s = +_), poly) : s
  }
  poly.curve = function (_) {
    return arguments.length ? (radial.curve(_), poly) : radial.curve()
  }
  poly.radius = radial.radius
  poly.angle = radial.angle
  return poly
}
