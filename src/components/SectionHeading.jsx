const alignClass = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`flex flex-col gap-3 ${alignClass[align] ?? alignClass.center}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-brand-300">{eyebrow}</p>
      )}
      {title && <h2 className="text-3xl font-display font-semibold text-white">{title}</h2>}
      {description && (
        <p className="max-w-2xl text-base text-white/70">{description}</p>
      )}
    </div>
  )
}