import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import { education, profile, timeline } from '../data/portfolio'

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="// about me" title={<>A student who likes tracing<br />the whole path of a problem.</>}>
        I&apos;m building my foundations in computer science while learning how a thoughtful interface, a reliable API, and a clean data model fit together.
      </PageIntro>
      <section className="two-column-section shell">
        <Reveal><div className="prose-block"><p className="eyebrow">// the short version</p><h2>Curious by default.<br />Practical on purpose.</h2><p>I enjoy moving from &ldquo;how does that work?&rdquo; to a small prototype you can test, break, and improve. I care more about understanding a tool than collecting it.</p><p>Right now, I&apos;m focused on writing better code, developing a useful full-stack mental model, and shipping learning projects instead of only following tutorials.</p></div></Reveal>
        <Reveal delay={0.08}><div className="education-card"><span>education / 01</span><h3>{education.school}</h3><p>{education.title}</p><p className="muted">{education.period} · {profile.location}</p><div className="course-list">{education.coursework.map((item) => <b key={item}>{item}</b>)}</div></div></Reveal>
      </section>
      <section className="timeline-section shell"><Reveal><p className="eyebrow">// journey so far</p><h2>Learning with enough<br />structure to keep moving.</h2></Reveal><div className="timeline-list">{timeline.map(([number, title, text], index) => <Reveal key={number} delay={index * 0.06}><article className="timeline-item"><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article></Reveal>)}</div></section>
    </>
  )
}
