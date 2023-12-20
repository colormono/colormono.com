// @ts-nocheck
"use client";

import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Text } from "@/components/ui/text";

type Props = {
  title: string;
  message: any;
};

export default function SectionHero({ title, message }: Props) {
  return (
    <section className="relative flex aspect-video items-center overflow-hidden rounded-lg bg-muted shadow dark:border dark:border-muted dark:bg-background">
      <div className="relative z-30 mb-12 ml-24">
        <Text variant="h1">{title}</Text>
        <Text variant="lead">{message}</Text>
      </div>

      <div className="absolute inset-0 z-20 bg-gradient-radial from-transparent to-muted dark:to-transparent" />

      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>
    </section>
  );
}

function Stars(props) {
  const ref = useRef();
  const { theme } = useTheme();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 0.5 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group position={[0.66, 0.1, 0.5]}>
      <group rotation={[0, 0, -Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
          {...props}
        >
          <PointMaterial
            transparent
            color={theme === "light" ? "#000" : "#fff"}
            size={0.005}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </group>
  );
}
