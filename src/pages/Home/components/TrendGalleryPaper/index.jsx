// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";
import ListImageGallery from "../ListImageGallery";

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
