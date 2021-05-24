// libs
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// components
import AlbumSkeletonList from "./AlbumSkeletonList";
import ElementSong from "../ElementSong";
// action
import { listSong } from "./listSongSlice";
// others
import "./style.scss";

const ListSongToday = () => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const action = listSong();
        const resultAction = await dispatch(action);
        setSongs(resultAction.payload);
      })();

      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch song list:", error);
    }
  }, []);

  return (
    <ul className="list-song-today-wrapper">
      {loading ? <AlbumSkeletonList /> : <ElementSong songs={songs} />}
      {/* <ElementSong songs={songs} /> */}
    </ul>
  );
};

export default ListSongToday;
