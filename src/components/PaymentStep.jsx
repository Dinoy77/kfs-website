import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import './Payment.css'
import { QR_IMAGE } from './qrImage.js'

// ---- Payment settings -------------------------------------------------
// Today: manual UPI QR. When the Airpay account is ready, replace the
// <QrPayment /> block below with the Airpay checkout; the form is untouched.
const PAY = {
  upiId: 'QR919037755265-0024@unionbankofindia',
  payee: 'KERALA FINISHING SCHOOL',
  amount: 1000,
  qr: QR_IMAGE,
  endpoint: '/submit-payment.php',
}

export default function PaymentStep({ applicant }) {
  const [txn, setTxn] = useState('')
  const [shot, setShot] = useState(null)
  const [err, setErr] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done
  const [copied, setCopied] = useState(false)

  async function copyUpi() {
    try {
      await navigator.clipboard.writeText(PAY.upiId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  async function onSubmit(ev) {
    ev.preventDefault()
    const id = txn.trim()
    if (!/^[A-Za-z0-9]{10,25}$/.test(id)) {
      setErr('Enter the UPI transaction / reference ID from your payment app (usually 12 digits).')
      return
    }
    if (shot && shot.size > 2 * 1024 * 1024) {
      setErr('The screenshot is larger than 2 MB.')
      return
    }
    setErr('')
    setState('sending')
    try {
      const fd = new FormData()
      fd.append('ref', applicant.ref)
      fd.append('name', applicant.name)
      fd.append('phone', applicant.phone)
      fd.append('email', applicant.email)
      fd.append('course', applicant.course)
      fd.append('amount', PAY.amount)
      fd.append('txn', id)
      if (shot) fd.append('screenshot', shot)
      const res = await fetch(PAY.endpoint, { method: 'POST', body: fd })
      const data = await res.json().catch(() => null)
      if (data && data.success) setState('done')
      else {
        setState('idle')
        setErr((data && data.message) || 'Could not save your payment details. Please try again.')
      }
    } catch {
      setState('idle')
      setErr('Could not submit right now. Check your internet connection and try again.')
    }
  }

  if (state === 'done') {
    return (
      <div className="wrap af-done">
        <span className="af-done-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <h2>Payment details received</h2>
        <p>Thank you, {applicant.name}. Our team will verify your payment and contact you shortly.</p>
        <p className="af-done-small">Application ID: <b>{applicant.ref}</b>. For any questions, call <a href={`tel:${site.mobile.tel}`}>{site.mobile.display}</a>.</p>
        <Link to="/" className="ap-btn ap-btn-red">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="wrap pay">
      <div className="pay-head">
        <span className="pay-ok" aria-hidden="true">✓</span>
        <div>
          <h2>Application submitted. Now pay the application fee</h2>
          <p>Application ID <b>{applicant.ref}</b>. Your application is complete once the fee is paid.</p>
        </div>
      </div>

      <div className="pay-grid">
        {/* ===== QR payment (replace this block with Airpay later) ===== */}
        <section className="pay-card" aria-labelledby="pay-qr-title">
          <h3 id="pay-qr-title">Scan and pay</h3>
          <p className="pay-amount">₹{PAY.amount.toLocaleString('en-IN')}</p>
          <img className="pay-qr" src={PAY.qr} alt={`UPI QR code for ${PAY.payee}`} width="260" height="260" />
          <p className="pay-payee">{PAY.payee}</p>
          <button type="button" className="pay-upi" onClick={copyUpi}>
            <span>{PAY.upiId}</span>
            <em>{copied ? 'Copied' : 'Copy'}</em>
          </button>
          <small>Works with Google Pay, PhonePe, Paytm, BHIM and any UPI app. The QR has no fixed amount, so enter ₹{PAY.amount.toLocaleString('en-IN')}.</small>
        </section>

        <form className="pay-card" onSubmit={onSubmit} noValidate>
          <h3>After paying, confirm here</h3>
          <div className={`af-field ${err ? 'has-error' : ''}`}>
            <label htmlFor="pay-txn">UPI transaction / reference ID <span aria-hidden="true">*</span></label>
            <input id="pay-txn" type="text" value={txn} onChange={(e) => setTxn(e.target.value)} maxLength={25} autoComplete="off" inputMode="text" />
            <small>Find it in your payment app under the completed payment.</small>
          </div>
          <div className="af-field">
            <label htmlFor="pay-shot">Payment screenshot (optional)</label>
            <input id="pay-shot" type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => setShot(e.target.files[0] || null)} />
            <small>JPG, PNG or PDF, max 2 MB.</small>
          </div>
          {err && <p className="af-summary" role="alert">{err}</p>}
          <button type="submit" className="ap-btn ap-btn-red af-submit" disabled={state === 'sending'}>
            {state === 'sending' ? 'Saving…' : 'I have paid, confirm'}
          </button>
        </form>
      </div>
    </div>
  )
}