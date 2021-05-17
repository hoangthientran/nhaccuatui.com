// libs
import React from "react";
import PropTypes from "prop-types";
// components
import "./style.scss";

const ImgApp = ({ item }) => (
  <img className="img-app" src={item.src} alt="img" />
);

ImgApp.propTypes = {
  item: PropTypes.object,
};

ImgApp.defaultProps = {
  item: {},
};

export default ImgApp;
