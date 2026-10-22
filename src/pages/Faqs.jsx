import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { faqs } from '../data/faqs.js'
import { site } from '../data/site.js'
import './Home.css'
import './About.css'
import './Faqs.css'

function Faq({ item }) {
  // <details> gives a built-in, keyboard-friendly open/close.
  // The shared `name` means opening one question closes the others.
  return (
    <details className="fq-item" name="faq">
      <summary>
        <span>{item.q}</span>
        <svg className="fq-chevron" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      </summary>
      <p>{item.a}</p>
    </details>
  )
}

export default function Faqs() {
  useEffect(() => {
    document.title = `FAQs | ${site.name}`
  }, [])

  const half = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, half), faqs.slice(half)]

  return (
    <>
      <PageBanner title="FAQs" crumb="FAQs" />

      <section className="fq" aria-labelledby="fq-title">
        <div className="wrap">
          <div className="fq-head">
            <p className="fq-pill">Popular FAQs</p>
            <h2 id="fq-title" className="ab-title">Frequently asked questions</h2>
          </div>
          <div className="fq-grid">
            {columns.map((col, i) => (
              <div key={i} className="fq-col">
                {col.map((item) => <Faq key={item.q} item={item} />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ap-cta">
        <div className="wrap ap-cta-inner">
          <div>
            <h2>Still have a question?</h2>
            <p>Talk to our team. We are happy to help.</p>
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