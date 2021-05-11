// libs
import React from "react";

// others
import "./style.scss";

MenuSongDropdown.propTypes = {};

function MenuSongDropdown() {
  return (
    <ul className="wrap-menu-dropdown">
      <li className="menu-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">VIỆT NAM</span>
          </li>
          <li className="item-small ">
            <span>Nhạc trẻ</span>
          </li>
          <li className="item-small ">
            <span>Trữ tình</span>
          </li>
          <li className="item-small ">
            <span>Remix Việt</span>
          </li>
          <li className="item-small ">
            <span>Rap việt</span>
          </li>
          <li className="item-small ">
            <span>Tiến Chiến</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Trịnh</span>
          </li>
          <li className="item-small ">
            <span>Rock Việt</span>
          </li>
          <li className="item-small ">
            <span>Cách mạng</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "170px" }}>
          <li className="item-small">
            <span className="name-country">ÂU MỸ</span>
          </li>
          <li className="item-small ">
            <span>Pop</span>
          </li>
          <li className="item-small ">
            <span>Rock</span>
          </li>
          <li className="item-small ">
            <span>Electronica/Dance</span>
          </li>
          <li className="item-small ">
            <span>R&B/HipHop/Rap</span>
          </li>
          <li className="item-small ">
            <span>Blues/Jazz</span>
          </li>
          <li className="item-small ">
            <span>Country</span>
          </li>
          <li className="item-small ">
            <span>Latin</span>
          </li>
          <li className="item-small ">
            <span>Indie</span>
          </li>
          <li className="item-small ">
            <span>Âu Mỹ khác</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">CHÂU Á</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Hàn</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Hoa</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Nhật</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Thái</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "100px" }}>
          <li className="item-small">
            <span className="name-country">KHÁC </span>
          </li>
          <li className="item-small ">
            <span>Thiếu Nhi</span>
          </li>
          <li className="item-small ">
            <span>Không lLời</span>
          </li>
          <li className="item-small ">
            <span>Beat</span>
          </li>
          <li className="item-small ">
            <span>Thể Loại Khác</span>
          </li>
          <li className="item-small ">
            <span>Tui Hát</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default MenuSongDropdown;
