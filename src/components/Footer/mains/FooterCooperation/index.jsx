// libs
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
// components
import FooterCooperationTitle from "../../components/FooterCooperationTitle";
import FooterBigCooperationList from "../../components/FooterBigCooperationList";
// api
import cooperationApi from "../../../../api/cooperationApi";
// others
import "./style.scss";

const FooterCooperation = () => {
  const [cooperationList, setCooperationList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 6,
    _totalRows: 24,
  });
  const [filters, setFilters] = useState({ _page: 1, _limit: 6 });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await cooperationApi.getAll(filters);
        setCooperationList(data);
        setPagination(pagination);
      } catch (error) {
        // console.log("Failed to fetch cooporation list:", error);
      }
    })();
  }, [filters]);

  const handlePageChange = (page, pageSize) =>
    setFilters((prevFilters) => ({
      ...prevFilters,
      _page: page,
      _limit: pageSize,
    }));

  // const keyPrev = useKeyPress("ArrowLeft");
  // const keyRight = useKeyPress("ArrowRight");
  // const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   // document.addEventListener("DOMContentLoaded", () => {
  //   // bat su kien khi nguoi dung scroll
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset >= 3240 && window.pageYOffset <= 3350) {
  //       console.log("dang o day");
  //       if (!hover) {
  //         if (keyPrev) {
  //           handlePageChange();
  //         }
  //       }
  //     }
  //   })
  //   // })
  // }, [])

  return (
    <div className="footer-cooperation-wrapper">
      <div className="footer-container-inner">
        <FooterCooperationTitle />
        <FooterBigCooperationList cooperationList={cooperationList} />
        <div className="pagination">
          <Pagination
            defaultCurrent={pagination._page}
            defaultPageSize={6}
            total={pagination._totalRows}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCooperation;
