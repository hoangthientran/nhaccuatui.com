// libs
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
// components
import ItemKaraoke from "../ItemKaraoke";
// hooks
import useKeyPress from "../../../../hooks/useKeyPress";
// api
import karaokeApi from "../../../../api/listKaraokeApi";
// others
import "./style.scss";

const BoxKaraoke = () => {
  const [karaokeList, setKaraokeList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 4,
    _totalRows: 16,
  });

  // const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 4,
  });
  const [page, setPage] = useState(1);
  console.log(page);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await karaokeApi.getAll(filters);
        setKaraokeList(data);
        setPagination(pagination);
        // console.log(pagination);
      } catch (error) {
        console.log("Failed to fetch cooporation list:", error);
      }
    })();
  }, [filters]);

  const handlePageChange = (page, pageSize) => {
    setPage(page);
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
      _limit: pageSize,
    }));
  };

  // const keyUp =  useKeyPress("ArrowUp");
  const [hover, setHover] = useState(false);
  const keyDown = useKeyPress(38, hover) || useKeyPress(34, hover);
  const keyUp = useKeyPress(40, hover) || useKeyPress(33, hover);
  console.log(keyUp);
  console.log(hover);

  if (keyDown) {
    console.log("haha");
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));
  }

  return (
    <>
      <ul
        className="karaoke-list-wrapper"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <ItemKaraoke karaokeList={karaokeList} />
      </ul>
      <div className="pagination">
        <Pagination
          defaultCurrent={pagination._page}
          defaultPageSize={4}
          total={pagination._totalRows}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default BoxKaraoke;
