import { useState, useEffect } from 'react'
import { useTheme } from '../ThemeContext'

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <rect x="6" y="0" width="2" height="2" />
    <rect x="6" y="12" width="2" height="2" />
    <rect x="0" y="6" width="2" height="2" />
    <rect x="12" y="6" width="2" height="2" />
    <rect x="2" y="2" width="2" height="2" />
    <rect x="10" y="2" width="2" height="2" />
    <rect x="2" y="10" width="2" height="2" />
    <rect x="10" y="10" width="2" height="2" />
    <rect x="4" y="4" width="6" height="6" />
  </svg>
)

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
    <rect x="4" y="0" width="6" height="2" />
    <rect x="2" y="2" width="4" height="2" />
    <rect x="1" y="4" width="3" height="6" />
    <rect x="2" y="10" width="4" height="2" />
    <rect x="4" y="12" width="6" height="2" />
    <rect x="10" y="10" width="2" height="2" />
    <rect x="11" y="8" width="2" height="2" />
    <rect x="11" y="6" width="2" height="2" />
    <rect x="10" y="4" width="2" height="2" />
  </svg>
)

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo" onClick={closeMenu}>
        &lt;Angelo/&gt;
      </a>

      <button
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(m => !m)}
        aria-label="Toggle navigation"
        id="nav-toggle-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#About" onClick={closeMenu}>About</a></li>
        <li><a href="#Projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#Contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <div className="navbar-actions">
        <a
          href="/CV_Angelo.pdf"
          download
          className="navbar-cv-btn"
          id="navbar-cv-btn"
        >
          [CV]
        </a>
        <button
          className="navbar-theme-btn"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          id="navbar-theme-btn"
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar