import './TrustBadges.css'

const badges = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    title: '5.0 ★★★★★',
    sub: '11 Reviews on Google',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" fill="#74c69d" stroke="#2d6a4f" strokeWidth="1.5"/>
        <rect x="9" y="14" width="6" height="7" rx="1" fill="#2d6a4f"/>
      </svg>
    ),
    title: 'Neighborhood Favorite',
    sub: '2022 · 2023 · 2024',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#74c69d"/>
        <circle cx="12" cy="9" r="3" fill="#fff"/>
      </svg>
    ),
    title: 'Serving Fresno Since 2010',
    sub: 'Family Owned & Operated',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="#74c69d"/>
      </svg>
    ),
    title: 'Se Habla Español',
    sub: 'English & Spanish Service',
  },
]

export default function TrustBadges() {
  return (
    <section className="badges fade-up">
      <div className="container">
        <h2 className="badges__heading">Trusted &amp; Recognized By</h2>
        <div className="badges__row">
          {badges.map((b) => (
            <div key={b.title} className="badges__card">
              <div className="badges__icon">{b.icon}</div>
              <p className="badges__title">{b.title}</p>
              <p className="badges__sub">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
