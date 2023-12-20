import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PageSizeSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a page" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Sizes</SelectLabel> */}
          <SelectItem value="a4">A4</SelectItem>
          <SelectItem value="a3">A3</SelectItem>
          <SelectItem value="a2">A2</SelectItem>
          <SelectItem value="10x10">10x10</SelectItem>
          <SelectItem value="20x20">20x20</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
