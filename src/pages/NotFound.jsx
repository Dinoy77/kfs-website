import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'

export default function NotFound() {
  return (
    <PageHead title="Page not found" intro="This page has moved or no longer exists.">
      <p><Link className="btn btn-gold" to="/">Go to the home page</Link></p>
    </PageHead>
  )
}
