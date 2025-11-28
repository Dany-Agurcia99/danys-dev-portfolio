import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const clash = localFont({
  src: "../public/fonts/ClashDisplay-Regular.woff2",
  variable: "--font-clash",
})

export const metadata: Metadata = {
  title: "Daniel Agurcia - Software Developer",
  description:
    "Personal portfolio of Daniel Agurcia, full-stack developer specializing in Next.js, React, and mobile apps.",
  keywords: [
    "Daniel Agurcia",
    "Software Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Mobile apps",
    "Full-stack",
  ],
  authors: [{ name: "Daniel Agurcia" }],
  creator: "Daniel Agurcia",
  openGraph: {
    title: "Daniel Agurcia - Software Developer",
    description:
      "Explore projects, experience, and skills of Daniel Agurcia, full-stack and mobile developer.",
    url: "https://dany-agurcia.vercel.app/",
    siteName: "Daniel Agurcia Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 600,
        alt: "Daniel Agurcia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Agurcia - Software Developer",
    description:
      "Check out my portfolio showcasing Next.js, React, and mobile projects.",
    creator: "@dany_agurcia",
    images: ["/avatar.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${clash.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
