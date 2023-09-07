// @ts-nocheck
"use client";

import { useRef, useState } from "react";
// import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber";

// import { Canvas } from "@react-three/fiber"

import Floor from "./Floor";

export default function SectionHero({ className }) {
  return (
    <div className={className}>
      <section className="aspect-video">
        <Canvas
          shadows
          orthographic
          gl={{ antialias: false }}
          camera={{
            position: [0, 0, 100],
            zoom: 70,
          }}
        >
          {/* <Floor />  */}
          <ambientLight intensity={0.033} />
          <directionalLight color="blue" position={[0, 0, 5]} />

          <MyRotatingBox />

          {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
          {/* <pointLight position={[-10, -10, -10]} /> */}
          {/* <Box position={[-1.2, 0, 0]} /> */}
          {/* <Box position={[1.2, 0, 0]} /> */}
          {/* <OrbitControls /> */}
        </Canvas>
      </section>
    </div>
  );
}

function MyRotatingBox() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh ref={myMesh} position={[5, 0, 0]}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
