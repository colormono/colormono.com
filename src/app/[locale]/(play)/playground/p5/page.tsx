"use client";

import dynamic from "next/dynamic";

// Open your latest sketch
const DynamicSketch: any = dynamic(() => import("@/sketches/tiling"), {
  ssr: false,
});

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <DynamicSketch />
    </section>
  );
}
