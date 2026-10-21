import { Link } from 'react-router-dom'
import './PageBanner.css'

// Top banner for inner pages: title + breadcrumb.
// Pass `image` to show a photo behind the navy overlay.
export default function PageBanner({ title, crumb, image }) {
  return (
    <section
      className={`pb ${image ? 'has-image' : ''}`}
      style={image ? { '--pb-image': `url(${image})` } : undefined}
    >
      <div className="wrap pb-inner">
        <h1 className="pb-title">{title}</h1>
        <nav aria-label="Breadcrumb">
          <ol className="pb-crumbs">
            <li><Link to="/">Home</Link></li>
            <li aria-current="page">{crumb || title}</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}