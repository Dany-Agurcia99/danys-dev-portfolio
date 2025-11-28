import { siteConfig } from "@/config"
import SectionReveal from "../components/SectionReveal"

interface Project {
  title: string
  description: string
  image: string
}

export default function ProjectsSection() {
  const projects = siteConfig.projects

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4">
      <SectionReveal>
        <h2 className="header text-center mb-10">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project: Project) => (
            <div
              key={project.title}
              className="relative group w-full aspect-square overflow-hidden bg-gray-100 border border-accent"
            >
              {/* Imagen */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0 bg-black/70
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                flex flex-col justify-center items-center text-center p-4
              "
              >
                <h3 className="text-lg font-semibold text-[#ededed]">
                  {project.title}
                </h3>
                <p className="text-base mt-2 opacity-90 text-[#cfcfcf]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
