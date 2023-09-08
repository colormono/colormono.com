"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import { Button } from "./ui/button";

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
    <Button
      variant="ghost"
      className={cn(
        "fixed right-6 cursor-pointer transition-all",
        isVisible ? "bottom-8 opacity-100" : "bottom-0 opacity-0",
      )}
    >
      <Icons.chevronDown className="h-6 w-6" />
    </Button>
  );
};
