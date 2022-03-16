import { useRouter } from "next/router";
import React from "react";
import Button from "../../Button";

import style from "./styles.module.scss";

const LetsWorkCard: React.FC = () => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <h1>Let&apos;s work together!</h1>
      <Button text="Contact me!" onClick={() => router.push("/contact")} />
    </div>
  );
};

export default LetsWorkCard;
