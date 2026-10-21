import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { site, whatsappLink } from '../data/site.js'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // New page: start at the top. Link with #section (e.g. /#contact): scroll to that section.
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <div className="mobile-bar">
        <a href={`tel:${site.mobile.tel}`}>Call</a>
        <a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </>
  )
}