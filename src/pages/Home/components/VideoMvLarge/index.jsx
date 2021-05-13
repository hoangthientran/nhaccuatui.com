import React from "react";
import "./style.scss";

VideoMvLarge.propTypes = {};

function VideoMvLarge() {
  return (
    <div className="thumbnail-mv">
      <div className="action-info">
        <div className="view-listion">
          <span className="icon-view"></span>
          <span className="number"> 18.431 </span>
        </div>
        <span className="icon_play"></span>
      </div>
      <span className="avatar">
        <img
          src="https://avatar-ex-swe.nixcdn.com/mv/2021/04/27/f/3/8/f/1619516817597_640.jpg"
          alt="mother's love: mother's day songs - v.a"
        />
      </span>
      <span className="icon_time_video">05:59</span>
      <div className="name-video-large">
        <h3 className="name-mv">Đừng hẹn kiếp sau</h3>
        <h4 className="name-author">Đình Dũng, ACV</h4>
      </div>
    </div>
  );
}

export default VideoMvLarge;
