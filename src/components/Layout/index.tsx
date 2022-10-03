import React from "react";
import Header from "../Header";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./styles.module.scss";
import Footer from "@components/Footer";

interface ILayout {
  children: React.ReactNode;
  useSmallerMargin?: boolean;
}

const Layout: React.FC<ILayout> = ({ children, useSmallerMargin }: ILayout) => {
  const animVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className={styles.container}>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      >
        <motion.main
          variants={animVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className={
            styles.content + (useSmallerMargin ? " " + styles.smallMargin : "")
          }
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
