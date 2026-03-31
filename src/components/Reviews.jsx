import './Reviews.css'

const reviews = [
  {
    name: 'Jorge G.',
    text: 'I had really overgrown grass and weeds everywhere, and Silvino came through and took care of it fast. He was super friendly, professional, and clearly knows what he\'s doing. Highly recommend.',
  },
  {
    name: 'Theresa B.',
    text: 'I\'m a new mom and my husband is a recent amputee. DLS showed our lawns some love for a very reasonable price. We can\'t wait to have them back every week.',
  },
  {
    name: 'Citlalli G.',
    text: 'My experience with DLS Lawn Services is consistently outstanding. My lawn always looks impeccable, they are very punctual, and they communicate effectively.',
  },
  {
    name: 'Lilia L.',
    text: 'Silvino came that same afternoon, gave me a fair price, came the next day as agreed, and did an excellent job. He speaks Spanish too!',
  },
  {
    name: 'Oliver S.',
    text: 'I really recommend DLS lawn services — they did a really good job and were very professional. I would definitely call them again.',
  },
  {
    name: 'Clarin B.',
    text: 'They get the job done on time at a very affordable price. So kind with great communication.',
  },
  {
    name: 'Fabiola E.',
    text: 'I personally recommend his landscaping service. He\'s a very loyal gentleman, always on time.',
  },
  {
    name: 'Medina C.',
    text: 'I had very overgrown grass, and after he finished it looked brand new. I recommend DLS lawn services.',
  },
  {
    name: 'Verónica S.',
    text: 'I contacted DLS for some gardening work and their services met my requirements. Excellent work.',
  },
]

const row1 = reviews.slice(0, 5)
const row2 = reviews.slice(4)

function Stars() {
  return (
    <div className="rev__stars">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#f5a623">
          <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ r }) {
  return (
    <div className="rev__card">
      <Stars />
      <p className="rev__text">&ldquo;{r.text}&rdquo;</p>
      <div className="rev__author">
        <div className="rev__avatar">{r.name[0]}</div>
        <div>
          <span className="rev__author-name">{r.name}</span>
          <span className="rev__author-source">Google Review &middot; Fresno, CA</span>
        </div>
      </div>
    </div>
  )
}

function MarqueeRow({ items, direction }) {
  const doubled = [...items, ...items]
  return (
    <div className={`rev__marquee rev__marquee--${direction}`}>
      <div className="rev__marquee-track">
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="rev fade-up">
      <div className="container">
        <p className="rev__eyebrow">What People Say</p>
        <h2 className="rev__heading sh__heading">Our <span className="sh__outline">Reviews</span></h2>
        <div className="sh__line" />

        <div className="rev__google-badge">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="rev__google-score">5.0</span>
          <span className="rev__google-stars">★★★★★</span>
          <span className="rev__google-count">11 Reviews</span>
        </div>
      </div>

      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  )
}
