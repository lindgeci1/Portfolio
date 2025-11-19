import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-surface-800 via-surface-650 to-surface-800 text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
