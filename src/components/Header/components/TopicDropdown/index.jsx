import React from "react";
import "./style.scss";

TopicDropdown.propTypes = {};

function TopicDropdown() {
  return (
    <ul className="wrap-menu-topic-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span>The Best Of 2020 </span>
          </li>
          <li className="item-small ">
            <span>Nhạc xuân</span>
          </li>
          <li className="item-small ">
            <span>Bất hủ</span>
          </li>
          <li className="item-small ">
            <span>Cover && Mashup</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "170px" }}>
          <li className="item-small">
            <span>Child out</span>
          </li>
          <li className="item-small ">
            <span>EDN</span>
          </li>
          <li className="item-small ">
            <span>Nhạc hot</span>
          </li>
          <li className="item-small ">
            <span>Nhạy Hoa lời Việt</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span>Acoutic</span>
          </li>
          <li className="item-small ">
            <span>Hải ngoại</span>
          </li>
          <li className="item-small ">
            <span>Remix Việt</span>
          </li>
          <li className="item-small ">
            <span>Bài hát yêu thích</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default TopicDropdown;
