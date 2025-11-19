import { motion } from 'framer-motion'

export function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col gap-16"
    >
      {children}
    </motion.main>
  )
}