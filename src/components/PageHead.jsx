import { useEffect } from 'react'

export default function PageHead({ title, intro, children }) {
  useEffect(() => {
    document.title = title ? `${title} | Kerala Finishing School` : 'Kerala Finishing School'
  }, [title])

  return (
    <section className="page-head">
      <div className="wrap">
        <h1>{title}</h1>
        {intro && <p className="lede">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
