import Image from "next/image";
import React from "react";
import { AnimText } from "../../AnimText";
import PurpleDiv from "../../PurpleDiv";
import style from "./styles.module.scss";

const WelcomeCard: React.FC = () => {
  return (
    <div className={style.container}>
      <PurpleDiv className={style.text}>
        <h1>
          Hello! I&apos;m <AnimText>Peterson Adami</AnimText>.
        </h1>
        <h2>I&apos;m a fullstack developer.</h2>
      </PurpleDiv>
      <div className={style.imageDiv}>
        <Image
          className={style.image}
          height={242 / 2}
          width={242 / 2}
          alt="Me"
          src="https://github.com/wetrustinprize.png"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
