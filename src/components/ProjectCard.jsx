import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectArt from './ProjectArt'

export default function ProjectCard({ project, featured = false }) {
  return (
    <Link className={`project-card ${project.tone} ${featured ? 'is-featured' : ''}`} to={`/projects/${project.slug}`}>
      <div className="project-topline">
        <span>{project.number}</span>
        <span className="project-status"><i /> {project.status}</span>
        <ArrowUpRight size={18} />
      </div>
      <ProjectArt tone={project.tone} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </Link>
  )
}
