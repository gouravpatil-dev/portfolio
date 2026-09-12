# Gourav's portfolio

A responsive, multi-page React portfolio with a dark developer aesthetic, project case studies, and Motion animations.

## Run locally

```bash
npm install
npm run dev
```

Then open the local address Vite prints in the terminal.

## Make it yours

- Replace the email, GitHub, and LinkedIn placeholders in [src/data/portfolio.js](./src/data/portfolio.js).
- Update the name, introductory copy, skills, projects, education, and case-study content in [src/data/portfolio.js](./src/data/portfolio.js).
- Add a real resume as `public/resume.pdf` when it is ready.

## Routes

- `/` - Home
- `/about` - About, education, and learning journey
- `/projects` - Project overview
- `/projects/:slug` - Individual project case studies
- `/skills` - Categorised technical stack
- `/experience` - Current education and opportunity focus
- `/contact` - Contact details and resume download

## Checks

```bash
npm run build
npm run lint
```

The interface uses [Motion](https://motion.dev/) for the entrance, scroll, hover, and menu transitions. Its action buttons, bento-style cards, and dense dashboard-style layout take inspiration from the design patterns available on [21st.dev](https://21st.dev/).
