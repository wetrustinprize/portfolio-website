import React from "react";
import Header from "../Header";

import style from "./styles.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className={style.container}>{children}</main>
    </>
  );
};

export default Layout;
