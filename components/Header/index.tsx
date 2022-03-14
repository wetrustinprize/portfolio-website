import React from "react";

import Image from "next/image";

import styles from "./styles.module.scss";
import logo from "../../public/logo.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image height={90} width={90} src={logo} alt="Peterson's signature" />
      </div>
      <div className={styles.bar}>
        <a>About</a>
        <a>Contact</a>
        <a>Projects</a>
      </div>
    </header>
  );
};

export default Header;
