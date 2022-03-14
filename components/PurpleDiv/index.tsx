import React from "react";

import style from "./styles.module.scss";

interface IPurpleDiv {
  children: React.ReactNode;
}

const PurpleDiv: React.FC<
  IPurpleDiv & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <div className={style.container}>
      <div className={style.line} />
      <div {...props}>{children}</div>
    </div>
  );
};

export default PurpleDiv;
