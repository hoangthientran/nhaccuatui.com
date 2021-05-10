import React from "react";
import "./style.scss";

ThumbnailSongHot.propTypes = {};

function ThumbnailSongHot() {
  return (
    <div className="thumbnail-song-hot">
      <div className="action-info">
        <div className="view-listion">
          <span className="icon-listen"></span>
          <span className="number"> 18.790 </span>
        </div>
        <span className="icon_play"></span>
      </div>
      <span className="avatar">
        <img
          src="https://avatar-ex-swe.nixcdn.com/song/2021/05/01/c/e/c/3/1619832820478_300.jpg"
          alt="mother's love: mother's day songs - v.a"
        />
      </span>
    </div>
  );
}

export default ThumbnailSongHot;
