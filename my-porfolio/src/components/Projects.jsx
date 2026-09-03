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
      icon: '[=]',
      badge: 'Capstone',
      role: 'Front-End Dev',
      tech: ['JavaScript', 'Python', 'PowerShell', 'GitHub'],
      status: 'Live',
      year: '2nd Year'
    },
    {
      title: 'QCU MerchMart',
      description: 'An e-commerce platform for QCU official merchandise. Designed the full UI/UX — from wireframes and prototypes to the final visual interface — creating a seamless shopping experience for students and staff.',
      link: null,
      icon: '[M]',
      badge: 'Academic',
      role: 'UI/UX Designer',
      tech: ['Figma', 'UI/UX', 'Prototyping', 'Wireframing'],
      status: 'Done',
      year: '2nd Year'
    },
    {
      title: "Pawn's Quest",
      description: "An RPG-style quest-solving game where players take on the role of a pawn navigating through puzzle-driven levels. Features turn-based mechanics, hand-crafted level design, and a retro 8-bit art direction.",
      link: null,
      icon: '[P]',
      badge: 'Game Dev',
      role: 'Game Designer & Dev',
      tech: ['Game Design', 'RPG Mechanics', 'JavaScript', 'Canvas'],
      status: 'Done',
      year: '2nd Year'
    },
    {
      title: 'React Calculator',
      description: 'A clean, interactive calculator built with React — exploring component state, event handling, and UI logic.',
      link: null,
      icon: '[C]',
      badge: 'In Progress',
      role: 'Front-End Dev',
      tech: ['React', 'CSS', 'Vite'],
      status: 'Soon',
      year: '2nd Year'
    },
    {
      title: 'Loudr',
      description: 'A modern web-based music streaming platform designed to make discovering, streaming, and sharing music seamless — with high-fidelity audio and personalized recommendations.',
      link: null,
      icon: '[L]',
      badge: 'In Progress',
      role: 'Front-End Dev',
      tech: ['React Native', 'CSS', 'JavaScript'],
      status: 'Soon',
      year: '2nd Year'
    }
  ]

  // Group by academic year
  const grouped = projects.reduce((acc, p) => {
    if (!acc[p.year]) acc[p.year] = []
    acc[p.year].push(p)
    return acc
  }, {})

  const yearOrder = ['1st Year', '2nd Year', '3rd Year', '4th Year']
  const sortedYears = Object.keys(grouped).sort(
    (a, b) => yearOrder.indexOf(a) - yearOrder.indexOf(b)
  )

  return (
    <section id="Projects" className="section" ref={ref}>
      <div className="section-inner">
        <span className="section-label reveal">What I've Built</span>
        <h2 className="section-title reveal reveal-delay-1">Projects</h2>
        <div className="section-divider reveal reveal-delay-1"></div>

        {sortedYears.map((year, yi) => (
          <div className={`year-group reveal reveal-delay-${yi + 1}`} key={year}>
            {/* Year header */}
            <div className="year-group-header">
              <span className="year-group-label">-- {year} --</span>
              <div className="year-group-line"></div>
            </div>

            {/* Cards */}
            <div className="projects-grid">
              {grouped[year].map((project, index) => (
                <div
                  className="project-card"
                  key={index}
                  id={`project-card-${yi}-${index}`}
                >
                  {/* OS title bar */}
                  <div className="project-card-header">
                    <div className="project-icon">{project.icon}</div>
                    <span className="project-badge">{project.badge}</span>
                  </div>

                  {/* Body */}
                  <div className="project-card-body">
                    <span className="project-role">{project.role}</span>
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
                        id={`project-link-${yi}-${index}`}
                      >
                        View on GitHub
                        <span className="project-link-arrow"> ↗</span>
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: "'VT323', monospace",
                        fontSize: '1.1rem',
                        color: '#999',
                        letterSpacing: '1px'
                      }}>
                        &gt;&gt; COMING SOON...
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects