import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Projects"
       title="Open-source stories"
description="Full-stack projects that combine clean architecture, real-world features, and polished, intuitive interfaces."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </PageTransition>
  )
}