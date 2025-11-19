export function ExperienceCard({ role, company, period, summary, achievements }) {
  return (
    <div className="glass-panel flex flex-col gap-4 p-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">{period}</p>
        <h3 className="mt-3 text-2xl font-display font-semibold text-white">{role}</h3>
        <p className="text-white/70">{company}</p>
      </div>
      <p className="text-white/70">{summary}</p>
      <ul className="space-y-2 text-white/60">
        {achievements.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-brand-300">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}