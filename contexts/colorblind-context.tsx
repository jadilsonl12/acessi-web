"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type ColorblindMode = "normal" | "deuteranopia" | "protanopia" | "tritanopia"

interface ColorblindContextType {
  mode: ColorblindMode
  setMode: (mode: ColorblindMode) => void
  isColorblindMode: boolean
  toggleMode: () => void
}

const ColorblindContext = createContext<ColorblindContextType | undefined>(undefined)

const colorblindFilters = {
  normal: "none",
  // Deuteranopia (dificuldade em ver verde)
  deuteranopia: `
    brightness(1.05) 
    contrast(1.1) 
    saturate(0.9)
    hue-rotate(10deg)
  `,
  // Protanopia (dificuldade em ver vermelho)
  protanopia: `
    brightness(1.05) 
    contrast(1.1) 
    saturate(0.85)
    hue-rotate(-10deg)
  `,
  // Tritanopia (dificuldade em ver azul)
  tritanopia: `
    brightness(1.1) 
    contrast(1.15) 
    saturate(0.8)
  `,
}

export function ColorblindProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorblindMode>("normal")

  useEffect(() => {
    const savedMode = localStorage.getItem("colorblind-mode") as ColorblindMode
    if (savedMode && (savedMode === "normal" || savedMode === "deuteranopia" || savedMode === "protanopia" || savedMode === "tritanopia")) {
      setMode(savedMode)
    }
  }, [])

  useEffect(() => {
    const filter = colorblindFilters[mode]
    document.documentElement.style.filter = filter
    localStorage.setItem("colorblind-mode", mode)
  }, [mode])

  const toggleMode = () => {
    setMode(prevMode => prevMode === "normal" ? "deuteranopia" : "normal")
  }

  const isColorblindMode = mode !== "normal"

  return (
    <ColorblindContext.Provider value={{ mode, setMode, isColorblindMode, toggleMode }}>
      {children}
    </ColorblindContext.Provider>
  )
}

export function useColorblind() {
  const context = useContext(ColorblindContext)
  if (context === undefined) {
    throw new Error("useColorblind must be used within a ColorblindProvider")
  }
  return context
}
