import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

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

        <p className="hero-title">Front-End Developer & React Learner</p>

        <p className="hero-desc">
          I build pixel-perfect, interactive web experiences.
          Currently on my journey mastering React and modern front-end development —
          one component at a time.
        </p>

        <div className="hero-cta">
          <a href="#Projects" className="btn-primary" id="hero-view-projects-btn">
            View Projects ✦
          </a>
          <a href="#Contact" className="btn-outline" id="hero-contact-btn">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <span className="footer-heart">♥</span> by Angelo Gabriel &mdash; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="app">
      {/* Animated background */}
      <div className="bg-canvas">
        <div className="bg-grid"></div>
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
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