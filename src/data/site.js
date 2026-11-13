// Single source of truth for contact details and navigation.
// Change a phone number or address here and it updates everywhere.

export const site = {
  name: 'Kerala Finishing School',
  shortName: 'KFS',
  tagline: 'Talent acquisition and skill development for students and professionals',
  // Set to '/img/logo.jpg' once the logo file is copied into public/img
  logo: '/img/logo.jpg',

  address: {
    line1: 'Reach Us Business Hub, KJ Square',
    line2: 'TC 52/936, Kaimanam PO',
    city: 'Thiruvananthapuram, Keralam 695040, India',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Reach+Us+Business+Hub+KJ+Square+Kaimanam+Thiruvananthapuram+695040',
    mapEmbed:
      'https://maps.google.com/maps?q=Reach%20Us%20Business%20Hub%2C%20KJ%20Square%2C%20Kaimanam%2C%20Thiruvananthapuram%20695040&z=16&output=embed',
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
