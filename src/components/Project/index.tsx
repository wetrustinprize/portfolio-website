import Project from "@interfaces/projects";
import Image from "next/image";
import React from "react";
import { MDXData } from "src/utils/MDX/Data";
import style from "./styles.module.scss";

interface IProject {
  data: MDXData;

  onClick?: () => void;
}

const Project: React.FC<IProject> = ({ data, onClick }: IProject) => {
  return (
    <div onClick={() => onClick && onClick()} className={style.container}>
      <div className={style.imageContainer}>
        <Image
          className={style.image}
          src={data.banner || "logo.png"}
          layout="fill"
          alt={data.title}
          objectFit="cover"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.text}>
          <div className={style.title}>
            <h1>{data.title}</h1>
            {data.tags && (
              <div className={style.tags}>
                {data.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            )}
          </div>
          <p>{data.description}</p>
        </div>
      </div>
      <div className={style.divider} />
    </div>
  );
};

export default Project;
