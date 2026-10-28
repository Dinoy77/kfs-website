// Test Preparation page (/test-prep) — KEAM and NEET.
// Written by us as a first draft. Please get the "help" points, the "features"
// and the CTA confirmed by the team lead before the site goes live.

export const testPrep = {
  title: 'Test Preparation',
  kicker: 'KEAM & NEET',
  headline: 'Prepare for your entrance exam with the right guidance',
  intro:
    'Entrance exams decide which course and college you get. At Kerala Finishing School we help students prepare with a clear plan, regular practice and guidance at every step, from preparation to admission.',

  exams: [
    {
      id: 'keam',
      short: 'KEAM',
      name: 'Kerala Engineering, Architecture & Medical Entrance',
      conductedBy: 'Commissioner for Entrance Examinations (CEE), Kerala',
      about:
        'KEAM is the entrance process for professional courses in Kerala. Students take the KEAM exam for engineering and pharmacy admissions. For medical and allied courses in Kerala, students register through KEAM and are ranked using their NEET scores.',
      courses: ['B.Tech / Engineering', 'B.Pharm', 'Architecture (with NATA)', 'Medical & allied courses (through KEAM, with NEET scores)'],
      help: [
        'Subject-wise preparation in Physics, Chemistry and Mathematics',
        'Regular practice tests in the exam pattern',
        'Help with the KEAM online application and documents',
        'Guidance on rank, allotment options and college choices',
      ],
      officialLabel: 'CEE Kerala website',
      officialUrl: 'https://cee.kerala.gov.in/',
    },
    {
      id: 'neet',
      short: 'NEET',
      name: 'National Eligibility cum Entrance Test (UG)',
      conductedBy: 'National Testing Agency (NTA)',
      about:
        'NEET (UG) is the national entrance exam for medical admissions in India. Students need a NEET score for MBBS, BDS, AYUSH and other medical courses, both in Kerala and across the country.',
      courses: ['MBBS', 'BDS', 'BAMS, BHMS, BSMS, BUMS (AYUSH)', 'B.Sc Nursing and allied courses (where NEET is required)'],
      help: [
        'Subject-wise preparation in Physics, Chemistry and Biology',
        'Regular mock tests with performance review',
        'Doubt-clearing sessions with experienced faculty',
        'Guidance on counselling, choice filling and seat allotment',
      ],
      officialLabel: 'NEET – NTA website',
      officialUrl: 'https://neet.nta.nic.in/',
    },
  ],

  featuresTitle: 'How we help you prepare',
  features: [
    { title: 'Experienced faculty', text: 'Learn from teachers who know the exam pattern and the topics that matter most.' },
    { title: 'Practice and mock tests', text: 'Regular tests help you manage time and track your progress.' },
    { title: 'Personal attention', text: 'Doubt-clearing and one-to-one guidance when you need it.' },
    { title: 'Admission support', text: 'Help after the exam too — counselling, allotment and admission.' },
  ],

  ctaTitle: 'Want to know about the next batch?',
  ctaText: 'Call or message us for batch details, timings and fees.',
}