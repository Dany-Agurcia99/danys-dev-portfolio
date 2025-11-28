import { siteConfig } from "@/config"

export default function AboutSection() {
  const { name, role, bio, avatar, shortFacts } = siteConfig.about

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4">
      {/* Header section: name and avatar split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-left">
            <div className="flex items-center justify-center space-x-4">
              <h3 className="text-4xl text-text-light font-light">I'm</h3>
              <h1 className="text-6xl font-bold text-primary-accent font-clash">
                {name}
              </h1>
            </div>
            <p className="text-3xl text-left text-text-light mt-2 font-medium">
              {role}
            </p>

            {/* Contact Me button */}
            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 border-3 border-primary text-primary-accent rounded-lg font-medium hover:border-primary-accent hover:text-text transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>

      {/* Bio section with badges and description */}
      <div className="mt-8">
        <h2 className="header">About Me</h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {shortFacts.map((fact) => (
            <span
              key={fact}
              className="px-4 py-2 bg-primary text-white rounded-full text-base font-medium"
            >
              {fact}
            </span>
          ))}
        </div>
        <p className="paragraph whitespace-pre-line">{bio}</p>
      </div>
    </section>
  )
}
