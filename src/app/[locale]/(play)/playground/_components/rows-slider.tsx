"use client";

import * as React from "react";
import { SliderProps } from "@radix-ui/react-slider";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useDrawStore } from "../store";

interface RowsSliderProps {
  defaultValue?: SliderProps["defaultValue"];
}

export function RowsSlider({ defaultValue }: RowsSliderProps) {
  const rows = useDrawStore((state) => state.rows);
  const setRows = useDrawStore((state) => state.updateRows);

  return (
    <div className="grid gap-2 pt-2">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <Label htmlFor="cols">Rows:</Label>
            </HoverCardTrigger>
            <HoverCardContent
              align="start"
              className="w-[260px] text-sm"
              side="left"
            >
              Controls randomness: lowering results in less random completions.
              As the temperature approaches zero, the model will become
              deterministic and repetitive.
            </HoverCardContent>
          </HoverCard>
          <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
            {rows}
          </span>
        </div>
        <Slider
          id="rows"
          min={1}
          max={12}
          step={1}
          defaultValue={[rows]}
          onValueChange={(value) => setRows(value[0])}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          aria-label="Columns"
        />
      </div>
    </div>
  );
}
