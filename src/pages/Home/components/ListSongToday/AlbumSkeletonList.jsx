// libs
import React from "react";
import { Skeleton } from "antd";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
// others
import "./style.scss";

const AlbumSkeletonList = ({ length }) => (
  <ul className="album-skeleton-wrapper">
    {Array.from(new Array(length)).map(() => (
      <li key={Math.random()} className="album-skeleton-item">
        <Skeleton.Image className="img-skeleton-album" />
      </li>
    ))}
  </ul>
);

AlbumSkeletonList.propTypes = {
  length: PropTypes.number,
};

AlbumSkeletonList.defaultProps = {
  length: 5,
};

export default AlbumSkeletonList;
