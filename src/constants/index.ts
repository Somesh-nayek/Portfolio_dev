import {
  mobile,
  backend,
  creator,
  web,
  portfolio,
  typescript,
  brainly,
  reactjs,
  nextJs,
  chess,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  leetcode,
  sih,
  gdsc,
  github,
  python,
  postgresql,
  aws,
  sail
} from '../assets';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "React & Next.js Developer", icon: web },
  { title: "Native Android Developer", icon: mobile },
  { title: "Full-Stack Developer(MERN)", icon: backend },
  { title: "Problem Solver & Innovater", icon: creator },
];

const technologies = [
  { name: "Next JS", icon: nextJs },
  { name: "Node JS", icon: nodejs },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Python", icon: python },
  { name: "git", icon: git },
  { name: "Docker", icon: docker },
  { name: "figma", icon: figma },
  { name: "AWS", icon: aws },
];

const experiences = [
  {
    title: "IT Trainee",
    company_name: "Durgapur Steel Plant (SAIL)",
    icon: sail,
    iconBg: "#E6DEDD",
    date: "June 2025",
    points: [
      "Gained exposure to real-time IT infrastructure across departments like C&IT, Blast Furnace, and SMS during 11-day training."
    ],
  },
  {
    title: "Android Development Workshop",
    company_name: "Google Developer Student Club (GDSC), NSEC",
    icon: gdsc,
    iconBg: "#E6DEDD",
    date: "December 2023",
    points: [
      "Completed the 'Android Compose Camp' organized by GDSC.",
      "Built UI components using Jetpack Compose for modern Android development.",
      "Worked on integrating Retrofit for API calls in Android applications.",
    ],
  },
  // {
  //   title: "Smart Bengal Hackathon (SBH) 2024,2025 - Participant",
  //   company_name: "Government of West Bengal",
  //   icon: sbh,
  //   iconBg: "#E6DEDD",
  //   date: "February 2024",
  //   points: [
  //     "Built a real-time collaboration tool for students and teachers using the MERN stack.",
  //     "Implemented WebSockets for live interaction and real-time updates.",
  //     "Designed a scalable backend architecture to handle concurrent users efficiently.",
  //   ],
  // },
  {
    title: "Smart India Hackathon (SIH) 2024,2025 - Participnt",
    company_name: "Government of India",
    icon: sih,
    iconBg: "#E6DEDD",
    date: "August 2024",
    points: [
      "Developed an Alumni Association Platform using React.js, Spring Boot, and PostgreSQL.",
      "Implemented a leaderboard-based success tracking system to foster alumni engagement.",
      "Collaborated with a team to design secure authentication using OAuth 2.0 and JWT.",
    ],
  },
  {
    title: "Open Source & GitHub Workshop",
    company_name: "Google Developer Student Club (GDSC), NSEC",
    icon: github,
    iconBg: "#383E56",
    date: "December 2024",
    points: [
      "Learned advanced Git and GitHub workflows for collaborative development.",
      "Contributed to open-source projects and explored best practices for code versioning.",
      "Gained hands-on experience with pull requests, branching strategies, and issue tracking.",
    ],
  },
  {
    title: "Competitive Programmer",
    company_name: "LeetCode & GeeksforGeeks",
    icon: leetcode,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Solved 300+ problems on LeetCode, focusing on Graphs, Dynamic Programming, and Greedy Algorithms.",
      "Regularly practice and participate in coding challenges to improve problem-solving skills.",
    ]
  }
];

const education = [
  {
    title: "B.Tech in Information Technology",
    institution: "Netaji Subhash Engineering College",
    year: "2022 - 2026",
    details:
      "Currently pursuing my B.Tech degree with a focus on web development, problem-solving, and full-stack technologies.",
    score: "Currently: 8.33 CGPA",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    title: "Higher Secondary (Class 12)",
    institution: "Bidhan Chandra Institution",
    year: "2021 - 2022",
    details:
      "Completed my Higher Secondary education in the Science stream with a strong academic record.",
    score: "90.6%",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    title: "Secondary Education (Class 10)",
    institution: "Aurobindo Vidyamandir",
    year: "2019 - 2020",
    details:
      "Completed my Secondary education with a solid foundation in Mathematics and Science.",
    score: "88.6%",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using React and Tailwind CSS, showcasing projects, skills, and achievements. Implemented smooth navigation and interactive sections.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "three.js", color: "green-text-gradient" },
      { name: "framer-motion", color: "pink-text-gradient" },
      { name: "emailjs", color: "blue-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Somesh-nayek/Portfolio.git",
    deployed_link: "https://somesh-portfolio.onrender.com/"
  },
  {
    name: "Brainly - The Second Brain",
    description:
      "Created Brainly, a web application designed as a digital second brain for storing and managing useful links, texts, and documents. Integrated support for embedding external content like YouTube videos, Twitter posts.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "web app", color: "pink-text-gradient" },
    ],
    image: brainly,
    source_code_link: "https://github.com/Somesh-nayek/Brainly-The-Second-Brain.git",
  },
  {
    name: "Chess.com Clone",
    description:
      "Designed and developed a real-time multiplayer chess application using WebSocket inspired by Chess.com, delivering a competitive and engaging experience for players.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "websocket", color: "pink-text-gradient" },
    ],
    image: chess,
    source_code_link: "https://chess-somesh.onrender.com"
  },
];

export { services, technologies, experiences, education, projects };
