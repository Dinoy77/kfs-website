import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'
import { programs } from '../data/programs.js'
import './InProgress.css'

// Shown on every page while the content is being prepared.
// Page names come from the URL so the visitor knows where they are.
const pageNames = {
  '/': 'Home',
  '/about': 'About',
  '/scholarship': 'Students Scholarship Program',
  '/test-prep': 'Test Preparation',
  '/faqs': 'FAQs',
  '/contact': 'Contact',
  '/programs': 'Services',
}

function getPageName(pathname) {
  if (pageNames[pathname]) return pageNames[pathname]
  const program = programs.find((p) => `/programs/${p.slug}` === pathname)
  return program ? program.title : 'This page'
}

export default function InProgress() {
  const { pathname, hash } = useLocation()
  const name = hash === '#keam' ? 'KEAM' : hash === '#neet' ? 'NEET' : getPageName(pathname)

  useEffect(() => {
    document.title = `${name} | ${site.name}`
  }, [name])

  return (
    <section className="ip">
      <div className="wrap ip-inner">
        <p className="ip-page">{name}</p>
        <h1 className="ip-title">We're updating this page.</h1>
        <p className="ip-text">
          Our new website is being prepared. For admissions and enquiries, please call or email
          us — our team will help you.
        </p>
        <div className="ip-actions">
          <a className="ip-btn ip-btn-primary" href={`tel:${site.mobile.tel}`}>
            Call {site.mobile.display}
          </a>
          <a className="ip-btn ip-btn-outline" href={`mailto:${site.email}`}>
            Email {site.email}
          </a>
        </div>
        <p className="ip-address">
          {site.address.line1}, {site.address.line2}, {site.address.city}
        </p>
      </div>
    </section>
  )
}