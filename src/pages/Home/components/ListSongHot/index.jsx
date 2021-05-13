// libs
import React from "react";
// components
import ThumbnailSongHot from "../ThumbnailSongHot";
import InfoNameSongHot from "../InfoNameSongHot";
// mocks
import { listContentSongHot } from "../../../../mocks";
// others
import "./style.scss";

const ListSongHot = () => (
  <ul className="list-song-hot-wrapper">
    {listContentSongHot.map((item) => (
      <li key={item.id} className="list-song-hot">
        <ThumbnailSongHot item={item} />
        <InfoNameSongHot item={item} />
      </li>
    ))}
  </ul>
);

export default ListSongHot;
