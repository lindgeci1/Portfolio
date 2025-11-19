import { SectionHeading } from '../components/SectionHeading'
import { ExperienceCard } from '../components/ExperienceCard'
import { PageTransition } from '../components/PageTransition'
import { experiences } from '../data/content'

export default function About() {
  return (
    <PageTransition>
      <section className="space-y-6">
        <SectionHeading
          eyebrow="About"
          title="Full-Stack Developer"
          // description="Software Development Intern at Expertt Technologies"
          align="left"
        />
      <p className="text-xl md:text-l leading-relaxed text-white/90 font-light">
        Crafting fast, scalable, and beautiful web apps with <span className="text-cyan-400 font-medium">React • .NET • Node.js • Laravel • Tailwind. </span> 
        Obsessed with clean code, intuitive UX, and shipping features that actually work.
      </p>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Experience"
          title="Journey"
          align="left"
        />
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.role} {...exp} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}