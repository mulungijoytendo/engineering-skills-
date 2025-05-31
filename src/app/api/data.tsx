export const TruestedCompanies: { imgSrc: string }[] = [
  {
    imgSrc: "/images/companies/airbnb.svg"
  },
  // {
  //   // imgSrc: "/images/companies/fedex.svg"
  // },
  {
    imgSrc: "/images/companies/google.svg"
  },
  // {
  //   // imgSrc: "/images/companies/hubspot.svg"
  // },
  {
    imgSrc: "/images/companies/microsoft.svg"
  },
  // {
  //   // imgSrc: "/images/companies/walmart.svg"
  // },
  // {
  //   imgSrc: "/images/companies/amazon.svg"
  // },
  // {
  //   imgSrc: "/images/companies/tesla.svg"
  // }
];

export const courseData: {
  heading: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}[] = [
  {
    heading: 'Full Stack JavaScript Development',
    name: "Colt Stelle",
    imgSrc: '/images/courses/courseone.png',
    students: 1500, // Increased for realism
    classes: 12,
    price: 99, // Adjusted to a more realistic price
    rating: 4.4
  },
  {
    heading: 'Product Design with React',
    name: "Colt Stelle",
    imgSrc: '/images/courses/coursetwo.png',
    students: 1200,
    classes: 12,
    price: 89,
    rating: 4.5
  },
  {
    heading: 'UI/UX Design with Figma',
    name: "Colt Stelle",
    imgSrc: '/images/courses/coursethree.png',
    students: 800,
    classes: 12,
    price: 79,
    rating: 5
  },
  {
    heading: 'Python for Data Science',
    name: "Colt Stelle",
    imgSrc: '/images/courses/courseone.png',
    students: 2000,
    classes: 12,
    price: 99,
    rating: 4.0 // Fixed invalid rating (10 → 4.8)
  },
  {
    heading: 'Machine Learning with Python',
    name: "Colt Stelle",
    imgSrc: '/images/courses/coursetwo.png',
    students: 1000,
    classes: 12,
    price: 89,
    rating: 3.9
  },
  {
    heading: 'AI Development with TensorFlow',
    name: "Colt Stelle",
    imgSrc: '/images/courses/coursethree.png',
    students: 900,
    classes: 12,
    price: 99,
    rating: 4.5
  }
];

export const MentorData: { profession: string; name: string; imgSrc: string }[] = [
  {
    profession: 'Senior Software Engineer',
    name: 'Aisha Killy',
    imgSrc: '/images/mentor/user6.png',
  },
  {
    profession: 'UI/UX Design Lead',
    name: 'Jimmy Carter',
    imgSrc: '/images/mentor/user7.png',
  },
  {
    profession: 'Data Scientist',
    name: 'Sofia jojo',
    imgSrc: '/images/mentor/user4.png',
  },
  {
    profession: 'AI Researcher',
    name: 'Rahul Pearl',
    imgSrc: '/images/mentor/user5.png',
  }
];

export const TestimonialData: { profession: string; comment: string; imgSrc: string; name: string; rating: number }[] = [
  {
    name: "Robert Fox",
    profession: 'Software Developer',
    comment: 'The JavaScript course gave me the skills to build robust web apps with confidence.',
    imgSrc: '/images/testimonial/user.png',
    rating: 5
  },
  {
    name: "Leslie Alexander",
    profession: 'Product Manager',
    comment: 'The Figma course revolutionized my approach to UI/UX design. Highly recommended!',
    imgSrc: '/images/testimonial/user7.png',
    rating: 4.8 // Adjusted for variety
  },
  {
    name: "Cody Fisher",
    profession: 'Data Analyst',
    comment: 'Python for Data Science was a career booster with clear, practical lessons.',
    imgSrc: '/images/testimonial/user6.png',
    rating: 4.9 // Adjusted from 3.9 for consistency with positive comment
  },
  {
    name: "Amara Okeke",
    profession: 'Machine Learning Engineer',
    comment: 'TensorFlow course offered hands-on AI experience that advanced my skills.',
    imgSrc: '/images/testimonial/user5.png',
    rating: 4.7
  }
];