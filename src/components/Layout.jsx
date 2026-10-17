import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { site, whatsappLink } from '../data/site.js'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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
