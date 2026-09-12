import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  ['home', '/'],
  ['about', '/about'],
  ['projects', '/projects'],
  ['skills', '/skills'],
  ['experience', '/experience'],
  ['contact', '/contact'],
]

export default function SiteHeader({ lightMode, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header shell">
      <Link className="wordmark" to="/" onClick={closeMenu} aria-label="Gourav home">
        <span className="wordmark-mark">g</span><span>gourav.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onThemeChange} aria-label={lightMode ? 'Switch to dark theme' : 'Switch to light theme'}>
          {lightMode ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <Link className="resume-button" to="/contact">resume <span>↗</span></Link>
        <button className="menu-trigger" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={19} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} aria-label="Mobile navigation">
            {navItems.map(([label, path], index) => <NavLink key={path} to={path} onClick={closeMenu}><span>0{index + 1}</span>{label}<b>↘</b></NavLink>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
