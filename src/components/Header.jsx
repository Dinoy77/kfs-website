import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site, nav } from '../data/site.js'

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label={`${site.name} home`}>
      {site.logo ? (
        <img src={site.logo} alt="" height="40" />
      ) : (
        <span className="brand-mark" aria-hidden="true">KFS</span>
      )}
      <span className="brand-name">
        Kerala<br />Finishing School
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>Opp. MG College, Paruthippara, Thiruvananthapuram</span>
          <span className="topbar-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>
          </span>
        </div>
      </div>
      <div className="wrap header-inner">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav id="primary-nav" className={`primary-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="kasavu" aria-hidden="true" />
    </header>
  )
}
