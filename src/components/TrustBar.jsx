import './TrustBar.css'

export default function TrustBar() {
  return (
    <section className="trust">
      <div className="container trust__grid">
        <div className="trust__item">
          <span className="trust__icon">⭐</span>
          <div>
            <p className="trust__title">5-Star Rated</p>
            <p className="trust__sub">Google Reviews</p>
          </div>
        </div>
        <div className="trust__item">
          <span className="trust__icon">🌿</span>
          <div>
            <p className="trust__title">Family Owned</p>
            <p className="trust__sub">Local &amp; Accountable</p>
          </div>
        </div>
        <div className="trust__item">
          <span className="trust__icon">📋</span>
          <div>
            <p className="trust__title">Free Estimates</p>
            <p className="trust__sub">No Obligation</p>
          </div>
        </div>
        <div className="trust__item">
          <span className="trust__icon">📍</span>
          <div>
            <p className="trust__title">Fresno &amp; Clovis</p>
            <p className="trust__sub">+ Surrounding Areas</p>
          </div>
        </div>
        <div className="trust__item">
          <span className="trust__icon trust__icon--svg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="#74c69d"/>
            </svg>
          </span>
          <div>
            <p className="trust__title">Se Habla Español</p>
            <p className="trust__sub">Bilingual Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}
