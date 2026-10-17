import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site, whatsappLink } from '../data/site.js'
import { programs } from '../data/programs.js'
import { faqs } from '../data/faqs.js'
import EnquiryForm from '../components/EnquiryForm.jsx'

const categories = ['SC', 'ST', 'OEC', 'OBC-H', 'Fishermen']

export default function Home() {
  useEffect(() => {
    document.title = 'Kerala Finishing School | Thiruvananthapuram'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="status-pill">Admissions open for B-Pharm lateral entry</p>
            <h1>Finish your <span className="nowrap">B-Pharm</span> without paying a rupee.</h1>
            <p className="lede">
              D-Pharm holders from these communities get full Central and State Government
              assistance — tuition and related expenses covered, and a laptop included.
            </p>
            <ul className="chips" aria-label="Eligible categories">
              {categories.map((c) => <li key={c}>{c}</li>)}
            </ul>
            <div className="actions">
              <a className="btn btn-gold" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
              <Link className="btn btn-ghost" to="/scholarship">Check eligibility</Link>
            </div>
          </div>
          <aside className="hero-card" aria-label="Quick enquiry">
            <h2>Ask us anything</h2>
            <EnquiryForm defaultProgram="B-Pharm lateral entry scholarship" />
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2 className="h-section">Skills that get you hired, not just a certificate.</h2>
          </div>
          <div className="prose">
            <p>
              Kerala Finishing School is a Startup India recognised organisation focused on student
              talent acquisition and skill development. Degrees are common; what most institutions miss
              is sharpening students and professionals with the practical skills employers look for.
            </p>
            <p>
              We work especially with students from communities that have been left out of
              opportunity — showing that a successful career comes from a clear, dedicated process,
              not from belonging to the right background.
            </p>
            <Link className="text-link" to="/about">More about KFS</Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <div className="section-head">
            <h2 className="h-section">Programs</h2>
            <Link className="text-link" to="/programs">See all programs</Link>
          </div>
          <ul className="program-list">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link to={`/programs/${p.slug}`}>
                  <span className="program-title">{p.title}</span>
                  <span className="program-summary">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <h2 className="h-section">Common questions</h2>
          <div>
            {faqs.slice(0, 3).map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
            <Link className="text-link" to="/faqs">All FAQs</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap cta-inner">
          <h2>Not sure which program fits you?</h2>
          <p>Talk to a counsellor — we will map your options with you.</p>
          <div className="actions">
            <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            <Link className="btn btn-ghost" to="/contact">Visit the office</Link>
          </div>
        </div>
      </section>
    </>
  )
}
