import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "./404.module.scss";

const messages = [
  "What where you looking for?",
  "This page doesn't exist",
  "Nothing to see here",
  "Nothing hidden here...",
];

const FourOhFour: NextPage = () => {
  return (
    <>
      <Head>
        <title>uh oh</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>
          {messages[(Math.random() * messages.length) | 0]}
        </h2>
        <Link passHref href={"/"}>
          <p className={styles.return}>return home</p>
        </Link>
      </div>
    </>
  );
};

export default FourOhFour;
