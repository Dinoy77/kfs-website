import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { programs } from '../data/programs.js'
import { site } from '../data/site.js'
import './Home.css'
import './About.css'
import './Programs.css'

// Services overview (/programs): the scholarship as a highlight, then every program as a card.
// Programs come from data/programs.js, so a new program appears here automatically.

const icons = {
  'industry-integrated-academic-program': 'M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6.8 9.2V16c0 1.7 3 4 6.8 4s6.8-2.3 6.8-4v-3.8L12 16l-6.8-3.8z',
  'pay-after-placement-program': 'M3 6a3 3 0 0 1 3-3h12v3h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3V6zm3-1a1 1 0 0 0 0 2h10V5H6zm10 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z',
  'international-university-collaborative-program': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.9a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8 8 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h2.9c.3 1.3.8 2.5 1.4 3.6A8 8 0 0 1 5.1 16zM8 8H5.1a8 8 0 0 1 4.3-3.6C8.8 5.5 8.4 6.7 8 8zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9a8 8 0 0 1-4.3 3.6zm1.7-5.6a16.5 16.5 0 0 0 0-4h3.4a8 8 0 0 1 0 4h-3.4z',
  'training-and-placement': 'M10 3h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4V5a2 2 0 0 1 2-2zm4 4V5h-4v2h4z',
  'train-the-trainer-program': 'M3 4h18v12H13l2 4h-2.2l-2-4H9.2l-2 4H5l2-4H3V4zm2 2v8h14V6H5zm2 2h6v2H7V8zm0 3h9v1.5H7V11z',
  'online-coaching-management': 'M4 5h16a1 1 0 0 1 1 1v10H3V6a1 1 0 0 1 1-1zm1 2v7h14V7H5zM1 17h22v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1zm9-8.5 4 2-4 2v-4z',
  'career-planning-and-mapping': 'M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2zm1 2.3 4 1.4v12L10 17.3v-12zM5 6.4l3-1v12.2l-3 1V6.4zm14 11.2-3 1V6.4l3-1v12.2z',
  'students-internship': 'M12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.4 0 8 2 8 4.5V20H4v-3.5C4 14 7.6 12 12 12z',
}

export default function Programs() {
  const scholarship = programs.find((p) => p.link)
  const others = programs.filter((p) => !p.link)

  useEffect(() => {
    document.title = `Our Services | ${site.name}`
  }, [])

  return (
    <>
      <PageBanner title="Our Services" crumb="Services" />

      <section className="pg-intro">
        <div className="wrap pg-intro-inner">
          <p className="sv-kicker">What we offer</p>
          <h2 className="sv-title">Programs built for every stage of your career</h2>
          <p className="pg-lead">
            From scholarships and academic programs to training, placement and internships, Kerala Finishing School
            helps students and professionals reach wider opportunities at national and international level.
          </p>
        </div>
      </section>

      {/* Highlight: the scholarship */}
      {scholarship && (
        <section className="pg-feature-wrap" aria-label="Featured program">
          <div className="wrap">
            <div className="pg-feature">
              <div>
                <p className="pg-feature-tag">Admissions open · 100% Scholarship</p>
                <h2 className="pg-feature-title">{scholarship.title}</h2>
                <p className="pg-feature-text">{scholarship.summary} Tuition fees, hostel fees, a monthly stipend and a free laptop.</p>
              </div>
              <div className="pg-feature-actions">
                <Link className="ap-btn pg-btn-white" to={scholarship.link}>View details</Link>
                <a className="ap-btn pg-btn-line" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All other programs */}
      <section className="sv pg-list" aria-labelledby="pg-list-title">
        <div className="wrap">
          <h2 id="pg-list-title" className="sr-only">All programs</h2>
          <div className="sv-grid">
            {others.map((p) => (
              <article key={p.slug} className="sv-card">
                <span className="sv-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d={icons[p.slug] || icons['industry-integrated-academic-program']} /></svg>
                </span>
                <h3 className="sv-card-title">{p.title}</h3>
                <p className="sv-card-text">{p.summary}</p>
                <Link to={`/programs/${p.slug}`} className="sv-btn">
                  Read more<span className="sr-only"> about {p.title}</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-cta">
        <div className="wrap ap-cta-inner">
          <div>
            <h2>Not sure which program is right for you?</h2>
            <p>Talk to our team. We will guide you to the right choice.</p>
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