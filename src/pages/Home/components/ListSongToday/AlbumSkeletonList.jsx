// libs
import PropTypes from "prop-types";
import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Skeleton } from "antd";

const style = { width: "840px", display: "flex", flexFlow: "row nowrap" };
const style2 = { width: "152px", height: "152px" };

const AlbumSkeletonList = ({ length }) => (
  <Row gutter={{ xs: 2, sm: 3, md: 5, lg: 5 }} style={style}>
    {Array.from(new Array(length)).map(() => (
      <Col className="gutter-row" span={5}>
        <Skeleton.Image style={style2} />
      </Col>
    ))}
  </Row>
);

AlbumSkeletonList.propTypes = {
  length: PropTypes.number,
};

AlbumSkeletonList.defaultProps = {
  length: 5,
};

export default AlbumSkeletonList;
