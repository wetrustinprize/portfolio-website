import type { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

import WelcomeCard from "../components/Cards/WelcomeCard";
import AboutMeCard from "../components/Cards/AboutMeCard";
import AnimDiv from "../components/AnimDiv";
import SkillsCard from "../components/Cards/SkillsCard";

const Home: NextPage = () => {
  return (
    <Layout>
      <AnimDiv delayPerChild={0.05} duration={0.5}>
        <WelcomeCard />
        <AboutMeCard />
        <SkillsCard />
      </AnimDiv>
    </Layout>
  );
};

export default Home;
