# Lind Geci — React Portfolio

Modern single-page portfolio built with React 18, Vite, Tailwind CSS, React Router, and Framer Motion.

## Features

- Animated hero, about, experience, projects, skills, and contact sections
- Client-side routing (Home, About, Projects, Contact)
- Dark/light mode with localStorage persistence
- Framer Motion transitions and glassmorphism styling
- Reusable components (Navbar, ThemeToggle, ProjectCard, ExperienceCard, ContactForm, etc.)
- Formspree-ready contact form and downloadable resume
- Optimized for deployment on Vercel/Netlify/GitHub Pages

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to preview the site.

## Customization

- Update `src/data/content.js` to change personal info, projects, skills, or social links.
- Replace placeholder images in `src/assets/images/` with your own (keep filenames or update references).
- Swap the resume PDF in `public/docs/Lind-Geci-CV.pdf` if needed.
- Set your Formspree endpoint in `src/data/content.js` (`formspreeEndpoint`).

## Deployment

```bash
npm run build
```

Deploy the `dist` folder to any static host (Vercel, Netlify, GitHub Pages).
