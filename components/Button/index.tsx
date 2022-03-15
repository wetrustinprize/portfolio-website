import { useRouter } from "next/router";
import React from "react";

import style from "./styles.module.scss";

interface IButton {
  text: string;
  outline?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  outline = false,
  onClick = () => {},
}) => {
  return (
    <button
      className={!outline ? style.normal_button : style.outline_button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
