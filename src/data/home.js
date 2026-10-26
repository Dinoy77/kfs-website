import { whatsappLink } from './site.js'

// Home page slider. Each slide is designed in code — change the text here.
//   theme   – 'navy', 'light' or 'red' background
//   tags    – small labels at the top (first one red)
//   visual  – { type: 'photo', src, alt, badgeTitle, badgeText, chip }
//             or { type: 'stats', items: [{ big, small }] }
//   buttons – first button is the main (filled) one

export const heroSlides = [
  {
    id: 'bpharm-spot',
    theme: 'navy',
    tags: ['Spot allotment', 'Seats limited'],
    title: 'B Pharmacy Spot Allotment',
    highlight: 'Admission at Government fees',
    text: 'For students who did not get a B Pharm allotment through KEAM, have not got admission in Kerala yet, or did not write KEAM.',
    buttons: [
      { label: 'Call 77360 25600', href: 'tel:+917736025600' },
      { label: 'Call 0471-229 7600', href: 'tel:+914712297600' },
    ],
    note: 'Approved by PCI, DME and Kerala PSC. Affiliated to KUHS.',
    visual: {
      type: 'photo',
      src: '/img/scholarship.jpg',
      alt: 'Pharmacy student in a white coat holding a book',
      badgeTitle: 'Govt. fees',
      badgeText: 'B Pharmacy admission',
    },
  },
  {
    id: 'bpharm-lateral',
    theme: 'light',
    tags: ['B-Pharm Lateral Entry', '100% Scholarship'],
    title: 'Complete your B-Pharm free of cost',
    highlight: 'With Central and State Government assistance',
    text: 'For D-Pharm passed students. Tuition fees, hostel fees and a monthly stipend are covered.',
    chipsLabel: 'Eligible categories',
    chips: ['SC', 'ST', 'OEC', 'OBC-H', 'Fishermen'],
    buttons: [
      { label: 'Call +91 77360 25600', href: 'tel:+917736025600' },
      { label: 'View details', href: '/scholarship' },
    ],
    visual: {
      type: 'photo',
      src: '/img/girl-medical.png',
      alt: 'Pharmacy student in a white coat holding a folder',
      badgeTitle: '100%',
      badgeText: 'Scholarship',
      chip: 'Free laptop',
    },
  },
  {
    id: 'mba',
    theme: 'red',
    tags: ['MBA', 'Earn and Learn'],
    title: 'Get your MBA while you work',
    highlight: 'Full-time job in Bangalore + MBA degree',
    text: 'Study a 2-year full-time MBA and build your career at the same time.',
    points: ['2-year full-time MBA', 'Up to 2 years of work experience', 'Up to 2 years of salary'],
    buttons: [
      { label: 'Call +91 77360 25600', href: 'tel:+917736025600' },
      { label: 'WhatsApp us', href: whatsappLink('Hi, I want to know about the MBA Earn and Learn program') },
    ],
    visual: {
      type: 'stats',
      items: [
        { big: '2 yrs', small: 'MBA degree' },
        { big: '2 yrs', small: 'Work experience' },
        { big: '2 yrs', small: 'Salary' },
      ],
    },
  },
]

// Section below the banner: B-Pharm Lateral Entry
export const bpharm = {
  photo: '/img/girl-medical.png',
  photoAlt: 'Pharmacy student in a white coat holding a folder',
  badgeTitle: '100% Scholarship',
  badgeText: 'Govt. Assistance',
  tag: 'Admissions open',
  title: 'B-Pharm Lateral Entry',
  lead: 'Complete your education free of cost',
  categoriesLabel: 'For students belonging to these categories:',
  categories: ['SC', 'ST', 'OEC', 'OBC-H', 'Fishermen'],
  text: 'Students who have completed D-Pharm and belong to the above categories will receive full assistance from the Central and State Governments. Tuition fees and all related expenses are covered.',
  laptopTitle: 'Free laptop included!',
  laptopText: '“Where Technology and Learning Come Together”',
  contactLabel: 'Interested students, contact us immediately:',
}

// "About Us" section
export const about = {
  imageBack: '/img/about-1.jpg',
  imageFront: '/img/about-2.jpg',
  kicker: 'About us',
  title: 'Kerala Finishing School',
  paragraphs: [
    'Kerala Finishing School is a well-planned organisation with Startup India recognition, focused purely on student talent acquisition and skill development.',
    'We bring students and professionals closer to wider opportunities at national and international level through different methods of training.',
  ],
  badge: 'Startup India recognised',
  buttonText: 'More details',
  buttonLink: '/about',
}

// "Our Services" section — each card turns navy when hovered
export const services = {
  kicker: 'Our services',
  title: 'Services built specifically for your career',
  items: [
    {
      icon: 'cap',
      title: 'Industry Integrated Academic Program',
      text: 'Seamlessly integrates the academic curriculum with real-world industry practices.',
      link: '/programs/industry-integrated-academic-program',
    },
    {
      icon: 'wallet',
      title: 'Pay After Placement Program',
      text: 'Students enroll with the assurance that they pay tuition fees only after securing a job.',
      link: '/programs/pay-after-placement-program',
    },
    {
      icon: 'university',
      title: 'International University Collaborative Program',
      text: 'Partnerships between universities across borders that give students a rich learning experience.',
      link: '/programs/international-university-collaborative-program',
    },
  ],
  allLink: '/programs',
  allText: 'View all services',
}

// "Get in touch" section
export const contact = {
  kicker: 'Get in touch',
  title: 'Contact us for any query',
  addressShort: '2nd Floor, Cheenkayil Building, Opp. MG College, Paruthippara, Thiruvananthapuram',
  formTitle: 'Send us a message',
  // Options in the "Select your option" dropdown
  options: [
    'Industry Integrated Academic Program',
    'Pay After Placement Program',
    'Training and Placement',
    'Online Coaching Management',
  ],
}