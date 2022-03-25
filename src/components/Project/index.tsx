import Button from "@components/Button";
import Project from "@interfaces/projects";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import style from "./styles.module.scss";

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
          <div className={style.title}>
            <h1>{project.title}</h1>
            {project.tags && (
              <div className={style.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
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
