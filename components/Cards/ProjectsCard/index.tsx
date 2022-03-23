import { useRouter } from "next/router";
import React from "react";
import PROJECTS from "../../../data/projects";
import Button from "../../Button";
import Project from "../../Project";
import Title from "../../Title";

import styles from "./styles.module.scss";

const ProjectsCard: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {" "}
      <Title>Some of my projects</Title>{" "}
      <div className={styles.projects}>
        {PROJECTS.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <Button text="See more" onClick={() => router.push("/projects")} />
    </div>
  );
};

export default ProjectsCard;
