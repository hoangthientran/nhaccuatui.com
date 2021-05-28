// libs
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "antd";
// components
import ItemKaraoke from "../ItemKaraoke";
// actions
import { karaoke } from "./karaokeSlice";
// hooks
import useKeyPress from "../../../../hooks/useKeyPress";
import useHover from "../../../../hooks/useHover";
// others
import "./style.scss";

const BoxKaraoke = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [karaokeList, setKaraokeList] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const action = karaoke(page);
        const resultAction = await dispatch(action);
        setKaraokeList(resultAction.payload);
      })();
    } catch (error) {
      // console.log("Failed to fetch song list:", error);
    }
  }, [page]);
  // const karaokeList = useSelector((state) => state.listKaraoke);

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
      setPage(page + 1 <= 4 ? page + 1 : page);
    }
  }, [isHovered, keyUp1, keyUp2]);

  return (
    <div ref={hoverRef}>
      <ul className="karaoke-list-wrapper">
        <ItemKaraoke karaokeList={karaokeList} />
      </ul>
      <div className="pagination">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={4}
          total={16}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BoxKaraoke;
