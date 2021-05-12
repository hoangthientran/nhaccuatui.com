// libs
import React from "react";
// components
import TitleBoxKey from "../TitleBoxKey";
import ListSongToday from "../ListSongToday";
// others
import "./style.scss";

ListAlbum.propTypes = {};

function ListAlbum() {
  return (
    <div className="list-album-wrapper">
      <TitleBoxKey />
      <ListSongToday />
    </div>
  );
}

export default ListAlbum;
