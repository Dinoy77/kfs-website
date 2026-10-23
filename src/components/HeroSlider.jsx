import { useState, useEffect, useCallback, useRef } from 'react'
import { heroSlides } from '../data/home.js'

const AUTOPLAY_MS = 6000

function SlideImage({ slide }) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    // Shown only while the banner file hasn't been added to public/img/ yet
    return (
      <div className="hs-missing">
        Add the banner image at <code>public{slide.image}</code>
      </div>
    )
  }
  // The full banner is always shown (never cropped). Spare space at the sides
  // is filled with a soft, blurred copy of the same banner.
  return (
    <div className="hs-imgwrap" style={{ '--hs-bg': `url(${slide.image})` }}>
      <img src={slide.image} alt={slide.alt} className="hs-img" onError={() => setMissing(true)} />
    </div>
  )
}

function PosterSlide({ slide }) {
  return (
    <div className="hs-poster">
      <div className="hs-poster-copy">
        <div className="hs-poster-tags">
          <p className="hs-poster-tag">{slide.tag}</p>
          <p className="hs-poster-tag is-alt">{slide.badge}</p>
        </div>
        <h2 className="hs-poster-title">{slide.title}</h2>
        <p className="hs-poster-lead">{slide.lead}</p>
        <p className="hs-poster-text">{slide.text}</p>
        <div className="hs-poster-phones">
          {slide.phones.map((p, i) => (
            <a key={p.tel} href={`tel:${p.tel}`} className={i === 0 ? 'is-main' : ''}>
              Call {p.display}
            </a>
          ))}
        </div>
        <p className="hs-poster-note">{slide.note}</p>
      </div>
      <a className="hs-poster-img" href={slide.image} target="_blank" rel="noreferrer" aria-label="Open the full poster">
        <img src={slide.image} alt={slide.alt} />
      </a>
    </div>
  )
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = heroSlides.length

  const go = useCallback((i) => setIndex((i + count) % count), [count])
  const sectionRef = useRef(null)

  // Measure the real header height (it changes with screen size and browser zoom)
  // so the slider always fits in the window below it.
  useEffect(() => {
    const header = document.querySelector('.nav-header')
    const update = () => {
      if (header && sectionRef.current) {
        sectionRef.current.style.setProperty('--hs-header', `${header.offsetHeight}px`)
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
      className="hs"
      ref={sectionRef}
      aria-roledescription="carousel"
      aria-label="Admissions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hs-frame">
      <div className="hs-track">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`hs-slide ${i === index ? 'is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={i !== index}
          >
            {s.type === 'poster' ? <PosterSlide slide={s} /> : <SlideImage slide={s} />}
          </div>
        ))}
        {count > 1 && (
          <>
          <button type="button" className="hs-arrow hs-prev" onClick={() => go(index - 1)} aria-label="Previous slide">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
          </button>
          <button type="button" className="hs-arrow hs-next" onClick={() => go(index + 1)} aria-label="Next slide">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>
          </button>
          </>
        )}
      </div>

      {count > 1 && (
        <>
          <div className="hs-dots">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`hs-dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
      </div>
    </section>
  )
}