"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type FontSize = "small" | "normal" | "large" | "extra-large"

interface FontSizeContextType {
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  increaseFontSize: () => void
  decreaseFontSize: () => void
  resetFontSize: () => void
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined)

const fontSizeValues: Record<FontSize, string> = {
  small: "87.5%", // 14px se base for 16px
  normal: "100%", // 16px
  large: "112.5%", // 18px
  "extra-large": "125%", // 20px
}

const fontSizeOrder: FontSize[] = ["small", "normal", "large", "extra-large"]

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState<FontSize>("normal")

  useEffect(() => {
    const savedFontSize = localStorage.getItem("font-size") as FontSize
    if (savedFontSize && fontSizeOrder.includes(savedFontSize)) {
      setFontSize(savedFontSize)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.fontSize = fontSizeValues[fontSize]
    localStorage.setItem("font-size", fontSize)
  }, [fontSize])

  const increaseFontSize = () => {
    const currentIndex = fontSizeOrder.indexOf(fontSize)
    if (currentIndex < fontSizeOrder.length - 1) {
      setFontSize(fontSizeOrder[currentIndex + 1])
    }
  }

  const decreaseFontSize = () => {
    const currentIndex = fontSizeOrder.indexOf(fontSize)
    if (currentIndex > 0) {
      setFontSize(fontSizeOrder[currentIndex - 1])
    }
  }

  const resetFontSize = () => {
    setFontSize("normal")
  }

  return (
    <FontSizeContext.Provider
      value={{
        fontSize,
        setFontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  )
}

export function useFontSize() {
  const context = useContext(FontSizeContext)
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider")
  }
  return context
}
