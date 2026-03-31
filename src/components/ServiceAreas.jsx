import './ServiceAreas.css'

const areas = [
  'Fresno', 'Clovis', 'Sanger', 'Madera',
  'Selma', 'Reedley', 'Kerman', 'And More',
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="areas fade-up">
      <div className="container areas__grid">
        <div className="areas__content">
          <p className="areas__eyebrow">Service Areas</p>
          <h2 className="areas__heading sh__heading">Serving the Central <span className="sh__outline">Valley</span></h2>
          <div className="sh__line" style={{ margin: '0 0 0.75rem 0' }} />
          <p className="areas__text">
            DLS Lawn Services proudly serves homeowners and businesses throughout
            the greater Fresno area. From Clovis to Madera, Sanger to Kerman —
            if you're in the Central Valley, we've got you covered.
          </p>
          <div className="areas__tags">
            {areas.map((a) => (
              <span key={a} className="areas__tag">{a}</span>
            ))}
          </div>
        </div>

        <div className="areas__map">
          <iframe
            title="DLS Lawn Services - Fresno, CA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205281.0192739949!2d-119.93698!3d36.7468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3c0a0!2sFresno%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
