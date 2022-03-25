import React from "react";
import PurpleDiv from "../PurpleDiv";

import style from "./style.module.scss";

import { BsSuitHeartFill } from "react-icons/bs";
import DevSkill from "@interfaces/developerSkill";

export interface IDeveloperList {
  title: {
    prefix: string;
    sufix: string;
  };
  devTools: DevSkill[];
}

const DeveloperList: React.FC<IDeveloperList> = ({ title, devTools }) => {
  return (
    <PurpleDiv className={style.container}>
      <h1 className={style.title}>
        {title.prefix} <b>{title.sufix}</b>
      </h1>
      <div className={style.devContainer}>
        {devTools
          .sort((a, b) => b.rate - a.rate)
          .map((devTool, index) => (
            <div className={style.dev} key={index}>
              {devTool.icon}
              {devTool.favorite && (
                <BsSuitHeartFill className={style.favorite} />
              )}
              <h1 className={style.devTitle}>{devTool.name}</h1>
              <div className={style.rateContainer}>
                {[...Array(4).keys()].map((_, index) => (
                  <div
                    key={index}
                    className={
                      index < devTool.rate ? style.rate : style.rateEmpty
                    }
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </PurpleDiv>
  );
};

export default DeveloperList;
