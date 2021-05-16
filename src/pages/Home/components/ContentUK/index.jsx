// libs
import React from "react";
// components
import ImgChartMusic from "../ImgChartMusic";
import RankSong from "../RankSong";
// dataSources
import { listChartMusicUK, topSongOneUK } from "../../../../mocks";
// others
import "./style.scss";

const ContentUK = () => (
  <ul className="list-chart-music-wrapper">
    {topSongOneUK.map((item) => (
      <li className="number-stt-one">
        <ImgChartMusic item={item} />
      </li>
    ))}
    {listChartMusicUK.map((item) => (
      <li className="number-stt">
        <RankSong item={item} />
      </li>
    ))}
  </ul>
);

export default ContentUK;
