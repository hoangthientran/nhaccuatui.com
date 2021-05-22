// libs
import React from "react";
// components
import TitleBoxKeyCommon from "../TitleBoxKeyCommon";
import ButtonTabSongSelect from "../ButtonTabSongSelect";
// others
import "./style.scss";

const BoxChartMusic = ({ defaultLanguage }) => (
  <div className="chart-music-wrapper">
    <TitleBoxKeyCommon nameLanguage={defaultLanguage.BXHSONG} />
    <ButtonTabSongSelect />
  </div>
);

export default BoxChartMusic;
