import './TrustBar.css'

const items = [
  'Licensed, Insured & Bonded',
  'Brother-Owned LLC',
  'Free Estimates',
  'Fresno & Clovis',
  'Se Habla Español',
]

export default function TrustBar() {
  return (
    <section className="trust">
      <div className="container trust__grid">
        {items.map((item) => (
          <div key={item} className="trust__item">
            <span className="trust__check">✓</span>
            <p className="trust__title">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
