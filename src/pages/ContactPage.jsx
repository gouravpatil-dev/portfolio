import { ArrowUpRight, Download } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import Reveal from '../components/Reveal'
import { profile } from '../data/portfolio'

const channels = [
  {
    label: 'Email',
    handle: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
    description: 'For longer conversations, opportunities, and anything that deserves more than a short message.',
  },
  {
    label: 'LinkedIn',
    handle: profile.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '').replace(/\/$/, ''),
    href: profile.linkedin,
    external: true,
    description: 'Work history, project updates, and the occasional build log.',
  },
  {
    label: 'GitHub',
    handle: profile.github.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, ''),
    href: profile.github,
    external: true,
    description: 'Projects, experiments, and code I have made public.',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="// contact" title={<>Let&apos;s make something<br />useful together.</>}>
        Whether it&apos;s an internship, project collaboration, or a good technical conversation, I&apos;d be glad to hear from you.
      </PageIntro>
      <section className="contact-list shell">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 0.06}>
            <a
              className="contact-row"
              href={channel.href}
              target={channel.external ? '_blank' : undefined}
              rel={channel.external ? 'noreferrer' : undefined}
            >
              <div className="contact-row-head">
                <h3>{channel.label}</h3>
                <span>{channel.handle}</span>
              </div>
              <p>{channel.description}</p>
              <ArrowUpRight size={18} />
            </a>
          </Reveal>
        ))}
      </section>
      <section className="resume-section shell"><Reveal><div><p className="eyebrow">// resume</p><h2>Still putting the<br />one-pager together.</h2><p>This site is a work in progress, and the resume is next on the list. Email or LinkedIn is the best way to reach me for now.</p></div><a className="outline-button" href="/resume.pdf" download><Download size={16} /> download resume</a></Reveal></section>
    </>
  )
}