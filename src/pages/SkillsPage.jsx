import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import { skillGroups } from '../data/portfolio'

export default function SkillsPage() {
  return (
    <>
      <PageIntro eyebrow="// skills & stack" title={<>Tools I&apos;m learning to use<br />with intention.</>}>
        This is an honest inventory, not a keyword collection. I add a tool when I can use it to make a project clearer, more capable, or more reliable.
      </PageIntro>
      <section className="skills-grid shell">{skillGroups.map((group, index) => <Reveal key={group.label} delay={index * 0.06}><article className="skill-group"><span>0{index + 1}</span><h2>{group.label}</h2><div>{group.items.map((item) => <b key={item}>{item}</b>)}</div></article></Reveal>)}</section>
      <section className="now-section shell"><Reveal><p className="eyebrow">// currently exploring</p><h2>Full-stack development,<br />system design, and AI.</h2><p>My current direction is to understand frontend, APIs, data, and deployment as one connected system - then use that understanding to build better projects.</p></Reveal></section>
    </>
  )
}
