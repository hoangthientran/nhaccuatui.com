import { RightOutlined } from "@ant-design/icons";
import React from "react";
import VideoMvLarge from "../VideoMvLarge";
import VideoMvSmall from "../VideoMvSmall";

import "./style.scss";

MvHot.propTypes = {};

function MvHot() {
  return (
    <div className="mv-hot">
      <div className="title-mv">
        <h2>MV HOT</h2>
        <span className="icon-right">
          <RightOutlined />
        </span>
      </div>
      <ul>
        <li className="video-large">
          <ul className="wrap">
            <li className="item-mv">
              <VideoMvLarge />
            </li>
            <li className="item-mv">
              <VideoMvLarge />
            </li>
          </ul>
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
        <li className="video-small">
          <VideoMvSmall />
        </li>
      </ul>
    </div>
  );
}

export default MvHot;
