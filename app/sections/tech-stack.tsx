import { siteConfig } from "@/config"
import SectionReveal from "../components/SectionReveal"
import TechItem from "../components/TechItem"

interface TechStack {
  name: string
  icon: string
}

export default function TechStackSection() {
  const techList = siteConfig.techStack

  return (
    <section id="tech-stack" className="py-20 max-w-7xl mx-auto px-4">
      <SectionReveal>
        <h2 className="header text-center mb-10">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techList.map((tech: TechStack) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
