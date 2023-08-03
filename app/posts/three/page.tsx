"use client"

import { useRef, useState } from "react"
// import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"

// import { Canvas } from "@react-three/fiber"

import Floor from "./Floor"

export default function Page() {
  return (
    <section className="w-[100vw] h-[calc(100vh*0.7)]">
      <Canvas
        shadows
        className="bg-black"
        camera={{
          position: [0, 0, 10],
        }}
      >
        {/* <Floor />  */}
        <ambientLight intensity={0.033} />
        <directionalLight color="blue" position={[0, 0, 5]} />

        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial />
        </mesh>

        <mesh position={[4, 0, 0]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial />
        </mesh>

        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        {/* <pointLight position={[-10, -10, -10]} /> */}
        {/* <Box position={[-1.2, 0, 0]} /> */}
        {/* <Box position={[1.2, 0, 0]} /> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </section>
  )
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
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
  )
}
