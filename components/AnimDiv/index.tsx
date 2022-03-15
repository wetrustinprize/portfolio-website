import React from "react";
import { motion } from "framer-motion";

interface IAnimDiv {
  children: React.ReactNode;
  delay?: number;
  delayPerChild?: number;
  duration?: number;
}

const AnimDiv: React.FC<IAnimDiv & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  delay = 0,
  delayPerChild = 0.2,
  duration = 1,
  ...props
}) => {
  if (!children) return <></>;

  if (React.Children.count(children) <= 0) return <></>;

  return (
    <div {...props}>
      {React.Children.map(children, (child, index) => (
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [-10, 0],
          }}
          transition={{
            duration,
            delay: delay + index * delayPerChild,
            ease: "easeInOut",
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimDiv;
