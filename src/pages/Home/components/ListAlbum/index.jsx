// libs
import React from "react";
// components
import TitleBoxKey from "../TitleBoxKey";
import ListSongToday from "../ListSongToday";
// others
import "./style.scss";

const ListAlbum = ({ defaultLanguage }) => (
  <div className="list-album-wrapper">
    <TitleBoxKey nameLanguage={defaultLanguage.ListenToday} />
    <ListSongToday />
  </div>
);

export default ListAlbum;
