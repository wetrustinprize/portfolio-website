import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        This website was made using{" "}
        <Link href={"https://nextjs.org"}>Next.js</Link> and is being hosted
        using <Link href={"https://vercel.com/"}>Vercel</Link>!
      </p>
      <p>
        Check out the repository by clicking{" "}
        <Link href={"https://github.com/wetrustinprize/portfolio-website"}>
          here
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
