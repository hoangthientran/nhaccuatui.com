// libs
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
// hooks
// import useHover from "../../../../hooks/useHover";
// components
import ThumbnailSongHot from "../ThumbnailSongHot";
import InfoNameSongHot from "../InfoNameSongHot";
// mocks
// import { listContentSongHot } from "../../../../mocks";
// api
import listReleaseApi from "../../../../api/listReleaseApi";
// others
import "./style.scss";

const ListSongHot = () => {
  // const [hoverRef, isHovered] = useHover();
  const [releaseList, setReleaseList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 20,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await listReleaseApi.getAll(filters);
        setReleaseList(data);
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

  // const [hover, setHover] = useState(false);
  // const keyDown1 = useKeyPress("ArrowDown");
  // const keyDown2 = useKeyPress("PageDown");
  // const keyUp1 = useKeyPress("ArrowUp");
  // const keyUp2 = useKeyPress("PageUp");

  // useEffect(() => {
  //   if (hover && (keyDown1 || keyDown2)) {
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       _page: prevFilters._page > 1 ? prevFilters._page - 1 : 1,
  //     }));
  //   }
  // }, [hover, keyDown1, keyDown2]);

  // useEffect(() => {
  //   if (hover && (keyUp1 || keyUp2)) {
  //     setFilters((prevFilters) => ({
  //       ...prevFilters,
  //       _page:
  //         prevFilters._page + 1 <= 4
  //           ? prevFilters._page + 1
  //           : prevFilters._page,
  //     }));
  //   }
  // }, [hover, keyUp1, keyUp2]);

  return (
    <>
      <ul className="list-song-hot-wrapper">
        {releaseList.map((item) => (
          <li key={item.id} className="list-song-hot">
            <ThumbnailSongHot item={item} />
            <InfoNameSongHot item={item} />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Pagination
          defaultCurrent={pagination._page}
          defaultPageSize={10}
          total={pagination._totalRows}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ListSongHot;
