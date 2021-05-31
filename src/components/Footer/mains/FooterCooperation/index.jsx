// libs
import React, { useEffect, useState } from "react";
// components
import FooterCooperationTitle from "../../components/FooterCooperationTitle";
import FooterBigCooperationList from "../../components/FooterBigCooperationList";
// api
import cooperationApi from "../../../../api/cooperationApi";
// others
import "./style.scss";

const FooterCooperation = () => {
  const [cooperationList, setCooperationList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const params = {
          _page: 1,
          _limit: 24,
        };
        const { data } = await cooperationApi.getAll(params);
        setCooperationList(data);
      } catch (error) {
        console.log("Failed to fetch cooporation list:", error);
      }
    })();
  }, []);

  return (
    <div className="footer-cooperation-wrapper">
      <div className="footer-container-wrapper-inner">
        <FooterCooperationTitle />
        <FooterBigCooperationList cooperationList={cooperationList} />
      </div>
    </div>
  );
};

export default FooterCooperation;
