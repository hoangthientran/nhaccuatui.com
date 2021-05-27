// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import AlbumSkeletonList from "./AlbumSkeletonList";
import ElementSong from "../ElementSong";
// hooks
import useKeyPress from "../../../../hooks/useKeyPress";
import useHover from "../../../../hooks/useHover";
// action
import { songToday } from "./songTodaySlice";
// others
import "./style.scss";
import { Pagination } from "antd";

const ListSongToday = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      (async () => {
        const action = songToday(page);
        const resultAction = await dispatch(action);
        console.log(resultAction);
      })();
      setLoading(false);
    } catch (error) {
      // console.log("Failed to fetch song list:", error);
    }
  }, [page]);

  const songTodayList = useSelector((state) => state.listSongToday);

  const handlePageChange = (page) => {
    setPage(page);
  };

  // hover payUp + PayDown
  const keyDown1 = useKeyPress("ArrowDown");
  const keyDown2 = useKeyPress("PageDown");
  const keyUp1 = useKeyPress("ArrowUp");
  const keyUp2 = useKeyPress("PageUp");
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (isHovered && (keyDown1 || keyDown2)) {
      setPage(page > 1 ? page - 1 : 1);
    }
  }, [isHovered, keyDown1, keyDown2]);

  useEffect(() => {
    if (isHovered && (keyUp1 || keyUp2)) {
      setPage(page + 1 <= 3 ? page + 1 : page);
    }
  }, [isHovered, keyUp1, keyUp2]);

  return (
    <div ref={hoverRef}>
      <ul className="list-song-today-wrapper">
        {loading ? (
          <AlbumSkeletonList />
        ) : (
          <ElementSong songTodayList={songTodayList.current} />
        )}
      </ul>
      <div className="pagination-song-today">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={5}
          total={15}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ListSongToday;
