import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo">
          <span className="nav__logo-dls">DLS</span>
          <span className="nav__logo-sub">Lawn Services</span>
        </Link>

        <button
          className={`nav__hamburger ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`nav__menu ${open ? 'open' : ''}`}>
          <ul className="nav__links">
            <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
            <li><a href="#reviews" onClick={() => setOpen(false)}>Reviews</a></li>
            <li><a href="#areas" onClick={() => setOpen(false)}>Areas</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
          <Link to="/estimate" className="nav__estimate" onClick={() => setOpen(false)}>
            Get Instant Estimate
          </Link>
          <a href="tel:5592602945" className="nav__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            (559) 260-2945
          </a>
        </div>
      </div>
    </nav>
  )
}
