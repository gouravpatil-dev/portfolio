# Gourav's portfolio

> Turn curious ideas into working software.

> [Live Portfolio](https://gouravpatil.vercel.app)

## Overview
This portfolio is a multi-page React application focused on clean design, responsive layouts, structured project case studies, and subtle motion.
Rather than presenting projects as a simple list, the site is designed to explain what I built, the problems I explored, the technologies I used, and what I learned from each project.
The content and project information are centralized in `src/data/portfolio.js`, making the portfolio straightforward to maintain and extend.

## Features
- Multi-page React architecture with client-side routing
- Responsive layouts for desktop, tablet, and mobile
- Dark developer-focused visual design
- Light and dark theme support
- Motion-based page and interaction animations
- Project overview and individual case-study pages
- Structured skills, experience, and education sections
- Contact section with social links
- Reusable React components
- Centralized portfolio content and project data

## Tech Stack
### Frontend
- React
- JavaScript
- HTML5
- CSS3

### Tooling & Libraries
- Vite
- React Router
- Motion
- Lucide React

### Development
- Git
- GitHub
- VS Code
- npm

## Project Structure
```text
portfolio/
├── public/
│   └── static assets
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── portfolio.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── ExperiencePage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ProjectDetailsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── SkillsPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
