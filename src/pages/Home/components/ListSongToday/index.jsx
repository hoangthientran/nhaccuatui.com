// libs
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
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

const ListSongToday = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [songListToday, setSongListToday] = useState([]);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    try {
      (async () => {
        const action = songToday(page);
        const resultAction = await dispatch(action);
        setSongListToday(resultAction.payload);
        setLoading(false);
      })();
    } catch (error) {
      // console.log("Failed to fetch song list:", error);
    }
  }, [page]);
  // const songTodayList = useSelector((state) => state.listSongToday);

  const handlePageChange = (page) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setPage(page);
    }, 500);
  };

  // hover payUp + PayDown
  const keyDown1 = useKeyPress("ArrowDown");
  const keyDown2 = useKeyPress("PageDown");
  const keyUp1 = useKeyPress("ArrowUp");
  const keyUp2 = useKeyPress("PageUp");
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (isHovered && (keyDown1 || keyDown2)) {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setPage(page > 1 ? page - 1 : 1);
      }, 500);
    }
  }, [isHovered, keyDown1, keyDown2]);

  useEffect(() => {
    if (isHovered && (keyUp1 || keyUp2)) {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setPage(page + 1 <= 3 ? page + 1 : page);
      }, 500);
    }
  }, [isHovered, keyUp1, keyUp2]);

  return (
    <div ref={hoverRef}>
      <ul className="list-song-today-wrapper">
        {loading ? (
          <AlbumSkeletonList />
        ) : (
          <ElementSong songTodayList={songListToday} />
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
