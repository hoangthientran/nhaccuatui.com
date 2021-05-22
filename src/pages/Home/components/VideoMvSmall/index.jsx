// libs
import React from "react";
// components
import ThumbnailVideoSmall from "../ThumbnailVideoSmall";
import InfoNameMvThumbnailSmall from "../InfoNameMvThumbnailSmall";
// dataSources
import { listContentSmallMvHot } from "../../../../mocks/Home/MvHot";
// others
import "./style.scss";

const VideoMvSmall = () =>
  listContentSmallMvHot.map((item) => (
    <div className="video-mv-small-wrapper" key={item.id}>
      <ThumbnailVideoSmall item={item} />
      <InfoNameMvThumbnailSmall item={item} />
    </div>
  ));

export default VideoMvSmall;
