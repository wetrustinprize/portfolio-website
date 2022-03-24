import React from "react";
import Header from "../Header";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./styles.module.scss";

const Layout: React.FC = ({ children }) => {
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
          className={styles.content}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
