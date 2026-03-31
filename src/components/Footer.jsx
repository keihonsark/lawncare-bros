import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-dls">DLS</span>
            <span className="footer__logo-sub">Lawn Services</span>
          </div>
          <p className="footer__desc">
            Professional lawn care, landscaping, and irrigation services trusted
            by Central Valley homeowners for over a decade.
          </p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Lawn Maintenance</a></li>
            <li><a href="#services">Sprinkler Systems</a></li>
            <li><a href="#services">Tree Services</a></li>
            <li><a href="#services">Sod Installation</a></li>
            <li><a href="#services">Weed Control</a></li>
            <li><a href="#services">Yard Clean-Ups</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:5592602945">(559) 260-2945</a></li>
            <li><a href="mailto:dominguezsilvino4@gmail.com">dominguezsilvino4@gmail.com</a></li>
            <li>Fresno & Clovis, CA</li>
            <li>Mon – Sun: 6AM – 9PM</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; 2025 DLS Lawn Services &middot; Fresno, CA</p>
          <p>
            Site by{' '}
            <a href="https://sark.agency" target="_blank" rel="noopener noreferrer">
              SARK Agency
            </a>{' '}
            &middot; sark.agency
          </p>
        </div>
      </div>
    </footer>
  )
}
