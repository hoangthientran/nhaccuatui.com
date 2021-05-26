// libs
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
// components
import TitleBoxKey from "../TitleBoxKey";
import ListSongToday from "../ListSongToday";
// action
import { listSong } from "./listSongSlice";
// others
import "./style.scss";

const ListAlbum = ({ defaultLanguage }) => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const songss = useSelector(state => state.song);
  // console.log(songss);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 4,
  });

  useEffect(() => {
    try {
      (async () => {
        const action = listSong();
        const resultAction = await dispatch(action);
        setSongs(resultAction.payload);
        console.log(resultAction);
      })();

      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch song list:", error);
    }
  }, [filters]);

  const handlePageChange = (page, pageSize) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
      _limit: pageSize,
    }));
  };

  return (
    <div className="list-album-wrapper">
      <TitleBoxKey nameLanguage={defaultLanguage.ListenToday} />
      <ListSongToday songs={songs} loading={loading} />
      <div className="pagination-listen-today">
        <Pagination defaultCurrent={1} total={5} onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ListAlbum;
