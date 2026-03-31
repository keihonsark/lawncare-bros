import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="cta__bg" />
      <div className="cta__overlay" />
      <div className="container cta__content fade-up">
        <h2 className="cta__heading">Ready to Transform Your Yard?</h2>
        <p className="cta__sub">
          Call or text the Bros today for a free on-site estimate — no pressure, no obligation.
        </p>
        <div className="cta__actions">
          <a href="tel:5594583592" className="cta__btn cta__btn--call">
            Call (559) 458-3592
          </a>
          <a href="#contact" className="cta__btn cta__btn--email">
            Send a Message →
          </a>
        </div>
      </div>
    </section>
  )
}
