import { useState, useEffect } from 'react'

function Navbar() {
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
        onClick={() => setMenuOpen(!menuOpen)}
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
    </nav>
  )
}

export default Navbar