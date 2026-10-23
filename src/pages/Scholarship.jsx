import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { scholarship as s } from '../data/scholarship.js'
import { site, whatsappLink } from '../data/site.js'
import './Home.css'
import './About.css'
import './Scholarship.css'

const icons = {
  fees: 'M4 6h16v12H4zM4 10h16M8 15h3',
  hostel: 'M3 20V9l9-5 9 5v11M9 20v-6h6v6',
  stipend: 'M12 3v18M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 2.6 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3',
  laptop: 'M5 6h14v9H5zM2.5 18h19',
}

function Icon({ name }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path d={icons[name]} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Scholarship() {
  const [photoMissing, setPhotoMissing] = useState(false)

  useEffect(() => {
    document.title = `${s.title} | ${site.name}`
  }, [])

  return (
    <>
      <PageBanner title={s.title} parent={{ label: 'Services', to: '/programs' }} />

      {/* Intro: photo + text + quick facts */}
      <section className="sc-intro">
        <div className="wrap sc-intro-grid">
          <div className="sc-photo">
            {photoMissing ? (
              <span className="ab-missing">Add <code>public{s.photo}</code></span>
            ) : (
              <img src={s.photo} alt={s.photoAlt} onError={() => setPhotoMissing(true)} />
            )}
            <div className="sc-photo-badge">
              <strong>100%</strong>
              <span>Scholarship</span>
            </div>
          </div>

          <div className="sc-intro-copy">
            <p className="sc-tag">{s.tag}</p>
            <p className="sc-ml" lang="ml">{s.malayalam}</p>
            <h2 className="sc-headline">{s.headline}</h2>
            <p className="sc-text">{s.intro}</p>
            <p className="sc-quote">{s.quote}</p>

            <dl className="sc-facts">
              {s.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="sc-actions">
              <a className="ap-btn ap-btn-red" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
              <a className="ap-btn ap-btn-line" href={whatsappLink('Hi, I want to know about the B-Pharm Lateral Entry scholarship')} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is covered */}
      <section className="sc-covers" aria-labelledby="sc-covers-title">
        <div className="wrap">
          <div className="sc-head">
            <h2 id="sc-covers-title">{s.coversTitle}</h2>
            <p>{s.coversText}</p>
          </div>
          <ul className="sc-cover-list">
            {s.covers.map((c) => (
              <li key={c.title}>
                <span className="sc-cover-icon"><Icon name={c.icon} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who can apply */}
      <section className="sc-who" aria-labelledby="sc-who-title">
        <div className="wrap sc-who-grid">
          <div>
            <h2 id="sc-who-title" className="sc-h2">{s.whoTitle}</h2>
            <ul className="sc-conditions">
              {s.conditions.map((c) => (
                <li key={c}><span className="sc-check"><Check /></span>{c}</li>
              ))}
            </ul>
          </div>
          <div className="sc-cats-card">
            <p className="sc-cats-label">{s.categoriesLabel}</p>
            <ul className="sc-cats">
              {s.categories.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <p className="sc-limited">{s.limitedNote}</p>
          </div>
        </div>
      </section>

      {/* Call band */}
      <section className="sc-cta">
        <div className="wrap sc-cta-inner">
          <div>
            <h2>{s.ctaTitle}</h2>
            <p>{s.ctaText}</p>
          </div>
          <div className="sc-cta-actions">
            <a className="sc-cta-phone" href={`tel:${site.mobile.tel}`}>
              <span>Hotline</span>
              {site.mobile.display}
            </a>
            <Link className="ap-btn sc-btn-white" to="/contact">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}