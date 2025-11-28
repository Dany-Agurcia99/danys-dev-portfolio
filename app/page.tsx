import Navbar from "./navbar"
import AboutSection from "./sections/about-me"
import ContactSection from "./sections/contact-me"
import ExperienceTimeline from "./sections/experience"
import ProjectsSection from "./sections/projects"
import TechStackSection from "./sections/tech-stack"
import TestimonialsSection from "./sections/testimonial"
import Footer from "./footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <div className="bg-accent">
        <ExperienceTimeline />
      </div>
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
