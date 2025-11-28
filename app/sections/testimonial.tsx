import { siteConfig } from "@/config"
import SectionReveal from "../components/SectionReveal"

export default function TestimonialsSection() {
  const testimonials = siteConfig.testimonials

  return (
    <section id="testimonials" className="py-30 max-w-7xl mx-auto px-4">
      <SectionReveal>
        <h2 className="header mb-12">Testimonials</h2>

        <div className="flex flex-col gap-30">
          {testimonials.map((t, idx) => {
            const isEven = idx % 2 === 0
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Testimonial text with name/role/company below */}
                <div className="md:w-1/2 flex flex-col gap-4">
                  {/* Testimonial with horizontal line */}
                  <div className="flex items-start gap-3">
                    <div className="w-15 h-px bg-primary mt-3 shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-xl italic text-text-light text-justify">
                        "{t.testimonial}"
                      </p>
                    </div>
                  </div>

                  {/* Name and role aligned with testimonial text */}
                  <div className="ml-[70px]">
                    <h3 className="font-bold text-2xl text-textColor">
                      {t.name}
                    </h3>
                    {/* Role with horizontal line */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-8 h-px bg-primary"></div>
                      <p className="details">
                        {t.role} - {t.company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card with large image overflowing */}
                <div
                  className={`md:w-2/6 bg-primary overflow-visible h-70 flex items-end justify-center relative rounded-xl ${
                    isEven ? "ml-auto" : "mr-auto"
                  }`}
                >
                  {/* Large image overflowing the card */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-125 object-cover"
                  />
                  {/* Subtle glow at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-3 rounded-xl bg-linear-to-t from-primary/30 to-transparent pointer-events-none"></div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionReveal>
    </section>
  )
}
