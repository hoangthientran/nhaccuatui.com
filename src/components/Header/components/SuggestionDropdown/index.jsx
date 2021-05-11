// libs
import React from "react";

// others
import "./style.scss";

SuggestionDropdown.propTypes = {};

function SuggestionDropdown() {
  return (
    <div className="box-suggestion-wrap">
      <div className="top-keyword-search">
        <h3 className="title_keyword">Top từ khóa tìm kiếm nhiều nhất</h3>
        <ul className="info-search-wrap">
          <li className="top-search">
            <span className="stt" style={{ color: "#e74c3c" }}>
              1
            </span>
            <span className="">Muộn rồi mà sao còn</span>
          </li>
          <li className="top-search">
            <span className="stt" style={{ color: "#1abc9c" }}>
              2
            </span>
            <span className="">Nới ấy con tìm về</span>
          </li>
          <li className="top-search">
            <span className="stt" style={{ color: "#f39c4d" }}>
              3
            </span>
            <span className="">Lạt trôi</span>
          </li>
          <li className="top-search">
            <span className="stt" style={{ color: "#2980b9" }}>
              4
            </span>
            <span className="">Cơn mưa ngày hôm qua</span>
          </li>
        </ul>
      </div>
      <div className="top-keyword-history">
        <h3 className="title_keyword">Lịch sử tìm kiếm của bạn</h3>
        <ul className="info-search-history-wrap">
          <li className="top-search-history">
            <span className="content-search">Muộn rồi mà sao còn</span>
            <span className="btn-delete-search"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SuggestionDropdown;
