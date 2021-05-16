// libs
import React from "react";
// components
import ImgChartMusic from "../ImgChartMusic";
import RankSong from "../RankSong";
// dataSources
import { listChartMusic, topSongOne } from "../../../../mocks";
// others
import "./style.scss";

const ContentVN = () => (
  <ul className="list-chart-music-wrapper">
    {topSongOne.map((item) => (
      <li key={item.id} className="number-stt-one">
        <ImgChartMusic item={item} />
      </li>
    ))}
    {listChartMusic.map((item) => (
      <li key={item.id} className="number-stt">
        <RankSong item={item} />
      </li>
    ))}
  </ul>
);

export default ContentVN;
