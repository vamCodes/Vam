import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { LuLaptop} from "react-icons/lu";
import work1 from "../public/work1.png"; // Springer book chapter
import work2 from "../public/work2.png"; // Real-time Order Book Dashboard
import work3 from "../public/work3.png"; // Masculine Enough Workshop
import VamDash from "../public/VamDash.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Intern – Unque",
    location: "Remote",
    description:
      "Collaborated with a 5-member team under the CTO to develop a React Native mobile app. Integrated backend APIs, implemented AWS CI/CD pipelines, and managed MongoDB for seamless performance and deployment.",
    icon: React.createElement(LuLaptop),
    date: "Dec 2024 – Mar 2025",
  },
  {
    title: "Full Stack Developer Intern – TEMS Tech Solutions",
    location: "Remote",
    description:
      "Built an automated content pipeline connecting Twitter, OpenAI, and WordPress using Node.js. Developed a dynamic WordPress frontend and optimized AI-generated blog content for engagement and readability.",
    icon: React.createElement(FaNodeJs),
    date: "Jul 2024 – Oct 2024",
  },
  {
    title: "React Developer – Xebia",
    location: "Remote",
    description:
      "Designed and implemented a responsive healthcare management dashboard using React and Tailwind CSS. Integrated REST APIs for real-time data and collaborated with backend teams to streamline data flow and authentication.",
    icon: React.createElement(FaReact),
    date: "Jun 2024 – Jul 2024",
  },
] as const;

export const myWorkData = [
  {
    title: "Book Chapter – Springer",
    description: `“Machine Learning-Driven Task Offloading for Smart Vehicle Edge Computing” is now live with Springer! Co-authored with Professor Dr. Aditya Bhardwaj, this chapter reflects mentorship, collaboration, and meticulous research in smart vehicle edge computing.`,
    tags: ["Research", "Machine Learning", "Smart Vehicles", "Publication"],
    imageUrl: work3,
    link: "https://link.springer.com/chapter/10.1007/978-3-031-80949-1_9",
  },
  {
    title: "Real-time Order Book Dashboard",
    description: `A React + Next.js dashboard for live tradebook data:
- WebSocket-based real-time order book
- Spread chart to visualize bid-ask spread dynamically
- Modular hooks: useOrderBook, useSpreadData, useProcessData
- Clean component structure and ContextAPI state management`,
    tags: ["React", "Next.js", "ContextAPI", "WebSocket", "Charts"],
    imageUrl: work2,
    link: "https://github.com/vamCodes/VamCharts", // replace with live link if available
  },
  {
    title: "Masculine Enough Workshop",
    description: `Hosted a workshop dissecting toxic masculinity and queer erasure:
- Asked hard questions, shared uncomfortable truths
- Built safer, more reflective spaces
- Emphasized change, reflection, and community care`,
    tags: ["Workshop", "Community", "Gender Justice", "Queer Voices"],
    imageUrl: work1,
    link: "https://www.linkedin.com/posts/singh-shvam_toxicmasculinity-queervoices-masculineenough-activity-7318825983006896128-wRYm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADu-SMQBjRBLtQM3x0ECSxMmQoKRKRtTwis", // replace with event recording link if available
  },
  {
    title: "VamDash",
    description: `A versatile dashboard leveraging HTML, CSS, and Vanilla JS with Google Material components. Offers responsive design from iPad to desktop and enhances CSS/JS skills.`,
    tags: ["HTML", "CSS", "JavaScript", "MaterialUI"],
    imageUrl: VamDash,
    link: "https://vamdash-1.vercel.app/", // replace with live link if available
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "C++",
  "ReactNative",
  "FramerMotion",
  "PostMan",
  "Figma",
  "RESTAPI",
  "Zest",
  "Data Structures",
  "Algorithms"
] as const;