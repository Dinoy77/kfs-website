import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { clients } from '../data/clients.js'
import { site } from '../data/site.js'
import './Home.css'
import './About.css'
import './Clients.css'

function ClientCard({ client }) {
  const [missing, setMissing] = useState(false)
  return (
    <li className="cl-card">
      {missing ? (
        <span className="cl-name">{client.name}</span>
      ) : (
        <img src={client.logo} alt={client.name} loading="lazy" onError={() => setMissing(true)} />
      )}
    </li>
  )
}

export default function Clients() {
  useEffect(() => {
    document.title = `Our clients | ${site.name}`
  }, [])

  return (
    <>
      <PageBanner title="Our clients" crumb="Clients" />

      <section className="cl" aria-labelledby="cl-title">
        <div className="wrap">
          <div className="cl-head">
            <p className="ab-kicker">Trusted by</p>
            <h2 id="cl-title" className="ab-title">Our valued clients</h2>
            <p className="cl-intro">
              Universities, colleges and education partners we work with on admissions,
              training and placement.
            </p>
          </div>
          <ul className="cl-grid">
            {clients.map((c) => <ClientCard key={c.name} client={c} />)}
          </ul>
        </div>
      </section>

      <section className="ap-cta">
        <div className="wrap ap-cta-inner">
          <div>
            <h2>Want to partner with us?</h2>
            <p>Talk to our team about working together.</p>
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