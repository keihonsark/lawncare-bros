import './TrustBar.css'

const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.9 5.87 6.48.94-4.69 4.57 1.11 6.44L12 16.77l-5.8 3.05 1.11-6.44L2.62 8.81l6.48-.94L12 2z" fill="#74c69d"/>
      </svg>
    ),
    title: '5-Star Rated',
    sub: 'Google Reviews',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V10.5z" fill="#74c69d"/>
        <rect x="9" y="14" width="6" height="7" rx="1" fill="#1b4332"/>
      </svg>
    ),
    title: 'Family Owned',
    sub: 'Local & Accountable',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#74c69d" strokeWidth="2" fill="none"/>
        <path d="M8 12l3 3 5-5.5" stroke="#74c69d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Free Estimates',
    sub: 'No Obligation',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#74c69d"/>
        <circle cx="12" cy="9" r="2.5" fill="#1b4332"/>
      </svg>
    ),
    title: 'Fresno & Clovis',
    sub: '+ Surrounding Areas',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" fill="#74c69d"/>
      </svg>
    ),
    title: 'Se Habla Español',
    sub: 'Bilingual Service',
  },
]

export default function TrustBar() {
  return (
    <section className="trust">
      <div className="container trust__grid">
        {items.map((item) => (
          <div key={item.title} className="trust__item">
            <span className="trust__icon">{item.icon}</span>
            <div>
              <p className="trust__title">{item.title}</p>
              <p className="trust__sub">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
