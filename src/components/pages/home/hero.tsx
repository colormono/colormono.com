// @ts-nocheck
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Text } from "@/components/ui/text";

export default function SectionHero() {
  return (
    <section className="relative flex aspect-video items-center overflow-hidden rounded-lg bg-muted shadow dark:border dark:border-muted dark:bg-background">
      <div className="relative z-30 mb-12 ml-24">
        <Text
          variant="h1"
          className="relative inline-block"
          // className="relative inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
        >
          Hello, World
        </Text>

        <Text variant="lead">
          I&apos;m{" "}
          <Link
            href="/about"
            className="font-semibold hover:underline hover:underline-offset-4"
          >
            Mariano Rivas
          </Link>
          , a new-media artist and software developer.{" "}
          <br className="hidden sm:inline" />I work at{" "}
          <Link
            href="https://truenorth.co"
            className="font-semibold hover:underline hover:underline-offset-4"
          >
            TrueNorth
          </Link>{" "}
          as Lead Front-end Engineer. Thanks to having creative coding skills, I
          have the privilege of contributing to various aspects of the creative
          process, from concept to implementation.
        </Text>
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
