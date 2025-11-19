export const personalInfo = {
  name: 'Lind Geci',
  role: 'Software Development Intern at Xpert Technologies',
  title: 'Software Development Intern | Full-Stack Developer',
  bio:
    'Full-stack developer passionate about writing clean code and shipping high-quality web products.',
  location: 'Remote · Open to relocation',
  email: 'hello@example.com',
  github: 'https://github.com/lindgeci1',
  linkedin: 'https://www.linkedin.com/in/lind-geci-56b860339/',
  resume: '/docs/Lind-Geci-CV.pdf',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  
  // { label: 'Contact', path: '/contact' },
]

export const experiences = [
  {
    role: 'Software Development Intern',
    company: 'Expertt Technologies',
    period: 'Nov 2025 – Present',
    summary: 'Full-stack team · Analytics dashboards & client portals',
    achievements: [
      'Building backend + modern UI · Code & design reviews',
      'Learning CI/CD, monitoring, and production delivery',
    ],
  },
  {
    role: 'B.Sc. Computer Science & Engineering',
    company: 'UBT University',
    period: 'Oct 2022 – Oct 2025',
    summary: 'Graduated 9.81/10.00 · Software Systems Engineering',
    achievements: [
      'Top grades · Full-stack & system design focus',
      'Built production-grade projects & thesis work',
    ],
  },
]

export const projects = [
  {
    title: 'Vehicle Rent Management System',
    description:
      'Full-stack car rental app with live GPS tracking, Stripe payments, fleet management, and analytics dashboards.',
    stack: [ 'C#', 'React', 'Tailwind', 'EF Core', 'SQL Server', 'MongoDB', 'Stripe'],
    link: 'https://github.com/lindgeci1/Vehicle-Rent-Management-System',
    image: 'screenshot1.jpg',
    timeline: 'Jan–Jul 2025',
  },
  {
    title: 'Hospital Management System',
    description:
      'Online appointment booking, medical reports, Stripe payments, RBAC, and real-time dashboards.',
    stack: ['Node.js', 'React', 'Tailwind', 'MySQL', 'Sequelize', 'Stripe'],
    link: 'https://github.com/lindgeci1/Hospital-Management-System',
    image: 'screenshot2.jpg',
    timeline: 'Mar 2024–Feb 2025',
  },
  {
    title: 'TickIt – Shopping List App',
    description:
      'Cross-platform shopping list app with real-time sync and product-market mapping (in development).',
    stack: ['Laravel', 'PostgreSQL', 'React Native'],
    link: 'https://github.com/lindgeci1/Practicing_Laravell_Project',
    image: 'screenshot4.jpg',
    timeline: 'May 2025–Present',
  },
]

// data/content.js or wherever you keep it
export const skills = {
  languages: ['PHP', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'Java'],
  frameworks: ['Laravel', 'Livewire', 'React', 'React Native', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', '.NET 9', 'Entity Framework', 'Eloquent', 'REST/GraphQL', 'Stripe', 'JWT/RBAC'],
  databases: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  tooling: ['Git & GitHub', 'Docker', 'CI/CD', 'Postman', 'Selenium', 'NUnit', 'Vercel', 'Render'],
}

export const formspreeEndpoint = 'https://formspree.io/f/your-form-id'