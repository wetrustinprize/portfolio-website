import { IDeveloperList } from "../components/DeveloperList";

import {
  SiNestjs,
  SiTypescript,
  SiGodotengine,
  SiUnrealengine,
  SiGraphql,
  SiExpress,
  SiNextdotjs,
  SiVercel,
} from "react-icons/si";
import { FaReact, FaAngular, FaPython, FaUnity, FaAws } from "react-icons/fa";

const SKILLS: IDeveloperList[] = [
  {
    title: {
      prefix: "in the",
      sufix: "backend",
    },
    devTools: [
      {
        icon: <SiNestjs />,
        name: "Nest",
        rate: 2,
        favorite: true,
      },
      {
        icon: <SiGraphql />,
        name: "GraphQL",
        rate: 3,
        favorite: true,
      },
      {
        icon: <SiExpress />,
        name: "Express",
        rate: 3,
      },
    ],
  },
  {
    title: {
      prefix: "in the",
      sufix: "frontend",
    },
    devTools: [
      {
        icon: <FaReact />,
        name: "React",
        rate: 4,
        favorite: true,
      },
      {
        icon: <FaAngular />,
        name: "Angular",
        rate: 2,
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        rate: 3,
        favorite: true,
      },
    ],
  },
  {
    title: {
      prefix: "known",
      sufix: "languages",
    },
    devTools: [
      {
        icon: <SiTypescript />,
        name: "TypeScript",
        rate: 5,
        favorite: true,
      },
      {
        icon: <FaPython />,
        name: "Python",
        rate: 3,
      },
    ],
  },
  {
    title: {
      prefix: "known",
      sufix: "cloud services",
    },
    devTools: [
      {
        icon: <FaAws />,
        name: "AWS",
        rate: 1,
      },
      {
        icon: <SiVercel />,
        name: "Vercel",
        rate: 2,
        favorite: true,
      },
    ],
  },
  {
    title: {
      prefix: "known",
      sufix: "game engines",
    },
    devTools: [
      {
        icon: <FaUnity />,
        name: "Unity",
        rate: 4,
      },
      {
        icon: <SiGodotengine />,
        name: "Godot",
        rate: 2,
        favorite: true,
      },
      {
        icon: <SiUnrealengine />,
        name: "UE4",
        rate: 3,
      },
    ],
  },
];

export default SKILLS;
