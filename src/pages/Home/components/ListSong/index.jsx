// libs
import React from "react";
import ItemSongs from "../ItemSongs";
// components
import TitleBoxKey from "../TitleBoxKey";
// others
import "./style.scss";

const ListSong = () => (
  <div className="list-song-wrapper">
    <TitleBoxKey>BÀI HÁT</TitleBoxKey>
    <ItemSongs />
  </div>
);

export default ListSong;
