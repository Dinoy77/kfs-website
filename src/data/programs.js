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
    page: {
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Where theory meets practice',
      intro:
        'The Industry Integrated Academic Program is a pioneering initiative that integrates the academic curriculum with real-world industry practices. It goes beyond traditional education, giving students a complete learning experience that prepares them for success in the professional world.',
      sections: [
        {
          type: 'features',
          heading: 'Key features',
          items: [
            {
              title: 'Hands-on experience',
              text: 'Students gain practical exposure to current industry trends and challenges.',
            },
            {
              title: 'Collaborative learning',
              text: 'A collaborative environment between academia and industry, promoting shared knowledge and insights.',
            },
            {
              title: 'Industry partnerships',
              text: 'Strong partnerships with leading industries give students real-world insights and networking opportunities.',
            },
            {
              title: 'Curriculum relevance',
              text: 'The curriculum is continuously updated to match industry demands, so students learn the latest skills and knowledge.',
            },
            {
              title: 'Transition support',
              text: 'Complete support for students moving from academic life to the professional workforce.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Who is it for?',
          text: 'Whether you are a student aiming to excel in a dynamic industry or a professional looking for continuous learning, this program is designed for your needs. Join us on an educational journey where academic excellence meets real-world application.',
        },
        {
          type: 'text',
          heading: 'Success for everyone',
          text: 'We bring students and professionals from every layer of society, including those who have lived in its shadows, closer to real opportunities. Our aim is to show that success is not the right of one particular group. It can be achieved by anyone through a set of dedicated processes.',
        },
      ],
    },
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
    page: {
      // Same two photos as the old website used for this page
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Fostering global learning through collaborative education',
      intro:
        'At the International University Collaborative Program, we believe in the transformative power of global education. The program builds collaborations between universities worldwide, creating opportunities for students and faculty to take part in cross-cultural learning and academic exchange.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Global network',
              text: 'A strong network of partner universities across continents opens doors to diverse learning environments and cross-cultural experiences for students and faculty.',
            },
            {
              title: 'Academic excellence',
              text: 'Our collaborative programs uphold the highest standards of academic quality. Through shared resources and expertise, partner universities create a rich learning environment.',
            },
            {
              title: 'Interdisciplinary opportunities',
              text: 'We encourage collaboration across disciplines, so students and faculty can explore a wide range of subjects and perspectives beyond their core field.',
            },
            {
              title: 'Cultural enrichment',
              text: 'Experience different cultures through our programs. Diverse perspectives build cultural awareness and prepare you for a global world.',
            },
            {
              title: 'Professional development',
              text: 'Beyond academics, you gain valuable skills and insights that prepare you for success in an interconnected global job market.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Our collaborative approach',
          text: 'We create strategic partnerships between universities based on shared values, academic goals and a commitment to a well-rounded education. Programs may include joint courses, exchange programs, research initiatives and other activities that promote internationalisation in the academic community.',
        },
        {
          type: 'text',
          heading: 'Join the global learning community',
          text: 'Whether you are a student looking for an enriching international experience or a faculty member interested in collaborative research and teaching, you are welcome to join our global learning community. Explore new horizons, broaden your perspectives and be part of a truly connected educational experience.',
        },
      ],
    },
  },
  {
    slug: 'training-and-placement',
    title: 'Training and Placement',
    summary: 'Job-ready training followed by placement support.',
    page: {
      // Same two photos as the old website used for this page
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Building careers, empowering futures',
      intro:
        'Training and Placement Services gives you complete support for career development and placement success. Our mission is to bridge the gap between education and employment, through high-quality training programs and strategic placement opportunities for everyone who wants to build a successful career.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Industry-relevant training',
              text: 'Our training programs are designed with industry experts, so you learn the skills and knowledge the job market demands.',
            },
            {
              title: 'Placement assistance',
              text: 'We go beyond training with active placement assistance. Our team works closely with you to connect you with potential employers, for a smooth move from education to employment.',
            },
            {
              title: 'Professional development',
              text: 'Along with technical training, you build communication skills, prepare for interviews and learn workplace etiquette.',
            },
            {
              title: 'Customised career paths',
              text: 'Every person has different career goals, so we give personal guidance to help you plan your own career path.',
            },
            {
              title: 'Networking opportunities',
              text: 'Meet industry professionals, attend networking events and build connections that improve your career prospects.',
            },
          ],
        },
        {
          type: 'steps',
          heading: 'Our training and placement process',
          items: ['Complete the training program', 'Get matched with suitable employers', 'Attend interviews with our support', 'Start your career with ongoing guidance'],
          text: 'The process begins with a complete training program that gives you the skills and confidence the job market needs. After you finish, our placement team works with our network of employers to match you with suitable opportunities, arrange interviews and support you throughout the hiring process.',
        },
        {
          type: 'text',
          heading: 'Empowering your career journey',
          text: 'Whether you are a recent graduate or a professional looking for a career change, join Training and Placement Services for a journey of professional growth and success, backed by quality training and strategic placement support.',
        },
      ],
    },
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