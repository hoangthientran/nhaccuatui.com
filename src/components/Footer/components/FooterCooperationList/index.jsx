// libs
import React from "react";
import PropTypes from "prop-types";
// components
import FooterCooperationItem from "../FooterCooperationItem";
// others
import "./style.scss";

const FooterCooperationList = ({ cooperationList, firstId, lastId }) => (
  <ul className="f-coo-list-wrapper">
    {cooperationList.slice(firstId, lastId).map((item) => (
      <FooterCooperationItem key={item.id} item={item} />
    ))}
  </ul>
);

FooterCooperationList.propTypes = {
  cooperationList: PropTypes.array,
  firstId: PropTypes.number,
  lastId: PropTypes.number,
};

FooterCooperationList.defaultProps = {
  cooperationList: [],
  firstId: 0,
  lastId: 6,
};

export default FooterCooperationList;
