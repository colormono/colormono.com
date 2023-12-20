// @ts-nocheck
"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import Drawing from "./drawing";
import { download, saveSvg } from "./utils";

const generateDataset = () => {
  return Array.from({ length: 76 }, (_, i) => [
    (Math.PI / 3) * i, // angle (in radians)
    5 * i, // radius
  ]);
};

const generateRandomNumber = () => {
  return Math.random();
};

export default function Home() {
  const ref = useRef();
  const [dataset, setDataset] = useState<any>(null);

  const generate = () => {
    const data = generateDataset();
    setDataset(data);
  };

  const exportSvg = (d) => {
    const drawing = saveSvg(d);
    return download(drawing, "demo.svg");
  };

  return (
    <div className="container">
      <figure ref={ref}>
        <Drawing dataset={dataset} />
      </figure>

      <nav className="my-10 flex items-center gap-4">
        <Button onClick={generate}>Generate</Button>
        <Button onClick={() => exportSvg(ref.current)}>Download</Button>
      </nav>
    </div>
  );
}
