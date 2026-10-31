import { Link } from 'react-router-dom'
import './PageBanner.css'

// Top banner for inner pages: title + breadcrumb.
// Pass `image` to show a photo behind the navy overlay.
// Pass `top` to show a short line (e.g. "MBA") above the title.
export default function PageBanner({ title, crumb, image, parent, top }) {
  return (
    <section
      className={`pb ${image ? 'has-image' : ''}`}
      style={image ? { '--pb-image': `url(${image})` } : undefined}
    >
      <div className="wrap pb-inner">
        <h1 className="pb-title">
          {top && <span className="prog-top">{top}</span>}
          {title}
        </h1>
        <nav aria-label="Breadcrumb">
          <ol className="pb-crumbs">
            <li><Link to="/">Home</Link></li>
            {parent && <li><Link to={parent.to}>{parent.label}</Link></li>}
            <li aria-current="page">{crumb || title}</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}