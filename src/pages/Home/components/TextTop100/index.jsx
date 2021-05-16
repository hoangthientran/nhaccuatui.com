// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const TextTop100 = ({ item }) => <p className="text-top-100">{item.name}</p>;

TextTop100.prototype = {
  item: PropTypes.object,
};

TextTop100.defaultProps = {
  item: {},
};

export default TextTop100;
