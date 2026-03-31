import './Services.css'

const services = [
  { img: '/08_lawn_maintenance.png', icon: '🌱', title: 'Lawn Maintenance', desc: 'Mowing, edging, trimming, and blowing. Weekly and bi-weekly plans to keep your lawn sharp all season.' },
  { img: '/03_sod_installation.png', icon: '🏡', title: 'Sod & Turf Installation', desc: 'Fresh sod laid professionally for an instant lush lawn. We handle prep, install, and aftercare.' },
  { img: '/06_sprinkler_system.png', icon: '💧', title: 'Irrigation Systems', desc: 'Sprinkler and drip system installation and repair for efficient, reliable watering.' },
  { img: '/mulch.png', icon: '🪨', title: 'Mulch & River Rock', desc: 'Decorative ground cover installation to protect your plants and boost curb appeal.' },
  { img: '/07_tree_service.png', icon: '🌳', title: 'Tree & Stump Services', desc: 'Professional tree trimming, removal, and stump grinding by experienced crews.' },
  { img: '/landscape-hardscape.png', icon: '🏗️', title: 'Landscaping & Hardscape', desc: 'Full landscaping, cement work, gardening, and construction services.' },
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
