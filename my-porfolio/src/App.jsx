import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

/* ── Animated floating pixel dots ── */
function PixelDots() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create dots
    const DOT_COUNT = 60
    const dots = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() < 0.5 ? 3 : 5,   // pixel sizes: 3 or 5
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: 0.12 + Math.random() * 0.22,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        // Pixel-snap to grid (crisp squares)
        const px = Math.round(d.x / 4) * 4
        const py = Math.round(d.y / 4) * 4
        ctx.globalAlpha = d.opacity
        ctx.fillStyle = '#111'
        ctx.fillRect(px, py, d.size, d.size)

        // Move
        d.x += d.vx
        d.y += d.vy

        // Wrap
        if (d.x < -10) d.x = canvas.width + 10
        if (d.x > canvas.width + 10) d.x = -10
        if (d.y < -10) d.y = canvas.height + 10
        if (d.y > canvas.height + 10) d.y = -10
      })
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pixel-dots-canvas" />
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Available for projects
        </div>

        <h1 className="hero-name">
          Hi, I'm{' '}
          <span className="hero-name-gradient">Angelo</span>
        </h1>

        <p className="hero-title">Front-End Developer &amp; React Learner</p>

        <p className="hero-desc">
          I build pixel-perfect, interactive web experiences.
          Currently on my journey mastering React and modern front-end development —
          one component at a time.
        </p>

        <div className="hero-cta">
          <a href="#Projects" className="btn-primary" id="hero-view-projects-btn">
            View Projects &#10022;
          </a>
          <a href="#Contact" className="btn-outline" id="hero-contact-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <span className="footer-heart">&#9829;</span> by Angelo Gabriel &mdash; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="app">
      {/* Animated floating pixel dots background */}
      <PixelDots />

      {/* Static dot-grid overlay */}
      <div className="bg-canvas">
        <div className="bg-grid"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App