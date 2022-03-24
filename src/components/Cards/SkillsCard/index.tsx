import React from "react";
import SKILLS from "../../../data/skills";
import DeveloperList from "../../DeveloperList";
import Title from "../../Title";

import style from "./styles.module.scss";

const SkillsCard: React.FC = () => {
  return (
    <div className={style.container}>
      <Title>My Developer Skills</Title>
      {SKILLS.map((skill, index) => (
        <DeveloperList
          key={index}
          title={skill.title}
          devTools={skill.devTools}
        />
      ))}
    </div>
  );
};

export default SkillsCard;
