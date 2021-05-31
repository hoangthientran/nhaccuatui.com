// libs
import React from "react";
import PropTypes from "prop-types";
// components
import ListImageGallery from "../ListImageGallery";
// others
import "./style.scss";

const TrendGalleryPaper = ({
  listTrend,
  activeDefault,
  setIndex,
  setActiveDefault,
}) => (
  <div className="trend-gallery-paper">
    <ListImageGallery
      listTrend={listTrend}
      activeDefault={activeDefault}
      setIndex={setIndex}
      setActiveDefault={setActiveDefault}
    />
  </div>
);

TrendGalleryPaper.propTypes = {
  listTrend: PropTypes.array,
};

TrendGalleryPaper.defaultProps = {
  listTrend: [],
};

export default TrendGalleryPaper;
