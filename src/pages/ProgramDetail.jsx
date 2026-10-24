import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import InProgress from './InProgress.jsx'
import { getProgram, programs } from '../data/programs.js'
import { about as homeAbout } from '../data/home.js'
import { site } from '../data/site.js'
import './Home.css'
import './About.css'
import './ProgramDetail.css'

function Photo({ src, className }) {
  const [missing, setMissing] = useState(false)
  return (
    <div className={`ab-photo ${className}`}>
      {missing ? <span className="ab-missing">Add <code>public{src}</code></span> : <img src={src} alt="" onError={() => setMissing(true)} />}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Section({ block }) {
  if (block.type === 'features') {
    return (
      <section className="pd-block">
        <h2 className="pd-h2">{block.heading}</h2>
        <ul className="pd-features">
          {block.items.map((f) => (
            <li key={f.title}>
              <span className="pd-check" aria-hidden="true"><CheckIcon /></span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    )
  }
  if (block.type === 'steps') {
    return (
      <section className="pd-block">
        <h2 className="pd-h2">{block.heading}</h2>
        <ol className="pd-steps">
          {block.items.map((s) => <li key={s}><span>{s}</span></li>)}
        </ol>
        {block.text && <p className="pd-text">{block.text}</p>}
      </section>
    )
  }
  return (
    <section className="pd-block">
      {block.heading && <h2 className="pd-h2">{block.heading}</h2>}
      <p className="pd-text">{block.text}</p>
    </section>
  )
}

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = getProgram(slug)

  useEffect(() => {
    if (program?.page) document.title = `${program.title} | ${site.name}`
  }, [program])

  // Programs without content yet show the "updating" message
  if (!program || !program.page) return <InProgress />

  const { page } = program
  const others = programs.filter((p) => p.slug !== slug)

  return (
    <>
      <PageBanner title={program.title} crumb={program.title} parent={{ label: 'Services', to: '/programs' }} />

      <section className="pd">
        <div className="wrap pd-grid">
          {/* Left: photos + enquiry card (stay in view while scrolling) */}
          <aside className="pd-side">
            <div className="ab-photos pd-photos">
              <Photo key={`b-${slug}`} src={page.photos?.back || homeAbout.imageBack} className="ab-back" />
              <Photo key={`f-${slug}`} src={page.photos?.front || homeAbout.imageFront} className="ab-front" />
            </div>
            <div className="pd-card">
              <h2>Enquire about this program</h2>
              <p>Talk to our team about eligibility, fees and the next batch.</p>
              <a className="ap-btn ap-btn-red" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
              <Link className="ap-btn ap-btn-line" to="/contact">Send an enquiry</Link>
            </div>
          </aside>

          {/* Right: program content */}
          <article className="pd-main">
            <h2 className="pd-headline">{page.headline}</h2>
            <p className="pd-intro">{page.intro}</p>
            {page.sections.map((b, i) => <Section key={i} block={b} />)}
          </article>
        </div>
      </section>

      {/* Other programs */}
      <section className="pd-others" aria-labelledby="pd-others-title">
        <div className="wrap">
          <h2 id="pd-others-title" className="ab-title">Other programs</h2>
          <ul className="pd-other-list">
            {others.map((p) => (
              <li key={p.slug}>
                <Link to={p.link || `/programs/${p.slug}`}>
                  <span className="pd-other-title">{p.title}</span>
                  <span className="pd-other-text">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ap-cta">
        <div className="wrap ap-cta-inner">
          <div>
            <h2>Ready to start your career?</h2>
            <p>Call us or send an enquiry. Our team will guide you.</p>
          </div>
          <div className="ap-cta-actions">
            <a className="ap-btn ap-btn-red" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
            <Link className="ap-btn ap-btn-line" to="/contact">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  )
}