// libs
import React from "react";
// components
import ChartDropdown from "../../components/ChartDropdown";
import CollectionDropdown from "../../components/CollectionDropdown";
import MenuSongDropdown from "../../components/MenuSongDropdown";
import Top100Dropdown from "../../components/Top100Dropdown";
import TopicDropdown from "../../components/TopicDropdown";
import TopicOtherDropdown from "../../components/TopicOtherDropdown";
// others
import "./style.scss";

const HeaderMenuTop = () => (
  <div className="menu-top-wrap">
    <ul className="menu-top">
      <li className="icon-logo-menu" style={{ cursor: "pointer" }}>
        <div className="logo"></div>
      </li>
      <li className="item-text">
        <a href="https://beta.nhaccuatui.com/">
          <img
            style={{ marginTop: "4px" }}
            src="https://stc-id.nixcdn.com/v11/images/ic_new.png"
            alt="img"
          />
        </a>
      </li>
      <li className="item item--song">
        <span className="text-title">Bài Hát</span>
        <MenuSongDropdown />
      </li>
      <li className="item item--playlist">
        <span className="text-title">Playlist</span>
        <MenuSongDropdown />
      </li>
      <li className="item item--collection">
        <span className="text-title">Tuyển Tập</span>
        <CollectionDropdown />
      </li>
      <li className="item item--video">
        <span className="text-title">Video</span>
        <MenuSongDropdown />
      </li>
      <li className="item item--chart">
        <span className="text-title">BXH</span>
        <ChartDropdown />
      </li>
      <li className="item item--topic">
        <span className="text-title">Chủ Đề</span>
        <TopicDropdown />
      </li>
      <li className="item item--top100">
        <span className="text-title">Top 100</span>
        <Top100Dropdown />
      </li>
      <li className="item item--topic-other">
        <span className="text-title">...</span>
        <TopicOtherDropdown />
      </li>
    </ul>
  </div>
);

export default HeaderMenuTop;
