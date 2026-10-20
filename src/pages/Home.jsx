import { useEffect } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import BPharmSection from '../components/BPharmSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ContactSection from '../components/ContactSection.jsx'
import './Home.css'

// Home page sections, top to bottom.
export default function Home() {
  useEffect(() => {
    document.title = 'Kerala Finishing School | Thiruvananthapuram'
  }, [])

  return (
    <>
      <HeroSlider />
      <BPharmSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}