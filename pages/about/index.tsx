import { NextPage } from "next";
import Image from "next/image";
import { BsSuitHeartFill } from "react-icons/bs";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

import style from "./styles.module.scss";

const About: NextPage = () => {
  return (
    <Layout>
      <div className={style.container}>
        <div className={style.me}>
          <Image
            className={style.image}
            height={242 / 2}
            width={242 / 2}
            alt="Me"
            src="https://github.com/wetrustinprize.png"
          />
          <h1>Peterson Adami</h1>
          <h2>Passionate developer</h2>
        </div>
        <div className={style.about}>
          <h1>About me!</h1>
          <p>
            My name is <b>Peterson</b>, but my friends call me <b>Prize</b>{" "}
            <i>(that&apos;s my nickname!)</i>. I&apos;m a 19yo Brazilian
            developer that loves gamming and strange music!
          </p>
          <p>
            Since kid I always liked to use the computer, mostly to play games
            and watch gameplays on YouTube, then I stumbled in a Unity tutorial,
            that&apos;s when my programming journey began.
          </p>
          <p>
            I started programming <b>Games</b>, which is one my passion until
            this day. Then I learned about <b>Python</b> and used it to make
            some tools, and now I&apos;m focused on making backends and
            frontends with <b>Nest</b> and <b>React</b>.
          </p>
          <p>
            I&apos;m looking to work on big projects, and meet new people to
            make connections and friends!
          </p>
          <div className={style.contact}>
            <p>
              I <BsSuitHeartFill /> programming, and I hope we can work
              together!
            </p>
            <Button invert text="Contact me!" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
