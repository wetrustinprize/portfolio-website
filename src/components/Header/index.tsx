import React from "react";

import Image from "next/image";

import styles from "./styles.module.scss";
import logo from "../../../public/logo.png";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link passHref href="/">
        <div className={styles.logo}>
          <Image height={90} width={90} src={logo} alt="Peterson's signature" />
        </div>
      </Link>
      <div className={styles.bar}>
        <Link href="/">
          <a className={styles.home}>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
