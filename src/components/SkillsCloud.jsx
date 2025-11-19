import { skills } from '../data/content'

export function SkillsCloud() {
  return (
    <section className="space-y-8">
      <div className="section-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="glass-panel p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">{category}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {list.map((skill) => (
                <span key={skill} className="tag-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}