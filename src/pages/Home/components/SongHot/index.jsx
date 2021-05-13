// libs
import React from "react";
// components
import ListSongHot from "../ListSongHot";
import TitleBoxKey from "../TitleBoxKey";
// others
import "./style.scss";

const SongHot = () => (
  <div className="song-hot-wrapper">
    <TitleBoxKey>MỚI PHÁT HÀNH</TitleBoxKey>
    <ListSongHot />
  </div>
);

export default SongHot;
