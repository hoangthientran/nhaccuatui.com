// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const ItemElement = ({ item }) =>
  item.specific.map((sp) => (
    <li key={sp.id} className="item-title ">
      <span>{sp.name}</span>
    </li>
  ));

ItemElement.propTypes = {
  item: PropTypes.object,
};

ItemElement.defaultProps = {
  item: {},
};

export default ItemElement;
