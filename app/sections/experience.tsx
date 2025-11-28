import { siteConfig } from "@/config"
import SectionReveal from "../components/SectionReveal"

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="pb-20 max-w-7xl mx-auto px-4">
      <SectionReveal>
        <h2 className="header mb-12 -translate-y-1/2">Experience</h2>

        <div className="relative pl-6 space-y-5">
          {siteConfig.experience.map((exp, idx) => (
            <div key={idx} className="relative flex gap-4 px-60">
              {/* Year tag */}
              <span className="text-sm font-semibold text-textColor mt-1">
                {exp.year}
              </span>

              {/* Bullet container with line */}
              <div className="relative flex flex-col items-center shrink-0">
                {/* Bullet */}
                <span
                  className="w-8 h-8 bg-primary rounded-full z-10"
                  style={{
                    boxShadow: "0 0 20px var(--color-primary)",
                  }}
                />

                {/* Line below bullet - extends to match content height */}
                {idx < siteConfig.experience.length - 1 && (
                  <div
                    className="w-1 rounded-3xl flex-1 bg-textColor mt-5"
                    style={{
                      boxShadow: "0 0 10px var(--color-primary)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 mb-10">
                {/* Role */}
                <h3 className="text-4xl font-medium -mt-2 mb-3 text-textColor">
                  {exp.role}
                </h3>

                {/* Company + Location */}
                <p className="details mb-2">
                  {exp.company} — {exp.location}
                </p>

                {/* Description */}
                <p className="leading-relaxed paragraph">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
