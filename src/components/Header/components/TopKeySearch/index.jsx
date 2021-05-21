// libs
import React from "react";
// components
import TitleKeywordSearch from "../TitleKeywordSearch";
import InfoSearchKeyword from "../InfoSearchKeyword";
// others
import "./style.scss";

const TopKeySearch = () => (
  <div className="top-keyword-search-inner">
    <TitleKeywordSearch title="Top từ khóa tìm kiếm nhiều nhất" />
    <InfoSearchKeyword />
  </div>
);

export default TopKeySearch;
