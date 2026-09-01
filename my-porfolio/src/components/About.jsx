import { useEffect, useRef } from 'react'

function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    const els = ref.current?.querySelectorAll('.reveal') || []
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const skills = [
    '⚛️ React', '🌐 HTML5', '🎨 CSS3', '🟨 JavaScript',
    '🟦 TypeScript', '📦 Vite', '🐙 Git & GitHub', '💻 VS Code'
  ]

  return (
    <section id="About" className="section" ref={ref}>
      <div className="section-inner">
        <span className="section-label reveal">Who I Am</span>
        <h2 className="section-title reveal reveal-delay-1">About Me</h2>
        <div className="section-divider reveal reveal-delay-1"></div>

        <p className="reveal reveal-delay-2" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '680px' }}>
          Hey! I'm <strong style={{ color: 'var(--text-primary)' }}>Angelo Gabriel</strong> — a front-end developer
          passionate about crafting beautiful, user-friendly web experiences.
          I'm currently learning React and building this portfolio to document
          my growth and showcase the projects I'm proud of.
        </p>

        <div className="skills-strip reveal reveal-delay-3">
          {skills.map((skill, i) => (
            <span className="skill-tag" key={i}>{skill}</span>
          ))}
        </div>

        <div className="about-stats reveal reveal-delay-3">
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Coffee Consumed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Passion</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About