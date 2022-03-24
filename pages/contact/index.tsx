import { NextPage } from "next";
import Link from "next/link";
import AnimDiv from "../../components/AnimDiv";
import Layout from "../../components/Layout";

import { SiProtonmail } from "react-icons/si";
import { BsLinkedin, BsGithub, BsTelegram } from "react-icons/bs";

import styles from "./styles.module.scss";

const Contact: NextPage = () => {
  return (
    <Layout>
      <AnimDiv delayPerChild={0.05} duration={0.5}>
        <h1 className={styles.title}>Let&apos;s work togheter!</h1>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link passHref href={"mailto://hello@wetrustinprize.com"}>
              <div className={styles.contactMethod}>
                <SiProtonmail />
                <p>hello@wetrustinprize.com</p>
              </div>
            </Link>
            <Link passHref href={"https://www.linkedin.com/in/wetrustinprize/"}>
              <div className={styles.contactMethod}>
                <BsLinkedin />
                <p>in/wetrustinprize</p>
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <Link passHref href={"https://github.com/wetrustinprize"}>
              <div className={styles.contactMethod}>
                <BsGithub />
                <p>wetrustinprize</p>
              </div>
            </Link>
            <Link passHref href={"https://t.me/wetrustinprize"}>
              <div className={styles.contactMethod}>
                <BsTelegram />
                <p>wetrustinprize</p>
              </div>
            </Link>
          </div>
        </div>
      </AnimDiv>
    </Layout>
  );
};

export default Contact;
