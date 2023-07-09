"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <Button
      onClick={scrollToTop}
      variant="ghost"
      className={cn(
        "fixed right-6 cursor-pointer transition-all",
        isVisible ? "bottom-8 opacity-100" : "bottom-0 opacity-0"
      )}
    >
      <Icons.arrowUp className="h-8 w-8" />
    </Button>
  )
}