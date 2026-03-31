import { Link } from 'react-router-dom'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="cta__bg" />
      <div className="cta__overlay" />
      <div className="container cta__content fade-up">
        <h2 className="cta__heading">Ready for a Yard You're Proud Of?</h2>
        <p className="cta__sub">
          Get your free estimate today — no obligation, no hassle.
        </p>
        <div className="cta__actions">
          <Link to="/estimate" className="cta__btn cta__btn--call">
            Get Instant Estimate
          </Link>
          <a href="mailto:dominguezsilvino4@gmail.com" className="cta__btn cta__btn--email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
