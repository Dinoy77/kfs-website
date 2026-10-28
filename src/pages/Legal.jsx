import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { terms, privacy } from '../data/legal.js'
import { site } from '../data/site.js'
import './Legal.css'

// One layout for both legal pages: <Legal page="terms" /> or <Legal page="privacy" />
export default function Legal({ page }) {
  const doc = page === 'privacy' ? privacy : terms
  const other = page === 'privacy'
    ? { label: 'Terms and Conditions', to: '/terms-and-conditions' }
    : { label: 'Privacy Policy', to: '/privacy-policy' }

  useEffect(() => {
    document.title = `${doc.title} | ${site.name}`
  }, [doc])

  return (
    <>
      <PageBanner title={doc.title} />
      <section className="lg">
        <div className="wrap lg-inner">
          <p className="lg-updated">Last updated: {doc.updated}</p>
          {doc.intro.map((p) => <p key={p} className="lg-lead">{p}</p>)}

          {doc.sections.map((s, i) => (
            <div key={i} className="lg-section">
              {s.heading && <h2>{s.heading}</h2>}
              {s.paras?.map((p) => <p key={p}>{p}</p>)}
              {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
            </div>
          ))}

          <div className="lg-contact">
            <h2>Questions?</h2>
            <p>
              Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{' '}
              <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>.
            </p>
            <p>See also our <Link to={other.to}>{other.label}</Link>.</p>
          </div>
        </div>
      </section>
    </>
  )
}