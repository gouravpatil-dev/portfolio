export const profile = {
  name: 'Gourav',
  role: 'Computer Science student & aspiring full-stack developer',
  school: 'COEP Technological University',
  location: 'Pune, India',
  email: 'gouravpatil738@gmail.com',
  github: 'https://github.com/gouravpatil-dev',
  linkedin: 'https://www.linkedin.com/in/gourav-nitin-patil',
}

export const projects = [
  {
    number: '01',
    slug: 'money-rescue',
    title: 'Money Rescue',
    status: 'Active development',
    tone: 'lime',
    stack: ['React', 'Vite', 'Express', 'SQLite'],
    github: 'https://github.com/gouravpatil-dev/money-rescue',
    summary: 'A full-stack finance tracker built for family use, made to make everyday income and spending easy to see and act on.',
    problem: 'Family finances tend to live in scattered notes and memory, so it is hard to see where money is actually going or catch problems early.',
    approach: 'Pair a React and Vite frontend with an Express and SQLite backend so data entry stays fast while the underlying records stay structured and queryable.',
    features: ['Income and expense tracking', 'SQLite-backed persistent records', 'REST API between frontend and backend', 'Built for real family use, not just a demo'],
    learning: 'Building a complete full-stack loop end to end - frontend state, an Express API layer, and a real database - and keeping it reliable for daily use.',
  },
  {
    number: '02',
    slug: 'policylens',
    title: 'PolicyLens',
    status: 'Scaffolded',
    tone: 'blue',
    stack: ['FastAPI', 'LangChain', 'GPT-4o', 'Pinecone', 'Next.js 15'],
    summary: 'An AI-powered platform for making sense of insurance policies, using language models to read and explain what the fine print actually means.',
    problem: 'Insurance policies are long, dense, and full of specific language that makes it hard for people to know what they are actually covered for.',
    approach: 'Combine LLM-based document understanding with vector search over policy text, served through a FastAPI microservices backend and a Next.js 15 frontend.',
    features: ['LLM-based policy document analysis', 'Vector search over policy text with Pinecone', 'Microservices architecture via FastAPI', 'Next.js 15 frontend'],
    learning: 'Designing a microservices architecture around an LLM pipeline, and structuring retrieval-augmented analysis over long, technical documents.',
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['C++', 'Python', 'JavaScript', 'SQL'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'React', 'Responsive UI'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs', 'Express (learning)'] },
  { label: 'Data & tools', items: ['Git', 'GitHub', 'Linux', 'Figma'] },
]

export const timeline = [
  ['01', 'Programming foundations', 'Writing small programs, building problem-solving habits, and getting comfortable with C++.'],
  ['02', 'Web fundamentals', 'Learning how semantic HTML, CSS layouts, JavaScript, browsers, and HTTP work together.'],
  ['03', 'Full-stack projects', 'Using React and Node.js to turn an interface into an application with data and APIs.'],
  ['04', 'Systems curiosity', 'Exploring the foundations underneath: databases, networking, operating systems, and design trade-offs.'],
]

export const education = {
  title: 'B.Tech - Computer Science & Engineering',
  school: 'COEP Technological University',
  period: '2025 - 2029',
  coursework: ['Data Structures', 'Algorithms', 'DBMS', 'Computer Networks', 'Operating Systems'],
}