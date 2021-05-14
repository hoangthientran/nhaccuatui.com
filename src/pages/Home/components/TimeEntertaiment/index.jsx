// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const TimeEntertaiment = ({ item }) => (
  <span className="icon_time_entertaiment">{item.time}</span>
);

TimeEntertaiment.propTypes = {
  item: PropTypes.object,
};

TimeEntertaiment.defaultProps = {
  item: {},
};

export default TimeEntertaiment;
