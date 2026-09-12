import { ArrowUpRight, Download, Mail } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import { profile } from '../data/portfolio'

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="// contact" title={<>Let&apos;s make something<br />useful together.</>}>
        Whether it&apos;s an internship, project collaboration, or a good technical conversation, I&apos;d be glad to hear from you.
      </PageIntro>
      <section className="contact-grid shell">
        <Reveal><a className="contact-card primary-contact" href={`mailto:${profile.email}`}><Mail size={22} /><div><span>email</span><h2>{profile.email}</h2></div><ArrowUpRight size={20} /></a></Reveal>
        <Reveal delay={0.06}><a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer"><span>linkedin</span><p>Add your LinkedIn profile</p><ArrowUpRight size={20} /></a></Reveal>
        <Reveal delay={0.12}><a className="contact-card" href={profile.github} target="_blank" rel="noreferrer"><span>github</span><p>Add your GitHub profile</p><ArrowUpRight size={20} /></a></Reveal>
      </section>
      <section className="resume-section shell"><Reveal><div><p className="eyebrow">// resume</p><h2>Keep a one-page<br />version ready.</h2><p>Drop your finished resume into <code>public/resume.pdf</code>; the button below will automatically work once the file exists.</p></div><a className="outline-button" href="/resume.pdf" download><Download size={16} /> download resume</a></Reveal></section>
    </>
  )
}
