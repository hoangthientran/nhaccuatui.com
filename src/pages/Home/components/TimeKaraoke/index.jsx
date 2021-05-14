// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const TimeKaraoke = ({ item }) => (
  <span className="icon_time_karaoke">{item.time}</span>
);

TimeKaraoke.propTypes = {
  item: PropTypes.object,
};

TimeKaraoke.defaultProps = {
  item: {},
};

export default TimeKaraoke;
