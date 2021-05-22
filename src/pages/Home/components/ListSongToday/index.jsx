// libs
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// components
import ThumbnailAlbum from "../ThumbnailAlbum";
import InfoNameSong from "../InfoNameSong";
// action
import { listSong } from "./listSongSlice";
// others
import "./style.scss";

const ListSongToday = () => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const action = listSong();
      const resultAction = await dispatch(action);
      setSongs(resultAction.payload);
    })();
  }, []);

  return (
    <ul className="list-song-today-wrapper">
      {songs.map((item) => (
        <li key={item.id} className="list-song-today">
          <ThumbnailAlbum item={item} />
          <InfoNameSong item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ListSongToday;
