export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Resume',
    href: '/resume.pdf', // Points to the resume in your public folder
    download: true,      // A flag to indicate this is a download link
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Loise Wanjugu',
    position: 'Marketing Director at Sakafu',
    img: 'assets/review1.png',
    review:
      'Working with Kelvin was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Earnest Rotich',
    position: 'Founder of Interpark Real Estate Company',
    img: 'assets/review2.png',
    review:
      "Kelvin's expertise in App development is truly impressive. He delivered a robust and scalable solution for our application that enabled the interaction of our clients that is both the agents and the tenants, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Winston Chacha',
    position: 'CEO of Pickem Fantasy',
    img: 'assets/review4.png',
    review:
      'Kelvin was a pleasure to work with. He understood our requirements perfectly and delivered an app  that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: "Ann’s Cake Website",
    desc: "Designed and built a cake-selling website using HTML and CSS with an elegant, user-friendly interface.",
    subdesc: "GitHub: https://github.com/Masterkimaru/Masterkimaru.github.io",
    href: "",
    texture: "",
    logo: "/assets/Ann's Website.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/html.png" },
      { id: 2, name: "CSS", path: "/assets/css.png" }
    ],
  },
  {
    title: "Ticketing Application (Patatiko)",
    desc: "A web application for selling event tickets for theatre shows, movie screenings, or any other events.",
    subdesc: "Live Demo: http://patatiko.buzz | Backend GitHub: https://github.com/Masterkimaru/TicketApp-Backend",
    href: "patatiko.buzz",
    texture: "",
    logo: "/assets/patatiko-logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Vite", path: "/assets/vite.png" },
      { id: 2, name: "Node.js", path: "/assets/nodejs.png" },
      { id: 3, name: "Express", path: "/assets/express.png" }
    ],
  },
  {
    title: "Interpark Real Estate Mobile App",
    desc: "A cross-platform mobile application for real estate listings where agents or landlords connect with potential clients.",
    subdesc: "Backend GitHub: https://github.com/Masterkimaru/InterParkEnterprises | Frontend GitHub: https://github.com/Masterkimaru/InterPark-Frontend",
    href: "",
    texture: "",
    logo: "/assets/interpark.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Mobile App", path: "/assets/mobile-app.png" },
      { id: 2, name: "Cross-Platform", path: "/assets/react-native.png" }
    ],
  },
  {
    title: "Picke'm Fantasy Football App",
    desc: "An American Football Fantasy App centered around a Picke'm game. Users pick teams they believe will win during a current game week, join or create leagues, and earn points based on correct picks.",
    subdesc: "Frontend GitHub: https://github.com/Masterkimaru/Pickem-American-Fantasy-Football | Backend GitHub: https://github.com/Masterkimaru/AFT-Backend",
    href: "",
    texture: "",
    logo: "/assets/pickem-fantasy.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Mobile App", path: "/assets/mobile-app.png" },
      { id: 2, name: "React Native", path: "/assets/react-native.png" }
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2024 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2023 - 2025',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
