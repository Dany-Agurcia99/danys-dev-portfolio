"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

type Props = { name: string; icon: string }

export default function TechItem({ name, icon }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-3 aspect-square p-8 rounded-xl bg-accent transition-all duration-100 shadow-sm group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={icon}
        alt={name}
        className="w-16 h-16 object-contain transition-all duration-200 rounded-xl"
        style={{
          filter: isHovered && isDark ? "drop-shadow(0 0 15px rgba(255, 255, 255, 0.8))" : "none",
          transform: isHovered && !isDark ? "scale(1.1)" : "scale(1)",
        }}
      />
      <span className="font-medium transition-all duration-200">
        {name}
      </span>
    </motion.div>
  )
}
