import askShabel from "../public/ask-shabel.png";
import beckyPlus from "../public/beckyplus.png";
import school from "../public/school.png";

export const projects = [
  {
    name: "Ask Shabel",
    link: "https://ask-shabel.vercel.app",
    image: askShabel,
    about:
      "A chat AI application using OpenAI's powerful API to interpret natural language and offfer context-aware responses.",
    tools: ["React", "NextJS", "Shadcn", "TailwindCSS", "Openai"],
    selected: true,
    duration: "2023 - present",
  },
  {
    name: "Beckyplus Commerce",
    link: "https://beckyplus.vercel.app",
    image: beckyPlus,
    about:
      "Enhancing the online shopping experience is my side project. Leveraging my skills, I developed an e-commerce platform for a friend.",
    tools: ["React", "TailwindCSS", "ChakraUI", "Supabase", "Stripe"],
    selected: true,
    duration: "2023 - present",
  },
  {
    name: "School Management System",
    link: "https://github.com/mrshabel/school-frontend",
    image: school,
    about: "A fullstack web application designed for school management.",
    tools: [
      "Javascript",
      "React",
      "Express",
      "MongoDB",
      "NodeJS",
      "React Query",
      "AntDesign",
    ],
    selected: true,
    duration: "2023 - present",
  },
];
