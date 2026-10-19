import { useEffect } from 'react'
import HeroSlider from '../components/HeroSlider.jsx'
import './Home.css'

// Home page — banner only for now. More sections will be added below the slider.
export default function Home() {
  useEffect(() => {
    document.title = 'Kerala Finishing School | Thiruvananthapuram'
  }, [])

  return (
    <>
      <HeroSlider />
    </>
  )
}