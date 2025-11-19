import { SectionHeading } from './SectionHeading'

export function AboutIntro() {
  return (
    <section id="about" className="space-y-10">
      <SectionHeading
        eyebrow="About Me"
        title="Full-Stack Builder"
        description="Software Development Intern at Expertt Technologies"
        align="left"
      />

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left */}
        <div className="glass-panel p-6">
          <h3 className="text-xl font-semibold text-white">End-to-End Focus</h3>
          <p className="mt-4 text-white/70 text-sm leading-relaxed">
            I design databases, build APIs, and craft responsive UIs — always with clean architecture, solid testing, and smooth team workflows in mind.
          </p>
        </div>

        {/* Right */}
       <div className="glass-panel p-6">
  <h3 className="text-xl font-semibold text-white">What I Bring</h3>
  <p className="mt-4 text-white/70 text-sm leading-relaxed">
    Turning ideas into production-ready apps — fast, clean, and scalable. 
    Strong at full-stack architecture, modern UI, payments, real-time features, and shipping with confidence.
  </p>
</div>
      </div>
    </section>
  )
}