import PageHead from '../components/PageHead.jsx'
import { faqs } from '../data/faqs.js'

export default function Faqs() {
  return (
    <>
      <PageHead title="Frequently asked questions" />
      <section className="section">
        <div className="wrap narrow">
          {faqs.map((f) => (
            <details key={f.q} className="faq">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
