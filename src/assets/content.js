// SA Global Content Management
export const content = {
  siteName: "SA Global",
  siteTagline: "Your Gateway to Global Education",
  
  navigation: {
    home: "Home",
    about: "About",
    services: "Services",
    universities: "Universities & Countries",
    blog: "Blog",
    contact: "Contact"
  },

  contactInfo: {
    phone: "03324111224",
    email: "info@saglobal.com",
    email2: "support@saglobal.com",
    address: "Gulshan-e-Iqbal, Karachi",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM"
  },

  home: {
    hero: {
      slides: [
        {
          title: "Discover World-Class Universities",
          subtitle: "Explore top-ranked institutions worldwide and find your perfect academic match",
          button1: "Explore Universities",
          button2: "View Programs",
          image: "hero1"
        },
        {
          title: "Plan Your Future Abroad",
          subtitle: "Get expert guidance on university selection, visa applications, and career planning",
          button1: "Start Planning",
          button2: "Get Consultation",
          image: "hero2"
        },
        {
          title: "Achieve Academic Excellence",
          subtitle: "Join thousands of successful students who achieved their dreams with SA Global",
          button1: "View Services",
          button2: "Apply Now",
          image: "hero3"
        }
      ]
    },
    
    stats: {
      title: "Our Impact",
      items: [
        { number: "5000+", label: "Students Helped" },
        { number: "200+", label: "Partner Universities" },
        { number: "50+", label: "Countries" },
        { number: "98%", label: "Success Rate" }
      ]
    },

    aboutOverview: {
      title: "About SA Global",
      description: "We are a leading international education consultancy dedicated to helping students achieve their academic dreams. Our mission is to provide exceptional guidance, our vision is to connect ambitious students with world-class opportunities, and our values center on integrity, innovation, and student success.",
      button: "Apply Now"
    },

    howItWorks: {
      title: "How It Works",
      subtitle: "Your journey to global education in three simple steps",
      steps: [
        {
          title: "Consultation",
          description: "Initial counseling and profile assessment to understand your goals, preferences, and academic background.",
          icon: "💬"
        },
        {
          title: "Application",
          description: "Comprehensive university and visa application support with personalized guidance throughout the process.",
          icon: "📝"
        },
        {
          title: "Success",
          description: "Ongoing support, career guidance, and post-study options to ensure your long-term success.",
          icon: "🎓"
        }
      ]
    },

    studyAbroadConsultants: {
      title: "SA Global Consultants",
      subtitle: "Study at your dream destination",
      countries: [
        {
          name: "Canada",
          description: "High-quality education with affordable tuition and excellent post-graduation work opportunities. Known for multicultural environment and world-class universities.",
          image: "canada-landmark",
          flag: "canada",
          url: "/universities?country=canada"
        },
        {
          name: "USA",
          description: "Home to world-renowned universities like Harvard, MIT, and Stanford. Offers diverse programs and cutting-edge research opportunities.",
          image: "usa-landmark",
          flag: "usa",
          url: "/universities?country=usa"
        },
        {
          name: "Ireland",
          description: "A welcoming destination with excellent English-language education, rich culture, and strong connections to European and global markets.",
          image: "ireland-landmark",
          flag: "ireland",
          url: "/universities?country=ireland"
        },
        {
          name: "New Zealand",
          description: "Beautiful landscapes, high-quality education system, and excellent work-life balance. Known for innovative teaching methods and research.",
          image: "new-zealand-landmark",
          flag: "new-zealand",
          url: "/universities?country=new-zealand"
        },
        {
          name: "Singapore",
          description: "Asian education hub with excellent universities and strong connections to global markets. Multicultural environment and world-class infrastructure.",
          image: "singapore-landmark",
          flag: "singapore",
          url: "/universities?country=singapore"
        },
        {
          name: "United Kingdom",
          description: "Rich academic tradition with institutions like Oxford and Cambridge. Known for quality education and cultural diversity.",
          image: "uk-landmark",
          flag: "uk",
          url: "/universities?country=uk"
        },
        {
          name: "United Arab Emirates",
          description: "A thriving hub of innovation and opportunity with world-class universities and strong connections to global markets.",
          image: "uae-landmark",
          flag: "uae",
          url: "/universities?country=uae"
        }
      ]
    },

    studyAbroadServices: {
      title: "Our Study Abroad Services",
      subtitle: "Comprehensive support for your educational journey",
      forStudents: {
        title: "To Students",
        services: [
          "Initial Assessment",
          "Scholarship",
          "Visa Guidance",
          "Standardized Testing",
          "Guidance and Preparation",
          "Counselling",
          "Application process",
          "Post Acceptance service",
          "Pre-departure Orientation"
        ],
        button: "Book Online Appointment",
        url: "/contact"
      },
      forPartners: {
        title: "To Partners",
        services: [
          "Universities / School Outreach",
          "Info session across schools and universities",
          "Social Media Marketing",
          "Seminars"
        ],
        button: "Partner With Us",
        url: "/contact"
      }
    },

    destinations: {
      title: "Popular Study Destinations",
      subtitle: "Explore world-class education opportunities across the globe",
      items: [
        {
          name: "Canada",
          shortName: "CA",
          description: "High-quality education with affordable tuition and excellent post-graduation work opportunities. Known for multicultural environment.",
          icon: "🇨🇦",
          flag: "canada"
        },
        {
          name: "USA",
          shortName: "US",
          description: "Home to world-renowned universities like Harvard, MIT, and Stanford. Offers diverse programs and cutting-edge research opportunities.",
          icon: "🇺🇸",
          flag: "usa"
        },
        {
          name: "Ireland",
          shortName: "IE",
          description: "A welcoming destination with excellent English-language education, rich culture, and strong connections to European and global markets.",
          icon: "🇮🇪",
          flag: "ireland"
        },
        {
          name: "New Zealand",
          shortName: "NZ",
          description: "Beautiful landscapes, high-quality education system, and excellent work-life balance. Known for innovative teaching methods and research.",
          icon: "🇳🇿",
          flag: "new-zealand"
        },
        {
          name: "Singapore",
          shortName: "SG",
          description: "Asian education hub with excellent universities and strong connections to global markets. Multicultural environment.",
          icon: "🇸🇬",
          flag: "singapore"
        },
        {
          name: "United Kingdom",
          shortName: "GB",
          description: "Rich academic tradition with institutions like Oxford and Cambridge. Known for quality education and cultural diversity.",
          icon: "🇬🇧",
          flag: "uk"
        },
        {
          name: "United Arab Emirates",
          shortName: "AE",
          description: "A thriving hub of innovation and opportunity with world-class universities and strong connections to global markets.",
          icon: "🇦🇪",
          flag: "uae"
        }
      ]
    },


    blogPreview: {
      title: "Latest Articles",
      subtitle: "Stay updated with our latest insights and resources",
      items: [
        {
          title: "Top 10 Universities for Engineering in 2024",
          summary: "Discover the best engineering programs worldwide and what makes them stand out.",
          readMore: "Read More"
        },
        {
          title: "Complete Guide to Student Visa Applications",
          summary: "Everything you need to know about visa requirements and application processes.",
          readMore: "Read More"
        },
        {
          title: "Scholarship Opportunities for International Students",
          summary: "Explore various funding options to make your international education more affordable.",
          readMore: "Read More"
        }
      ]
    },

    whyChooseUs: {
      title: "Why Choose SA Global?",
      subtitle: "Your trusted partner in international education",
      description: "We provide comprehensive support throughout your entire study abroad journey, from initial consultation to post-graduation career guidance.",
      benefits: [
        {
          text: "Expert guidance from experienced education consultants",
          icon: "👨‍🏫"
        },
        {
          text: "Personalized university and course recommendations",
          icon: "🎯"
        },
        {
          text: "Complete visa application assistance",
          icon: "📋"
        },
        {
          text: "Accommodation support and housing solutions",
          icon: "🏠"
        },
        {
          text: "Pre-departure orientation and cultural training",
          icon: "✈️"
        },
        {
          text: "Ongoing support throughout your studies",
          icon: "🤝"
        },
        {
          text: "Career counseling and job placement assistance",
          icon: "💼"
        },
        {
          text: "Strong network of university partnerships",
          icon: "🌐"
        }
      ],
      image: "guidance",
      imageText: "Expert guidance for your global education journey"
    },

    topUniversityRecommendations: {
      title: "Our Top University Recommendations",
      universities: [
        {
          name: "Cardiff University",
          welshName: "PRIFYSGOL CAERDYD",
          description: "Ranked 80th globally, is consistently in the top 100 universities. IT Excels in subjects like sport, Dentistry and theology, all ranked in the global top 50, and is situated in the vibrant heart of england.",
          image: "cardiff",
          logo: "cardiff-logo"
        },
        {
          name: "University of East Anglia",
          shortName: "UEA",
          description: "A career-focused university in West London, ranked globally for Civil Engineering, Computer Science, and Law.",
          image: "uea",
          logo: "uea-logo"
        },
        {
          name: "University of Nottingham",
          description: "A prestigious Russell Group university, ranked top globally for Media, Architecture, and Dentistry.",
          image: "nottingham",
          logo: "nottingham-logo"
        },
        {
          name: "University of Sussex",
          description: "Known for excellence in Creative Writing, Environmental Sciences, and Development Studies, ranked in UK top 30.",
          image: "sussex",
          logo: "sussex-logo"
        },
        {
          name: "University of Birmingham",
          description: "A top 100 global university with strong programs in Law, Business, Engineering, and Veterinary Medicine.",
          image: "birmingham",
          logo: "birmingham-logo"
        }
      ]
    },

    partnersUniversities: {
      title: "Partners Universities",
      description: "SA Global has been a leading name in the study abroad and visa consultants industry for over 10 years. With a rich history of helping students achieve their dreams of studying abroad, we are proud to have successfully sent over 5000 students to top universities worldwide. Our expertise in the field and commitment to excellence have made us official partners of the University of Nottingham and the University of Birmingham. These partnerships reflect our strong relationships with some of the best universities in the world and our dedication to providing our clients with the best opportunities to succeed. Trust SA Global to guide you on your study abroad journey and help you achieve your academic goals.",
      universities: [
        {
          name: "University of Nottingham",
          description: "The University of Nottingham is a public research university located in Nottingham, England. It was established in 1881 and is one of the largest and most highly regarded universities in the UK.",
          image: "nottingham",
          logo: "nottingham-logo",
          locations: "UK | CHINA | MALAYSIA"
        },
        {
          name: "University of Birmingham",
          description: "This is a public research university located in Birmingham, England. It was established in 1825 and is one of the founding members of the Russell Group and universities in the UK.",
          image: "birmingham",
          logo: "birmingham-logo"
        },
        {
          name: "Queen Mary University",
          description: "Queen Mary University (QMUL) is a public research university located in London, England. It was established in 1785 and is one of the largest colleges in London.",
          image: "queen-mary",
          logo: "queen-mary-logo"
        },
        {
          name: "Royal Holloway University",
          description: "Royal Holloway, University of London is a public research university located in Egham, Surrey, England. It was founded in 1885 and became part of the University of London in 1900.",
          image: "royal-holloway",
          logo: "royal-holloway-logo"
        },
        {
          name: "Deakin University",
          description: "Deakin University is a public university located in Melbourne, Victoria, Australia. It was established in 1974 and is named after Australia's second Prime Minister, Alfred Deakin.",
          image: "deakin",
          logo: "deakin-logo"
        },
        {
          name: "Curtin University",
          description: "Curtin University is a public research university located in Perth, Western Australia. It was established in 1966 and is named after former Prime Minister of Australia John Curtin.",
          image: "curtin",
          logo: "curtin-logo"
        }
      ]
    },

    partners: {
      title: "Our Partners",
      logos: [
        { name: "INTO", image: "into" },
        { name: "StudyGroup", image: "studygroup" },
        { name: "Cambridge Education Group", image: "cambridge-education" },
        { name: "navitas", image: "navitas" },
        { name: "SHORELIGHT", image: "shorelight" }
      ]
    },

    callToAction: {
      title: "Ready to Start Your Journey?",
      subtitle: "Get a free consultation and take the first step towards your global education dreams",
      button: "Get Free Consultation"
    }
  },

  about: {
    hero: {
      title: "About SA Global",
      subtitle: "Facilitating students since 2010."
    },
    mission: {
      title: "Our Mission",
      description: "To provide exceptional educational consulting services that help students navigate the complex world of international education, ensuring they find the perfect academic path that aligns with their career goals and personal aspirations.",
      points: [
        "Student-centered approach in all our services",
        "Transparency and honesty in every interaction",
        "Continuous learning and adaptation to global education trends",
        "Building lasting relationships with students and families",
        "Commitment to excellence and quality service delivery"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To be the leading global education consultancy that transforms lives by connecting ambitious students with world-class educational opportunities, fostering cross-cultural understanding, and building a more connected world through education.",
      image: "/src/assets/images/about/vision-image.jpg"
    },
    values: {
      title: "Our Values",
      subtitle: "The principles that guide everything we do",
      items: [
        {
          title: "Integrity",
          description: "We maintain the highest ethical standards in all our interactions and recommendations."
        },
        {
          title: "Innovation",
          description: "We continuously adapt and improve our services to meet evolving educational needs."
        },
        {
          title: "Student Success",
          description: "Every decision we make is centered on achieving the best outcomes for our students."
        },
        {
          title: "Global Perspective",
          description: "We embrace diversity and promote cross-cultural understanding in education."
        }
      ]
    },
    history: {
      title: "Our History",
      subtitle: "A journey of growth and excellence since 2010",
      timeline: [
        {
          year: "2010",
          event: "SA Global founded with a vision to democratize access to global education"
        },
        {
          year: "2012",
          event: "Expanded to serve students in 10 countries across Asia and Europe"
        },
        {
          year: "2015",
          event: "Launched our comprehensive university partnership program"
        },
        {
          year: "2018",
          event: "Reached milestone of 1000+ successful student placements"
        },
        {
          year: "2020",
          event: "Adapted to virtual counseling and digital-first approach during pandemic"
        },
        {
          year: "2024",
          event: "Celebrating 5000+ students helped across 50+ countries"
        }
      ]
    },
  },

  services: {
    hero: {
      title: "Our Services",
      subtitle: "Comprehensive support for your study abroad journey"
    },
    items: [
      {
        title: "University Selection & Application",
        description: "Personalized guidance to help you choose the right university and program based on your academic background, career goals, and preferences.",
        icon: "🎓",
        image: "/src/assets/images/services/study-abroad.jpg"
      },
      {
        title: "Student Counseling",
        description: "One-on-one counseling sessions to address your concerns, answer questions, and provide emotional support throughout your journey.",
        icon: "💬",
        image: "/src/assets/images/services/student-counselling.jpg"
      },
      {
        title: "Visa Application Support",
        description: "Complete assistance with visa applications, document preparation, and interview guidance to ensure a smooth process.",
        icon: "📋",
        image: "/src/assets/images/services/visa-application.jpg"
      },
      {
        title: "Accommodation Assistance",
        description: "Help finding suitable housing options, from university dormitories to private apartments, based on your budget and preferences.",
        icon: "🏠",
        image: "/src/assets/images/services/accommodation.jpg"
      }
    ]
  },

  universities: {
    hero: {
      title: "Universities & Countries",
      subtitle: "Explore educational opportunities worldwide"
    },
    countries: [
      {
        name: "North America",
        countries: [
          {
            name: "United States",
            description: "Home to world-renowned universities with diverse programs and cutting-edge research opportunities.",
            flag: "usa",
            universities: [
              "Harvard University",
              "Massachusetts Institute of Technology (MIT)",
              "Stanford University",
              "University of California, Berkeley",
              "Yale University",
              "Princeton University",
              "and 200+ more prestigious institutions"
            ]
          },
          {
            name: "Canada",
            description: "High-quality education with affordable tuition and excellent post-graduation work opportunities.",
            flag: "canada",
            universities: [
              "University of Toronto",
              "McGill University",
              "University of British Columbia",
              "University of Alberta",
              "McMaster University",
              "University of Waterloo",
              "and 50+ more top-ranked universities"
            ]
          }
        ]
      },
      {
        name: "Europe",
        countries: [
          {
            name: "United Kingdom",
            description: "Rich academic tradition with quality education and cultural diversity.",
            flag: "uk",
            universities: [
              "University of Oxford",
              "University of Cambridge",
              "Imperial College London",
              "London School of Economics (LSE)",
              "University College London (UCL)",
              "King's College London",
              "and 100+ more world-class institutions"
            ]
          },
          {
            name: "Germany",
            description: "Free or low-cost education with world-class engineering and technical programs.",
            flag: "germany",
            universities: [
              "Technical University of Munich",
              "Heidelberg University",
              "RWTH Aachen University",
              "Ludwig Maximilian University of Munich",
              "University of Freiburg",
              "Karlsruhe Institute of Technology",
              "and 80+ more excellent universities"
            ]
          },
          {
            name: "Ireland",
            description: "English-speaking country with excellent universities and vibrant student life.",
            flag: "uk", // Using UK flag as placeholder since we don't have Ireland flag
            universities: [
              "Trinity College Dublin",
              "University College Dublin",
              "National University of Ireland, Galway",
              "University College Cork",
              "Dublin City University",
              "Maynooth University",
              "and 10+ more quality institutions"
            ]
          }
        ]
      },
      {
        name: "Asia Pacific",
        countries: [
          {
            name: "Australia",
            description: "Innovative education system with strong industry connections and high quality of life.",
            flag: "australia",
            universities: [
              "University of Melbourne",
              "Australian National University",
              "University of Sydney",
              "University of Queensland",
              "Monash University",
              "University of New South Wales",
              "and 40+ more leading institutions"
            ]
          },
          {
            name: "Singapore",
            description: "Asian education hub with excellent universities and strong connections to global markets.",
            flag: "singapore",
            universities: [
              "National University of Singapore",
              "Nanyang Technological University",
              "Singapore Management University",
              "Singapore University of Technology and Design",
              "Singapore Institute of Technology",
              "Singapore University of Social Sciences",
              "and 10+ more specialized institutions"
            ]
          },
          {
            name: "New Zealand",
            description: "Beautiful country with world-class education and excellent quality of life.",
            flag: "australia", // Using Australia flag as placeholder since we don't have New Zealand flag
            universities: [
              "University of Auckland",
              "University of Otago",
              "University of Canterbury",
              "Victoria University of Wellington",
              "Massey University",
              "University of Waikato",
              "and 8+ more quality institutions"
            ]
          }
        ]
      }
    ]
  },

  blog: {
    hero: {
      title: "Education Blog",
      subtitle: "Insights, tips, and updates for your study abroad journey"
    }
  },

  contact: {
    hero: {
      title: "Get in Touch",
      subtitle: "Ready to start your global education journey? Contact us today!"
    },
    form: {
      title: "Send us a Message"
    }
  }
};

// Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: "Top 10 Engineering Universities in 2024",
    slug: "top-10-engineering-universities-2024",
    excerpt: "Discover the best engineering universities worldwide for 2024, including admission requirements, programs, and career prospects.",
    content: "Full content about engineering universities...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "University Guide",
    image: "/src/assets/images/blog-posts/engineering-universities.jpg"
  },
  {
    id: 2,
    title: "Complete Guide to Student Visa Applications",
    slug: "complete-guide-student-visa-applications",
    excerpt: "Everything you need to know about student visa applications, required documents, and common pitfalls to avoid.",
    content: "Full content about visa applications...",
    author: "Michael Chen",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Visa Guide",
    image: "/src/assets/images/blog-posts/visa-applications.jpg"
  },
  {
    id: 3,
    title: "Scholarship Opportunities for International Students",
    slug: "scholarship-opportunities-international-students",
    excerpt: "Explore various scholarship opportunities available for international students to fund their education abroad.",
    content: "Full content about scholarships...",
    author: "Emily Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Funding",
    image: "/src/assets/images/blog-posts/scholarships.jpg"
  },
  {
    id: 4,
    title: "Adapting to Life as an International Student",
    slug: "adapting-life-international-student",
    excerpt: "Tips and advice for international students on how to adapt to a new country, culture, and academic environment.",
    content: "Full content about student life...",
    author: "David Thompson",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Student Life",
    image: "/src/assets/images/blog-posts/student-life.jpg"
  },
  {
    id: 5,
    title: "Career Opportunities After Studying Abroad",
    slug: "career-opportunities-after-studying-abroad",
    excerpt: "How studying abroad can enhance your career prospects and open doors to global job opportunities.",
    content: "Full content about career opportunities...",
    author: "Sarah Johnson",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Career",
    image: "/src/assets/images/blog-posts/career-opportunities.jpg"
  },
  {
    id: 6,
    title: "Choosing the Right Study Destination",
    slug: "choosing-right-study-destination",
    excerpt: "Factors to consider when choosing your study destination, including cost, culture, and career opportunities.",
    content: "Full content about choosing destinations...",
    author: "Michael Chen",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Planning",
    image: "/src/assets/images/blog-posts/study-destination.jpg"
  }
];

// Function to get all blog posts
export const getAllBlogPosts = () => {
  return blogPosts;
};

// Function to get blog post by slug
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};
