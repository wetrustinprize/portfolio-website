import React from "react";

import style from "./styles.module.scss";

interface ITitleDiv {
  children: string;
  decorator?: "ball";
}

const Title: React.FC<ITitleDiv> = ({
  children: title,
  decorator = "ball",
}) => {
  return (
    <div className={style.header}>
      <div className={style.dot} />
      <h1 className={style.title}>{title}</h1>
    </div>
  );
};

export default Title;
