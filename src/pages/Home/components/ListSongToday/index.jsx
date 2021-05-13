// libs
import React from "react";
// components
import InfoNameSong from "../InfoNameSong";
import ThumbnailAlbum from "../ThumbnailAlbum";
// dataSources
import { listContentSongToday } from "../../../../mocks";
// others
import "./style.scss";

const ListSongToday = () => (
  <ul className="list-song-today-wrapper">
    {listContentSongToday.map((item) => (
      <li key={item.id} className="list-song-today">
        <ThumbnailAlbum item={item} />
        <InfoNameSong item={item} />
      </li>
    ))}
  </ul>
);

export default ListSongToday;
