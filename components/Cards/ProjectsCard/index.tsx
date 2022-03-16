import React from "react";
import PROJECTS from "../../../data/projects";
import Project from "../../Project";
import Title from "../../Title";

import style from "./styles.module.scss";

const ProjectsCard: React.FC = () => {
  return (
    <div className={style.container}>
      {" "}
      <Title>Some of my projects</Title>{" "}
      {PROJECTS.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsCard;
