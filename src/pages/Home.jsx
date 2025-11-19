import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { AboutIntro } from '../components/AboutIntro'
import { ProjectCard } from '../components/ProjectCard'
import { SkillsCloud } from '../components/SkillsCloud'
import { SectionHeading } from '../components/SectionHeading'
import { PageTransition } from '../components/PageTransition'
import { projects, personalInfo } from '../data/content'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AboutIntro />
      <section id="projects" className="space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Latest GitHub projects"
            description="Full-stack builds across rental management, healthcare, and Laravel practice suites."
            align="left"
          />
          <Link to="/projects" className="btn-outline w-fit">
            View all
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>



<section id="skills" className="space-y-10">
  <SectionHeading
    eyebrow="Skills"
    title="Tech Stack"
    description="Full-stack toolkit I use every day"
    align="left"
  />


  <div className="grid gap-8 md:grid-cols-3">

    <div className="glass-panel p-6">
      <h3 className="text-lg font-semibold text-white mb-5">Core Technologies</h3>
      <div className="flex flex-wrap gap-3 text-sm">
        {['PHP', 'C#', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Laravel', '.NET 9', 'Node.js', 'Tailwind CSS'].map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>


    <div className="glass-panel p-6">
      <h3 className="text-lg font-semibold text-white mb-5">Databases</h3>
      <div className="flex flex-wrap gap-3 text-sm">
        {['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'].map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>


    <div className="glass-panel p-6">
      <h3 className="text-lg font-semibold text-white mb-5">Tools & DevOps</h3>
      <div className="flex flex-wrap gap-3 text-sm">
        {['Git & GitHub', 'Docker', 'CI/CD', 'Stripe', 'Postman', 'Selenium'].map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  </div>


  <div className="glass-panel p-8 border border-cyan-500/50 bg-cyan-500/5 shadow-xl shadow-cyan-500/20">
    <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Certifications</h3>
    <div className="grid gap-6 md:grid-cols-2">
      <a
        href="https://www.datacamp.com/completed/statement-of-accomplishment/track/4a6595aefb3ab533dd9bda2b75d6cdf27ac5f91a"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
      >
        <span className="font-medium text-cyan-300">Data Analyst in Python</span>
        <span className="text-sm text-white/60">DataCamp • Oct 2025</span>
      </a>

      <a
        href="https://www.datacamp.com/completed/statement-of-accomplishment/track/92514f1ede0d69ee5441a6ef6df0a8de3510dfa0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
      >
        <span className="font-medium text-cyan-300">Associate Data Engineer in SQL</span>
        <span className="text-sm text-white/60">DataCamp • Sep 2025</span>
      </a>
    </div>
  </div>
</section>

{/* 
      <section className="glass-panel flex flex-col gap-6 p-8 text-center">
        <SectionHeading
          eyebrow="Available for collaboration"
          title="Ready to build your next dashboard or platform?"
          description="Share a quick note about your idea, product goals, or hiring needs. I reply within 24 hours."
        />
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Contact Me
          </Link>
          <a href={`mailto:${personalInfo.email}`} className="btn-outline">
            Email Me
          </a>
        </div>
      </section> */}
    </PageTransition>
  )
}