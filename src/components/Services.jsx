import './Services.css'

const services = [
  { img: '/08_lawn_maintenance.png', icon: '🌱', title: 'Lawn Maintenance', desc: 'Regular mowing, edging, and fertilization to keep your lawn pristine all year long.' },
  { img: '/06_sprinkler_system.png', icon: '💧', title: 'Sprinkler Systems', desc: 'Custom sprinkler design, installation, and repair for reliable, even coverage.' },
  { img: '/07_tree_service.png', icon: '🌳', title: 'Tree Services', desc: 'Professional trimming, removal, and stump grinding by experienced crews.' },
  { img: '/04_yard_cleanup.png', icon: '🍂', title: 'Yard Clean-Ups', desc: 'Seasonal debris removal and overgrowth cleanup for a fresh, tidy property.' },
  { img: '/03_sod_installation.png', icon: '🏡', title: 'Sod Installation', desc: 'Premium sod laid with care for an instant, lush green lawn transformation.' },
  { img: '/01_weed_control.png', icon: '🧹', title: 'Weed Control', desc: 'Targeted weed management that eliminates unwanted growth without harming your lawn.' },
]

export default function Services() {
  return (
    <section id="services" className="services fade-up">
      <div className="container">
        <p className="services__eyebrow">What We Do</p>
        <h2 className="services__heading sh__heading">Our <span className="sh__outline">Services</span></h2>
        <div className="sh__line" />
        <p className="services__sub">
          Comprehensive lawn care and landscaping solutions for residential and
          commercial properties across the Central Valley.
        </p>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="svc-card stagger-child">
              <div className="svc-card__img">
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
              <div className="svc-card__body">
                <span className="svc-card__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
