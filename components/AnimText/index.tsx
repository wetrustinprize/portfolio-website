import React from "react";
import { motion } from "framer-motion";

import style from "./styles.module.scss";

interface IAnimText {
  children: string;
  delay?: number;
  delayPerLetter?: number;
  duration?: number;
}

export const AnimText: React.FC<IAnimText> = ({
  children,
  delay = 0,
  delayPerLetter = 0.025,
  duration = 0.8,
}: IAnimText) => {
  if (children.length == 0) {
    return <></>;
  }

  const letters = children.split("");

  return (
    <span className={style.container}>
      {letters.map((letter, index) => {
        if (letter === " ") {
          return (
            <span key={index} className={style.space}>
              &nbsp;
            </span>
          );
        }

        return (
          <motion.span
            className={style.letter}
            key={index}
            animate={{
              opacity: [0, 1],
              y: [-10, 0],
            }}
            transition={{
              duration,
              delay: delay + index * delayPerLetter,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </span>
  );
};
