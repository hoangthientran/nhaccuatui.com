// libs
import React from "react";
// components
import ListSongHot from "../ListSongHot";
import TitleBoxKey from "../TitleBoxKey";
// others
import "./style.scss";

const SongHot = ({ defaultLanguage }) => (
  <div className="song-hot-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.Release} />
    <ListSongHot />
  </div>
);

export default SongHot;
