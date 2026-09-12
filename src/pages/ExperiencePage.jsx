import { ArrowDownRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import { education } from '../data/portfolio'

export default function ExperiencePage() {
  return (
    <>
      <PageIntro eyebrow="// experience" title={<>Building the foundation<br />before the title.</>}>
        I&apos;m early in my career, so I&apos;m keeping this page factual: what I&apos;m learning, what I&apos;m building, and the kind of opportunity I&apos;m preparing for.
      </PageIntro>
      <section className="experience-list shell">
        <Reveal><article className="experience-item"><span>2025 - now</span><div><p className="eyebrow">computer science & engineering</p><h2>{education.school}</h2><p>Building foundations in programming, data structures, web development, and the systems concepts behind reliable software.</p></div><GraduationCap size={26} /></article></Reveal>
        <Reveal delay={0.08}><article className="experience-item future"><span>next</span><div><p className="eyebrow">internship / collaboration</p><h2>Ready to learn on a real team.</h2><p>I&apos;m looking for opportunities where I can contribute thoughtfully, ask better questions, and grow through feedback.</p></div><ArrowDownRight size={26} /></article></Reveal>
      </section>
      <section className="now-section shell"><Reveal><p className="eyebrow">// beyond the role</p><h2>Projects are my current<br />proof of work.</h2><p>Until I have professional experience to document, I&apos;m using projects and detailed project notes to show how I think through a problem.</p><Link className="text-link" to="/projects">read the project notes <ArrowDownRight size={15} /></Link></Reveal></section>
    </>
  )
}
