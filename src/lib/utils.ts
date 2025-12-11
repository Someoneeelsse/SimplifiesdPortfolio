import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sections = [
  {
    title: "Relevant Work Experience",
    items: [
      "(2023 - 2024)      | System Engineer (Nordomatic)",
      "(2024 - .........) | System Engineer (Bergen Byggautomasjon)",
    ],
  },
  {
    title: "Education",
    items: [
      "(2020 - 2023)      | Bachelor in Automation and Robotics (Western Norway University of Applied Sciences)",
      "(2024) | Java Backend Developer Certificate (Hyperskill)",
      "(2025) | Three.js Developer Certificate (Three.js Journey)",
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Youtube Channel Recommender",
        url: "https://youtubechannelanalyzer.vercel.app/",
        description:
          "Paste in your channel link, and get indeepth channel analysis, with free of charge AI analysis up to 45 videos.",
      },
      {
        title: "Digital Grafitti",
        url: "https://digitalgraffiti.vercel.app/",
        description:
          "Draw Whatever you want (within reason), and place it on a 'forever-canvas.'",
      },
      {
        title: "Design-Hub",
        url: "https://design-hub-omega.vercel.app/",
        description:
          "Give us a shot and showcase your clothing collection in 3D on our website.",
      },
      {
        title: "Paarallax (Github)",
        url: "https://github.com/Someoneeelsse/Parralax",
        description:
          "Project where I made a working daily news generator using LLMs, It is supposed to make daily news report based on its memory.",
      },
      {
        title: "Auto SRE (Github)",
        url: "https://github.com/Someoneeelsse/AutoSRE",
        description:
          "A DevOps focused project that automatically redeploys whenever a new commit is pushed to the repository, keeping everything up to date without manual steps.",
      },
      {
        title: "Main Portfolio",
        url: "https://someoneelsse-portfolio-phone.vercel.app/",
        description: "My un-simplified portfolio",
      },
    ],
  },
  {
    title: "Specialization",
    items: [
      "Python",
      "JavaScript",
      "Java",
      "PostgreSQL",
      "Niagara N4",
      "Grafana",
      "Nginx",
      "Docker",
    ],
  },
];

export const RelevantWorkExpirienceDetails = [
  {
    yearRange: "2020 - 2023",
    role: "Bachelor in Automation",
    description:
      "Studied computer science with a focus on software development and data structures.",
    skills: [
      "Java",
      "Algorithms",
      "Database Management",
      "Software Engineering",
    ],
    additionalInfo:
      "Graduated with honors. Participated in open-source projects.",
  },
  {
    yearRange: "2019 - 2020",
    role: "Frontend Developer Intern",
    description: "Worked on the frontend for a client-facing application.",
    skills: ["React.js", "CSS", "HTML", "Git"],
    additionalInfo:
      "Developed responsive UI components and optimized app performance.",
  },
];
