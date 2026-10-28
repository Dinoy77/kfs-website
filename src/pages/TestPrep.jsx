import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { testPrep as t } from '../data/testprep.js'
import { site, whatsappLink } from '../data/site.js'
import './Home.css'
import './About.css'
import './TestPrep.css'

const featureIcons = [
  'M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6.8 9.2V16c0 1.7 3 4 6.8 4s6.8-2.3 6.8-4v-3.8L12 16l-6.8-3.8z',
  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 4v2h10V7H7zm0 4v2h10v-2H7zm0 4v2h6v-2H7z',
  'M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.4 0 8 2 8 4.5V20H4v-3.5C4 14 7.6 12 12 12z',
  'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z',
]

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function TestPrep() {
  useEffect(() => {
    document.title = `KEAM & NEET ${t.title} | ${site.name}`
  }, [])

  return (
    <>
      <PageBanner title={t.title} crumb="Test Preparation" />

      {/* Intro + jump cards */}
      <section className="tp-intro">
        <div className="wrap">
          <div className="tp-head">
            <p className="sv-kicker">{t.kicker}</p>
            <h2 className="sv-title">{t.headline}</h2>
            <p className="tp-lead">{t.intro}</p>
          </div>
          <div className="tp-jump">
            {t.exams.map((e) => (
              <a key={e.id} href={`#${e.id}`} className="tp-jump-card">
                <strong>{e.short}</strong>
                <span>{e.name}</span>
                <em>See details ↓</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* One section per exam */}
      {t.exams.map((e, i) => (
        <section key={e.id} id={e.id} className={`tp-exam ${i % 2 ? 'is-alt' : ''}`} aria-labelledby={`${e.id}-title`}>
          <div className="wrap tp-exam-grid">
            <div>
              <p className="tp-badge">{e.short}</p>
              <h2 id={`${e.id}-title`} className="tp-exam-title">{e.name}</h2>
              <p className="tp-by">Conducted by {e.conductedBy}</p>
              <p className="tp-text">{e.about}</p>

              <h3 className="tp-h3">Courses</h3>
              <ul className="tp-courses">
                {e.courses.map((c) => <li key={c}>{c}</li>)}
              </ul>

              <a className="tp-official" href={e.officialUrl} target="_blank" rel="noreferrer">
                {e.officialLabel} ↗
              </a>
            </div>

            <div className="tp-help">
              <h3>How we help with {e.short}</h3>
              <ul>
                {e.help.map((h) => (
                  <li key={h}><span className="tp-check"><Check /></span>{h}</li>
                ))}
              </ul>
              <a
                className="ap-btn ap-btn-red"
                href={whatsappLink(`Hi, I want to know about ${e.short} coaching at Kerala Finishing School`)}
                target="_blank"
                rel="noreferrer"
              >
                Ask about {e.short} batches
              </a>
            </div>
          </div>
        </section>
      ))}

      {/* Common features */}
      <section className="sv tp-features" aria-labelledby="tp-f-title">
        <div className="wrap">
          <div className="sv-head">
            <h2 id="tp-f-title" className="sv-title">{t.featuresTitle}</h2>
          </div>
          <ul className="tp-f-grid">
            {t.features.map((f, i) => (
              <li key={f.title}>
                <span className="sv-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d={featureIcons[i % featureIcons.length]} /></svg>
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ap-cta">
        <div className="wrap ap-cta-inner">
          <div>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
          </div>
          <div className="ap-cta-actions">
            <a className="ap-btn ap-btn-red" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
            <Link className="ap-btn ap-btn-line" to="/contact">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}