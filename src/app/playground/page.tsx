// @ts-nocheck
"use client"

import { useRef, useState } from "react"
// import { Metadata } from "next"

import { ClockIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { CodeViewer } from "./components/code-viewer"
import { MaxLengthSelector } from "./components/maxlength-selector"
import { ModelSelector } from "./components/model-selector"
import { PresetActions } from "./components/preset-actions"
import { PresetSave } from "./components/preset-save"
import { PresetSelector } from "./components/preset-selector"
import { PresetShare } from "./components/preset-share"
import { TemperatureSelector } from "./components/temperature-selector"
import { TopPSelector } from "./components/top-p-selector"
import Drawing from "./d3/drawing-dice"
import { download, saveSvg } from "./d3/utils"
import { models, types } from "./data/models"
import { presets } from "./data/presets"

// export const metadata: Metadata = {
//   title: "Playground",
//   description: "The OpenAI Playground built using the components.",
// }

const generateDataset = () => {
  return Array.from({ length: 76 }, (_, i) => [
    (Math.PI / 3) * i, // angle (in radians)
    5 * i, // radius
  ])
}

export default function PlaygroundPage() {
  const ref = useRef<SVGSVGElement>(null)

  const [dataset, setDataset] = useState<any>(null)

  const generate = () => {
    const data = generateDataset()
    setDataset(data)
  }

  const exportSvg = (d: Node) => {
    if (d) {
      const drawing = saveSvg(d)
      return download(drawing, "demo.svg")
    }
  }

  return (
    <>
      <div className="md:hidden">Playground</div>
      <div className="hidden h-full flex-col md:flex">
        {/* <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <PresetSelector presets={presets} />
            <PresetSave />
            <div className="hidden space-x-2 md:flex">
              <CodeViewer />
              <PresetShare />
            </div>
            <PresetActions />
          </div>
        </div>
        <Separator /> */}

        <div className="container h-full py-6">
          <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div className="hidden flex-col space-y-4 sm:flex md:order-2">
              {/* <ModelSelector types={types} models={models} /> */}
              {/* <TopPSelector defaultValue={[0.9]} /> */}
              <TemperatureSelector defaultValue={[8]} />
              <MaxLengthSelector defaultValue={[6]} />

              <div className="pt-5">
                <Separator />
              </div>

              <Button variant="secondary" onClick={generate}>
                Generate
              </Button>
              <Button onClick={() => exportSvg(ref.current)}>Download</Button>
            </div>

            <div className="md:order-1">
              <div className="flex h-full flex-col space-y-4">
                <figure ref={ref}>
                  <Drawing dataset={dataset} />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
