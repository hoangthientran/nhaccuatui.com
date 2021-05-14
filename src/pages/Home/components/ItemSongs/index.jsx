// libs
import React from "react";
// components
import Song from "../Song";
// dataSources
import { listSong } from "../../../../mocks";
// others
import "./style.scss";

const ItemSongs = () => (
  <ul className="item-songs-wrapper">
    {listSong.map((item) => (
      <li className="item-song" key={item.id}>
        <Song item={item} />
      </li>
    ))}
  </ul>
);

export default ItemSongs;
