import React from "react";
import Thumbnail from "../Thumbnail";
import ThumbnailSlide from "../ThumbnailSlide";
import "./style.scss";

SlideDefault.propTypes = {};

function SlideDefault() {
  return (
    <div className="slide-default">
      <div className="group">
        <Thumbnail />
        <ThumbnailSlide />
      </div>
    </div>
  );
}

export default SlideDefault;
