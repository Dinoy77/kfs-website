// Single source of truth for contact details and navigation.
// Change a phone number or address here and it updates everywhere.

export const site = {
  name: 'Kerala Finishing School',
  shortName: 'KFS',
  tagline: 'Talent acquisition and skill development for students and professionals',
  // Set to '/img/logo.jpg' once the logo file is copied into public/img
  logo: '/img/logo.jpg',

  address: {
    line1: '2nd Floor, Cheenkayil Building',
    line2: 'Opp. MG College, Paruthippara',
    city: 'Thiruvananthapuram 695015',
    mapUrl: 'https://goo.gl/maps/Zd4BCynmTb98ivUJ6',
    mapEmbed:
      'https://maps.google.com/maps?q=8.52561,76.93850&z=17&output=embed',
  },

  phone: { display: '080-4202 4160', tel: '+918042024160' },
  mobile: { display: '+91 77360 25600', tel: '+917736025600' },
  email: 'enquirykfsi@gmail.com',

  // The old site pointed WhatsApp at the landline, which WhatsApp can't open.
  // Using the mobile number instead — confirm this is the WhatsApp number.
  whatsapp: '917736025600',
}

export const whatsappLink = (text = 'Hi, I want to know more about Kerala Finishing School') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'B-Pharm scholarship', to: '/scholarship' },
  { label: 'Test prep', to: '/test-prep' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
]

export const usefulLinks = [
  { label: 'CEE Kerala (KEAM)', href: 'https://cee.kerala.gov.in/' },
  { label: 'NEET – NTA', href: 'https://neet.nta.nic.in/' },
  { label: 'KUHS', href: 'http://kuhs.ac.in/' },
  { label: 'Kerala PSC', href: 'https://www.keralapsc.gov.in/' },
  { label: 'University of Kerala', href: 'https://www.keralauniversity.ac.in/' },
  { label: 'Govt. of Kerala', href: 'https://kerala.gov.in/' },
]
