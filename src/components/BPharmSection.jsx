import { useState } from 'react'
import { site } from '../data/site.js'
import { bpharm } from '../data/home.js'

function LaptopIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M4 5h16a1 1 0 0 1 1 1v10H3V6a1 1 0 0 1 1-1zm1 2v7h14V7H5zM1 17h22v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  )
}

export default function BPharmSection() {
  const [photoMissing, setPhotoMissing] = useState(false)

  return (
    <section className="bp" aria-labelledby="bp-title">
      <div className="wrap bp-grid">
        {/* Photo */}
        <div className="bp-photo">
          {photoMissing ? (
            <div className="bp-photo-missing">
              Add the photo at <code>public{bpharm.photo}</code>
            </div>
          ) : (
            <img src={bpharm.photo} alt={bpharm.photoAlt} onError={() => setPhotoMissing(true)} />
          )}
          <div className="bp-badge">
            <strong>{bpharm.badgeTitle}</strong>
            <span>{bpharm.badgeText}</span>
          </div>
        </div>

        {/* Details */}
        <div className="bp-card">
          <p className="bp-tag">{bpharm.tag}</p>
          <h2 id="bp-title" className="bp-title">{bpharm.title}</h2>
          <p className="bp-lead">{bpharm.lead}</p>

          <p className="bp-label">{bpharm.categoriesLabel}</p>
          <ul className="bp-cats">
            {bpharm.categories.map((c) => <li key={c}>{c}</li>)}
          </ul>

          <p className="bp-text">{bpharm.text}</p>

          <div className="bp-laptop">
            <LaptopIcon />
            <div>
              <p className="bp-laptop-title">{bpharm.laptopTitle}</p>
              <p className="bp-laptop-text">{bpharm.laptopText}</p>
            </div>
          </div>

          <div className="bp-contact">
            <p className="bp-contact-label">{bpharm.contactLabel}</p>
            <a className="bp-phone" href={`tel:${site.mobile.tel}`}>
              <span className="bp-phone-icon"><PhoneIcon /></span>
              {site.mobile.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}