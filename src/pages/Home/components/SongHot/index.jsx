import { RightOutlined } from "@ant-design/icons";
import React from "react";
import ThumbnailSongHot from "../ThumbnailSongHot";

import "./style.scss";

SongHot.propTypes = {};

function SongHot() {
  return (
    <div className="song-hot">
      <div className="title-hot">
        <h2>MỚI PHÁT HÀNH</h2>
        <span className="icon-right">
          <RightOutlined />
        </span>
      </div>

      <ul>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
        <li>
          <ThumbnailSongHot />
          <div className="info-song">
            <h3 className="name-song">Ngộ</h3>
            <h4 className="name-author">Lăng LD, Khoa</h4>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SongHot;
