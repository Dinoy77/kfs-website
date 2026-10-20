import { Link } from 'react-router-dom'
import { services } from '../data/home.js'

const icons = {
  cap: (
    <path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6.8 9.2V16c0 1.7 3 4 6.8 4s6.8-2.3 6.8-4v-3.8L12 16l-6.8-3.8z" />
  ),
  wallet: (
    <path d="M3 6a3 3 0 0 1 3-3h12v3h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0 0 2h10V5H6zm10 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
  ),
  university: (
    <path d="M12 2 2 7v2h20V7L12 2zM4 11v7h3v-7H4zm6.5 0v7h3v-7h-3zM17 11v7h3v-7h-3zM2 20v2h20v-2H2z" />
  ),
}

export default function ServicesSection() {
  return (
    <section className="sv" aria-labelledby="sv-title">
      <div className="wrap">
        <div className="sv-head">
          <p className="sv-kicker">{services.kicker}</p>
          <h2 id="sv-title" className="sv-title">{services.title}</h2>
        </div>

        <div className="sv-grid">
          {services.items.map((s) => (
            <article key={s.title} className="sv-card">
              <span className="sv-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">{icons[s.icon]}</svg>
              </span>
              <h3 className="sv-card-title">{s.title}</h3>
              <p className="sv-card-text">{s.text}</p>
              <Link to={s.link} className="sv-btn">
                Read more<span className="sr-only"> about {s.title}</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="sv-all">
          <Link to={services.allLink} className="sv-all-link">{services.allText}</Link>
        </div>
      </div>
    </section>
  )
}