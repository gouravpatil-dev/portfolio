import { ArrowUpRight, Code2, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/portfolio'

export default function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-top">
        <p className="eyebrow">// let&apos;s build something</p>
        <h2>Have an idea worth<br />talking about?</h2>
        <Link className="shimmer-button" to="/contact">start a conversation <ArrowUpRight size={18} /></Link>
      </div>
      <div className="footer-bottom">
        <div>
          <p className="terminal-line">{'gourav@site:~$ find . -name "links" -exec cat {} \\;'}</p>
          <div className="social-links">
            <a href={`mailto:${profile.email}`}><Mail size={15} /> email</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={15} /> github</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> linkedin</a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Gourav. Built with React + Motion.</p>
      </div>
    </footer>
  )
}
