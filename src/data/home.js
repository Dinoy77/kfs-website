// Home page banner slides.
// Each slide is one banner image saved in public/img/.
// `alt` is read out by screen readers and by Google, so keep it matching the banner text.

export const heroSlides = [
  // Slide 1: portrait poster shown inside a wide slide, with the key details in English
  {
    id: 'bpharm-spot',
    type: 'poster',
    image: '/img/bpharm-spot.jpg',
    alt: 'B Pharmacy spot allotment at government fees poster (Malayalam). Seats limited. Contact 7736025600 or 0471-2297600.',
    tag: 'Spot allotment',
    title: 'B Pharmacy Spot Allotment',
    lead: 'Admission at Government fees',
    text: 'For students who did not get a B Pharm allotment through KEAM, have not got admission in Kerala yet, or did not write KEAM.',
    badge: 'Seats limited',
    phones: [
      { display: '77360 25600', tel: '+917736025600' },
      { display: '0471-229 7600', tel: '+914712297600' },
    ],
    note: 'Approved by PCI, DME and Kerala PSC. Affiliated to KUHS.',
  },
  {
    id: 'bpharm',
    image: '/img/bpharm.jpg',
    alt: 'B-Pharm Lateral Entry. Complete your education free of cost. 100% scholarship with Government assistance for SC, ST, OEC, OBC-H and Fishermen students. Free laptop included. Interested students contact +91 77360 25600.',
  },
  {
    id: 'mba',
    image: '/img/mba.jpg',
    alt: 'MBA Earn and Learn. Get your MBA degree while doing a full-time job in Bangalore. 2-year full-time MBA, up to 2 years of experience and up to 2 years of salary.',
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