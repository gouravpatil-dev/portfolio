import { ArrowDownRight, ArrowUpRight, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects, skillGroups } from '../data/portfolio'

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <Reveal><p className="eyebrow availability"><span className="status-dot" /> open to internships &amp; collaborations</p></Reveal>
          <Reveal delay={0.05}><p className="hero-kicker">// computer science student · builder</p></Reveal>
          <Reveal delay={0.1}><h1>I turn curious ideas into <em>working</em> software.</h1></Reveal>
          <Reveal delay={0.15}><p className="hero-intro">I&apos;m Gourav - a Computer Science student at COEP Technological University, learning in public and building useful things along the way.</p></Reveal>
          <Reveal delay={0.2} className="hero-cta-row">
            <Link className="shimmer-button" to="/projects">explore my work <ArrowDownRight size={18} /></Link>
            <Link className="text-link" to="/contact">say hello <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <aside className="profile-window" aria-label="Gourav developer profile">
            <div className="window-titlebar"><div className="window-dots"><i /><i /><i /></div><span>gourav.ts</span><Code2 size={15} /></div>
            <div className="window-content">
              <p className="code-comment">// currently compiling a point of view</p>
              <pre>{`const gourav = {
  role: "cs_student",
  building: ["web", "systems"],
  learning: "one project at a time",
  energy: "curious",
  coffee: Infinity,
}`}</pre>
              <div className="window-footer"><span><b>●</b> all systems learning</span><span>India · IST</span></div>
            </div>
          </aside>
        </Reveal>
      </section>

      <section className="quick-facts shell" aria-label="Quick facts">
        <div className="fact"><strong>COEP</strong><span>learning from<br />Pune, India</span></div>
        <div className="fact"><strong>∞</strong><span>ideas captured<br />and investigated</span></div>
        <div className="fact"><strong>01</strong><span>rule: ship, learn,<br />then improve</span></div>
        <Link className="fact fact-link" to="/contact"><span className="fact-star">✦</span><span>let&apos;s make<br />something useful</span><ArrowUpRight size={17} /></Link>
      </section>

      <section className="home-work shell">
        <Reveal className="section-heading">
          <div><p className="eyebrow">// projects</p><h2>Things I&apos;m building<br />to understand better.</h2></div>
          <Link className="text-link" to="/projects">all project notes <ArrowUpRight size={15} /></Link>
        </Reveal>
        <div className="project-list">{projects.map((project, index) => <Reveal key={project.slug} delay={index * 0.08}><ProjectCard project={project} /></Reveal>)}</div>
      </section>

      <section className="home-learning shell">
        <Reveal><p className="eyebrow">// learning map</p><h2>Front-end to back-end,<br />one working system at a time.</h2></Reveal>
        <div className="learning-columns">
          {skillGroups.map((group, index) => <Reveal key={group.label} delay={index * 0.06}><div className="learning-group"><span>0{index + 1}</span><h3>{group.label}</h3><p>{group.items.join(' · ')}</p></div></Reveal>)}
        </div>
        <Reveal><Link className="text-link" to="/skills">see my full stack <ArrowDownRight size={15} /></Link></Reveal>
      </section>
    </>
  )
}
