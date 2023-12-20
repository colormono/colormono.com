"use client";

import { useEffect, useRef, useState } from "react";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Drawing from "./d3/drawing-dice";
import { download, saveSvg } from "./d3/utils";
import { useDrawStore } from "./store";
import { PageSizeSelector } from "./_components/pagesize-selector";
import { ColsSlider } from "./_components/columns-slider";
import { RowsSlider } from "./_components/rows-slider";

const generateDataset = () => {
  return Array.from({ length: 76 }, (_, i) => [
    (Math.PI / 3) * i, // angle (in radians)
    5 * i, // radius
  ]);
};

export default function Page() {
  const ref = useRef<SVGSVGElement>(null);

  // Store
  const [dataset, setDataset] = useState<any>(null);
  const width = useDrawStore((state) => state.width);
  const height = useDrawStore((state) => state.height);
  const cols = useDrawStore((state) => state.cols);
  const rows = useDrawStore((state) => state.rows);

  const generate = () => {
    const data = generateDataset();
    setDataset(data);
  };

  const exportSvg = (d: Node) => {
    if (d) {
      const drawing = saveSvg(d);
      // @ts-ignore
      return download(drawing, "demo.svg");
    }
  };

  useEffect(() => {
    generate();
  }, [cols, rows]);

  return (
    <div className="grid h-full flex-1 items-stretch gap-10 md:grid-cols-[1fr_320px]">
      <div className="hidden flex-col space-y-4 py-8 sm:flex md:order-2">
        <Text className="font-semibold">Like throwing a dice</Text>
        <PageSizeSelector />
        <ColsSlider />
        <RowsSlider />

        <div>
          <Separator className="my-4" />
        </div>

        <Button onClick={generate}>Generate</Button>
        {/* @ts-ignore */}
        <Button variant="secondary" onClick={() => exportSvg(ref.current)}>
          Download
        </Button>

        <div>
          <Separator className="my-4" />
        </div>

        <ul className="text-xs">
          <li>Columns: {cols}</li>
          <li>Rows: {rows}</li>
        </ul>
      </div>

      <div className="flex h-full items-center justify-center rounded-lg bg-muted md:order-1">
        <div className="p-10">
          {/* @ts-ignore */}
          <figure ref={ref} className="flex h-[75vh] w-auto">
            <Drawing
              width={width}
              height={height}
              cols={cols}
              rows={rows}
              dataset={dataset}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}
