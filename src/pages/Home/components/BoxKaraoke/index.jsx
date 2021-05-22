// libs
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
// components
import ItemKaraoke from "../ItemKaraoke";
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

  const handlePageChange = (e, page) =>
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
    }));

  return (
    <>
      <ul className="karaoke-list-wrapper">
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
