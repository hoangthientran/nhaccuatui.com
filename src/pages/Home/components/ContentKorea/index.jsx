// libs
import React from "react";
// components
import ImgChartMusic from "../ImgChartMusic";
import RankSong from "../RankSong";
// dataSources
import { listChartMusicKorea, topSongOneKorea } from "../../../../mocks";
// others
import "./style.scss";

const ContentKorea = () => (
  <ul className="list-chart-music-wrapper">
    {topSongOneKorea.map((item) => (
      <li className="number-stt-one">
        <ImgChartMusic item={item} />
      </li>
    ))}
    {listChartMusicKorea.map((item) => (
      <li className="number-stt">
        <RankSong item={item} />
      </li>
    ))}
  </ul>
);

export default ContentKorea;
