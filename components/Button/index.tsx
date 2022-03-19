import { useRouter } from "next/router";
import React from "react";

import style from "./styles.module.scss";

interface IButton {
  text: string;
  invert?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  invert = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={!invert ? style.normal_button : style.outline_button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
