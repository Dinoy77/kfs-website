import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import './Footer.css'

const year = new Date().getFullYear()

const quickLinks = [
  { label: 'About us', to: '/about' },
  { label: 'Our services', to: '/programs' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact us', to: '/contact' },
]

const icons = {
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />,
  phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />,
  mail: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.4V17h16V7.4l-8 5-8-5zM5.2 7 12 11.2 18.8 7H5.2z" />,
}

function Icon({ name }) {
  return (
    <svg className="ft-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft-grid">
        {/* Logo + about */}
        <div className="ft-about">
          <Link to="/" className="ft-logo" aria-label={`${site.name} home`}>
            {site.logo ? (
              <img src={site.logo} alt={site.name} />
            ) : (
              <span className="ft-logo-text">KFS<small>Kerala Finishing School</small></span>
            )}
          </Link>
          <p>
            Kerala Finishing School is a well-planned organisation with Startup India recognition,
            focused on student talent acquisition and skill development.
          </p>
        </div>

        {/* Quick links */}
        <nav aria-labelledby="ft-links">
          <h2 id="ft-links" className="ft-h">Quick links</h2>
          <ul className="ft-links">
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <div>
          <h2 className="ft-h">Contact info</h2>
          <ul className="ft-contact">
            <li>
              <Icon name="pin" />
              <a href={site.address.mapUrl} target="_blank" rel="noreferrer">
                {site.address.line1}, {site.address.line2}, {site.address.city}
              </a>
            </li>
            <li>
              <Icon name="phone" />
              <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>
            </li>
            <li>
              <Icon name="mail" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap ft-base">
        <p>© {year} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}