import React from "react";
import "./style.scss";

MenuTop.propTypes = {};

function MenuTop() {
  return (
    <div className="menuTop">
      <ul className="notifi">
        <li className="iconLogoMenu">
          <div className="logo"></div>
        </li>
        <li className="item">
          <a href="https://beta.nhaccuatui.com/">
            <img
              style={{ paddingTop: "14px" }}
              src="https://stc-id.nixcdn.com/v11/images/ic_new.png"
              alt="img"
            />
          </a>
        </li>
        <li className="item">Bài Hát</li>
        <li className="item">Playlist</li>
        <li className="item">Tuyển Tập</li>
        <li className="item">Video</li>
        <li className="item">BXH</li>
        <li className="item">Chủ Đề</li>
        <li className="item">Top 100</li>
        <li className="item">...</li>
      </ul>
    </div>
  );
}

export default MenuTop;
