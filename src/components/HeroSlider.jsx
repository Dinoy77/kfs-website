import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/home.js'
import './HeroSlider.css'

// Home page slider. Every slide is designed in code (no banner images),
// so the text is sharp, readable on phones and easy to change in data/home.js.

const AUTOPLAY_MS = 7000

function Photo({ visual }) {
  const [missing, setMissing] = useState(false)
  return (
    <div className="hx-photo">
      {missing ? (
        <span className="hx-missing">Add <code>public{visual.src}</code></span>
      ) : (
        <img src={visual.src} alt={visual.alt} onError={() => setMissing(true)} />
      )}
      {visual.badgeTitle && (
        <div className="hx-badge">
          <strong>{visual.badgeTitle}</strong>
          <span>{visual.badgeText}</span>
        </div>
      )}
      {visual.chip && <div className="hx-chip">{visual.chip}</div>}
    </div>
  )
}

function Stats({ visual }) {
  return (
    <ul className="hx-stats">
      {visual.items.map((s) => (
        <li key={s.small}>
          <strong>{s.big}</strong>
          <span>{s.small}</span>
        </li>
      ))}
    </ul>
  )
}

// Keep words like "B-Pharm" on one line (never break at the hyphen)
function NoBreak({ text }) {
  return text.split(' ').map((w, i) => (
    <span key={i}>{i > 0 && ' '}{w.includes('-') ? <span className="hx-nowrap">{w}</span> : w}</span>
  ))
}

function Slide({ s, active }) {
  return (
    <div className={`hx-slide hx-${s.theme} ${active ? 'is-active' : ''}`}>
      <div className="wrap hx-grid">
        <div className="hx-copy">
          <div className="hx-tags">
            {s.tags.map((t, i) => (
              <span key={t} className={`hx-tag ${i > 0 ? 'is-alt' : ''}`}>{t}</span>
            ))}
          </div>
          <h2 className="hx-title"><NoBreak text={s.title} /></h2>
          <p className="hx-highlight">{s.highlight}</p>
          <p className="hx-text">{s.text}</p>

          {s.chips && (
            <ul className="hx-chips" aria-label={s.chipsLabel}>
              {s.chips.map((c) => <li key={c}>{c}</li>)}
            </ul>
          )}

          {s.points && (
            <ul className="hx-points">
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          )}

          <div className="hx-buttons">
            {s.buttons.map((b, i) => {
              const cls = `hx-btn ${i === 0 ? 'is-main' : ''}`
              const tab = active ? 0 : -1
              // Pages on this website open with the router; phone and WhatsApp links open normally
              if (b.href.startsWith('/')) {
                return <Link key={b.label} to={b.href} className={cls} tabIndex={tab}>{b.label}</Link>
              }
              const ext = b.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}
              return <a key={b.label} href={b.href} className={cls} tabIndex={tab} {...ext}>{b.label}</a>
            })}
          </div>
          {s.note && <p className="hx-note">{s.note}</p>}
        </div>

        <div className={`hx-visual is-${s.visual.type}`}>
          {s.visual.type === 'stats' ? <Stats visual={s.visual} /> : <Photo visual={s.visual} />}
        </div>
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroSlides.length
  const go = useCallback((i) => setIndex((i + count) % count), [count])
  const sectionRef = useRef(null)

  // Measure the real header height so the slider fits in the window below it
  useEffect(() => {
    const header = document.querySelector('.nav-header')
    const update = () => {
      if (header && sectionRef.current) {
        sectionRef.current.style.setProperty('--hx-header', `${header.offsetHeight}px`)
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce || count < 2) return
    const t = setTimeout(() => go(index + 1), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [index, paused, go, count])

  return (
    <section
      className="hx"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Admissions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hx-track">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className="hx-item"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            <Slide s={s} active={i === index} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="hx-bar">
          <button type="button" className="hx-arrow" onClick={() => go(index - 1)} aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
          </button>
          <div className="hx-dots">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`hx-dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button type="button" className="hx-arrow" onClick={() => go(index + 1)} aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
          </button>
        </div>
      )}
    </section>
  )
}