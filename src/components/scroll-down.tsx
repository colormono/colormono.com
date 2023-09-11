"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY < window.innerHeight * 0.75) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={cn(
        "fixed right-10 z-50 flex h-12 w-8 cursor-pointer justify-center rounded-full border-2 border-foreground transition-all",
        isVisible ? "bottom-10 opacity-100" : "-bottom-20 opacity-0",
      )}
    >
      <span className="mt-3 block h-3 w-3 animate-bounce rounded-full bg-foreground" />
    </button>
  );
};
