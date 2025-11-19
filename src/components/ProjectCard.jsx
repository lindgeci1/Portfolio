import { motion } from 'framer-motion'

export function ProjectCard({ project }) {
  const { title, description, stack, link, image, timeline } = project
  const imageSrc = new URL(`../assets/images/${image}`, import.meta.url).href

  return (
    <motion.article
      whileHover={{ translateY: -8 }}
      className="glass-panel overflow-hidden"
    >
      {/* <div className="h-48 w-full overflow-hidden">
        <img src={imageSrc} alt={title} className="h-full w-full object-cover" loading="lazy" />
      </div> */}
      <div className="space-y-4 p-6">
        {timeline && <p className="text-xs uppercase tracking-[0.3em] text-brand-300">{timeline}</p>}
        <h3 className="text-2xl font-display text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="tag-pill">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200"
        >
          View on GitHub →
        </a>
      </div>
    </motion.article>
  )
}