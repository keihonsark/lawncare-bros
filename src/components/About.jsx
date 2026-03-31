import './About.css'

const checks = [
  'Licensed & Insured',
  'Free On-Site Estimates',
  'Family Owned & Operated',
  'Reliable, On-Time Service',
  'Competitive Pricing',
  'Bilingual (English & Spanish)',
]

export default function About() {
  return (
    <section className="about fade-up" id="about">
      <div className="container about__grid">
        <div className="about__images">
          <img
            src="/02_hero_lawn_home.png"
            alt="Beautiful lawn"
            className="about__img-main"
          />
          <img
            src="/08_lawn_maintenance.png"
            alt="Lawn maintenance"
            className="about__img-small"
          />
          <div className="about__badge about__badge--circle">
            <span className="about__badge-num">10+</span>
            <span className="about__badge-text">Years Serving Fresno</span>
          </div>
        </div>

        {/* Mobile-only single image + pill */}
        <div className="about__mobile-img">
          <img src="/02_hero_lawn_home.png" alt="Beautiful lawn" />
          <div className="about__badge about__badge--pill">
            10+ Years Serving Fresno
          </div>
        </div>

        <div className="about__content">
          <div className="about__nextdoor-badge">
            <span>🌿 Neighborhood Favorite 2022 &middot; 2023 &middot; 2024</span>
          </div>
          <p className="about__eyebrow">About DLS Lawn Services</p>
          <h2 className="about__heading sh__heading">We Take Pride In Every <span className="sh__outline">Yard</span></h2>
          <div className="sh__line sh--left" style={{ margin: '0 0 0.75rem 0' }} />
          <p className="about__text">
            Founded by Silvino Dominguez, DLS Lawn Services is a family-owned
            business built on hard work, integrity, and a genuine love for
            transforming outdoor spaces. For over a decade, we've helped
            homeowners and businesses across Fresno, Clovis, and the Central
            Valley maintain beautiful, healthy landscapes they can be proud of.
          </p>
          <p className="about__text">
            From routine mowing to full landscape overhauls, we treat every
            property like it's our own — because your satisfaction is what keeps
            our family business growing.
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
