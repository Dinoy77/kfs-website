import { Link } from 'react-router-dom'
import { site, usefulLinks } from '../data/site.js'
import { programs } from '../data/programs.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="kasavu" aria-hidden="true" />
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{site.name}</p>
          <p>
            Talent acquisition and skill development for students and professionals. Recognised under
            Startup India.
          </p>
        </div>
        <div>
          <h2 className="footer-h">Programs</h2>
          <ul>
            {programs.slice(0, 5).map((p) => (
              <li key={p.slug}><Link to={`/programs/${p.slug}`}>{p.title}</Link></li>
            ))}
            <li><Link to="/programs">All programs</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Useful links</h2>
          <ul>
            {usefulLinks.map((l) => (
              <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="footer-h">Visit or call</h2>
          <address>
            {site.address.line1}<br />
            {site.address.line2}<br />
            {site.address.city}
          </address>
          <p>
            <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a><br />
            <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a><br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
      <div className="wrap footer-base">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
