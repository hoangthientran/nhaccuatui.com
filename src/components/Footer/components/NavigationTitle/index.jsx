// libs
import React from "react";
import PropTypes from "prop-types";
// others
import "./style.scss";

const NavigationTitle = ({ title }) => <p className="nav-one-title">{title}</p>;

NavigationTitle.propTypes = {
  title: PropTypes.string,
};

NavigationTitle.defaultProps = {
  title: "",
};

export default NavigationTitle;
