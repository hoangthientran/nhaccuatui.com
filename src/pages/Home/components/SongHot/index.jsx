// libs
import React from "react";
// components
import TitleSongHot from "../TitleSongHot";
import ListSongHot from "../ListSongHot";
// others
import "./style.scss";

SongHot.propTypes = {};

function SongHot() {
  return (
    <div className="song-hot-wrapper">
      <TitleSongHot />
      <ListSongHot />
    </div>
  );
}

export default SongHot;
