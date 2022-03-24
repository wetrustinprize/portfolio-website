import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import style from "./styles.module.scss";

export interface Project {
  title: string;
  description: string;
  image: string;
  buttons?: [
    {
      text: string;
      link: string;
    }
  ];
}

interface IProject {
  project: Project;
}

const Project: React.FC<IProject> = ({ project }) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          className={style.image}
          src={project.image}
          layout="fill"
          alt={project.title}
          objectFit="cover"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.text}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        {project.buttons?.map((button, index) => (
          <Button
            key={index}
            text={button.text}
            onClick={() => router.push(button.link)}
          />
        ))}
      </div>
      <div className={style.divider} />
    </div>
  );
};

export default Project;
