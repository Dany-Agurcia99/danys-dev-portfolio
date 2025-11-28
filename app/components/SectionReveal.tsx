"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

type Props = {
  children: ReactNode
  className?: string
  threshold?: number // cuánto del elemento necesita estar visible (0 - 1)
  once?: boolean // si animar solo una vez
  delay?: number // delay en segundos
}

export default function SectionReveal({
  children,
  className = "",
  threshold = 0.3,
  once = true,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once, margin: "0px", amount: threshold })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
