import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { aboutPage } from '../data/about.js'
import { about as homeAbout } from '../data/home.js'
import { site } from '../data/site.js'
import './Home.css'
import './About.css'

const icons = {
  globe: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.6 15.6 0 0 0-1.4-3.9A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3a15.6 15.6 0 0 0 1.4 3.9A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.4-3.9A15.6 15.6 0 0 0 8.1 8zM12 20c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.2 5.9c.6-1.2 1.1-2.5 1.4-3.9h3a8 8 0 0 1-4.4 3.9zm1.8-5.9a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4z" />,
  rocket: <path d="M13 2s5 1 7.5 3.5S22 13 22 13l-4 4-2-1-3 3-1.5-1.5L13 16l-5-5 1.5-1.5L8 8l3-3-1-2 3-1zm2.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 14l4 4-3.5 1.5-2-2L6 14zm-2.5 3.5 3 3L2 22l1.5-4.5z" />,
  people: <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM9 13c-3.3 0-7 1.6-7 4v3h14v-3c0-2.4-3.7-4-7-4zm8 0c-.6 0-1.3 0-2 .2 1.2.9 2 2.1 2 3.8v3h5v-3c0-2.4-3-4-5-4z" />,
}

function Photo({ src, className }) {
  const [missing, setMissing] = useState(false)
  return (
    <div className={`ab-photo ${className}`}>
      {missing ? (
        <span className="ab-missing">Add <code>public{src}</code></span>
      ) : (
        <img src={src} alt="" onError={() => setMissing(true)} />
      )}
    </div>
  )
}

export default function About() {
  const { banner, intro, quote, focus, cta } = aboutPage

  useEffect(() => {
    document.title = `About us | ${site.name}`
  }, [])

  return (
    <>
      <PageBanner title={banner.title} crumb="About" image={banner.image} />

      {/* Intro with the same two photos as the home page */}
      <section className="ap-intro">
        <div className="wrap ab-grid ap-intro-grid">
          <div className="ab-photos ap-photos">
            <Photo src={homeAbout.imageBack} className="ab-back" />
            <Photo src={homeAbout.imageFront} className="ab-front" />
            <span className="ab-badge">{intro.badge}</span>
          </div>
          <div className="ab-copy">
            <p className="ab-kicker">{intro.kicker}</p>
            <h2 className="ab-title">{intro.title}</h2>
            {intro.paragraphs.map((p) => <p key={p} className="ab-text">{p}</p>)}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="ap-quote" aria-label="Our belief">
        <div className="wrap ap-quote-inner">
          <blockquote>
            <p className="ap-quote-text">“{quote.text}”</p>
          </blockquote>
          <p className="ap-quote-answer">{quote.answer}</p>
        </div>
      </section>

      {/* Focus cards */}
      <section className="ap-focus" aria-labelledby="ap-focus-title">
        <div className="wrap">
          <div className="ap-head">
            <p className="ab-kicker">{focus.kicker}</p>
            <h2 id="ap-focus-title" className="ab-title">{focus.title}</h2>
          </div>
          <div className="ap-cards">
            {focus.items.map((f) => (
              <article key={f.title} className="ap-card">
                <span className="ap-card-icon" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">{icons[f.icon]}</svg>
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="ap-cta">
        <div className="wrap ap-cta-inner">
          <div>
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
          </div>
          <div className="ap-cta-actions">
            <a className="ap-btn ap-btn-red" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
            <Link className="ap-btn ap-btn-line" to="/#contact">Send an enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}