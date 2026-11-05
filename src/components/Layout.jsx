import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { site, whatsappLink } from '../data/site.js'
import { descriptions, defaultDescription, SITE_URL } from '../data/seo.js'
import { getProgram } from '../data/programs.js'

// Sets (or creates) a <meta>/<link> tag in the page head
function setHead(selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

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

  // Search engines and link previews: description + canonical address for each page.
  // (Each page sets its own title; this runs after it.)
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const slug = path.startsWith('/programs/') ? path.split('/')[2] : null
    const program = slug ? getProgram(slug) : null
    const description = descriptions[path]
      || (program ? `${program.top ? program.top + ' ' : ''}${program.title} at Kerala Finishing School, Thiruvananthapuram – ${program.summary}` : defaultDescription)
    const url = SITE_URL + (path === '/' ? '/' : path)
    setHead('meta[name="description"]', { name: 'description', content: description })
    setHead('link[rel="canonical"]', { rel: 'canonical', href: url })
    setHead('meta[property="og:title"]', { property: 'og:title', content: document.title })
    setHead('meta[property="og:description"]', { property: 'og:description', content: description })
    setHead('meta[property="og:url"]', { property: 'og:url', content: url })
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