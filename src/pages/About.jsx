import PageHead from '../components/PageHead.jsx'

const aims = [
  {
    title: 'Talent acquisition and skill development',
    text: 'Preparing students and professionals for the future by sharpening them with skills through academic and innovative training methods — the part most institutions miss.',
  },
  {
    title: 'National and international opportunity',
    text: 'Opening wider career opportunities across India and abroad through different methods of training.',
  },
  {
    title: 'Job creators, not only job seekers',
    text: 'No course teaches you how to make money. We focus on how to earn it and how to preserve it for your future.',
  },
  {
    title: 'Reaching every community',
    text: 'Bringing students and professionals from the most underserved parts of society into opportunity, and showing that success comes from a dedicated process — not from belonging to one segment of society.',
  },
]

export default function About() {
  return (
    <>
      <PageHead
        title="About Kerala Finishing School"
        intro="A Startup India recognised organisation in Thiruvananthapuram, focused on student talent acquisition and skill development."
      />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            <h2 className="h-section">Why we exist</h2>
            <p>
              Millions of young people are racing to find a sustainable career, yet many cannot find
              employment — or the right employment. Education is common; turning it into real,
              employable skill is the challenge.
            </p>
          </div>
          <ul className="aims">
            {aims.map((a) => (
              <li key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
