import { useState } from 'react'
import { formspreeEndpoint } from '../data/content'

export function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus({ state: 'submitting', message: '' })

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })

      if (response.ok) {
        setStatus({ state: 'success', message: 'Message sent! I will reply soon.' })
        form.reset()
      } else {
        throw new Error('Something went wrong')
      }
    } catch (error) {
      setStatus({ state: 'error', message: 'Unable to send message. Please try again later.' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-4 p-6">
      <div>
        <label className="text-sm text-white/70">Name</label>
        <input
          type="text"
          name="name"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-300 focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="text-sm text-white/70">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-300 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="text-sm text-white/70">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-300 focus:outline-none"
          placeholder="What can we build together?"
        ></textarea>
      </div>
      <button type="submit" className="btn-primary w-full" disabled={status.state === 'submitting'}>
        {status.state === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
      {status.message && (
        <p
          className={`text-center text-sm ${
            status.state === 'success' ? 'text-brand-200' : 'text-red-300'
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  )
}