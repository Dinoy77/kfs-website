import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { programs } from '../data/programs.js'
import './Header.css'

// Menu structure. Items with `children` become dropdowns.
const menu = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    children: [
      { label: 'Students Scholarship Program', to: '/scholarship' },
      ...programs.map((p) => ({ label: p.title, to: `/programs/${p.slug}` })),
    ],
  },
  {
    label: 'Test Preparation',
    children: [
      { label: 'KEAM', to: '/test-prep#keam' },
      { label: 'NEET', to: '/test-prep#neet' },
    ],
  },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

function Dropdown({ item, isOpen, onToggle, onNavigate }) {
  const { pathname } = useLocation()
  const active = item.children.some((c) => pathname === c.to.split('#')[0])

  return (
    <li className={`nav-item has-dropdown ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className={`nav-link ${active ? 'active' : ''}`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {item.label}
        <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <ul className="dropdown">
        {item.children.map((c) => (
          <li key={c.to}>
            <Link to={c.to} onClick={onNavigate}>{c.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)

  const closeAll = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  // Close dropdowns when clicking outside the menu or pressing Escape
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="nav-header">
      {/* Top strip: address + email */}
      <div className="nav-top">
        <div className="wrap nav-top-inner">
          <a href={site.address.mapUrl} target="_blank" rel="noreferrer" className="nav-top-item hide-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
            </svg>
            Paruthippara, Trivandrum-15
          </a>
          <a href={`mailto:${site.email}`} className="nav-top-item">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 2.8-8 5-8-5V17h16V9.8z" />
            </svg>
            {site.email}
          </a>
          <a href={`tel:${site.mobile.tel}`} className="nav-top-item nav-top-phone">
            {site.mobile.display}
          </a>
        </div>
      </div>

      {/* Main bar: logo + menu */}
      <div className="nav-main">
        <div className="wrap nav-main-inner" ref={navRef}>
          <Link to="/" className="nav-logo" onClick={closeAll} aria-label={`${site.name} home`}>
            {site.logo ? (
              <img src={site.logo} alt={site.name} />
            ) : (
              <span className="nav-logo-text">KFS<small>Kerala Finishing School</small></span>
            )}
          </Link>

          <button
            type="button"
            className="nav-burger"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>

          <nav id="main-menu" className={`nav-menu ${menuOpen ? 'is-open' : ''}`} aria-label="Main">
            <ul>
              {menu.map((item) =>
                item.children ? (
                  <Dropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdown === item.label}
                    onToggle={() => setOpenDropdown((cur) => (cur === item.label ? null : item.label))}
                    onNavigate={closeAll}
                  />
                ) : (
                  <li className="nav-item" key={item.to}>
                    <NavLink to={item.to} end={item.to === '/'} className="nav-link" onClick={closeAll}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}