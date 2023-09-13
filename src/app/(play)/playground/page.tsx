// @ts-nocheck
"use client";

import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MaxLengthSelector } from "./_components/maxlength-selector";
import { TemperatureSelector } from "./_components/temperature-selector";
import Drawing from "./d3/drawing-dice";
import { download, saveSvg } from "./d3/utils";

const generateDataset = () => {
  return Array.from({ length: 76 }, (_, i) => [
    (Math.PI / 3) * i, // angle (in radians)
    5 * i, // radius
  ]);
};

export default function PlaygroundPage() {
  const ref = useRef<SVGSVGElement>(null);

  const [dataset, setDataset] = useState<any>(null);

  const generate = () => {
    const data = generateDataset();
    setDataset(data);
  };

  const exportSvg = (d: Node) => {
    if (d) {
      const drawing = saveSvg(d);
      return download(drawing, "demo.svg");
    }
  };

  return (
    <div className="grid h-full items-stretch gap-10 md:grid-cols-[1fr_320px]">
      <div className="hidden flex-col space-y-5 sm:flex md:order-2">
        <TemperatureSelector
          defaultValue={[8]}
          onValueChange={(value) => console.log(value)}
        />
        <MaxLengthSelector defaultValue={[6]} />

        <div>
          <Separator className="mt-4" />
        </div>

        <Button onClick={generate}>Generate</Button>
        <Button variant="secondary" onClick={() => exportSvg(ref.current)}>
          Download
        </Button>
      </div>

      <div className="flex h-full items-center justify-center bg-muted p-10 md:order-1">
        <figure ref={ref} className="flex h-[75vh] w-auto">
          <Drawing dataset={dataset} inputCols="4" inputRows="4" />
        </figure>
      </div>
    </div>
  );
}
