import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, personalInfo } from '../data/content'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition hover:text-brand-300 ${
      isActive ? 'text-white' : 'text-white/70'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-surface-800 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-white">
          {personalInfo.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <ThemeToggle /> */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-300 md:inline-flex"
            whileHover={{ scale: 1.03 }}
          >
            GitHub
          </motion.a>
          <button
            className="rounded-full border border-white/20 p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-4 border-t border-white/10 px-6 py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-base font-medium ${isActive ? 'text-white' : 'text-white/70'}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={personalInfo.resume}
                className="btn-outline text-center"
                download
                onClick={() => setOpen(false)}
              >
                Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}