// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ItemTitle = ({ item }) => (
  <li className="item-title">
    <span className="name-country">{item.name}</span>
  </li>
);

ItemTitle.propTypes = {
  item: PropTypes.object,
};
ItemTitle.defaultProps = {
  item: {},
};

export default ItemTitle;
