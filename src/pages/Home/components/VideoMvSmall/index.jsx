import React from "react";
import ThumbnailVideoSmall from "../ThumbnailVideoSmall";

import "./style.scss";

VideoMvSmall.propTypes = {};

function VideoMvSmall() {
  return (
    <div className="wrap-video-small">
      <ThumbnailVideoSmall />
      <div className="info-song">
        <h3 className="name-song">BAD LOVE</h3>
        <h4 className="name-author">Khánh Vũ KVD</h4>
      </div>
    </div>
  );
}

export default VideoMvSmall;
