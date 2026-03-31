import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const words = ['Our Passion.', 'Our Business.', 'Our Craft.', 'Perfected.']

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
        src="/hero-image.png"
        alt=""
        loading="eager"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="hero__overlay" />

      <div className="container hero__content">
        <img
          src="/lawncare-bros-logo.png"
          alt="The Lawncare Bros LLC"
          className="hero__logo"
        />

        <h1 className="hero__title">
          Your Yard,<br />
          <em className={`hero__cycle ${fade ? 'hero__cycle--in' : 'hero__cycle--out'}`}>
            {words[index]}
          </em>
        </h1>

        <p className="hero__sub">
          Fresno's brother-owned lawn and landscaping crew. Weekly maintenance,
          sod installs, irrigation, and more — done right every time.
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
