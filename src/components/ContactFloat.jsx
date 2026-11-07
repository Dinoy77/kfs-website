import { useLocation } from 'react-router-dom'
import { site, whatsappLink } from '../data/site.js'
import './ContactFloat.css'

// Floating WhatsApp + call buttons, shown on every page.
// Numbers come from src/data/site.js (site.whatsapp and site.mobile).
// Hidden on the application form so they never cover the Submit button.
export default function ContactFloat() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/apply')) return null

  return (
    <div className="cf" role="complementary" aria-label="Contact us quickly">
      <a
        className="cf-btn cf-wa"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.5 1.34 5.02L2 22l5.06-1.33a10 10 0 0 0 4.98 1.27C17.58 21.94 22 17.5 22 12.04 22 6.5 17.58 2 12.04 2zm0 18.2c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3 .79.8-2.92-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.2 3.7 8.2 8.24 0 4.54-3.7 8.16-8.24 8.16z" />
        </svg>
      </a>
      <a className="cf-btn cf-call" href={`tel:${site.mobile.tel}`} aria-label={`Call us on ${site.mobile.display}`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
        </svg>
      </a>
    </div>
  )
}