// libs
import React, { useEffect, useState } from "react";
// components
import InfoNameSong from "../InfoNameSong";
import ThumbnailAlbum from "../ThumbnailAlbum";
// others
import "./style.scss";
import listSongApi from "../../../../api/listSongApi";

const ListSongToday = () => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await listSongApi.getAll();
        setSongList(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log("Failed to fetch product list:", error);
      }
    })();
  }, []);

  return (
    <ul className="list-song-today-wrapper">
      {songList.map((item) => (
        <li key={item.id} className="list-song-today">
          <ThumbnailAlbum item={item} />
          <InfoNameSong item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListSongToday;
