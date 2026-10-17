// Programs carried over from the old site's "Services" menu.
// `draft: true` = the old site had little or no text for this page;
// replace `body` with the team's real content before launch.

export const programs = [
  {
    slug: 'industry-integrated-academic-program',
    title: 'Industry Integrated Academic Program',
    summary: 'Your academic course, taught alongside real industry practice.',
    body: [
      {
        text: 'An education program that combines the academic curriculum with real-world industry practice. It closes the gap between what you learn in class and what employers expect on day one, so you graduate with both the theory and the practical experience.',
      },
    ],
  },
  {
    slug: 'pay-after-placement-program',
    title: 'Pay After Placement Program',
    summary: 'Train now. Pay the course fee only after you get a job.',
    body: [
      {
        text: 'We know paying fees during your studies is hard. In this program you enroll, complete the training and get placed — and only then repay the program fee through a convenient payment plan.',
      },
      {
        heading: 'What you get',
        list: [
          'Placement guarantee — a real opportunity to use your new skills in a professional setting.',
          'Flexible payment — focus on your studies without paying tuition upfront.',
          'Industry-relevant training — a curriculum built with industry experts around current job-market needs.',
          'Professional development — soft skills, resume building and interview preparation.',
          'Career support — job placement help, networking opportunities and guidance through your job search.',
        ],
      },
      {
        heading: 'How it works',
        steps: ['Enroll in the program', 'Complete the training', 'Get placed', 'Repay the fee in instalments'],
      },
      {
        text: 'Whether you are a recent graduate starting your career or a professional looking for a new direction, the program gives you the skills, the opportunity and the financial room to get there.',
      },
    ],
  },
  {
    slug: 'international-university-collaborative-program',
    title: 'International University Collaborative Program',
    summary: 'Study through partnerships between universities across borders.',
    body: [
      {
        text: 'A global education program built on partnerships between universities in different countries. Students get a broader, more diverse learning experience by drawing on the strengths of several institutions.',
      },
    ],
  },
  {
    slug: 'training-and-placement',
    title: 'Training and Placement',
    summary: 'Job-ready training followed by placement support.',
    draft: true,
    body: [{ text: 'Content to be added by the KFS team.' }],
  },
  {
    slug: 'train-the-trainer-program',
    title: 'Train the Trainer Program',
    summary: 'Prepare professionals to teach and lead training sessions.',
    draft: true,
    body: [{ text: 'Content to be added by the KFS team.' }],
  },
  {
    slug: 'online-coaching-management',
    title: 'Online Coaching Management',
    summary: 'A platform that runs online coaching end to end.',
    body: [
      {
        text: 'A platform for running online coaching efficiently: simple interfaces and tools that handle administration, deliver course content and keep students engaged.',
      },
    ],
  },
  {
    slug: 'career-planning-and-mapping',
    title: 'Career Planning & Mapping',
    summary: 'Find the right career path, backed by psychometric assessment.',
    body: [
      {
        text: 'We use scientifically validated psychometric assessments to understand a student’s abilities, personality and working style — then map that to a realistic career path and the steps to get there.',
      },
    ],
  },
  {
    slug: 'students-internship',
    title: 'Students Internship',
    summary: 'Internships that give you real work experience before you graduate.',
    draft: true,
    body: [{ text: 'Content to be added by the KFS team.' }],
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)
