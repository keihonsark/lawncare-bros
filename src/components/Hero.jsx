import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const words = ['Done Right.', 'Transformed.', 'Perfected.', 'Looks Amazing.']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setFade(true)
      }, 400)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <img
        src="/Hero-image.png"
        alt=""
        loading="eager"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Proudly Serving Fresno &amp; Clovis
        </div>

        <h1 className="hero__title">
          Your Lawn,<br />
          <em className={`hero__cycle ${fade ? 'hero__cycle--in' : 'hero__cycle--out'}`}>
            {words[index]}
          </em>
        </h1>

        <p className="hero__sub">
          Premium lawn care, landscaping, and irrigation services — trusted by
          hundreds of Central Valley homeowners.
        </p>

        <div className="hero__buttons">
          <Link to="/estimate" className="hero__btn hero__btn--solid">
            Get a Free Estimate
          </Link>
          <a href="#services" className="hero__btn hero__btn--ghost">
            See Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
