"use client"

import { useState, useEffect } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const theme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-accent hover:bg-primary transition-all duration-200 text-primary-accent hover:text-white cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  )
}
