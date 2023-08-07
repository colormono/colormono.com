"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"

const HeroSketch = dynamic(() => import("@/sketches/HeroSketch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function SectionHero() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <section id="hero">
      <HeroSketch theme={resolvedTheme} />
    </section>
  )
}
