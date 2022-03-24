import React from "react";

import style from "./styles.module.scss";

interface IButton {
  text: string;
  invert?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton & React.HTMLAttributes<HTMLDivElement>> = ({
  text,
  invert = false,
  onClick = () => {},
  ...props
}) => {
  return (
    <div
      style={{
        width: "max-content",
      }}
      {...props}
    >
      <button
        className={!invert ? style.normal_button : style.outline_button}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
