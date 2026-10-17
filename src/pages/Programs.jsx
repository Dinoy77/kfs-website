import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { programs } from '../data/programs.js'

export default function Programs() {
  return (
    <>
      <PageHead
        title="Programs"
        intro="Training, placement and academic programs for students, graduates and working professionals."
      />
      <section className="section">
        <div className="wrap">
          <ul className="program-list">
            <li>
              <Link to="/scholarship" className="is-featured">
                <span className="program-title">B-Pharm Lateral Entry Scholarship</span>
                <span className="program-summary">Free B-Pharm for eligible D-Pharm holders, with a laptop.</span>
              </Link>
            </li>
            {programs.map((p) => (
              <li key={p.slug}>
                <Link to={`/programs/${p.slug}`}>
                  <span className="program-title">{p.title}</span>
                  <span className="program-summary">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
