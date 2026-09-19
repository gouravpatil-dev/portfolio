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
  {
  number: '03',
  slug: 'reading-mcp',
  title: 'ReadingMCP',
  status: 'Complete',
  tone: 'purple', 
  stack: ['TypeScript', 'MCP SDK', 'SQLite', 'Node.js'],
  summary: 'An MCP server that lets an AI client read and act on a dataset through natural conversation, with a deliberate confirm-before-write safeguard on the one action that modifies data.',
  problem: 'AI tools that can write data need a safety pattern — a model can misinterpret a request or fill in details you didn\'t intend, so a write action needs a way for a mistake to surface before it\'s saved.',
  approach: 'Built a standalone MCP server exposing a reading-log dataset: a read-only resource, two read-only tools, and one write tool (log_book) that requires two calls — an unconfirmed call returns a preview only, a second call with confirm: true actually saves.',
  features: [
  'books://all read-only resource for the full reading log',
  'get_reading_summary with optional monthly filtering',
  'search_books by genre and/or date range',
  'log_book with explicit confirm-before-write flow',
  'SQLite persistence over stdio transport',
  'MCP Inspector verification workflow',
  ],
  learning: 'Designing the human-in-the-loop safeguard a real production MCP server would need for any action with a side effect — not just this demo, but the general pattern for AI tools that can write, not just read.',
  github: 'https://github.com/gouravpatil-dev/reading-mcp',
  live: '', // no live link — this runs locally via stdio, not a hosted app
}
]

export const skillGroups = [
  {
    label: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'Vite', 'Tailwind CSS'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Express', 'REST APIs', 'SQLite', 'MCP'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
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