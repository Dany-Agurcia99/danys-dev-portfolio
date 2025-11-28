"use client"

import { useState, useEffect } from "react"
import ThemeToggle from "./components/ThemeToggle"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { name: "About Me", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 500

      for (const section of sections) {
        const element = document.querySelector(section.href)
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop
          const offsetHeight = (element as HTMLElement).offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.href)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-bgColor/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <ul className="flex justify-center items-center gap-8 flex-1">
            {sections.map((section) => (
              <li key={section.href}>
                <a
                  href={section.href}
                  className={`transition-colors text-lg duration-200 font-medium ${
                    activeSection === section.href
                      ? "text-primary-accent"
                      : "text-gray-300 hover:text-primary"
                  }`}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
