import React, { useRef, useEffect } from 'react';
// import p5 from 'p5';

const sketch = (p) => {
  let x = 100;
  let y = 100;

  p.setup = () => {
    p.createCanvas(200, 200);
  };

  p.draw = () => {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

export default function P5Sketch() {
  return <div>Div</div>;
  // const sketchRef = useRef();

  // useEffect(() => {
  //   const myP5 = new p5(sketch, sketchRef.current);
  // }, []);

  // return <div ref={sketchRef} />;
}
