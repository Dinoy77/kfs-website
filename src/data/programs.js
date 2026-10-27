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
    page: {
      // Same two photos as the old website used for this page
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Empowering trainers, transforming lives',
      intro:
        'The Train the Trainer Program is about excellence in training and development. It gives trainers the skills, knowledge and resources they need to deliver impactful, transformative training.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Complete training curriculum',
              text: 'A curriculum covering a wide range of training methods, techniques and best practices, so you gain diverse skills as a trainer.',
            },
            {
              title: 'Experienced facilitators',
              text: 'Learn from experienced trainers and facilitators who bring practical knowledge and industry insights to the program.',
            },
            {
              title: 'Interactive learning',
              text: 'Engaging sessions that simulate real training situations, so you can apply what you learn in practice.',
            },
            {
              title: 'Professional development',
              text: 'Beyond training techniques, you build communication, leadership and adaptability — skills every effective trainer needs.',
            },
            {
              title: 'Networking opportunities',
              text: 'Connect with a community of trainers, share experiences and build a professional network that lasts beyond the program.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Our training approach',
          text: 'We focus on both the art and the science of effective training. You will learn to design engaging training programs, adapt to different learning styles and use new methods that help learners understand and remember.',
        },
        {
          type: 'text',
          heading: 'Join the training revolution',
          text: 'Whether you are an aspiring trainer or an experienced professional looking to improve your skills, join the Train the Trainer Program. Grow your training abilities, inspire learners and make a lasting impact on people and organisations.',
        },
      ],
    },
  },
  {
    slug: 'online-coaching-management',
    title: 'Online Coaching Management',
    summary: 'A platform that runs online coaching end to end.',
    page: {
      // Same two photos as the old website used for this page
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Empowering learners through seamless online coaching',
      intro:
        'Online Coaching Management is changing the way people learn, through innovative online coaching. Our platform connects students with expert coaches, giving personal and flexible learning that supports academic success and personal growth.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Expert coaches',
              text: 'A team of skilled, experienced coaches across many subjects, from academics to skill development, dedicated to helping you reach your full potential.',
            },
            {
              title: 'Personalised learning',
              text: 'Every learner is different. Coaching is tailored to your needs, with personal attention and guidance for the best results.',
            },
            {
              title: 'Flexible scheduling',
              text: 'Life is busy. Join coaching sessions at a time that suits you, from anywhere in the world.',
            },
            {
              title: 'Interactive learning',
              text: 'Engaging, dynamic sessions with tools for real-time collaboration, discussion forums and multimedia resources.',
            },
            {
              title: 'Progress tracking',
              text: 'Track your achievements, set goals and see how you improve over time.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Our approach to online coaching',
          text: 'We build a supportive, interactive online learning community. You can choose coaches based on their expertise, schedule sessions and use resources that help you understand each subject better. The platform makes communication between coaches and learners easy and effective.',
        },
        {
          type: 'text',
          heading: 'Join the online learning revolution',
          text: 'Whether you are a student aiming for academic excellence, a professional building new skills or someone focused on personal development, join Online Coaching Management. Experience convenient, flexible and effective coaching, and start a journey of continuous learning and growth.',
        },
      ],
    },
  },
  {
    slug: 'career-planning-and-mapping',
    title: 'Career Planning & Mapping',
    summary: 'Find the right career path, backed by psychometric assessment.',
    page: {
      // Same two photos as the old website used for this page
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Your strategic partner in career development',
      intro:
        'A well-defined career path is the foundation for personal and professional success. Career Planning & Mapping gives you the tools and insights to navigate the changing world of careers with confidence.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Expert guidance',
              text: 'Our career experts and counsellors bring years of experience, with guidance tailored to your strengths and goals.',
            },
            {
              title: 'Complete assessments',
              text: 'Modern psychometric assessments and tools look closely at your skills, interests and values to find the career paths that suit you best.',
            },
            {
              title: 'Strategic planning',
              text: 'We work with you to create a career plan, with short-term and long-term goals that match your vision.',
            },
            {
              title: 'Professional development',
              text: 'Skill development workshops, training sessions and resources that improve your professional abilities and employability.',
            },
            {
              title: 'Industry insights',
              text: 'Stay up to date on market trends, the job market and industry requirements through regular updates and resources.',
            },
            {
              title: 'Continuous support',
              text: 'Career development is an ongoing process. We support you all the way, so you stay on track as your field changes.',
            },
          ],
        },
        {
          type: 'steps',
          heading: 'Our approach to career planning',
          items: ['In-depth assessment', 'Find your strengths and areas to improve', 'Build your career plan together', 'Ongoing support as you grow'],
          text: 'Our approach is based on understanding your goals and the changing job market. We start with in-depth assessments to find your strengths, preferences and areas to improve. On that foundation, we create a career plan together that fits your goals and what employers need today.',
        },
        {
          type: 'text',
          heading: 'Empowering your journey',
          text: 'Whether you are a student exploring career options, a professional looking for a career change or someone aiming for continuous growth, Career Planning & Mapping is your partner. Join us to unlock your full potential and find your path to success.',
        },
      ],
    },
  },
  {
    slug: 'students-internship',
    title: 'Students Internship',
    summary: 'Internships that give you real work experience before you graduate.',
    page: {
      // Same two photos as the old website used for this page
      photos: { back: '/img/iiap-1.jpg', front: '/img/iiap-2.jpg' },
      headline: 'Empowering future professionals through real-world experience',
      intro:
        'We believe in the power of hands-on experience. The Students Internship Program gives students valuable insights, practical skills and exposure to the professional world, preparing them for successful careers in their chosen fields.',
      sections: [
        {
          type: 'features',
          heading: 'Why choose us?',
          items: [
            {
              title: 'Industry connections',
              text: 'Partnerships with a wide range of companies and organisations give you the chance to intern in reputable, forward-thinking workplaces.',
            },
            {
              title: 'Real-world learning',
              text: 'Gain practical experience beyond the classroom, with hands-on exposure to real industry practices and challenges.',
            },
            {
              title: 'Mentorship and guidance',
              text: 'Experienced professionals guide and support you throughout your internship, with valuable insights and career advice.',
            },
            {
              title: 'Professional development',
              text: 'Workshops, seminars and training sessions build both your technical skills and the soft skills you need at work.',
            },
            {
              title: 'Networking opportunities',
              text: 'Connect with professionals, attend industry events and build a network of contacts in your field of interest.',
            },
          ],
        },
        {
          type: 'text',
          heading: 'Internship opportunities',
          text: 'Whether you are studying business, technology, design or any other field, the program offers a wide range of opportunities, from startups to multinational companies. Our goal is to match you with an internship that fits your career goals and academic background.',
        },
        {
          type: 'text',
          heading: 'Your path to professional growth',
          text: 'Join the Students Internship Program and start a journey of professional growth and discovery. We give you the tools and experience you need to excel in your future career. Invest in your success by gaining valuable hands-on experience through our internships.',
        },
      ],
    },
  },
]

export const getProgram = (slug) => programs.find((p) => p.slug === slug)