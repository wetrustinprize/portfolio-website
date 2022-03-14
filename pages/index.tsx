import type { NextPage } from "next";
import { AnimText } from "../components/AnimText";
import Layout from "../components/Layout";
import PurpleDiv from "../components/PurpleDiv";

const Home: NextPage = () => {
  return (
    <Layout>
      <PurpleDiv>
        <h1>
          Hello! I'm <AnimText>Peterson Adami</AnimText>.
        </h1>
        <h2>I'm a fullstack developer.</h2>
      </PurpleDiv>
    </Layout>
  );
};

export default Home;
