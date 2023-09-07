"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight * 2) {
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
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    }
  }, [])

  return (
    <Button
      arial-label="Scroll to the top"
      variant="ghost"
      onClick={scrollToTop}
      className={cn(
        "fixed right-6 cursor-pointer transition-all",
        isVisible ? "bottom-8 opacity-100" : "bottom-0 opacity-0"
      )}
    >
      <Icons.chevronUp className="h-6 w-6" />
    </Button>
  )
}
