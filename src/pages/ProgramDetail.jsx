import { Link, useParams } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import NotFound from './NotFound.jsx'
import { getProgram, programs } from '../data/programs.js'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = getProgram(slug)
  if (!program) return <NotFound />

  const others = programs.filter((p) => p.slug !== slug).slice(0, 4)

  return (
    <>
      <PageHead title={program.title} intro={program.summary}>
        <p className="crumbs"><Link to="/programs">All programs</Link></p>
      </PageHead>
      <section className="section">
        <div className="wrap detail-grid">
          <article className="prose">
            {program.draft && (
              <p className="draft-note">Draft page — full details for this program are coming soon. Call us for information.</p>
            )}
            {program.body.map((block, i) => (
              <div key={i}>
                {block.heading && <h2>{block.heading}</h2>}
                {block.text && <p>{block.text}</p>}
                {block.list && (
                  <ul>{block.list.map((li) => <li key={li}>{li}</li>)}</ul>
                )}
                {block.steps && (
                  <ol className="steps">{block.steps.map((s) => <li key={s}>{s}</li>)}</ol>
                )}
              </div>
            ))}
          </article>
          <aside className="side-card">
            <h2>Enquire about this program</h2>
            <EnquiryForm defaultProgram={program.title} />
          </aside>
        </div>
      </section>
      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h-section">Other programs</h2>
          <ul className="program-list">
            {others.map((p) => (
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
