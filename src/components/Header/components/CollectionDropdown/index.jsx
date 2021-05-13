// libs
import React from "react";

// others
import "./style.scss";

CollectionDropdown.propTypes = {};

function CollectionDropdown() {
  return (
    <ul className="wrap-menu-collection-dropdown">
      <li className="item-dropdown">
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">THỂ LOẠI </span>
          </li>
          <li className="item-small ">
            <span>Nhạc trẻ</span>
          </li>
          <li className="item-small ">
            <span>Trữ Tình</span>
          </li>
          <li className="item-small ">
            <span>Pop</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Hàn</span>
          </li>
          <li className="item-small ">
            <span>Nhạc Hoa</span>
          </li>
          <li className="item-small ">
            <span>Soundtrack</span>
          </li>
          <li className="item-small ">
            <span>Không Lời</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "170px" }}>
          <li className="item-small">
            <span className="name-country">TÂM TRẠNG</span>
          </li>
          <li className="item-small ">
            <span>Buồn</span>
          </li>
          <li className="item-small ">
            <span>Hưng Phấn</span>
          </li>
          <li className="item-small ">
            <span>Nhạy Cảm</span>
          </li>
          <li className="item-small ">
            <span>Nhớ Nhung</span>
          </li>
          <li className="item-small ">
            <span>Thất Tính</span>
          </li>
          <li className="item-small ">
            <span>Thư Giãn</span>
          </li>
          <li className="item-small ">
            <span>Vui Vẻ</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "130px" }}>
          <li className="item-small">
            <span className="name-country">KHUNG CẢNH</span>
          </li>
          <li className="item-small ">
            <span>Cafe</span>
          </li>
          <li className="item-small ">
            <span>Bar - Club</span>
          </li>
          <li className="item-small ">
            <span>Phòng Trà</span>
          </li>
          <li className="item-small ">
            <span>Tắm - Bơi lội</span>
          </li>
          <li className="item-small ">
            <span>Tập Gym</span>
          </li>
          <li className="item-small ">
            <span>Lãng Mạn</span>
          </li>
          <li className="item-small ">
            <span>Mưa</span>
          </li>
        </ul>
        <ul className="wrap-item-small" style={{ width: "100px" }}>
          <li className="item-small">
            <span className="name-country">CHỦ ĐỀ</span>
          </li>
          <li className="item-small ">
            <span>Tình Yêu</span>
          </li>
          <li className="item-small ">
            <span>Top 100</span>
          </li>
          <li className="item-small ">
            <span>Weenkend</span>
          </li>
          <li className="item-small ">
            <span>Chill Out</span>
          </li>
          <li className="item-small ">
            <span>Bất Hủ</span>
          </li>
          <li className="item-small ">
            <span>Song Ca</span>
          </li>
          <li className="item-small ">
            <span>Mashup</span>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default CollectionDropdown;
