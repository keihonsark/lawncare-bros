import './About.css'

const checks = [
  'Licensed, Insured & Bonded',
  'Brother-Owned Family Business',
  'Weekly & Bi-Weekly Plans',
  'Free On-Site Estimates',
  'Bilingual Service (English & Spanish)',
]

export default function About() {
  return (
    <section className="about fade-up" id="about">
      <div className="container about__grid">
        <div className="about__images">
          <img
            src="/hero-image.png"
            alt="Beautiful lawn"
            className="about__img-main"
          />
          <img
            src="/hero-image.png"
            alt="Lawn maintenance"
            className="about__img-small"
          />
          <div className="about__badge about__badge--circle">
            <span className="about__badge-num">10+</span>
            <span className="about__badge-text">Years of Experience</span>
          </div>
        </div>

        {/* Mobile-only single image + pill */}
        <div className="about__mobile-img">
          <img src="/hero-image.png" alt="Beautiful lawn" />
          <div className="about__badge about__badge--pill">
            10+ Years of Experience
          </div>
        </div>

        <div className="about__content">
          <div className="about__nextdoor-badge">
            <span>⭐ Top-Rated on Google &amp; Facebook</span>
          </div>
          <p className="about__eyebrow">About The Lawncare Bros</p>
          <h2 className="about__heading sh__heading" style={{ fontWeight: 800 }}>Two <span style={{ color: '#4caf6e' }}>Brothers.</span> One <span style={{ color: '#4caf6e' }}>Mission.</span> 💪</h2>
          <div className="sh__line sh--left" style={{ margin: '0 0 0.75rem 0' }} />
          <p className="about__text">
            The Lawncare Bros LLC is a family business built on hard work, loyalty,
            and pride in every yard we touch. As a licensed, insured, and bonded LLC,
            we bring professional-grade results to homeowners across Fresno and Clovis.
            From routine mowing to full landscape transformations — we treat every
            property like it's our own.
          </p>

          <ul className="about__checks">
            {checks.map((item) => (
              <li key={item}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="var(--green-light)" fillOpacity="0.25" />
                  <path d="M6 10l3 3 5-5.5" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
