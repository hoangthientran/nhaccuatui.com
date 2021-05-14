// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const TimeMv = ({ item }) => (
  <span className="icon_time_video">{item.time}</span>
);

TimeMv.propTypes = {
  item: PropTypes.object,
};

TimeMv.defaultProps = {
  item: {},
};

export default TimeMv;
