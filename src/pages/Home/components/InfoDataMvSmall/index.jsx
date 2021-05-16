// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const InfoDataMvSmall = ({ item }) => (
  <div className="info-data-mv-small-wrapper">
    <h3 className="name-music-chart">{item.name_mv}</h3>
    <h4 className="name-singer-mv-chart">{item.name_author}</h4>
  </div>
);

InfoDataMvSmall.prototype = {
  item: PropTypes.object,
};

InfoDataMvSmall.defaultProps = {
  item: {},
};

export default InfoDataMvSmall;
