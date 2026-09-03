import { useEffect, useRef, useState } from 'react'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-titlebar">
          <span className="modal-titlebar-title">{project.icon} {project.title}</span>
          <button className="modal-close-btn" onClick={onClose}>[X]</button>
        </div>

        <div className="modal-img-wrap">
          <img src={project.image} alt={project.title} className="modal-img" />
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <span className="modal-role">{project.role}</span>
            <span className="modal-badge">{project.badge}</span>
          </div>

          <p className="modal-desc">{project.description}</p>

          <div className="modal-tech">
            {project.tech.map((t, i) => (
              <span className="tech-tag" key={i}>{t}</span>
            ))}
          </div>

          <div className="modal-actions">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary">
                View on GitHub ↗
              </a>
            ) : (
              <span className="modal-coming-soon">&gt;&gt; COMING SOON...</span>
            )}
            <button className="btn-outline" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const ref = useRef(null)
  const [active, setActive] = useState(null)

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
      description: 'A full-featured payroll management system built as a capstone project. Handles employee records, salary computation, deductions, and payslip generation.',
      link: 'https://github.com/AdamCutie/SiaPayrollSystem',
      icon: '[=]',
      badge: 'Capstone',
      role: 'Front-End Dev',
      tech: ['JavaScript', 'Python', 'PowerShell', 'GitHub'],
      image: '/proj_payroll.jpg',
    },
    {
      title: 'QCU MerchMart',
      description: 'An e-commerce platform for QCU official merchandise. I led the full UI/UX design process — from wireframes to high-fidelity prototypes — creating a seamless shopping experience for students and university staff.',
      link: null,
      icon: '[M]',
      badge: 'Academic',
      role: 'UI/UX Designer',
      tech: ['Figma', 'UI/UX', 'Prototyping', 'Wireframing'],
      image: '/proj_merchmart.jpg',
    },
    {
      title: "Pawn's Quest",
      description: "An RPG-style quest-solving game where players control a chess pawn through puzzle-driven dungeon levels. Features turn-based combat, hand-crafted maps, NPC interactions, and a retro 8-bit art direction.",
      link: null,
      icon: '[P]',
      badge: 'Game Dev',
      role: 'Game Designer & Dev',
      tech: ['Game Design', 'RPG Mechanics', 'JavaScript', 'Canvas API'],
      image: '/proj_pawnsquest.jpg',
    },
    {
      title: 'React Calculator',
      description: 'A clean, interactive calculator built with React. Explores component state, event handling, and conditional rendering with a minimalist pixel-themed UI.',
      link: null,
      icon: '[C]',
      badge: 'In Progress',
      role: 'Front-End Dev',
      tech: ['React', 'CSS', 'Vite'],
      image: '/proj_calculator.jpg',
    },
    {
      title: 'Loudr',
      description: 'A modern web-based music streaming platform with high-fidelity audio playback, personalized recommendations, curated playlists, and real-time artist updates.',
      link: null,
      icon: '[L]',
      badge: 'In Progress',
      role: 'Front-End Dev',
      tech: ['React', 'CSS', 'JavaScript', 'Web Audio API'],
      image: '/proj_loudr.jpg',
    },
  ]

  return (
    <>
      <section id="Projects" className="section" ref={ref}>
        <div className="section-inner">
          <span className="section-label reveal">What I've Built</span>
          <h2 className="section-title reveal reveal-delay-1">Projects</h2>
          <div className="section-divider reveal reveal-delay-1"></div>

          <p className="projects-hint reveal reveal-delay-2">&gt; Click any card to view details</p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
                key={index}
                id={`project-card-${index}`}
                onClick={() => setActive(project)}
              >
                <div className="project-card-header">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-badge">{project.badge}</span>
                </div>

                <div className="project-thumb-wrap">
                  <img src={project.image} alt={project.title} className="project-thumb" />
                  <div className="project-thumb-overlay">
                    <span className="project-thumb-cta">[VIEW]</span>
                  </div>
                </div>

                <div className="project-card-body">
                  <span className="project-role">{project.role}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span className="tech-tag" key={i}>{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </>
  )
}

export default Projects