// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const NameMvLarge = ({ item }) => (
  <div className="name-mv-large">
    <h3 className="name-mv">{item.name_mv}</h3>
    <h4 className="name-author">{item.name_author}</h4>
  </div>
);

NameMvLarge.propTypes = {
  item: PropTypes.object,
};

NameMvLarge.defaultProps = {
  item: {},
};

export default NameMvLarge;
