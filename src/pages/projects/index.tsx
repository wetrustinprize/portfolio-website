import AnimDiv from "@components/AnimDiv";
import Button from "@components/Button";
import Layout from "@components/Layout";
import Project from "@components/Project";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { getAllDatas, MDXData } from "src/utils/MDX/Data";

import styles from "./styles.module.scss";

interface IProjects {
  datas: MDXData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const datas = getAllDatas("projects");

  return {
    props: {
      datas,
    },
  };
};

const Projects: NextPage<IProjects> = ({ datas }: IProjects) => {
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
          {datas.map((data, index) => (
            <Project
              onClick={() => router.push(data.url)}
              key={index}
              data={data}
            />
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
