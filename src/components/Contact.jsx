import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact fade-up">
      <div className="container contact__grid">
        <div className="contact__info">
          <p className="contact__eyebrow">Get In Touch</p>
          <h2 className="contact__heading sh__heading">Contact <span className="sh__outline">Us</span></h2>
          <div className="sh__line" style={{ margin: '0 0 0.75rem 0' }} />
          <p className="contact__text">
            Have a question or ready to schedule? Reach out and we'll get back
            to you within 24 hours.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <p className="contact__detail-label">Phone</p>
                <a href="tel:5592602945" className="contact__detail-value">(559) 260-2945</a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              </div>
              <div>
                <p className="contact__detail-label">Email</p>
                <a href="mailto:dominguezsilvino4@gmail.com" className="contact__detail-value">dominguezsilvino4@gmail.com</a>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <p className="contact__detail-label">Hours</p>
                <p className="contact__detail-value">Mon – Sun: 6:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="contact__form"
          action="https://formspree.io/f/xpqodbdv"
          method="POST"
        >
          <div className="contact__form-row">
            <div className="contact__field">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="contact__field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="contact__field">
            <label htmlFor="service">Service</label>
            <select id="service" name="service" defaultValue="">
              <option value="" disabled>Select a service...</option>
              <option>Lawn Maintenance</option>
              <option>Mowing and Trimming</option>
              <option>Edging</option>
              <option>Aeration</option>
              <option>Weed Control</option>
              <option>Fertilizer Application</option>
              <option>Mulching</option>
              <option>Sod Installation</option>
              <option>Sod Removal</option>
              <option>Tree Trimming</option>
              <option>Tree Removal</option>
              <option>Stump Grinding</option>
              <option>Sprinkler Systems</option>
              <option>Drip Irrigation</option>
            </select>
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." />
          </div>

          <button type="submit" className="contact__submit">
            Send Message
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </form>
      </div>
    </section>
  )
}
