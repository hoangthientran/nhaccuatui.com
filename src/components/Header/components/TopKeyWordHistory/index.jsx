// libs
import React from "react";
import InfoSearchHistory from "../InfoSearchHistory";
import TitleKeywordSearch from "../TitleKeywordSearch";
// others
import "./style.scss";

const TopKeywordHistory = () => (
  <div className="top-keyword-history">
    <TitleKeywordSearch title="Lịch sử tìm kiếm của bạn" />
    <InfoSearchHistory />
  </div>
);

export default TopKeywordHistory;
