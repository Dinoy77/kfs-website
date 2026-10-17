import PageHead from '../components/PageHead.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'

// The old site's KEAM and NEET links pointed at template pages
// (blog.html / team.html). Real coaching details still need to be written.
const exams = [
  {
    name: 'KEAM',
    text: 'Coaching for the Kerala Engineering, Architecture and Medical entrance exam conducted by CEE Kerala.',
    link: 'https://cee.kerala.gov.in/',
  },
  {
    name: 'NEET',
    text: 'Coaching for NEET-UG, the national entrance exam for MBBS, BDS and allied medical courses.',
    link: 'https://neet.nta.nic.in/',
  },
]

export default function TestPrep() {
  return (
    <>
      <PageHead title="Entrance test preparation" intro="Coaching for Kerala and national entrance examinations." />
      <section className="section">
        <div className="wrap detail-grid">
          <div className="exam-list">
            {exams.map((e) => (
              <article key={e.name} className="exam">
                <h2>{e.name}</h2>
                <p>{e.text}</p>
                <a className="text-link" href={e.link} target="_blank" rel="noreferrer">Official {e.name} website</a>
              </article>
            ))}
            <p className="draft-note">Batch timings, fees and syllabus details coming soon.</p>
          </div>
          <aside className="side-card">
            <h2>Ask about coaching</h2>
            <EnquiryForm defaultProgram="KEAM coaching" />
          </aside>
        </div>
      </section>
    </>
  )
}
