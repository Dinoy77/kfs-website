import PageHead from '../components/PageHead.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site, whatsappLink } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <PageHead title="Contact us" intro="Call, message or walk in — our office is opposite MG College, Paruthippara." />
      <section className="section">
        <div className="wrap detail-grid">
          <div>
            <dl className="contact-list">
              <div>
                <dt>Address</dt>
                <dd>
                  <a href={site.address.mapUrl} target="_blank" rel="noreferrer">
                    {site.address.line1}, {site.address.line2}, {site.address.city}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Mobile</dt>
                <dd><a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a></dd>
              </div>
              <div>
                <dt>Office</dt>
                <dd><a href={`tel:${site.phone.tel}`}>{site.phone.display}</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd><a href={whatsappLink()} target="_blank" rel="noreferrer">Start a chat</a></dd>
              </div>
            </dl>
            <iframe
              className="map"
              title="Map to Kerala Finishing School"
              src={site.address.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <aside className="side-card">
            <h2>Send an enquiry</h2>
            <EnquiryForm />
          </aside>
        </div>
      </section>
    </>
  )
}
