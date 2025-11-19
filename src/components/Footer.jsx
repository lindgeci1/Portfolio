import { personalInfo } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
      © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
    </footer>
  )
}