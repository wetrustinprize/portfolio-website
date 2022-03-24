import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../Button";
import TitleDiv from "../../TitleDiv";

import style from "./styles.module.scss";

const AboutMeCard = () => {
  const router = useRouter();

  return (
    <TitleDiv className={style.container} title="About me">
      <p className={style.text}>
        I&apos;m a passionate developer, always in line with the new techs and
        organization methods. Currently focused on making <b>Web Apps</b>,{" "}
        <b>Mobile Apps</b> and <b>Backend</b>, but I also can make <b>Games</b>.
      </p>
      <Button text="More about" onClick={() => router.push("/about")} />
    </TitleDiv>
  );
};

export default AboutMeCard;
