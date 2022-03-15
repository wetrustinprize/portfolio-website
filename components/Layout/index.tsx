import React from "react";
import Header from "../Header";
import { AnimatePresence, motion } from "framer-motion";

import style from "./styles.module.scss";

const Layout: React.FC = ({ children }) => {
  const animVariants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          variants={animVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className={style.container}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;
