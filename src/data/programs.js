// Programs (the "Services" menu).
// Every program needs: slug (used in the web address), title and summary.
// A program gets its full page once it has a `page` block. Programs without one
// show the "We're updating this page" message until their content is added.
//
// `page` blocks:
//   headline  – big heading at the top of the content
//   intro     – opening paragraph
//   sections  – list of blocks, each one of:
//     { type: 'features', heading, items: [{ title, text }] }   → benefit cards
//     { type: 'steps',    heading, items: ['…'], text }         → numbered steps
//     { type: 'text',     heading, text }                       → heading + paragraph

export const programs = [
  {
    slug: 'students-scholarship-program',
    title: 'Students Scholarship Program',
    summary: 'B-Pharm Lateral Entry with 100% scholarship through Government assistance.',
    link: '/scholarship', // has its own page, not a /programs/ page
  },
  {
    slug: 'industry-integrated-academic-program',
    title: 'Industry Integrated Academic Program',
    summary: 'Your academic course, taught alongside real industry practice.',
  },
  {
    slug: 'pay-after-placement-program',
    title: 'Pay After Placement Program',
    summary: 'Train now. Pay the course fee only after you get a job.',
    page: {
      headline: 'Unlocking career opportunities with guaranteed placement success',
      intro:
        'At the Pay After Placement Program, we understand the importance of a rewarding career after education. Our program gives you comprehensive training and education, with the unique benefit of paying only after you secure a successful placement.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Placement guarantee',
              text: 'We stand by our commitment to your career success. The program comes with a placement guarantee, so you get the opportunity to apply your new skills in a professional setting.',
            },
            {
              title: 'Flexible payment',
              text: 'We know the financial challenges students face during their education. Our Pay After Placement model lets you focus on your studies without paying tuition fees upfront.',
            },
            {
              title: 'Industry-relevant training',
              text: 'Our curriculum is built with industry experts, giving you practical, up-to-date skills that match what the job market needs.',
            },
            {
              title: 'Professional development',
              text: 'Beyond technical skills, we focus on soft skills, resume building and interview preparation to improve your overall employability.',
            },
            {
              title: 'Dedicated career support',
              text: 'We offer ongoing career support, including job placement assistance, networking opportunities and guidance to help you navigate the job market.',
            },
          ],
        },
        {
          type: 'steps',
          heading: 'How it works',
          items: ['Enroll in the program', 'Complete the training', 'Get placed in a job', 'Repay the fees in easy instalments'],
          text: 'Once you have started your career, you repay the program fees through a convenient payment plan. Your success is our success, and we support you throughout your journey.',
        },
        {
          type: 'text',
          heading: 'Your path to a brighter future',
          text: 'Whether you are a recent graduate starting your career or a professional looking for a new direction, the Pay After Placement Program gives you the skills, the opportunities and the financial flexibility to reach your goals.',
        },
      ],
    },
  },
  {
    slug: 'international-university-collaborative-program',
    title: 'International University Collaborative Program',
    summary: 'Study through partnerships between universities across borders.',
  },
  {
    slug: 'training-and-placement',
    title: 'Training and Placement',
    summary: 'Job-ready training followed by placement support.',
  },
  {
    slug: 'train-the-trainer-program',
    title: 'Train the Trainer Program',
    summary: 'Prepare professionals to teach and lead training sessions.',
  },
  {
    slug: 'online-coaching-management',
    title: 'Online Coaching Management',
    summary: 'A platform that runs online coaching end to end.',
  },
  {
    slug: 'career-planning-and-mapping',
    title: 'Career Planning & Mapping',
    summary: 'Find the right career path, backed by psychometric assessment.',
  },
  {
    slug: 'students-internship',
    title: 'Students Internship',
    summary: 'Internships that give you real work experience before you graduate.',
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)