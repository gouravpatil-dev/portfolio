import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import ProjectArt from '../components/ProjectArt'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'

export default function ProjectDetailsPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <PageIntro eyebrow="// not found" title="That project note is not here yet." />

  return (
    <>
      <section className="detail-hero shell"><Link className="back-link" to="/projects"><ArrowLeft size={15} /> all projects</Link><PageIntro eyebrow={`// project ${project.number}`} title={project.title}>{project.summary}</PageIntro></section>
      <section className="project-detail shell">
        <Reveal><ProjectArt tone={project.tone} /></Reveal>
        <div className="detail-meta"><Reveal><div><p className="eyebrow">status</p><strong>{project.status}</strong></div></Reveal><Reveal delay={0.05}><div><p className="eyebrow">stack</p><p>{project.stack.join(' · ')}</p></div></Reveal><Reveal delay={0.1}><a className="text-link" href="#project-note">case study <ArrowUpRight size={15} /></a></Reveal></div>
      </section>
      <section className="case-study shell" id="project-note">
        <Reveal><article><p className="eyebrow">01 / the problem</p><h2>{project.problem}</h2></article></Reveal>
        <Reveal delay={0.06}><article><p className="eyebrow">02 / the approach</p><h2>{project.approach}</h2></article></Reveal>
        <Reveal delay={0.12}><article><p className="eyebrow">03 / planned features</p><ul className="feature-list">{project.features.map((feature) => <li key={feature}><CheckCircle2 size={16} />{feature}</li>)}</ul></article></Reveal>
        <Reveal delay={0.18}><article><p className="eyebrow">04 / what I&apos;m learning</p><h2>{project.learning}</h2></article></Reveal>
      </section>
    </>
  )
}
