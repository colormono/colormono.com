// @ts-nocheck
import React from "react";
import { extend } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "three-stdlib";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

export default Floor;
