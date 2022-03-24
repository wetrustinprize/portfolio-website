import { IDeveloperList } from "../components/DeveloperList";

import {
  SiNestjs,
  SiTypescript,
  SiGodotengine,
  SiUnrealengine,
  SiGraphql,
  SiExpress,
} from "react-icons/si";
import { FaReact, FaAngular, FaPython, FaUnity } from "react-icons/fa";

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
        rate: 3,
        favorite: true,
      },
      {
        icon: <FaAngular />,
        name: "Angular",
        rate: 2,
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
      sufix: "Game Engines",
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
