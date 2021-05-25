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

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 4,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await karaokeApi.getAll(filters);
        setKaraokeList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch cooporation list:", error);
      }
    })();
  }, [filters]);

  const handlePageChange = (page, pageSize) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
      _limit: pageSize,
    }));
  };

  const [hover, setHover] = useState(false);
  const keyDown1 = useKeyPress("ArrowDown");
  const keyDown2 = useKeyPress("PageDown");
  const keyUp1 = useKeyPress("ArrowUp");
  const keyUp2 = useKeyPress("PageUp");

  useEffect(() => {
    if (hover && (keyDown1 || keyDown2)) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        _page: prevFilters._page > 1 ? prevFilters._page - 1 : 1,
      }));
    }
  }, [hover, keyDown1, keyDown2]);

  useEffect(() => {
    if (hover && (keyUp1 || keyUp2)) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        _page:
          prevFilters._page + 1 <= 4
            ? prevFilters._page + 1
            : prevFilters._page,
      }));
    }
  }, [hover, keyUp1, keyUp2]);

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
