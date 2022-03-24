import React from "react";
import Title from "../Title";

import style from "./styles.module.scss";

interface ITitleDiv {
  children: React.ReactNode;
  title: string;
}

const TitleDiv: React.FC<ITitleDiv & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  title,
  ...props
}) => {
  return (
    <div>
      <Title>{title}</Title>
      <div className={style.children}>
        <div {...props}>{children}</div>
      </div>
    </div>
  );
};

export default TitleDiv;
