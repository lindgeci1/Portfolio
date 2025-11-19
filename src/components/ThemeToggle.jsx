import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`rounded-full border border-white/20 bg-white/5 p-2 text-lg text-white transition hover:border-brand-300 ${className}`}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </motion.button>
  )
}