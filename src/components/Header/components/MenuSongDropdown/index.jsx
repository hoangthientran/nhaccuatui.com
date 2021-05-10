import React from "react";
import "./style.scss";

MenuSongDropdown.propTypes = {};

function MenuSongDropdown() {
  return (
    <ul className="wrap-menu-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">Việt Nam</span>
          </li>
          <li className="item-small ">
            <span>Nhạc trẻ</span>
          </li>
          <li className="item-small ">
            <span>Trữ tình</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "170px" }}>
          <li className="item-small">
            <span className="name-country">Âu Mỹ</span>
          </li>
          <li className="item-small ">
            <span>Pop</span>
          </li>
          <li className="item-small ">
            <span>Rock</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">Châu Á</span>
          </li>
          <li className="item-small ">
            <span>Nhạc hàn</span>
          </li>
          <li className="item-small ">
            <span>Nhạc hoa</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "100px" }}>
          <li className="item-small">
            <span className="name-country">Khác </span>
          </li>
          <li className="item-small ">
            <span>Thiếu Nhi</span>
          </li>
          <li className="item-small ">
            <span>Không lời</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default MenuSongDropdown;
