"use client"

import { siteConfig } from "@/config"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { IoPerson } from "react-icons/io5"
import SectionReveal from "../components/SectionReveal"
import { useState } from "react"

const socialIcons: { [key: string]: any } = {
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Github: FaGithub,
  Gmail: SiGmail,
}

const badgeIcons: { [key: string]: any } = {
  Email: MdEmail,
  Location: FaLocationDot,
  Availability: IoPerson,
}

export default function ContactSection() {
  const { badges, socials } = siteConfig.contact

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center border-t-3 border-t-primary border-b-3 border-b-primary px-4"
    >
      <SectionReveal>
        <h2 className="header mb-12 text-center -translate-y-7 bg-bgColor">
          Contact Me
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap gap-6 mb-12 justify-center bg-bgColor">
          {badges.map((b: any, idx: number) => {
            const Icon = badgeIcons[b.type]
            return badge(b, idx, Icon)
          })}
        </div>

        {/* Socials */}
        <div className="flex gap-6 justify-center translate-y-7 bg-bgColor">
          {socials.map((s: any, idx: number) => {
            const Icon = socialIcons[s.name]
            return social(s, idx, Icon)
          })}
        </div>
      </SectionReveal>
    </section>
  )
}

const badge = (b: any, idx: number, Icon: any) => {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    if (b.type === "Email") {
      await navigator.clipboard.writeText(b.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div
      key={idx}
      onClick={handleClick}
      className={`relative flex items-center gap-3 p-4 bg-accent hover:bg-primary rounded-xl shadow-md transition-all duration-200 ${
        b.type === "Email" ? "cursor-pointer" : ""
      }`}
    >
      {Icon && <Icon className="w-6 h-6" />}
      <span className="font-medium">{b.value}</span>

      {/* Tooltip */}
      {copied && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm whitespace-nowrap shadow-lg animate-fade-in">
          Copied!
        </div>
      )}
    </div>
  )
}

const social = (s: any, idx: number, Icon: any) => {
  return (
    <a
      key={idx}
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-primary rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
    >
      {Icon && <Icon className="w-6 h-6" />}
    </a>
  )
}
