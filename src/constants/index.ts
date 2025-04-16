import {
    mobile,
    backend,
    creator,
    web,
    portfolio,
    javascript,
    typescript,
    html,
    css,
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
    sbh,
    sih,
    gdsc,
    github,
    kotlin
  } from '../assets';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React & Next.js Developer",
      icon: web,
    },
    {
      title: "Native Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer(MERN)",
      icon: backend,
    },
    {
      title: "Problem Solver & Innovater",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Next JS",
      icon: nextJs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
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
    {
      title: "Smart Bengal Hackathon (SBH) 2024,2025 - Participant",
      company_name: "Government of West Bengal",
      icon: sbh,
      iconBg: "#E6DEDD",
      date: "February 2024",
      points: [
        "Built a real-time collaboration tool for students and teachers using the MERN stack.",
        "Implemented WebSockets for live interaction and real-time updates.",
        "Designed a scalable backend architecture to handle concurrent users efficiently.",
      ],
    },
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
        "Solved 250+ problems on LeetCode, focusing on Graphs, Dynamic Programming, and Greedy Algorithms.",
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
      year: "2020 - 2022",
      details:
        "Completed my Higher Secondary education in the Science stream with a strong academic record.",
      score: "90.6%",
      image: "https://randomuser.me/api/portraits/lego/2.jpg",
    },
    {
      title: "Secondary Education (Class 10)",
      institution: "Bidhan Chandra Institution",
      year: "2018 - 2020",
      details:
        "Completed my Secondary education with a solid foundation in Mathematics and Science.",
      score: "88.6%",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A personal portfolio website built to showcase my skills, projects, and achievements. The website is designed to highlight my work in web development, DSA, and app development.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
        {
          name: "emailjs",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio, // Replace with an image related to your Portfolio website
      source_code_link: "https://github.com/Somesh-nayek/Portfolio.git", // Link to your Portfolio repository (replace with your actual repository link)
    },
    {
      name: "Brainly - The Second Brain",
      description:
        "A web application designed to store and manage useful links, texts, and documents, with support for embedding external content like YouTube videos and Twitter posts.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "web app",
          color: "pink-text-gradient",
        },
      ],
      image: brainly, // Replace with an image related to your Brainly project
      source_code_link: "https://github.com/Somesh-nayek/Brainly-The-Second-Brain.git", // Link to your Brainly project repository
    },
    {
      name: "Chess.com Clone",
      description:
        "A real-time multiplayer chess application inspired by Chess.com, developed using React, TypeScript, and WebSocket. Features include player matchmaking, move validation, and timer-based game modes.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "websocket",
          color: "pink-text-gradient",
        },
      ],
      image: chess, // Replace with an image related to your Chess app
      source_code_link: "https://github.com/Somesh-nayek/Chess.com-Clone.git", // Link to your Chess app repository
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects ,education};
