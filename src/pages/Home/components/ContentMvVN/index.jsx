// libs
import React from "react";
// components
import ImgMvMusic from "../ImgMvMusic";
import RankMv from "../RankMv";
// dataSources
import { listRankMvVN, topMvOneVN } from "../../../../mocks";
// others
import "./style.scss";

const ContentMvVN = () => (
  <ul className="list-chart-music-wrapper">
    {topMvOneVN.map((item) => (
      <li key={item.id} className="number-stt-one">
        <ImgMvMusic item={item} />
      </li>
    ))}
    {listRankMvVN.map((item) => (
      <li key={item.id} className="number-stt">
        <RankMv item={item} />
      </li>
    ))}
  </ul>
);

export default ContentMvVN;
