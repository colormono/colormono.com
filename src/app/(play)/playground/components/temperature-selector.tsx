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

interface TemperatureSelectorProps {
  defaultValue: SliderProps["defaultValue"];
}

export function TemperatureSelector({
  defaultValue,
}: TemperatureSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="grid gap-2 pt-2">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <Label htmlFor="cols">Columns</Label>
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
            {value}
          </span>
        </div>
        <Slider
          id="cols"
          min={1}
          max={12}
          step={1}
          defaultValue={value}
          onValueChange={setValue}
          className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          aria-label="Columns"
        />
      </div>
    </div>
  );
}
