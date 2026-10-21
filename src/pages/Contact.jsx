import { useEffect } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import ContactSection from '../components/ContactSection.jsx'
import { site } from '../data/site.js'
import './Home.css'

// Contact page: page banner + the same "Get in touch" section as the home page,
// so the address, numbers, map and form are always identical in both places.
export default function Contact() {
  useEffect(() => {
    document.title = `Contact us | ${site.name}`
  }, [])

  return (
    <>
      <PageBanner title="Contact us" crumb="Contact" />
      <ContactSection />
    </>
  )
}