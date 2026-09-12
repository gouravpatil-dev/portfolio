import PageIntro from '../components/PageIntro'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="// projects" title={<>Small projects, real<br />learning loops.</>}>
        Every project is a chance to make an idea concrete, run into the awkward parts, and document what changed my mind.
      </PageIntro>
      <section className="project-page-list shell">{projects.map((project, index) => <Reveal key={project.slug} delay={index * 0.07}><ProjectCard project={project} featured /></Reveal>)}</section>
      <section className="project-note shell"><Reveal><p className="eyebrow">// what belongs here</p><h2>Not a wall of tutorials.<br />A record of things I made.</h2><p>Each card opens a project note with the problem, approach, features, technical decisions, and what I learned. Replace these starter projects with your real work as you ship it.</p></Reveal></section>
    </>
  )
}
