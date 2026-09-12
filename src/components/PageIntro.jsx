import Reveal from './Reveal'

export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro shell">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p className="page-intro-copy">{children}</p>}
      </Reveal>
    </section>
  )
}
