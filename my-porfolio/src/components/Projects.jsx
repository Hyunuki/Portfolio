import { useEffect, useRef } from 'react'

function Projects() {
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

  const projects = [
    {
      title: 'SheEssentials Payroll System',
      description: 'A full-featured payroll management system built as a capstone project. Handles employee records, salary computation, and payslip generation.',
      link: 'https://github.com/AdamCutie/SiaPayrollSystem',
      icon: '💼',
      badge: 'Capstone',
      tech: ['JavaScript', 'Python', 'PowerShell', 'GitHub'],
      status: 'Live'
    },
    {
      title: 'React Calculator',
      description: 'A clean, interactive calculator built with React — exploring component state, event handling, and UI logic.',
      link: null,
      icon: '🧮',
      badge: 'In Progress',
      tech: ['React', 'CSS', 'Vite'],
      status: 'Soon'
    },
    {
      title: 'Loudr',
      description: 'Loudr is a modern, web-based music streaming platform designed to make discovering, streaming, and sharing music seamless. Combining high-fidelity audio playback with personalized recommendations, Loudr gives listeners instant access to millions of tracks, curated playlists, and real-time artist updates—all wrapped in a clean, intuitive web interface.',
      link: null,
      icon: '🎵',
      badge: 'In Progress',
      tech: ['React Native', 'CSS', 'JavaScript'],
      status: 'Soon'
    }
  ]

  return (
    <section id="Projects" className="section" ref={ref} style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="section-inner">
        <span className="section-label reveal">What I've Built</span>
        <h2 className="section-title reveal reveal-delay-1">Projects</h2>
        <div className="section-divider reveal reveal-delay-1"></div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card reveal reveal-delay-${index + 1}`}
              key={index}
              id={`project-card-${index}`}
            >
              <div className="project-card-header">
                <div className="project-icon">{project.icon}</div>
                <span className="project-badge">{project.badge}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-tag" key={i}>{t}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  id={`project-link-${index}`}
                >
                  View on GitHub
                  <span className="project-link-arrow">↗</span>
                </a>
              ) : (
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  🚧 Coming soon...
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects