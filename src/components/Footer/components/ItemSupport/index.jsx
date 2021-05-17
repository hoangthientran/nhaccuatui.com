// libs
import React from "react";
import PropTypes from "prop-types";
import { RightOutlined } from "@ant-design/icons";
// others
import "./style.scss";

const ItemSupport = ({ item }) => (
  <>
    <RightOutlined className="icon-right" />
    <span className="item-text">{item.name}</span>
  </>
);

ItemSupport.propTypes = {
  item: PropTypes.object,
};

ItemSupport.defaultProps = {
  item: {},
};

export default ItemSupport;
