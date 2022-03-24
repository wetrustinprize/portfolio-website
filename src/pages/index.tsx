import type { NextPage } from "next";
import Layout from "../components/Layout";

import style from "./styles.module.scss";

import WelcomeCard from "../components/Cards/WelcomeCard";
import AboutMeCard from "../components/Cards/AboutMeCard";
import AnimDiv from "../components/AnimDiv";
import SkillsCard from "../components/Cards/SkillsCard";
import LetsWorkCard from "../components/Cards/LetsWorkCard";
import ProjectsCard from "../components/Cards/ProjectsCard";

const Home: NextPage = () => {
  return (
    <Layout>
      <AnimDiv className={style.container} delayPerChild={0.05} duration={0.5}>
        <WelcomeCard />
        <AboutMeCard />
        <SkillsCard />
        <ProjectsCard />
        <LetsWorkCard />
      </AnimDiv>
    </Layout>
  );
};

export default Home;
