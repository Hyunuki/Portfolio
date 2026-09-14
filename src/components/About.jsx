import { useEffect, useRef } from 'react'
import avatarPlaceholder from '../assets/avatar_placeholder.jpg'

function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal') || []
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const roles = [
    { icon: '🎨', label: 'UI/UX Web Designer' },
    { icon: '💻', label: 'Front-End Dev' },
    { icon: '🛠', label: 'IT Support' },
    { icon: '📋', label: 'Work Professional Ethic' },
  ]

  const skills = [
    '⚛ React', '🌐 HTML5', '🎨 CSS3', '🟡 JavaScript',
    '🔷 TypeScript', '📦 Vite', '🐙 Git & GitHub', '💻 VS Code',
    '✏ Figma', '🖼 UI/UX Design'
  ]

  return (
    <section id="About" className="section" ref={ref}>
      <div className="section-inner">
        <span className="section-label reveal">Who I Am</span>
        <h2 className="section-title reveal reveal-delay-1">About Me</h2>
        <div className="section-divider reveal reveal-delay-1"></div>

        {/* ── Layout: photo + bio ── */}
        <div className="about-layout reveal reveal-delay-2">
          {/* Avatar */}
          <div className="about-avatar-wrap">
            <img
              src={`/Picture.jpg`}
              className="about-avatar"
              id="about-avatar-img"
            />

          </div>

          {/* Bio */}
          <div>
            <p style={{ fontFamily: "'VT323', monospace", fontSize: '1.4rem', color: '#5a5656ff', lineHeight: '1.7', maxWidth: '620px' }}>
              Hey! I'm <strong style={{ color: '#111' }}>Angelo Gabriel</strong> — a front-end developer
              and UI/UX designer passionate about crafting beautiful, user-friendly web experiences.
              I'm currently learning React and building this portfolio to document
              my growth and showcase the projects I'm proud of.
            </p>

            {/* Role badges */}
            <div className="role-tags" id="skills">
              {roles.map((r, i) => (
                <span className="role-tag" key={i} id={`role-tag-${i}`}>
                  <span className="role-tag-icon">{r.icon}</span>
                  {r.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Skills strip ── */}
        <span className="section-label reveal reveal-delay-2" style={{ marginTop: '2.5rem', display: 'block' }}>
          Tech Stack
        </span>
        <div className="skills-strip reveal reveal-delay-3">
          {skills.map((skill, i) => (
            <span className="skill-tag" key={i}>{skill}</span>
          ))}
        </div>

        {/* ── Stats ── */}
        <div className="about-stats reveal reveal-delay-3">
          <div className="stat-card">
            <div className="stat-number">5</div>
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