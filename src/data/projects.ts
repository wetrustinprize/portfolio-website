import Project from "@interfaces/projects";

const PROJECTS: Project[] = [
  {
    title: "Pnalt",
    description:
      "1v1 online footbal game for Android and iOS, made using Unity and Photon.",
    image: "/projects/pnalt.png",
    tags: ["Unity", "Multiplayer"],
    buttons: [
      {
        text: "Play Store",
        link: "https://play.google.com/store/apps/details?id=com.luminostechnology.pnalt",
      },
    ],
  },
  {
    title: "Zork",
    description:
      "Simple service to trade points with your friends, or ask points from them.",
    image:
      "https://github.com/wetrustinprize/zork-frontend/raw/master/screenshots/index.png",
    buttons: [
      {
        text: "Github",
        link: "https://github.com/wetrustinprize/zork-frontend",
      },
    ],
    tags: ["Next.js", "Express"],
  },
  {
    title: "Distancier",
    description:
      "Simple web app to pick a new house, and check which one is better by checking the distance between places.",
    image:
      "https://github.com/wetrustinprize/distancier/raw/main/screenshots/details.png",
    buttons: [
      {
        text: "Github",
        link: "https://github.com/wetrustinprize/distancier",
      },
    ],
    tags: ["Next.js", "Google API"],
  },
  {
    title: "Q1nfluencer",
    description:
      "Helped making the API for fetching data from popular social media platforms.",
    image: "/projects/q1fluencer.png",
    tags: ["Wix", "Javascript"],
  },
];

export default PROJECTS;
