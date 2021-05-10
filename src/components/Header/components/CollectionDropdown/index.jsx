import React from "react";
import "./style.scss";

CollectionDropdown.propTypes = {};

function CollectionDropdown() {
  return (
    <ul className="wrap-menu-collection-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">Thể loại </span>
          </li>
          <li className="item-small ">
            <span>Nhạc trẻ</span>
          </li>
          <li className="item-small ">
            <span>Trữ tình</span>
          </li>
          <li className="item-small ">
            <span>Pop</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "170px" }}>
          <li className="item-small">
            <span className="name-country">Tâm trạng</span>
          </li>
          <li className="item-small ">
            <span>Buồn</span>
          </li>
          <li className="item-small ">
            <span>Hưng phấn</span>
          </li>
          <li className="item-small ">
            <span>Nhạy cảm</span>
          </li>
          <li className="item-small ">
            <span>Nhớ nhung</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">Khung cảnh</span>
          </li>
          <li className="item-small ">
            <span>Cafe</span>
          </li>
          <li className="item-small ">
            <span>Bar - Club</span>
          </li>
          <li className="item-small ">
            <span>Phòng trà</span>
          </li>
          <li className="item-small ">
            <span>Tắm - Bơi lội</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "100px" }}>
          <li className="item-small">
            <span className="name-country">Chủ đề </span>
          </li>
          <li className="item-small ">
            <span>Tình yêu</span>
          </li>
          <li className="item-small ">
            <span>Top 100</span>
          </li>
          <li className="item-small ">
            <span>Weend kend</span>
          </li>
          <li className="item-small ">
            <span>Chill Out</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default CollectionDropdown;
