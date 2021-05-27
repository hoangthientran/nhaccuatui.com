// libs
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
// components
import ItemKaraoke from "../ItemKaraoke";
import { karaoke } from "./karaokeSlice";
// hooks
import useKeyPress from "../../../../hooks/useKeyPress";
// others
import "./style.scss";


const BoxKaraoke = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    try {
      (async () => {
        // console.log(page);
        const action = karaoke(page);
        const resultAction = await dispatch(action);
        console.log(resultAction);
      })();
    } catch (error) {
      // console.log("Failed to fetch song list:", error);
    }
  }, [page]);

  const karaokeList = useSelector(state => state.listKaraoke);

  const handlePageChange = (page) => {
    setPage(page);
  };

  // hover payUp + PayDown
  const [hover, setHover] = useState(false);
  const keyDown1 = useKeyPress("ArrowDown");
  const keyDown2 = useKeyPress("PageDown");
  const keyUp1 = useKeyPress("ArrowUp");
  const keyUp2 = useKeyPress("PageUp");

  useEffect(() => {
    if (hover && (keyDown1 || keyDown2)) {
      setPage(page > 1 ? page - 1 : 1)
    }
  }, [hover, keyDown1, keyDown2]);

  useEffect(() => {
    if (hover && (keyUp1 || keyUp2)) {
      setPage(page + 1 <= 4 ? page + 1 : page)
    }
  }, [hover, keyUp1, keyUp2]);

  return (
    <div
      className="pagination-karaoke"
      onMouseEnter={() => { setHover(true); }}
      onMouseLeave={() => { setHover(false); }}
    >
      <ul className="karaoke-list-wrapper" >
        <ItemKaraoke karaokeList={karaokeList.current} />
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
