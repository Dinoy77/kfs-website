// Students Scholarship Program page (/scholarship) — B-Pharm Lateral Entry.
// Text is translated from the old Malayalam page. Edit wording here.

export const scholarship = {
  title: 'Students Scholarship Program',

  // Top section
  photo: '/img/scholarship.jpg',
  photoAlt: 'Pharmacy student in a white coat holding a book',
  tag: 'B-Pharm Lateral Entry',
  malayalam: 'സൗജന്യ പഠനം', // "Free education"
  headline: 'Study B-Pharm free of cost, with a free laptop',
  intro:
    'The B-Pharm Lateral Entry program is designed for students who have successfully completed the two-year D-Pharm diploma. It helps you gain deeper knowledge in pharmacy and opens up better job opportunities than the D-Pharm alone.',
  quote: '“Where Technology and Learning Come Together”',

  // Quick facts beside the intro
  facts: [
    { label: 'Eligibility', value: 'D.Pharm – All pass' },
    { label: 'Course duration', value: '3 years' },
    { label: 'Scholarship', value: '100% with Govt. assistance' },
    { label: 'Laptop', value: 'Free for every student' },
  ],

  // What the scholarship pays for
  coversTitle: 'What the scholarship covers',
  coversText:
    'With the support of the Central and State Governments, all your expenses for the B-Pharm Lateral Entry course are covered.',
  covers: [
    { icon: 'fees', title: 'Tuition fees', text: 'Your full course fee is paid.' },
    { icon: 'hostel', title: 'Hostel fees', text: 'Your stay in the hostel is paid.' },
    { icon: 'stipend', title: 'Monthly stipend', text: 'A stipend every month for your expenses.' },
    { icon: 'laptop', title: 'Free laptop', text: 'A laptop for your studies, given free.' },
  ],

  // Who can apply
  whoTitle: 'Who can apply?',
  categoriesLabel: 'Eligible categories',
  categories: ['SC', 'ST', 'OEC', 'OBC-H', 'Fishermen'],
  conditions: [
    'You have passed D-Pharm (all subjects)',
    'You belong to one of the eligible categories',
    'You have passed the KEAM exam (the scholarship is only for KEAM-qualified students)',
  ],
  limitedNote: 'Seats are limited. Call our office soon to check your eligibility.',

  // Contact band
  ctaTitle: 'Interested? Call our office now',
  ctaText: 'Talk to our team directly about eligibility, documents and admission.',
}