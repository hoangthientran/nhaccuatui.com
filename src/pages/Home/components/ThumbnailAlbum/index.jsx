import React from "react";
import "./style.scss";

ThumbnailAlbum.propTypes = {};

function ThumbnailAlbum() {
  return (
    <div className="thumbnail-album">
      <div className="action-info">
        <div className="view-listion">
          <span className="icon-listen"></span>
          <span className="number"> 712 </span>
        </div>
        <span className="icon_play"></span>
      </div>
      <span className="avatar">
        <img
          src="https://avatar-ex-swe.nixcdn.com/playlist/2018/05/18/6/e/9/5/1526627552325_300.jpg"
          alt="mother's love: mother's day songs - v.a"
        />
      </span>
    </div>
  );
}

export default ThumbnailAlbum;
