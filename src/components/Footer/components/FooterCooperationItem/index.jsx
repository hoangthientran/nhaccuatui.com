// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const FooterCooperationItem = ({ item }) => (
  <li className="f-coo-item-wrapper">
    <img src={item.src} alt="f-coo-img" />
  </li>
);

FooterCooperationItem.propTypes = {
  item: PropTypes.object,
};

FooterCooperationItem.defaultProps = {
  item: {},
};

export default FooterCooperationItem;
