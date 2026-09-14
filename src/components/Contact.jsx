import { useEffect, useRef, useState } from 'react'

function Contact() {
  const ref = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal') || []
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="Contact" className="section" ref={ref}>
      <div className="section-inner">
        <span className="section-label reveal">Get In Touch</span>
        <h2 className="section-title reveal reveal-delay-1">Contact</h2>
        <div className="section-divider reveal reveal-delay-1"></div>

        <div className="contact-wrapper">
          {/* Left: Info */}
          <div className="reveal reveal-delay-2">
            <p className="contact-text">
              I'm always open to connecting with fellow developers, potential collaborators,
              or anyone curious about what I'm building. Feel free to reach out! 🚀
            </p>

            <div className="contact-cards">
              <a
                href="mailto:angelopanes4@gmail.com"
                className="contact-card"
                id="contact-email-link"
              >
                <div className="contact-card-icon email">📧</div>
                <div>
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">angelopanes4@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/Hyunuki"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                id="contact-github-link"
              >
                <div className="contact-card-icon github">🐙</div>
                <div>
                  <div className="contact-card-label">GitHub</div>
                  <div className="contact-card-value">github.com/Hyunuki</div>
                </div>
              </a>

              <a
                href="https://www.facebook.com/Angelopanes4"
                className="contact-card"
                id="contact-email-link"
              >
                <div className="contact-card-icon facebook">📘</div>
                <div>
                  <div className="contact-card-label">Facebook</div>
                  <div className="contact-card-value">facebook.com/Angelopanes4</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/_g.loe/"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                id="contact-instagram-link"
              >
                <div className="contact-card-icon instagram">📷</div>
                <div>
                  <div className="contact-card-label">Instagram</div>
                  <div className="contact-card-value">instagram.com/_g.loe/</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact