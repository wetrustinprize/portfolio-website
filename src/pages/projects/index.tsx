import AnimDiv from "@components/AnimDiv";
import Button from "@components/Button";
import Layout from "@components/Layout";
import Project from "@components/Project";
import PROJECTS from "@data/projects";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import styles from "./styles.module.scss";

const Projects: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Prize&apos; Projects</title>
      </Head>
      <Layout useSmallerMargin>
        <AnimDiv
          className={styles.container}
          delayPerChild={0.05}
          duration={0.5}
        >
          {PROJECTS.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </AnimDiv>
        <Button
          className={styles.button}
          text="More in my Github"
          onClick={() => router.push("https://github.com/wetrustinprize")}
        />
      </Layout>
    </>
  );
};

export default Projects;
