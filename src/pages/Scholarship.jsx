import PageHead from '../components/PageHead.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site } from '../data/site.js'

const categories = [
  { code: 'SC', name: 'Scheduled Caste' },
  { code: 'ST', name: 'Scheduled Tribe' },
  { code: 'OEC', name: 'Other Eligible Communities' },
  { code: 'OBC-H', name: 'Other Backward Classes (Hindu)' },
  { code: 'Fishermen', name: 'Fishermen community' },
]

export default function Scholarship() {
  return (
    <>
      <PageHead
        title="B-Pharm Lateral Entry — 100% scholarship"
        intro="Completed D-Pharm? Join B-Pharm directly through lateral entry, fully funded by Central and State Government assistance."
      />
      <section className="section">
        <div className="wrap detail-grid">
          <article className="prose">
            <h2>Who can apply</h2>
            <p>You are eligible if you have completed <strong>D-Pharm</strong> and belong to one of these categories:</p>
            <dl className="category-list">
              {categories.map((c) => (
                <div key={c.code}>
                  <dt>{c.code}</dt>
                  <dd>{c.name}</dd>
                </div>
              ))}
            </dl>
            <h2>What is covered</h2>
            <ul>
              <li>Full tuition fees</li>
              <li>All related course expenses</li>
              <li>A free laptop for your studies</li>
            </ul>
            <h2>How to apply</h2>
            <ol className="steps">
              <li>Call or WhatsApp us on {site.mobile.display}</li>
              <li>Share your D-Pharm and community certificates</li>
              <li>We guide you through admission and the scholarship process</li>
            </ol>
            <p>
              <a className="btn btn-primary" href={`tel:${site.mobile.tel}`}>Call {site.mobile.display}</a>
            </p>
          </article>
          <aside className="side-card">
            <h2>Check your eligibility</h2>
            <EnquiryForm defaultProgram="B-Pharm lateral entry scholarship" />
          </aside>
        </div>
      </section>
    </>
  )
}
