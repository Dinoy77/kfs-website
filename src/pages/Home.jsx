import { useEffect } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import BPharmSection from '../components/BPharmSection.jsx'
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
    </>
  )
}