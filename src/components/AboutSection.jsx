import { useState } from 'react'
import { Link } from 'react-router-dom'
import { about } from '../data/home.js'

function Photo({ src, className }) {
  const [missing, setMissing] = useState(false)
  return (
    <div className={`ab-photo ${className}`}>
      {missing ? (
        <span className="ab-missing">Add <code>public{src}</code></span>
      ) : (
        <img src={src} alt="" loading="lazy" onError={() => setMissing(true)} />
      )}
    </div>
  )
}

export default function AboutSection() {
  return (
    <section className="ab" aria-labelledby="ab-title">
      <div className="wrap ab-grid">
        {/* Two overlapping photos */}
        <div className="ab-photos">
          <Photo src={about.imageBack} className="ab-back" />
          <Photo src={about.imageFront} className="ab-front" />
          <span className="ab-badge">{about.badge}</span>
        </div>

        {/* Text */}
        <div className="ab-copy">
          <p className="ab-kicker">{about.kicker}</p>
          <h2 id="ab-title" className="ab-title">{about.title}</h2>
          {about.paragraphs.map((p) => <p key={p} className="ab-text">{p}</p>)}
          <Link to={about.buttonLink} className="ab-btn">{about.buttonText}</Link>
        </div>
      </div>
    </section>
  )
}