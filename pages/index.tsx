import type { NextPage } from "next";
import Layout from "../components/Layout";
import WelcomeCard from "../components/WelcomeCard";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div
        animate={{
          opacity: [0, 1],
          y: [-10, 0],
        }}
      >
        <WelcomeCard />
      </motion.div>
    </Layout>
  );
};

export default Home;
