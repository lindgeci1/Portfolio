import { ContactForm } from '../components/ContactForm'
import { PageTransition } from '../components/PageTransition'
import { SectionHeading } from '../components/SectionHeading'
import { personalInfo } from '../data/content'

export default function Contact() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build the next impactful platform together"
        description="Share a few details about your idea, timeline, or tech stack. I’ll get back within 24 hours with next steps."
        align="left"
      />
      <div className="section-grid">
        <div className="glass-panel space-y-4 p-6">
          <p className="text-white/70">
            <strong className="text-white">Email:</strong> {personalInfo.email}
          </p>
          <p className="text-white/70">
            <strong className="text-white">Location:</strong> {personalInfo.location}
          </p>
          <p className="text-white/70">
            <strong className="text-white">Availability:</strong> New freelance work & collaborations
          </p>
          <a href={personalInfo.github} className="btn-outline w-fit" target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </div>
        <ContactForm />
      </div>
    </PageTransition>
  )
}