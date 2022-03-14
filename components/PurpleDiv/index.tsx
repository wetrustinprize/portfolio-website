import React from "react";

import style from "./styles.module.scss";

const PurpleDiv: React.FC = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.line} />
      <div className={style.children}>{children}</div>
    </div>
  );
};

export default PurpleDiv;
