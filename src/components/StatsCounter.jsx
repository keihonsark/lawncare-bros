import { useEffect, useRef, useState } from 'react'
import './StatsCounter.css'

function CountUp({ end, suffix = '', duration = 1600 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref} className="stats__num">
      {value}{suffix}
    </span>
  )
}

const stats = [
  {
    end: 7,
    suffix: '',
    label: '5-Star Google Reviews',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l5.18 10.5 11.58 1.68-8.38 8.17 1.98 11.53L24 30.27l-10.36 5.45 1.98-11.53-8.38-8.17 11.58-1.68L24 4z" fill="#4caf6e"/>
      </svg>
    ),
  },
  {
    end: 10,
    suffix: '+',
    label: 'Years of Experience',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#4caf6e" strokeWidth="2.5" fill="none"/>
        <path d="M24 14v12l8 4" stroke="#4caf6e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    end: 100,
    suffix: '%',
    label: 'Satisfaction Guaranteed',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M24 6C14.06 6 6 14.06 6 24s8.06 18 18 18 18-8.06 18-18S33.94 6 24 6z" stroke="#4caf6e" strokeWidth="2.5" fill="none"/>
        <path d="M16 24l6 6 10-11" stroke="#4caf6e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function StatsCounter() {
  return (
    <section className="stats fade-up">
      <div className="container stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <div className="stats__icon">{s.icon}</div>
            <CountUp end={s.end} suffix={s.suffix} />
            <span className="stats__counting">AND COUNTING</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
