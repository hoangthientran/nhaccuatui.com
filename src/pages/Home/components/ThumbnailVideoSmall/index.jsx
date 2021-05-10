import React from "react";
import "./style.scss";

ThumbnailVideoSmall.propTypes = {};

function ThumbnailVideoSmall() {
  return (
    <div className="thumbnail-video-small">
      <div className="action-info">
        <div className="view-listion">
          <span className="icon-view"></span>
          <span className="number"> 67 </span>
        </div>
        <span className="icon_play"></span>
      </div>
      <span className="avatar">
        <img
          src="https://avatar-ex-swe.nixcdn.com/mv/2021/05/08/b/e/2/d/1620461530900_268.jpg"
          alt="mother's love: mother's day songs - v.a"
        />
      </span>
      <span className="icon_time_video">03:47</span>
    </div>
  );
}

export default ThumbnailVideoSmall;
