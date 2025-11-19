import { motion } from 'framer-motion'
import profileImage from '../assets/images/Lind Geci picture.jpg'
import { personalInfo } from '../data/content'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function Hero() {
  return (
    <section className="pt-10 md:pt-16" id="home">
      <motion.div
        className="grid items-center gap-12 md:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="space-y-6">
          <motion.p variants={item} className="text-xs uppercase tracking-[0.4em] text-brand-300">
            Software Development
          </motion.p>
          <motion.h1 variants={item} className="font-display text-4xl font-bold text-white md:text-5xl">
            {personalInfo.name}
          </motion.h1>
          <motion.p variants={item} className="text-xl text-white/80">
            {personalInfo.title}
          </motion.p>
          <motion.p variants={item} className="text-base text-white/70">
            {personalInfo.bio}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-outline">
              LinkedIn
            </a>
            <a href={personalInfo.resume} className="btn-outline" download>
              Download CV
            </a>
          </motion.div>
        </div>
        <motion.div variants={item} className="glass-panel p-4">
          <img
            src={profileImage}
            alt="Lind Geci portrait"
            className="h-full w-full rounded-[28px] object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
